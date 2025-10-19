import { NextResponse } from 'next/server';
import axios from 'axios';

// Environment-specific configurations
const IS_PRODUCTION = process.env.MPESA_ENVIRONMENT === 'production';

// M-Pesa API endpoints
const BASE_URL = IS_PRODUCTION
  ? 'https://api.safaricom.co.ke'
  : 'https://sandbox.safaricom.co.ke';

const MPESA_AUTH_URL = `${BASE_URL}/oauth/v1/generate?grant_type=client_credentials`;
const MPESA_STK_URL = `${BASE_URL}/mpesa/stkpush/v1/processrequest`;

// Validate environment variables
const requiredEnvVars = {
  MPESA_CONSUMER_KEY: process.env.MPESA_CONSUMER_KEY,
  MPESA_CONSUMER_SECRET: process.env.MPESA_CONSUMER_SECRET,
  MPESA_PASSKEY: process.env.MPESA_PASSKEY,
  MPESA_SHORTCODE: process.env.MPESA_SHORTCODE,
  NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
};

// Get OAuth token for M-Pesa API
async function getMpesaToken() {
  if (!requiredEnvVars.MPESA_CONSUMER_KEY || !requiredEnvVars.MPESA_CONSUMER_SECRET) {
    throw new Error('Missing M-Pesa API credentials. Please add MPESA_CONSUMER_KEY and MPESA_CONSUMER_SECRET to your environment variables.');
  }

  try {
    console.log('Attempting to get M-Pesa access token...');
    const auth = Buffer.from(
      `${requiredEnvVars.MPESA_CONSUMER_KEY}:${requiredEnvVars.MPESA_CONSUMER_SECRET}`
    ).toString('base64');

    const response = await axios.get(MPESA_AUTH_URL, {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });

    console.log('Successfully got M-Pesa access token');
    return response.data.access_token;
  } catch (error: any) {
    console.error('M-Pesa auth error:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status
    });
    throw new Error('Failed to authenticate with M-Pesa. Please check your API credentials.');
  }
}

// Validate phone number format
function validatePhoneNumber(phoneNumber: string): string {
  // Remove any spaces or special characters
  let cleaned = phoneNumber.replace(/[^\d+]/g, '');
  
  // Handle different formats and convert to required format (254XXXXXXXXX)
  if (cleaned.startsWith('+254')) {
    cleaned = cleaned.substring(1); // Remove the +
  } else if (cleaned.startsWith('0')) {
    cleaned = '254' + cleaned.substring(1); // Replace 0 with 254
  } else if (!cleaned.startsWith('254')) {
    cleaned = '254' + cleaned;
  }
  
  // Validate length (12 digits for Kenya numbers: 254XXXXXXXXX)
  if (cleaned.length !== 12) {
    throw new Error('Invalid phone number format. Please enter a valid Kenyan phone number.');
  }
  
  return cleaned;
}

export async function POST(req: Request) {
  try {
    // Check for missing environment variables
    const missingVars = Object.entries(requiredEnvVars)
      .filter(([_, value]) => !value)
      .map(([key]) => key);

    if (missingVars.length > 0) {
      console.error('Missing environment variables:', missingVars);
      throw new Error(`Configuration error: Missing ${missingVars.join(', ')}. Please check your .env.local file.`);
    }

    const body = await req.json();
    const { amount, phoneNumber, email } = body;

    // Validate request data
    if (!amount || !phoneNumber || !email) {
      throw new Error('Please provide all required fields: amount, phone number, and email.');
    }

    // In sandbox mode, only allow test numbers
    if (!IS_PRODUCTION) {
      const validTestNumbers = ['0712345678', '0724345678'];
      if (!validTestNumbers.includes(phoneNumber)) {
        throw new Error('For testing, please use one of these M-Pesa sandbox numbers: 0712345678 or 0724345678');
      }
    }

    // Format and validate phone number
    const formattedPhone = IS_PRODUCTION ? validatePhoneNumber(phoneNumber) : phoneNumber.replace(/^(?:\+254|0)/, '254');

    // Get timestamp in the format YYYYMMDDHHmmss
    const timestamp = new Date().toISOString()
      .replace(/[-T:.Z]/g, '')
      .slice(0, 14);

    // Generate password
    const password = Buffer.from(
      `${requiredEnvVars.MPESA_SHORTCODE}${requiredEnvVars.MPESA_PASSKEY}${timestamp}`
    ).toString('base64');

    // Get access token
    const accessToken = await getMpesaToken();

    console.log('Initiating STK push with data:', {
      shortcode: requiredEnvVars.MPESA_SHORTCODE,
      phone: formattedPhone,
      amount,
      callbackUrl: `${requiredEnvVars.NEXT_PUBLIC_BASE_URL}/api/mpesa/callback`,
      environment: IS_PRODUCTION ? 'production' : 'sandbox'
    });

    // Initiate STK Push
    const stkResponse = await axios.post(
      MPESA_STK_URL,
      {
        BusinessShortCode: requiredEnvVars.MPESA_SHORTCODE,
        Password: password,
        Timestamp: timestamp,
        TransactionType: IS_PRODUCTION ? 'CustomerBuyGoodsOnline' : 'CustomerPayBillOnline',
        Amount: amount,
        PartyA: formattedPhone,
        PartyB: requiredEnvVars.MPESA_SHORTCODE,
        PhoneNumber: formattedPhone,
        CallBackURL: `${requiredEnvVars.NEXT_PUBLIC_BASE_URL}/api/mpesa/callback`,
        AccountReference: 'Neurocare',
        TransactionDesc: 'Donation to Neurocare',
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    console.log('STK push response:', stkResponse.data);

    return NextResponse.json({
      success: true,
      message: IS_PRODUCTION 
        ? 'Please check your phone for the M-Pesa payment prompt' 
        : 'Test payment initiated. In production, the prompt would be sent to the actual phone number.',
      data: stkResponse.data,
    });
  } catch (error: any) {
    console.error('Payment error details:', {
      message: error.message,
      response: error.response?.data,
      stack: error.stack,
    });

    // Provide more specific error messages
    let errorMessage = 'Payment processing failed';
    if (error.message.includes('Missing M-Pesa API credentials')) {
      errorMessage = 'Developer setup required: Missing M-Pesa API credentials. Please configure your developer account.';
    } else if (error.message.includes('test phone number')) {
      errorMessage = error.message;
    } else if (error.message.includes('Invalid phone number')) {
      errorMessage = error.message;
    } else if (error.response?.data?.errorMessage) {
      errorMessage = `M-Pesa API Error: ${error.response.data.errorMessage}`;
    }

    return NextResponse.json(
      { 
        error: errorMessage,
        details: error.response?.data?.errorMessage || error.message 
      },
      { status: 500 }
    );
  }
} 