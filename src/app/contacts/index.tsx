import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Contacts() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: "Contacts",
      headerStyle: { backgroundColor: "#941ef4" },
    });
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Contacts Page</Text>
    </View>
  );
}
