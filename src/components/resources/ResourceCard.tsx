function ResourceCard({ title, icon, onPress }) {
  return (
    <Pressable style={({ pressed }) => [
      styles.card,
      pressed && styles.cardPressed
    ]} onPress={onPress}>
      
      <Ionicons name={icon} size={26} style={styles.icon} />
      <Text style={styles.cardTitle}>{title}</Text>
      
    </Pressable>
  );
}
