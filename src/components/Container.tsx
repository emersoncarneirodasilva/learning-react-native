import { View, StyleSheet } from "react-native";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export default function Index({ children }: ContainerProps) {
  return <View style={[styles.container]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    rowGap: 15,
    marginHorizontal: 20,
  },
});
