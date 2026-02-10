import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Pressable,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Paperclip, Send } from 'lucide-react-native';
import { useMemo, useState, useRef } from 'react';

import { tokens } from '@/theme/design-tokens';
import { useLanguage } from '@/i18n/LanguageContext';
import { communitySpaces } from '@/demo/community-spaces';
import { communityMessages, CommunityMessage } from '@/demo/community-messages';

// Helper: Day labels
const getDayLabel = (iso: string) => {
  const messageDate = new Date(iso);
  const today = new Date();
  const startOfToday = new Date(today.setHours(0, 0, 0, 0));
  const startOfMessageDay = new Date(messageDate.setHours(0, 0, 0, 0));
  const diffInDays =
    (startOfToday.getTime() - startOfMessageDay.getTime()) /
    (1000 * 60 * 60 * 24);

  if (diffInDays < 1) return 'Today';
  if (diffInDays < 2) return 'Yesterday';
  if (diffInDays < 7) return `${diffInDays} days ago`;
  return 'A while ago';
};

export default function CommunitySpaceScreen() {
  const router = useRouter();
  const { language } = useLanguage();
  const { role, spaceId } =
    useLocalSearchParams<{ role: string; spaceId: string }>();

  const [isMember, setIsMember] = useState(false);

  // Load space metadata
  const space = useMemo(() => {
    return communitySpaces.find((s) => s.id === spaceId && s.role === role);
  }, [spaceId, role]);

  // Filter demo messages for this space, sort oldest → newest
  const messages = useMemo(() => {
    return communityMessages
      .filter((msg) => msg.spaceId === spaceId && msg.author.role !== 'system')
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() -
          new Date(b.createdAt).getTime()
      );
  }, [spaceId]);

  // State for chat messages and input
  const [chatMessages, setChatMessages] =
    useState<CommunityMessage[]>(messages);
  const [newMessage, setNewMessage] = useState('');
  const flatListRef = useRef<FlatList>(null);

  // Composer: send a new message
  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const newMsg: CommunityMessage = {
      id: `msg-${Date.now()}`,
      spaceId,
      author: {
        id: 'caregiver',
        name: 'You',
        role: 'caregiver',
        profileImage: '/assets/default-avatar.png',
      },
      content: {
        en: newMessage,
        sw: newMessage,
      },
      createdAt: new Date().toISOString(),
    };

    setChatMessages((prev) => [...prev, newMsg]);
    setNewMessage('');

    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  if (!space) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {language === 'sw'
            ? 'Nafasi haipatikani'
            : 'Space not found'}
        </Text>
      </View>
    );
  }

  // Render each message
  const renderMessage = ({
    item,
    index,
  }: {
    item: CommunityMessage;
    index: number;
  }) => {
    const isModerator =
      item.author.role === 'system' ||
      item.author.role === 'moderator';
    const loggedInUserId = 'caregiver';
    const isMe = item.author.id === loggedInUserId;

    const currentDayLabel = getDayLabel(item.createdAt);
    const nextMessage =
      index < chatMessages.length - 1
        ? chatMessages[index + 1]
        : null;
    const nextDayLabel = nextMessage
      ? getDayLabel(nextMessage.createdAt)
      : null;
    const showDayLabel = currentDayLabel !== nextDayLabel;

    return (
      <>
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
            isModerator
              ? styles.moderatorMessageContainer
              : styles.userMessageContainer,
          ]}
        >
          <View style={styles.avatarPlaceholder}>
            <Text style={styles.avatarText}>
              {(item.author.name[0] || '?').toUpperCase()}
            </Text>
          </View>

          <View
            style={[
              styles.messageBubble,
              isMe && styles.myMessageBubble,
              isModerator &&
                styles.moderatorMessageBubble,
            ]}
          >
            <Text style={styles.messageSender}>
              {item.author.name}
            </Text>
            {isModerator && (
              <Text style={styles.moderatorTag}>
                Moderator
              </Text>
            )}
            <Text style={styles.messageText}>
              {item.content[language]}
            </Text>
            <Text style={styles.timestamp}>
              {new Date(item.createdAt).toLocaleTimeString(
                [],
                {
                  hour: '2-digit',
                  minute: '2-digit',
                }
              )}
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
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>
            {space.title[language]}
          </Text>
          <Text style={styles.subtitle}>
            {language === 'sw'
              ? `Wanachama ${space.memberCount}`
              : `${space.memberCount} Members`}
          </Text>
        </View>

        <Pressable
          style={[
            styles.joinLeaveButton,
            isMember
              ? styles.leaveButton
              : styles.joinButton,
          ]}
          onPress={() =>
            setIsMember((prev) => !prev)
          }
        >
          <Text
            style={[
              styles.joinLeaveText,
              isMember && styles.leaveButtonText,
            ]}
          >
            {isMember
              ? language === 'sw'
                ? 'Ondoka'
                : 'Leave'
              : language === 'sw'
              ? 'Jiunge'
              : 'Join'}
          </Text>
        </Pressable>
      </View>

      {/* Messages */}
      <FlatList
        data={chatMessages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={styles.messages}
        ref={flatListRef}
      />

      {/* Composer */}
      {isMember ? (
        <View style={styles.composer}>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              value={newMessage}
              onChangeText={setNewMessage}
              placeholder={
                language === 'sw'
                  ? 'Andika ujumbe...'
                  : 'Write a message...'
              }
              placeholderTextColor={
                tokens.colors.text.muted
              }
            />

            <Pressable style={styles.attachButton}>
              <Paperclip
                size={18}
                color={tokens.colors.text.muted}
              />
            </Pressable>
          </View>

          <Pressable
            style={styles.sendButton}
            onPress={sendMessage}
          >
            <Send
              size={18}
              color={tokens.colors.text.inverse}
            />
          </Pressable>
        </View>
      ) : (
        <View style={styles.composerDisabled}>
          <Text style={styles.composerHint}>
            {language === 'sw'
              ? 'Jiunge ili uweze kutuma ujumbe'
              : 'Join this space to send messages'}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: tokens.colors.surface.background },

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

  joinLeaveButton: {
    paddingHorizontal: tokens.spacing.md,
    paddingVertical: tokens.spacing.sm,
    borderRadius: tokens.radius.md,
    borderWidth: 1,
  },

  joinButton: {
    borderColor: tokens.colors.brand.primary,
    backgroundColor: tokens.colors.brand.primary,
  },

  leaveButton: {
    borderColor: tokens.colors.border.subtle,
    backgroundColor: tokens.colors.surface.soft,
  },

  joinLeaveText: {
    fontSize: tokens.typography.size.sm,
    fontWeight: tokens.typography.weight.semibold,
    color: tokens.colors.text.inverse,
  },

  leaveButtonText: {
    color: tokens.colors.text.muted,
  },

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
  userMessageContainer: {
    alignSelf: 'flex-end',
    flexDirection: 'row-reverse',
  },

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
    marginHorizontal: tokens.spacing.sm,
  },

  avatarText: {
    color: tokens.colors.text.inverse,
    fontWeight: 'bold',
  },

  messageBubble: {
    padding: tokens.spacing.md,
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

  myMessageBubble: {},

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

  composer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: tokens.spacing.md,
    gap: tokens.spacing.sm,
    borderTopWidth: 1,
    borderColor: tokens.colors.border.subtle,
    backgroundColor: tokens.colors.surface.card,
  },

  composerDisabled: {
    padding: tokens.spacing.md,
    borderTopWidth: 1,
    borderColor: tokens.colors.border.subtle,
    backgroundColor: tokens.colors.surface.soft,
    alignItems: 'center',
    justifyContent: 'center',
  },

  composerHint: {
    fontSize: tokens.typography.size.sm,
    color: tokens.colors.text.muted,
    fontStyle: 'italic',
  },

  inputRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: tokens.colors.surface.background,
    borderRadius: tokens.radius.md,
    paddingHorizontal: tokens.spacing.sm,
  },

  input: {
    flex: 1,
    padding: tokens.spacing.md,
    fontSize: tokens.typography.size.md,
    color: tokens.colors.text.primary,
  },

  attachButton: {
    padding: tokens.spacing.sm,
  },

  sendButton: {
    marginLeft: tokens.spacing.sm,
    backgroundColor: tokens.colors.brand.primary,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
