import Button from "@/src/components/Button";
import Container from "@/src/components/Container";
import { router } from "expo-router";
import { Text } from "react-native";

export default function User() {
  const randonId = Math.ceil(Math.random() * 10);

  const goToUser = () => {
    router.push(`/drawer/user/${randonId}`);
  };

  return (
    <Container>
      <Text>Users Page</Text>

      <Button bgColor="#4f6df3" onPress={goToUser}>
        {`Go to User ${randonId}`}
      </Button>
    </Container>
  );
}
