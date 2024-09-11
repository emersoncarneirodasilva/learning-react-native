import { Text } from "react-native";
import { router } from "expo-router";
import Button from "@/src/components/Button";
import Container from "@/src/components/Container";

export default function DrawerHome() {
  const goToUser = () => {
    router.push("/drawer/user");
  };

  const backToHome = () => {
    router.push("/");
  };

  return (
    <Container>
      <Text>Drawer Home</Text>

      <Button bgColor="#4f6df3" onPress={goToUser}>
        Go To User
      </Button>

      <Button bgColor="#4f6df3" onPress={backToHome}>
        Back To Home
      </Button>
    </Container>
  );
}
