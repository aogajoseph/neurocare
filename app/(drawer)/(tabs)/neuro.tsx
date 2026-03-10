import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useState, useRef } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { tokens } from '@/theme/design-tokens';
import { DEMO_ASSISTANT_RESPONSES } from '@/demo/neuro';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
};

/**
 * Small Levenshtein distance helper for fuzzy matching
 */
function levenshtein(a: string, b: string) {
  const matrix = Array.from({ length: a.length + 1 }, () =>
    Array(b.length + 1).fill(0)
  );

  for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
  for (let j = 0; j <= b.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }

  return matrix[a.length][b.length];
}

export default function NeuroScreen() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      text:
        "Hi, I'm Neuro, your Neuro Care Assistant.\nAsk me about neurological health.",
      sender: 'assistant',
    },
  ]);

  const [input, setInput] = useState('');

  const flatListRef = useRef<FlatList>(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userText = input;
    setInput('');

    const userMessage: Message = {
      id: Date.now().toString(),
      text: userText,
      sender: 'user',
    };

    const typingId = `typing-${Date.now()}`;

    setMessages((prev) => [
      ...prev,
      userMessage,
      { id: typingId, text: '...', sender: 'assistant' },
    ]);

    const normalized = userText.toLowerCase();
    const words = normalized.split(/\s+/);

    const match = DEMO_ASSISTANT_RESPONSES.find((r) => {
      if (r.keywords.some((k) => normalized.includes(k))) return true;
      if (r.misspellings?.some((m) => normalized.includes(m))) return true;

      return words.some((word) =>
        r.keywords.some((k) => levenshtein(word, k) <= 2)
      );
    });

    const assistantText = match
      ? match.output
      : "Sorry, I don't have an answer for that in demo mode.";

    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === typingId
            ? {
                id: Date.now().toString(),
                text: assistantText,
                sender: 'assistant',
              }
            : msg
        )
      );
    }, 500);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}
    >
      <FlatList
        ref={flatListRef}
        style={{ flex: 1 }}
        data={messages}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.chat}
        keyboardShouldPersistTaps="handled"
        onContentSizeChange={() =>
          flatListRef.current?.scrollToEnd({ animated: true })
        }
        renderItem={({ item }) => {
          const isWelcome = item.id === 'welcome';

          return (
            <View
              style={[
                styles.message,
                item.sender === 'user'
                  ? styles.user
                  : isWelcome
                  ? styles.welcome
                  : styles.assistant,
              ]}
            >
              <Text
                style={[
                  styles.text,
                  item.sender === 'user' && styles.userText,
                  isWelcome && styles.welcomeText,
                ]}
              >
                {item.text}
              </Text>
            </View>
          );
        }}
      />

      <View style={styles.inputBar}>
        <TextInput
          style={styles.input}
          placeholder="Ask here..."
          placeholderTextColor={tokens.colors.text.muted}
          value={input}
          onChangeText={setInput}
          multiline
          textAlignVertical="top"
        />

        <TouchableOpacity onPress={sendMessage}>
          <Ionicons
            name="send"
            size={22}
            color={tokens.colors.brand.primary}
          />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.colors.surface.background,
  },
  chat: {
    paddingHorizontal: tokens.spacing.lg,
    paddingTop: tokens.spacing.lg,
    paddingBottom: tokens.spacing.md,
    flexGrow: 1,
  },
  welcome: {
    paddingVertical: tokens.spacing.lg,
  },
  welcomeText: {
    fontSize: tokens.typography.size.sm,
    fontStyle: tokens.typography.style.italic,
    fontWeight: tokens.typography.weight.medium,
    lineHeight: tokens.typography.lineHeight.tight,
    textAlign: 'left',
  },
  message: {
    paddingVertical: tokens.spacing.md,
    paddingHorizontal: tokens.spacing.lg,
    borderRadius: tokens.radius.lg,
    marginBottom: tokens.spacing.sm,
    maxWidth: '90%',
  },
  assistant: {
    backgroundColor: tokens.colors.surface.soft,
    alignSelf: 'flex-start',
    borderTopLeftRadius: 0,
  },
  user: {
    backgroundColor: tokens.colors.brand.primary,
    alignSelf: 'flex-end',
    borderTopRightRadius: 0,
    marginBottom: tokens.spacing.md,
  },
  text: {
    fontSize: tokens.typography.size.sm,
    lineHeight: tokens.typography.lineHeight.tight,
    color: tokens.colors.text.primary,
  },
  userText: {
    color: tokens.colors.text.inverse,
  },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: tokens.spacing.lg,
    paddingVertical: tokens.spacing.md,
    borderTopWidth: 1,
    borderTopColor: tokens.colors.border.subtle,
    backgroundColor: tokens.colors.surface.background,
  },
  input: {
    flex: 1,
    paddingVertical: tokens.spacing.sm,
    paddingHorizontal: tokens.spacing.lg,
    backgroundColor: tokens.colors.surface.card,
    borderRadius: tokens.radius.full,
    marginRight: tokens.spacing.sm,
    fontSize: tokens.typography.size.sm,
    color: tokens.colors.text.primary,
  },
});  