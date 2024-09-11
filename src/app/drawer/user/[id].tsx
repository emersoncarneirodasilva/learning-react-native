import { Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Container from "@/src/components/Container";

export default function UserHome() {
  const { id } = useLocalSearchParams();

  return (
    <Container>
      <Text>User Id: {id}</Text>
    </Container>
  );
}
