import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenA from "./screens/ScreenA";
import ScreenB from "./screens/ScreenB";
import ScreenC from "./screens/ScreenC";
import LinkingScreen from "./screens/LinkingScreen";

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ScreenA" component={ScreenA} />
      <Stack.Screen name="ScreenB" component={ScreenB} />
      <Stack.Screen name="ScreenC" component={ScreenC} />
      <Stack.Screen name="LinkingScreen" component={LinkingScreen} />
    </Stack.Navigator>
  );
}

const config = {
  screens: {
    ScreenA: "a",
    ScreenB: {
      path: "b/:message",
      parse: {
        message: (message) => `${message}`
      }
    },
    ScreenC: "c",
  }
}

export default function App() {
  return (
    <NavigationContainer
      linking={{
        prefixes: ["myapp://app"],
        config
      }}
    >
      <MyStack />
    </NavigationContainer>
  );
}