import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Pressable,
  Alert,
  Platform,
  KeyboardAvoidingView,
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
import { useMemo, useState, useRef, useEffect, useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useHeaderHeight } from '@react-navigation/elements';

import { tokens } from '@/theme/design-tokens';
import { useLanguage } from '@/i18n/LanguageContext';
import { communitySpaces } from '@/demo/community-spaces';
import { communityMessages, CommunityMessage } from '@/demo/community-messages';

import * as ImagePicker from 'expo-image-picker';

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

  // Hooks
  const [isMember, setIsMember] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showSpaceModal, setShowSpaceModal] = useState(false);
  const [showMembersModal, setShowMembersModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showModerationModal, setShowModerationModal] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<CommunityMessage | null>(null);
  const [showMessageActions, setShowMessageActions] = useState(false); 
  const [messageToRemove, setMessageToRemove] = useState<string | null>(null);
  const [recentlyRemoved, setRecentlyRemoved] = useState<CommunityMessage | null>(null);
  const [showUndo, setShowUndo] = useState(false);
  const [frozenUsers, setFrozenUsers] = useState<string[]>([]);
  const [userToFreeze, setUserToFreeze] = useState<string | null>(null);
  const navigation = useNavigation();
  const headerHeight = useHeaderHeight();

  useEffect(() => {
    if (!messageToRemove) return;
  
    Alert.alert(
      language === 'sw' ? 'Ondoa Ujumbe' : 'Remove Message',
      language === 'sw'
        ? 'Una uhakika unataka kuondoa ujumbe huu?'
        : 'Are you sure you want to remove this message?',
      [
        {
          text: language === 'sw' ? 'Ghairi' : 'Cancel',
          style: 'cancel',
          onPress: () => setMessageToRemove(null),
        },
        {
          text: language === 'sw' ? 'Ondoa' : 'Remove',
          style: 'destructive',
          onPress: () => {
            handleRemoveMessage(messageToRemove);
            setMessageToRemove(null);
            setSelectedMessage(null);
          },
        },
      ]
    );
  }, [messageToRemove]); 

  useEffect(() => {
    if (!userToFreeze) return;
  
    const alreadyFrozen = frozenUsers.includes(userToFreeze);
  
    Alert.alert(
      language === 'sw'
        ? alreadyFrozen
          ? 'Fungua Mtumiaji'
          : 'Gandisha Mtumiaji'
        : alreadyFrozen
          ? 'Unfreeze User'
          : 'Freeze User',
  
      language === 'sw'
        ? alreadyFrozen
          ? 'Una uhakika unataka kumruhusu mtumiaji huyu kushiriki tena?'
          : 'Una uhakika unataka kumgandisha mtumiaji huyu? Hataweza kutuma ujumbe.'
        : alreadyFrozen
          ? 'Are you sure you want to allow this user to participate again?'
          : 'Are you sure you want to freeze this user? They will not be able to send messages.',
  
      [
        {
          text: language === 'sw' ? 'Ghairi' : 'Cancel',
          style: 'cancel',
          onPress: () => setUserToFreeze(null),
        },
        {
          text: language === 'sw'
            ? alreadyFrozen
              ? 'Fungua'
              : 'Gandisha'
            : alreadyFrozen
              ? 'Unfreeze'
              : 'Freeze',
  
          style: alreadyFrozen ? 'default' : 'destructive',
  
          onPress: () => {
            handleFreezeUser(userToFreeze);
            setUserToFreeze(null);
          },
        },
      ]
    );
  }, [userToFreeze]);  

  // Load space metadata
  const space = useMemo(() => {
    return communitySpaces.find((s) => s.id === spaceId && s.role === role);
  }, [spaceId, role]);

  useLayoutEffect(() => {
    if (!space) return;
  
    navigation.setOptions({
      headerTitle: () => (
        <View>
          <Text
            style={{
              fontSize: tokens.typography.size.lg,
              fontWeight: tokens.typography.weight.bold,
              color: tokens.colors.text.primary,
            }}
            numberOfLines={1}
          >
            {space.title[language]}
          </Text>
  
          <Text
            style={{
              fontSize: tokens.typography.size.sm,
              color: tokens.colors.text.muted,
            }}
          >
            {language === 'sw'
              ? `Wanachama ${space.memberCount}`
              : `${space.memberCount} Members`}
          </Text>
        </View>
      ),
  
      headerRight: () => (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: tokens.spacing.sm,
            marginRight: tokens.spacing.sm,
          }}
        >
          <Pressable
            style={[
              styles.joinLeaveButton,
              isMember ? styles.leaveButton : styles.joinButton,
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
  
          <Pressable onPress={() => setShowMenu(true)}>
            <MoreVertical size={20} color={tokens.colors.text.muted} />
          </Pressable>
        </View>
      ),
    });
  }, [space, language, isMember]);

  const [spaceStatus, setSpaceStatus] = useState<'active' | 'frozen'>(
    space.status ?? 'active'
  );

  const isFrozen = spaceStatus === 'frozen';
  const loggedInUserId = 'caregiver'; // demo user identity
  const isUserFrozen = frozenUsers.includes(loggedInUserId);

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
    if (!isMember) return;          // safety guard
    if (isFrozen) return;           // prevent sending when frozen
    if (!newMessage.trim()) return; // empty message guard
  
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
  
    setChatMessages(prev => [...prev, newMsg]);
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
          : 'Notifications Disabled'
        : language === 'sw'
        ? 'Arifa zimewashwa'
        : 'Notifications Enabled'
    );
  };  

  // Freeze Space handler
  const handleFreezeSpace = () => {
    if (!isModerator) return;
  
    setSpaceStatus(prevStatus => {
      const nextStatus = prevStatus === 'frozen' ? 'active' : 'frozen';
  
      addSystemMessage(
        nextStatus === 'frozen'
          ? language === 'sw'
            ? 'Nafasi hii imegandishwa kwa muda na msimamizi'
            : 'This space has been frozen by the moderator'
          : language === 'sw'
          ? 'Nafasi hii imefunguliwa tena'
          : 'This space has been reopened'
      );
  
      return nextStatus;
    });
  };  

  // Freeze User handler
  const handleFreezeUser = (userId: string) => {
    if (!isModerator) return;
  
    const alreadyFrozen = frozenUsers.includes(userId);
  
    setFrozenUsers(prev =>
      alreadyFrozen
        ? prev.filter(id => id !== userId) // unfreeze
        : [...prev, userId]                // freeze
    );
  
    addSystemMessage(
      alreadyFrozen
        ? language === 'sw'
          ? 'Mtumiaji ameruhusiwa kushiriki tena'
          : 'User has been unfrozen by moderator'
        : language === 'sw'
          ? 'Mtumiaji amezuiwa kushiriki'
          : 'User has been frozen by moderator'
    );
  };  

  // Toggle Freeze Space function
  const toggleFreezeSpace = () => {
    setIsFrozen(prev => {
      const nextState = !prev;
  
      // Add system message
      setMessages(current => [
        ...current,
        {
          id: `system-${Date.now()}`,
          text:
            language === 'sw'
              ? nextState
                ? 'Nafasi imegandishwa na msimamizi.'
                : 'Nafasi imeondolewa kwenye hali ya kugandishwa.'
              : nextState
                ? 'This space has been frozen by a moderator.'
                : 'This space has been unfrozen.',
          createdAt: new Date().toISOString(),
          author: { role: 'system' },
        },
      ]);
  
      return nextState;
    });
  
    // Optional UI cleanup
    setShowModerationModal(false);
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

  // Remove Message with Undo
  const handleRemoveMessage = (messageId: string) => {
    if (!isModerator) return;

    // Find the message being removed
    const msgToRemove = chatMessages.find(m => m.id === messageId);
    if (!msgToRemove) return;

    // Remove it from the UI
    setChatMessages(prev =>
      prev.filter(msg => msg.id !== messageId)
    );

    // Store temporarily for Undo
    setRecentlyRemoved(msgToRemove);
    setShowUndo(true);

    // Add system message about removal
    addSystemMessage(
      language === 'sw'
        ? 'Ujumbe umeondolewa na msimamizi'
        : 'Message removed by moderator'
    );

    // Auto-hide undo after 5 seconds
    setTimeout(() => {
      setShowUndo(false);
      setRecentlyRemoved(null);
    }, 5000);
  };

  // Undo handler
  const handleUndoRemove = () => {
    if (!recentlyRemoved) return;

    setChatMessages(prev =>
      [...prev, recentlyRemoved].sort(
        (a, b) =>
          new Date(a.createdAt).getTime() -
          new Date(b.createdAt).getTime()
      )
    );

    setShowUndo(false);
    setRecentlyRemoved(null);

    addSystemMessage(
      language === 'sw'
        ? 'Ujumbe umerejeshwa'
        : 'Message restored'
    );
  };

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

        <Pressable
          onLongPress={() => {
            if (!isModerator) return;

            setSelectedMessage(item);
            setShowMessageActions(true);
          }}
          delayLongPress={250}
        >
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
              <View style={styles.senderRow}>
                <Text style={styles.messageSender}>
                  {item.author.name}
                </Text>

                {isMessageModerator && (
                  <Text style={styles.moderatorTag}>
                    Moderator
                  </Text>
                )}

                {frozenUsers.includes(item.author.id) && (
                  <View style={styles.frozenBadge}>
                    <Text style={styles.frozenBadgeText}>
                      {language === 'sw' ? 'Imefungwa' : 'Frozen'}
                    </Text>
                  </View>
                )}
              </View>

              <Text style={styles.messageText}>
                {item.content[language]}
              </Text>

              <Text style={styles.timestamp}>
                {new Date(item.createdAt).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </Text>
            </View>
          </View>
        </Pressable>
      </>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
      keyboardVerticalOffset={56}
    >
      <View style={styles.container}>
        {/* Moderation Notice */}
        <View style={styles.moderationRibbon}>
          <Text style={styles.moderationText}>
            {language === 'sw'
              ? 'Nafasi hii inadhibitiwa, tafadhali uwe na heshima.'
              : 'This space is moderated, please be respectful.'}
          </Text>
        </View>

        {/* Space Frozen Banner */}
        {isFrozen && (
          <View style={styles.frozenBanner}>
            <Text style={styles.frozenText}>
              {language === 'sw'
                ? 'Nafasi hii imegandishwa na msimamizi'
                : 'This space is currently frozen by the moderator'}
            </Text>
          </View>
        )}

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

        {showUndo && (
          <View style={styles.undoBanner}>
            <Text style={styles.undoText}>
              {language === 'sw' ? 'Ujumbe umeondolewa' : 'Message removed'}
            </Text>

            <Pressable onPress={handleUndoRemove}>
              <Text style={styles.undoAction}>
                {language === 'sw' ? 'TENGUA' : 'UNDO'}
              </Text>
            </Pressable>
          </View>
        )}

        {/* Composer */}
        {isMember ? (
          <View
            style={[
              styles.composer,
              (isFrozen || isUserFrozen) && styles.composerFrozen,
            ]}
          >
            <View style={styles.inputRow}>
              <TextInput
                style={styles.input}
                value={newMessage}
                onChangeText={setNewMessage}
                editable={!isFrozen && !isUserFrozen}
                placeholder={
                  isFrozen
                    ? language === 'sw'
                      ? 'Nafasi imegandishwa'
                      : 'Space is frozen'
                    : isUserFrozen
                      ? language === 'sw'
                        ? 'Umezuiwa kushiriki'
                        : 'You are restricted'
                      : language === 'sw'
                        ? 'Andika ujumbe...'
                        : 'Write a message...'
                }
                placeholderTextColor={tokens.colors.text.muted}
                multiline
              />

              <Pressable
                style={styles.attachButton}
                disabled={isFrozen || isUserFrozen}
                onPress={async () => {
                  // Request permission
                  const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                  if (status !== 'granted') {
                    alert('Permission to access gallery is required!');
                    return;
                  }

                  const result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.All,
                  });

                  if (!result.canceled) {
                    alert('App is in demo mode: files cannot be attached.');
                  }
                }}
              >
                <Paperclip size={24} color={tokens.colors.text.muted} />
              </Pressable>
            </View>

            <Pressable
              style={[
                styles.sendButton,
                (isFrozen || isUserFrozen) && styles.sendButtonDisabled,
              ]}
              onPress={sendMessage}
              disabled={isFrozen || isUserFrozen}
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
              {isUserFrozen
                ? language === 'sw'
                  ? 'Umezuiwa kushiriki kwenye mazungumzo'
                  : 'You are restricted from participating'
                : language === 'sw'
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

        {showMessageActions && selectedMessage && (
          <View style={styles.messageActionsOverlay}>
            <View style={styles.messageActionsSheet}>

              <Pressable
                style={styles.messageActionItem}
                onPress={() => {
                  setMessageToRemove(selectedMessage.id);
                  setShowMessageActions(false);
                }}              
              >
                <Text style={styles.removeText}>
                  {language === 'sw' ? 'Ondoa Ujumbe' : 'Remove Message'}
                </Text>
              </Pressable>

              <Pressable
                style={styles.messageActionItem}
                onPress={() => {
                  setShowMessageActions(false);
                  setSelectedMessage(null);
                }}
              >
                <Text>
                  {language === 'sw' ? 'Ghairi' : 'Cancel'}
                </Text>
              </Pressable>

            </View>
          </View>
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
          onFreezeUser={(userId) => {
            if (!isModerator) return;
            setUserToFreeze(userId);
          }}
          isUserFrozen={isUserFrozen}
          loggedInUserId={loggedInUserId}
          onFreezeSpace={handleFreezeSpace}
          isFrozen={isFrozen}
          onFreezeToggle={() =>
            setSpaceStatus(prev => (prev === 'frozen' ? 'active' : 'frozen'))
          }
          language={language}
        />

      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: tokens.colors.surface.background, 
    marginBottom: tokens.spacing.xxl, 
  },

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
    fontSize: tokens.typography.size.lg,
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
    fontSize: tokens.typography.size.xs,
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

  messageActionsOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.25)',
    justifyContent: 'flex-end',
  },
  
  messageActionsSheet: {
    backgroundColor: tokens.colors.surface.card,
    paddingBottom: tokens.spacing.lg,
    borderTopLeftRadius: tokens.radius.lg,
    borderTopRightRadius: tokens.radius.lg,
  },
  
  messageActionItem: {
    paddingVertical: tokens.spacing.md,
    paddingHorizontal: tokens.spacing.lg,
  },
  
  removeText: {
    color: tokens.colors.state.error,
    fontWeight: tokens.typography.weight.semibold,
  },

  undoBanner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: tokens.spacing.md,
    backgroundColor: tokens.colors.surface.soft,
    borderTopWidth: 1,
    borderColor: tokens.colors.border.subtle,
  },
  
  undoText: {
    fontSize: tokens.typography.size.sm,
    color: tokens.colors.text.primary,
  },
  
  undoAction: {
    fontSize: tokens.typography.size.sm,
    fontWeight: tokens.typography.weight.bold,
    color: tokens.colors.brand.primary,
  },  

  moderatorTag: {
    fontStyle: 'italic',
    fontSize: tokens.typography.size.xs,
    color: tokens.colors.text.muted,
    marginBottom: tokens.spacing.xs,
  },

  frozenBanner: {
    backgroundColor: tokens.colors.state.warning,
    paddingVertical: tokens.spacing.sm,
    paddingHorizontal: tokens.spacing.md,
    alignItems: 'center',
  },
  
  frozenText: {
    fontSize: tokens.typography.size.sm,
    color: tokens.colors.state.text,
    fontWeight: tokens.typography.weight.medium,
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
    marginBottom: tokens.spacing.md,
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
  composerFrozen: {
    opacity: 0.6,
  },
  
  sendButtonDisabled: {
    backgroundColor: tokens.colors.surface.disabled,
  },
  senderRow: {
    flexDirection: 'column',
    alignItems: 'left',
    gap: tokens.spacing.xs,
    marginBottom: tokens.spacing.xs,
  },
  
  frozenBadge: {
    backgroundColor: tokens.colors.state.warningSubtle,
    paddingHorizontal: tokens.spacing.xs,
    paddingVertical: 2,
    borderRadius: tokens.radius.sm,
  },
  
  frozenBadgeText: {
    fontSize: tokens.typography.size.xs,
    color: tokens.colors.state.warning,
    fontWeight: tokens.typography.weight.semibold,
  },  
  
});
