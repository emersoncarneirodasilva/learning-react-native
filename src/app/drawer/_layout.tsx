import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{ headerShown: false }}>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Home",
            title: "Drawer Home",
          }}
        />

        <Drawer.Screen
          name="user/index"
          options={{
            drawerLabel: "User",
            title: "Users",
          }}
        />

        <Drawer.Screen
          name="user/[id]"
          options={{
            drawerLabel: "UserId",
            title: "UserId",
          }}
        />

        <Drawer.Screen
          name="scrollView/index"
          options={{
            drawerLabel: "ScrollView",
            title: "ScrollView",
          }}
        />

        <Drawer.Screen
          name="flatList/index"
          options={{
            drawerLabel: "FlatList",
            title: "FlatList",
          }}
        />

        <Drawer.Screen
          name="styledComponentsScreen/index"
          options={{
            drawerLabel: "Styled Components",
            title: "Styled Components",
          }}
        />

        <Drawer.Screen
          name="usingApi/index"
          options={{
            drawerLabel: "Using API",
            title: "Using API",
          }}
        />

        <Drawer.Screen
          name="axiosExample/index"
          options={{
            drawerLabel: "Axios Example",
            title: "Axios Example",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
