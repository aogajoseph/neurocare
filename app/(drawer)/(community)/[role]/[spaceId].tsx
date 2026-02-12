import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Pressable,
  Alert,
  Platform,
} from 'react-native';

import {
  Info,
  Users,
  Share2,
  BellOff,
  Shield,
  Flag,
  Paperclip, 
  Send, 
  MoreVertical,
} from 'lucide-react-native';

import { useLocalSearchParams, useRouter } from 'expo-router';
import { useMemo, useState, useRef } from 'react';

import { tokens } from '@/theme/design-tokens';
import { useLanguage } from '@/i18n/LanguageContext';
import { communitySpaces } from '@/demo/community-spaces';
import { communityMessages, CommunityMessage } from '@/demo/community-messages';

// Modals
import SpaceModal from '@/components/community/SpaceModal';
import MemberListModal from '@/components/community/MemberListModal';
import ShareModal from '@/components/community/ShareModal';
import ReportIssueModal from '@/components/community/ReportIssueModal';
import ModerationToolsModal from '@/components/community/ModerationToolsModal';

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
  const isModerator = role === 'moderator';  

  // State
  const [isMember, setIsMember] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showSpaceModal, setShowSpaceModal] = useState(false);
  const [showMembersModal, setShowMembersModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showModerationModal, setShowModerationModal] = useState(false);

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

  // Helper: Add system message
  const addSystemMessage = (text: string) => {
    const systemMsg: CommunityMessage = {
      id: `sys-${Date.now()}`,
      spaceId,
      author: {
        id: 'system',
        name: 'System',
        role: 'system',
        profileImage: '',
      },
      content: {
        en: text,
        sw: text,
      },
      createdAt: new Date().toISOString(),
    };

    setChatMessages((prev) => [...prev, systemMsg]);

    // scroll to bottom
    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  // Handle Join/Leave
  const handleJoinLeave = () => {
    if (!isMember) {
      addSystemMessage(
        language === 'sw'
          ? 'Umejiunga na nafasi hii'
          : 'You joined the space'
      );
      setIsMember(true);
      return;
    }
  
    const confirmLeave = () => {
      addSystemMessage(
        language === 'sw'
          ? 'Umeondoka kwenye nafasi hii'
          : 'You left the space'
      );
      setIsMember(false);
    };
  
    if (Platform.OS === 'web') {
      const confirmed = window.confirm(
        language === 'sw'
          ? 'Una uhakika unataka kuondoka kwenye nafasi hii?'
          : 'Are you sure you want to leave this space?'
      );
  
      if (confirmed) confirmLeave();
    } else {
      Alert.alert(
        language === 'sw' ? 'Ondoka' : 'Leave Space',
        language === 'sw'
          ? 'Una uhakika unataka kuondoka kwenye nafasi hii?'
          : 'Are you sure you want to leave this space?',
        [
          {
            text: language === 'sw' ? 'Hapana' : 'No',
            style: 'cancel',
          },
          {
            text: language === 'sw' ? 'Ndiyo' : 'Yes',
            style: 'destructive',
            onPress: confirmLeave,
          },
        ]
      );
    }
  };    

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

  // Share Space function
  const handleShareSpace = async () => {
    if (!space?.share) return;
  
    const shareText = space.share.message[language];
  
    try {
      if (Platform.OS === 'web') {
        await navigator.clipboard.writeText(shareText);
        alert(language === 'sw' ? 'Linki imenakiliwa' : 'Link copied');
        return;
      }
  
      await Share.share({
        message: shareText,
      });
    } catch (error) {
      console.log('Share error:', error);
    }
  };  

  // Toggle Notifications
  const handleToggleMute = () => {
    const nextState = !isMuted;
    setIsMuted(nextState);
  
    showToast(
      nextState
        ? language === 'sw'
          ? 'Arifa zimezimwa'
          : 'Notifications muted'
        : language === 'sw'
        ? 'Arifa zimewashwa'
        : 'Notifications unmuted'
    );
  };  

  // Notifications Toast
  const showToast = (message: string) => {
    setToastMessage(message);
  
    setTimeout(() => {
      setToastMessage(null);
    }, 2500); // disappears after 2.5s
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
    const isMessageModerator =
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
            isMessageModerator
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
              isMessageModerator &&
                styles.moderatorMessageBubble,
            ]}
          >
            <Text style={styles.messageSender}>
              {item.author.name}
            </Text>
            {isMessageModerator && (
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
          onPress={handleJoinLeave}
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

        {/* More button */}
        <Pressable
          style={styles.moreButton}
          onPress={() => setShowMenu(true)}
        >
          <MoreVertical size={20} color={tokens.colors.text.muted} />
        </Pressable>
      </View>

      {/* Moderation Notice */}
      <View style={styles.moderationRibbon}>
        <Text style={styles.moderationText}>
          {language === 'sw'
            ? 'Nafasi hii inadhibitiwa, tafadhali uwe na heshima.'
            : 'This space is moderated, please be respectful.'}
        </Text>
      </View>

      {/* Messages */}
      <FlatList
        data={chatMessages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={styles.messages}
        ref={flatListRef}
      />

      {/* Toast */}
      {toastMessage && (
        <View style={styles.toast}>
          <Text style={styles.toastText}>{toastMessage}</Text>
        </View>
      )}

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
                size={24}
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

      {showMenu && (
        <View style={styles.sheetOverlay}>
          <Pressable
            style={styles.sheetBackdrop}
            onPress={() => setShowMenu(false)}
          />

          <View style={styles.sheet}>

            <Pressable
              style={styles.sheetItem}
              onPress={() => {
                setShowMenu(false); // close the sheet first
                setShowSpaceModal(true); // open modal
              }}
            >
              <Info size={18} color={tokens.colors.text.primary} />
              <Text style={styles.sheetText}>
                {language === 'sw' ? 'Kuhusu Space Hii' : 'About this Space'}
              </Text>
            </Pressable>

            <Pressable
              style={styles.sheetItem}
              onPress={() => {
                setShowMenu(false);
                setShowMembersModal(true);
              }}
            >
              <Users size={18} color={tokens.colors.text.primary} />
              <Text style={styles.sheetText}>
                {language === 'sw' ? 'Tazama Wanachama' : 'View Members'}
              </Text>
            </Pressable>

            <Pressable
              style={styles.sheetItem}
              onPress={() => {
                setShowMenu(false);
                setShowShareModal(true);
              }}
            >
              <Share2 size={18} color={tokens.colors.text.primary} />
              <Text style={styles.sheetText}>
                {language === 'sw' ? 'Shiriki Space Hii' : 'Share this Space'}
              </Text>
            </Pressable>

            <Pressable
              style={styles.sheetItem}
              onPress={() => {
                setShowMenu(false);
                handleToggleMute();
              }}
            >
              <BellOff
                size={18}
                color={isMuted ? tokens.colors.brand.primary : tokens.colors.text.muted}
              />
              <Text style={styles.sheetText}>
                {isMuted
                  ? language === 'sw'
                    ? 'Washa Arifa'
                    : 'Unmute Notifications'
                  : language === 'sw'
                  ? 'Nyamazisha Arifa'
                  : 'Mute Notifications'}
              </Text>
            </Pressable>

            <Pressable
              style={styles.sheetItem}
              onPress={() => {
                setShowMenu(false);
                setShowModerationModal(true);
              }}
            >
              <Shield size={18} color={tokens.colors.text.primary} />
              <Text style={styles.sheetText}>
                {language === 'sw' ? 'Zana za Uangalizi' : 'Moderation Tools'}
              </Text>
            </Pressable>

            <Pressable
              style={styles.sheetItem}
              onPress={() => {
                setShowMenu(false);
                setShowReportModal(true);
              }}
            >
              <Flag size={18} color={tokens.colors.state.error} />
              <Text style={[styles.sheetText, styles.destructiveText]}>
                {language === 'sw' ? 'Ripoti Tatizo' : 'Report an Issue'}
              </Text>
            </Pressable>

            <Pressable
              style={[styles.sheetItem, styles.sheetCancel]}
              onPress={() => setShowMenu(false)}
            >
              <Text style={styles.sheetCancelText}>
                {language === 'sw' ? 'Ghairi' : 'Cancel'}
              </Text>
            </Pressable>

          </View>

        </View>
      )}

      {showSpaceModal && (
        <SpaceModal
          space={space} // passes the current space object
          onClose={() => setShowSpaceModal(false)}
          language={language}
        />
      )}

      {showMembersModal && (
        <MemberListModal
          spaceId={space.id}
          onClose={() => setShowMembersModal(false)}
        />
      )}

      {showShareModal && space?.share && (
        <ShareModal
          visible={showShareModal}
          message={space.share.message[language]}
          onClose={() => setShowShareModal(false)}
          language={language}
        />
      )}

      <ReportIssueModal
        visible={showReportModal}
        onClose={() => setShowReportModal(false)}
        language={language}
      />

      <ModerationToolsModal
        visible={showModerationModal}
        onClose={() => setShowModerationModal(false)}
        isModerator={role === 'moderator'}
        language={language}
      />

    </View>
  );
}

// Styles unchanged
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

  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: tokens.spacing.sm,
  },
  
  moreButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  sheetOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
  },
  
  sheetBackdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  
  sheet: {
    backgroundColor: tokens.colors.surface.card,
    paddingBottom: tokens.spacing.lg,
    borderTopLeftRadius: tokens.radius.lg,
    borderTopRightRadius: tokens.radius.lg,
  },

  sheetItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: tokens.spacing.sm,
    paddingVertical: tokens.spacing.md,
    paddingHorizontal: tokens.spacing.lg,
  },
  
  sheetText: {
    fontSize: tokens.typography.size.md,
    color: tokens.colors.text.primary,
  },
  
  sheetCancel: {
    marginTop: tokens.spacing.sm,
    borderTopWidth: 1,
    justifyContent: 'center',
    borderColor: tokens.colors.border.subtle,
  },
  
  sheetCancelText: {
    fontSize: tokens.typography.size.md,
    fontWeight: tokens.typography.weight.semibold,
    color: tokens.colors.text.muted,
    textAlign: 'center',
    flex: 1,
  },

  destructiveText: {
    color: tokens.colors.state.error,
  },

  toast: {
    position: 'absolute',
    bottom: 90, // sits above composer
    alignSelf: 'center',
    backgroundColor: tokens.colors.surface.card,
    paddingHorizontal: tokens.spacing.lg,
    paddingVertical: tokens.spacing.sm,
    borderRadius: tokens.radius.full,
    borderWidth: 1,
    borderColor: tokens.colors.border.subtle,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  
  toastText: {
    fontSize: tokens.typography.size.sm,
    color: tokens.colors.text.primary,
    fontWeight: tokens.typography.weight.medium,
  },  
  
  moderationRibbon: {
    paddingVertical: tokens.spacing.sm,
    paddingHorizontal: tokens.spacing.lg,
    backgroundColor: tokens.colors.surface.soft,
    borderBottomWidth: 1,
    borderColor: tokens.colors.border.subtle,
  },
  
  moderationText: {
    fontSize: tokens.typography.size.sm,
    color: tokens.colors.text.muted,
    textAlign: 'center',
    fontStyle: 'italic',
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
