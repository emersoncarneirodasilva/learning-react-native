import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen
        name="about/index"
        options={{
          title: "About",
          headerStyle: {
            backgroundColor: "#4ed47b",
          },
        }}
      />
      <Stack.Screen name="contacts/index" />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="drawer" options={{ headerShown: false }} />
    </Stack>
  );
}
