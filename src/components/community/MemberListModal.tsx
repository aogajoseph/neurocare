import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  FlatList,
} from 'react-native';

import { tokens } from '@/theme/design-tokens';
import { spaceMembers } from '@/demo/space-members';
import { communityMembers } from '@/demo/community-members';

type Props = {
  spaceId: string;
  onClose: () => void;
  language?: 'en' | 'sw';
};

export default function MemberListModal({
  spaceId,
  onClose,
  language = 'en',
}: Props) {
  const memberIds = spaceMembers[spaceId] || [];

  const members = communityMembers.filter((m) =>
    memberIds.includes(m.id)
  );

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>
            {language === 'sw' ? 'Wanachama' : 'Members'}
          </Text>

          <Pressable onPress={onClose}>
            <Text style={styles.close}>✕</Text>
          </Pressable>
        </View>

        {/* Members List */}
        <FlatList
          data={members}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <View style={styles.memberRow}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                  {item.name.charAt(0)}
                </Text>
              </View>

              <View style={styles.memberInfo}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.role}>
                  {item.role === 'moderator'
                    ? language === 'sw'
                      ? 'Msimamizi'
                      : 'Moderator'
                    : language === 'sw'
                    ? 'Mlezi'
                    : 'Caregiver'}
                </Text>
              </View>
            </View>
          )}
        />

        {/* Close Button */}
        <Pressable style={styles.button} onPress={onClose}>
          <Text style={styles.buttonText}>
            {language === 'sw' ? 'Funga' : 'Close'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    padding: tokens.spacing.md,
  },
  
  memberRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: tokens.spacing.sm,
  },
  
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: tokens.colors.brand.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: tokens.spacing.sm,
  },
  
  avatarText: {
    color: tokens.colors.text.inverse,
    fontWeight: tokens.typography.weight.bold,
  },
  
  memberInfo: {
    flex: 1,
  },
  
  name: {
    fontSize: tokens.typography.size.md,
    fontWeight: tokens.typography.weight.semibold,
    color: tokens.colors.text.primary,
  },
  
  role: {
    fontSize: tokens.typography.size.sm,
    color: tokens.colors.text.muted,
  },  
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    paddingHorizontal: tokens.spacing.lg,
  },
  container: {
    backgroundColor: tokens.colors.surface.card,
    borderRadius: tokens.radius.lg,
    maxHeight: '80%',
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: tokens.spacing.md,
    borderBottomWidth: 1,
    borderColor: tokens.colors.border.subtle,
  },
  title: {
    fontSize: tokens.typography.size.lg,
    fontWeight: tokens.typography.weight.bold,
    color: tokens.colors.text.primary,
  },
  close: {
    fontSize: tokens.typography.size.lg,
    color: tokens.colors.text.muted,
  },
  button: {
    padding: tokens.spacing.md,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: tokens.colors.border.subtle,
  },
  buttonText: {
    fontSize: tokens.typography.size.md,
    fontWeight: tokens.typography.weight.semibold,
    color: tokens.colors.text.primary,
  },
});
