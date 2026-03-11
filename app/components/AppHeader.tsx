import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Share
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { useState } from "react";

import { LanguageMenu } from "@/components/header/LanguageMenu";
import { ProfileMenu } from "@/components/header/ProfileMenu";
import { DEMO_CONFIG } from "@/demo/config";

export default function AppHeader() {
  const navigation = useNavigation<any>();
  const config = DEMO_CONFIG;

  const [showLang, setShowLang] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleShare = async () => {
    if (!config?.share) return;

    await Share.share({
      title: config.share.title,
      message: `${config.share.message}\n${config.share.url}`,
    });
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>

        {/* LEFT */}
        <View style={styles.left}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="menu" size={26} color="#000" />
          </TouchableOpacity>

          <Text style={styles.title}>{config?.app?.name}</Text>
        </View>

        {/* RIGHT */}
        <View style={styles.actions}>

          <LanguageMenu
            visible={showLang}
            onToggle={() => setShowLang(!showLang)}
            onClose={() => setShowLang(false)}
          />

          <TouchableOpacity onPress={handleShare}>
            <Ionicons name="share-social-outline" size={22} color="#111827" />
          </TouchableOpacity>

          <ProfileMenu
            visible={showProfile}
            onToggle={() => setShowProfile(!showProfile)}
            onClose={() => setShowProfile(false)}
          />

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },

  container: {
    height: 56,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },

  actions: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
});