import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';

import { resources } from '@/demo/resources';
import { tokens } from '@/theme/design-tokens';

export default function DonateScreen() {
  const router = useRouter();
  const donateResource = resources.find((r) => r.slug === 'donate');

  const [donationType, setDonationType] = useState<string | null>(null);
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'mpesa' | 'card' | null>(null);

  // Dynamic fields
  const [phone, setPhone] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  if (!donateResource) {
    return (
      <View style={styles.center}>
        <Text>Donate resource not found.</Text>
      </View>
    );
  }

  const isValid =
    donationType &&
    amount &&
    paymentMethod &&
    (paymentMethod === 'mpesa'
      ? phone
      : cardNumber && expiry && cvv);

  const handleDonate = () => {
    const payload = {
      donationType,
      amount: Number(amount),
      paymentMethod,
      ...(paymentMethod === 'mpesa'
        ? { phone }
        : { cardNumber, expiry, cvv }),
    };

    console.log('Backend-ready donation payload:', payload);

    Alert.alert(
      'UI Only',
      'Donation form is ready for backend integration.'
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.back}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>{donateResource.title.en}</Text>
      <Text style={styles.subtitle}>{donateResource.subtitle.en}</Text>

      {/* Donation Type */}
      <Text style={styles.label}>Select Donation Type</Text>
      <View style={styles.optionRow}>
        {donateResource.items.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.optionCard,
              donationType === item.id && styles.selectedCard,
            ]}
            onPress={() => setDonationType(item.id)}
          >
            <Text style={styles.optionTitle}>{item.title}</Text>
            <Text style={styles.optionDescription}>
              {item.description}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Amount */}
      <Text style={styles.label}>Amount (KES)</Text>
      <TextInput
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        placeholder="Enter amount"
        placeholderTextColor={tokens.colors.text.muted}
        style={styles.input}
      />

      {/* Payment Method */}
      <Text style={styles.label}>Payment Method</Text>
      <View style={styles.paymentRow}>
        <TouchableOpacity
          style={[
            styles.paymentOption,
            paymentMethod === 'mpesa' && styles.selectedCard,
          ]}
          onPress={() => setPaymentMethod('mpesa')}
        >
          <Text>M-Pesa</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.paymentOption,
            paymentMethod === 'card' && styles.selectedCard,
          ]}
          onPress={() => setPaymentMethod('card')}
        >
          <Text>Card</Text>
        </TouchableOpacity>
      </View>

      {/* Dynamic Fields */}
      {paymentMethod === 'mpesa' && (
        <>
          <Text style={styles.label}>M-Pesa Phone Number</Text>
          <TextInput
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            placeholder="07XXXXXXXX"
            placeholderTextColor={tokens.colors.text.muted}
            style={styles.input}
          />
        </>
      )}

      {paymentMethod === 'card' && (
        <>
          <Text style={styles.label}>Card Number</Text>
          <TextInput
            value={cardNumber}
            onChangeText={setCardNumber}
            keyboardType="numeric"
            placeholder="1234 5678 9012 3456"
            placeholderTextColor={tokens.colors.text.muted}
            style={styles.input}
          />

          <Text style={styles.label}>Expiry (MM/YY)</Text>
          <TextInput
            value={expiry}
            onChangeText={setExpiry}
            placeholder="MM/YY"
            placeholderTextColor={tokens.colors.text.muted}
            style={styles.input}
          />

          <Text style={styles.label}>CVV</Text>
          <TextInput
            value={cvv}
            onChangeText={setCvv}
            keyboardType="numeric"
            placeholder="123"
            placeholderTextColor={tokens.colors.text.muted}
            secureTextEntry
            style={styles.input}
          />
        </>
      )}

      {/* Submit */}
      <TouchableOpacity
        style={[
          styles.button,
          !isValid && styles.buttonDisabled,
        ]}
        disabled={!isValid}
        onPress={handleDonate}
      >
        <Text style={styles.buttonText}>Donate Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: tokens.spacing.xl,
    backgroundColor: tokens.colors.surface.background,
    padding: 20,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: tokens.spacing.xl,
  },
  back: {
    marginBottom: 12,
    fontSize: tokens.typography.size.sm,
    fontWeight: tokens.typography.weight.bold,
    color: tokens.colors.primary,
  },
  title: {
    fontSize: tokens.typography.size.xxl,
    fontWeight: tokens.typography.weight.bold,
    color: tokens.colors.brand.primary,
    marginBottom: tokens.spacing.xs,
  },
  subtitle: {
    fontSize: tokens.typography.size.md,
    color: tokens.colors.text.muted,
    marginBottom: tokens.spacing.lg,
    lineHeight: tokens.typography.lineHeight.relaxed,
  },
  label: {
    marginTop: tokens.spacing.lg,
    marginBottom: tokens.spacing.sm,
    fontSize: tokens.typography.size.sm,
    color: tokens.colors.text.primary,
  },
  optionRow: {
    gap: tokens.spacing.md,
  },
  optionCard: {
    backgroundColor: tokens.colors.surface.card,
    borderRadius: tokens.radius.lg,
    padding: tokens.spacing.lg,
    marginBottom: tokens.spacing.md,
    borderWidth: 1,
    borderColor: tokens.colors.border.subtle,
  },
  selectedCard: {
    borderColor: tokens.colors.brand.primary,
    backgroundColor: tokens.colors.surface.soft,
  },
  optionTitle: {
    fontSize: tokens.typography.size.md,
    fontWeight: tokens.typography.weight.semibold,
    color: tokens.colors.text.primary,
    flex: 1,
    paddingRight: tokens.spacing.sm,
    marginTop: 2,
  },
  optionDescription: {
    marginTop: tokens.spacing.sm,
    fontSize: tokens.typography.size.sm,
    color: tokens.colors.text.secondary,
    marginTop: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: tokens.colors.border.subtle,
    borderRadius: tokens.radius.md,
    padding: tokens.spacing.md,
    fontSize: tokens.typography.size.md,
    backgroundColor: tokens.colors.surface.card,
  },
  paymentRow: {
    flexDirection: 'row',
    gap: tokens.spacing.md,
  },
  paymentOption: {
    flex: 1,
    padding: tokens.spacing.md,
    borderWidth: 1,
    borderColor: tokens.colors.border.subtle,
    borderRadius: tokens.radius.md,
    alignItems: 'center',
  },
  button: {
    marginTop: tokens.spacing.xl,
    backgroundColor: tokens.colors.brand.primary,
    padding: tokens.spacing.lg,
    borderRadius: tokens.radius.md,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: tokens.colors.border.strong,
  },
  buttonText: {
    color: tokens.colors.text.inverse,
    fontWeight: tokens.typography.weight.semibold,
    fontSize: tokens.typography.size.md,
  },
});