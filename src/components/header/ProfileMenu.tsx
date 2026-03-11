import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Popover from 'react-native-popover-view';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useRef } from 'react';

import { DEMO_USER, DEMO_MENU } from '@/demo/profile';

export function ProfileMenu({ visible, onToggle, onClose }) {

  const router = useRouter();
  const ref = useRef(null);

  const user = DEMO_USER;
  const menu = DEMO_MENU;
  const isAnonymous = !user || user.isAnonymous;

  const handleNavigate = (path: string) => {
    onClose();
    router.push(path);
  };

  return (
    <>
      {/* PROFILE ICON */}
      <TouchableOpacity ref={ref} onPress={onToggle}>
        <Ionicons name="person-circle-outline" size={26} color="#111827" />
      </TouchableOpacity>

      {/* POPOVER MENU */}
      <Popover
        isVisible={visible}
        from={ref}
        onRequestClose={onClose}
        placement="bottom"
      >
        <View style={styles.menu}>

          {/* USER HEADER */}
          <View style={styles.header}>
            <Text style={styles.name}>
              {isAnonymous ? 'Guest User' : user.name}
            </Text>

            <Text style={styles.email}>
              {isAnonymous ? '@username' : user.email}
            </Text>
          </View>

          <View style={styles.divider} />

          {/* AUTH ACTIONS */}
          {isAnonymous && (
            <>
              <TouchableOpacity
                style={styles.item}
                onPress={() => handleNavigate('/(drawer)/(auth)/signup')}
              >
                <Ionicons name="person-add-outline" size={20} color="#2563EB" style={styles.icon}/>
                <Text style={styles.primaryLabel}>Sign Up</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.item}
                onPress={() => handleNavigate('/(drawer)/(auth)/login')}
              >
                <Ionicons name="log-in-outline" size={20} color="#2563EB" style={styles.icon}/>
                <Text style={styles.primaryLabel}>Sign In</Text>
              </TouchableOpacity>
            </>
          )}

          {/* USER MENU */}
          {!isAnonymous && menu.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.item}
              onPress={() =>
                handleNavigate(`/(drawer)/(tabs)/${item.action.target}`)
              }
            >
              <Ionicons
                name={item.icon}
                size={20}
                color="#111827"
                style={styles.icon}
              />
              <Text style={styles.label}>{item.label}</Text>
            </TouchableOpacity>
          ))}

        </View>
      </Popover>
    </>
  );
}

const styles = StyleSheet.create({

  menu: {
    width: 220,
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },

  header: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },

  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },

  email: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 2,
  },

  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 8,
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },

  icon: {
    marginRight: 12,
  },

  label: {
    fontSize: 15,
    color: '#111827',
  },

  primaryLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2563EB',
  },
});