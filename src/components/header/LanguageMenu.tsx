import { useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Popover from "react-native-popover-view";
import { Ionicons } from "@expo/vector-icons";
import { DEMO_LANGUAGES } from "@/demo/languages";
import { useLanguage } from "@/i18n/LanguageContext";

export function LanguageMenu({ visible, onToggle, onClose }) {

  const ref = useRef();
  const { language, setLanguage } = useLanguage();

  return (
    <>
      <TouchableOpacity ref={ref} onPress={onToggle}>
        <Ionicons name="language-outline" size={22} color="#111827" />
      </TouchableOpacity>

      <Popover
        isVisible={visible}
        from={ref}
        onRequestClose={onClose}
        placement="bottom"
      >
        <View style={styles.menu}>
          {DEMO_LANGUAGES.map((lang) => {
            const active = language === lang.code;

            return (
              <TouchableOpacity
                key={lang.code}
                style={styles.item}
                onPress={() => {
                  setLanguage(lang.code);
                  onClose();
                }}
              >
                <Text style={[styles.label, active && styles.active]}>
                  {lang.label}
                </Text>

                {active && (
                  <Ionicons name="checkmark" size={18} color="#2563EB" />
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </Popover>
    </>
  );
}

const styles = StyleSheet.create({

  menu: {
    width: 180,
    paddingVertical: 6,
    backgroundColor: "#fff",
    borderRadius: 12,
  },

  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    paddingVertical: 10,
  },

  label: {
    fontSize: 15,
    color: "#111827",
  },

  active: {
    fontWeight: "600",
    color: "#2563EB",
  },
});