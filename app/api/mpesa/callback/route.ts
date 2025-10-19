import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Log the callback for debugging
    console.log('M-Pesa callback received:', body);

    // Handle different callback result codes
    const resultCode = body.Body.stkCallback.ResultCode;
    
    if (resultCode === 0) {
      // Payment successful
      const amount = body.Body.stkCallback.CallbackMetadata.Item.find(
        (item: any) => item.Name === 'Amount'
      ).Value;
      const mpesaReceiptNumber = body.Body.stkCallback.CallbackMetadata.Item.find(
        (item: any) => item.Name === 'MpesaReceiptNumber'
      ).Value;
      const phoneNumber = body.Body.stkCallback.CallbackMetadata.Item.find(
        (item: any) => item.Name === 'PhoneNumber'
      ).Value;

      // TODO: Update your database with the payment information
      // TODO: Send email confirmation to donor
      
      return NextResponse.json({
        success: true,
        message: 'Payment processed successfully',
      });
    } else {
      // Payment failed
      return NextResponse.json({
        success: false,
        message: 'Payment failed',
        resultCode,
      });
    }
  } catch (error) {
    console.error('M-Pesa callback error:', error);
    return NextResponse.json(
      { error: 'Failed to process payment callback' },
      { status: 500 }
    );
  }
} 