import { Text, View, StyleSheet } from "react-native";
import Button from "../components/Button";
import Container from "../components/Container";

export default function Index() {
  const bgColor = "#4f6df3";

  return (
    <Container>
      <Text>Learning React Native!</Text>

      <View style={styles.btnContainer}>
        <Button href="/about" bgColor={bgColor}>
          Go to About Page!
        </Button>

        <Button href="/contacts" bgColor={bgColor}>
          Go to Contacts Page!
        </Button>
      </View>

      <Button href="/(tabs)/" bgColor={bgColor}>
        Go to TabHome Page!
      </Button>

      <Button href="/drawer/" bgColor={bgColor}>
        Go to DrawerHome Page!
      </Button>
    </Container>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    display: "flex",
    flexDirection: "row",
    columnGap: 10,
  },
});
