import { Href, Link } from "expo-router";
import { ReactNode } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export interface ButtonProps {
  children: ReactNode;
  href?: Href<string | object>;
  bgColor: string;
  onPress?: () => void;
}

export default function Button({
  children,
  href,
  bgColor,
  onPress,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: bgColor }]}
      onPress={onPress}
    >
      {href ? (
        <Link href={href}>
          <Text style={styles.text}>{children}</Text>
        </Link>
      ) : (
        <Text style={styles.text}>{children}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 8,
  },
  text: { color: "#ffffff" },
});
