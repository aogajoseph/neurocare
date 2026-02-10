import { View, Text, StyleSheet, FlatList, TextInput, Pressable, Image } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { tokens } from '@/theme/design-tokens';
import { useLanguage } from '@/i18n/LanguageContext';
import { useMemo } from 'react';
import { communitySpaces } from '@/demo/community-spaces';
import { communityMessages, CommunityMessage } from '@/demo/community-messages';

// Grouped Dates helper function
const getDayLabel = (iso: string) => {
  const messageDate = new Date(iso);
  const today = new Date();

  const startOfToday = new Date(today.setHours(0, 0, 0, 0));
  const startOfMessageDay = new Date(
    messageDate.setHours(0, 0, 0, 0)
  );

  const diffInDays =
    (startOfToday.getTime() - startOfMessageDay.getTime()) /
    (1000 * 60 * 60 * 24);

  if (diffInDays < 1) return 'Today';
  if (diffInDays < 2) return 'Yesterday';
  return 'A Long Time ago';
};

export default function CommunitySpaceScreen() {
  const router = useRouter();
  const { language } = useLanguage();
  const { role, spaceId } = useLocalSearchParams<{ role: string; spaceId: string }>();

  // Load space metadata
  const space = useMemo(() => {
    return communitySpaces.find((s) => s.id === spaceId && s.role === role);
  }, [spaceId, role]);

  // Filter demo messages for this space and sort oldest → newest
  const messages = useMemo(() => {
    return communityMessages
      .filter(
        (msg) =>
          msg.spaceId === spaceId &&
          msg.author.role !== 'system'
      )
      // IMPORTANT:
      // Data must be oldest → newest.
      // FlatList inverted handles visual order.
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() -
          new Date(b.createdAt).getTime()
      );
  }, [spaceId]);

  if (!space) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {language === 'sw' ? 'Nafasi haipatikani' : 'Space not found'}
        </Text>
      </View>
    );
  }

  const renderMessage = ({
      item,
      index,
    }: {
      item: CommunityMessage;
      index: number;
    }) => {
  
    const isModerator = item.author.role === 'system' || item.author.role === 'moderator';
    const isOtherUser = !isModerator;
    const currentDayLabel = getDayLabel(item.createdAt);

    // IMPORTANT: FlatList is inverted, so we compare with index + 1
    const nextMessage =
      index < messages.length - 1 ? messages[index + 1] : null;

    const nextDayLabel = nextMessage
      ? getDayLabel(nextMessage.createdAt)
      : null;

    const showDayLabel = currentDayLabel !== nextDayLabel;

    const loggedInUserId = 'caregiver'; // for demo
    const isMe = item.author.id === loggedInUserId;

    return (
      <>
        {/* Day separator */}
        {showDayLabel && (
          <View style={styles.daySeparator}>
            <Text style={styles.daySeparatorText}>
              {currentDayLabel}
            </Text>
          </View>
        )}

        <View
          style={[
            styles.messageContainer,
            isModerator ? styles.moderatorMessageContainer : styles.userMessageContainer,
          ]}
        >
          {/* Avatar */}
          <View style={styles.avatarPlaceholder}>
            <Text style={styles.avatarText}>
              {(item.author.name[0] || '?').toUpperCase()}
            </Text>
          </View>

          {/* Message bubble */}
          <View style={[styles.messageBubble, isMe && styles.myMessageBubble, isModerator && styles.moderatorMessageBubble]}>
            <Text style={styles.messageSender}>{item.author.name}</Text>
            {isModerator && <Text style={styles.moderatorTag}>Moderator</Text>}
            <Text style={styles.messageText}>{item.content[language]}</Text>
            <Text style={styles.timestamp}>
              {new Date(item.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </Text>
          </View>
        </View>
        
      </>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>{space.title[language]}</Text>
          <Text style={styles.subtitle}>
            {language === 'sw'
              ? `Wanachama ${space.memberCount}`
              : `${space.memberCount} Members`}
          </Text>
        </View>
      </View>

      {/* Messages */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={styles.messages}
      />

      {/* Composer */}
      <View style={styles.composer}>
        <TextInput
          placeholder={language === 'sw' ? 'Andika ujumbe...' : 'Type a message...'}
          style={styles.input}
        />
        <Pressable style={styles.send}>
          <Text style={styles.sendText}>{language === 'sw' ? 'Tuma' : 'Send'}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: tokens.colors.surface.background },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: tokens.spacing.lg,
    gap: tokens.spacing.md,
    padding: tokens.spacing.lg,
    borderBottomWidth: 1,
    borderColor: tokens.colors.border.subtle,
    backgroundColor: tokens.colors.surface.card,
  },
  title: {
    fontSize: tokens.typography.size.xl,
    fontWeight: tokens.typography.weight.bold,
    color: tokens.colors.text.primary,
    marginBottom: tokens.spacing.xs,
  },
  subtitle: {
    fontSize: tokens.typography.size.sm,
    color: tokens.colors.text.muted,
  },

  // Messages
  messages: {
    flexGrow: 1,
    padding: tokens.spacing.lg,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: tokens.spacing.md,
    maxWidth: '80%',
  },
  moderatorMessageContainer: { alignSelf: 'flex-start' },
  userMessageContainer: { alignSelf: 'flex-end', flexDirection: 'row-reverse' },

  moderatorTag: {
    fontStyle: 'italic',
    fontSize: tokens.typography.size.xs,
    color: tokens.colors.text.muted,
    marginBottom: tokens.spacing.xs,
  },  

  avatarPlaceholder: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: tokens.colors.brand.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: tokens.spacing.sm,
    marginLeft: tokens.spacing.sm,
  },
  avatarText: { color: tokens.colors.text.inverse, fontWeight: 'bold' },

  messageBubble: {
    padding: tokens.spacing.sm,
    borderRadius: tokens.radius.md,
    backgroundColor: tokens.colors.surface.soft,
    maxWidth: '85%',
  },
  moderatorMessageBubble: {
    backgroundColor: tokens.colors.surface.light,
  },
  userMessageBubble: {
    backgroundColor: tokens.colors.brand.primary,
  },

  messageSender: {
    fontWeight: tokens.typography.weight.semibold,
    fontSize: tokens.typography.size.sm,
    marginBottom: tokens.spacing.xs,
    color: tokens.colors.text.primary,
  },
  messageText: {
    fontSize: tokens.typography.size.md,
    color: tokens.colors.text.primary,
  },

  timestamp: {
    fontSize: tokens.typography.size.xs,
    color: tokens.colors.text.muted,
    marginTop: tokens.spacing.xs,
    alignSelf: 'flex-end',
  },
  daySeparator: {
    alignItems: 'center',
    marginVertical: tokens.spacing.md,
  },
  daySeparatorText: {
    fontSize: tokens.typography.size.xs,
    color: tokens.colors.text.muted,
    fontStyle: 'italic',
  },  

  // Composer
  composer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: tokens.spacing.md,
    gap: tokens.spacing.sm,
    borderTopWidth: 1,
    borderColor: tokens.colors.border.subtle,
    backgroundColor: tokens.colors.surface.card,
  },
  input: {
    flex: 1,
    backgroundColor: tokens.colors.surface.background,
    borderRadius: tokens.radius.md,
    padding: tokens.spacing.md,
    fontSize: tokens.typography.size.md,
    color: tokens.colors.text.primary,
  },
  send: {
    backgroundColor: tokens.colors.brand.primary,
    paddingHorizontal: tokens.spacing.lg,
    paddingVertical: tokens.spacing.md,
    borderRadius: tokens.radius.md,
  },
  sendText: { color: tokens.colors.text.inverse, fontWeight: tokens.typography.weight.semibold },
});
