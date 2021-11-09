import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

export default function ScreenB({ route, navigation }) {

  const {
    params: { message },
  } = route;

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {message &&
        <Text
          style={{
            margin: 20,
            color: "#ff0000",
            fontSize: 20,
          }}
        >
          Message: {message}
        </Text>
      }
      <TouchableOpacity
        style={{
          backgroundColor: "#007aff",
          paddingHorizontal: 30,
          paddingVertical: 5,
          borderRadius: 5
        }}
        onPress={() => navigation.navigate("ScreenC")}
      >
        <Text
          style={{
            fontSize: 40,
            fontWeight: '400',
            color: "#fff",
          }}
        >
          Go to ScreenC
        </Text>
      </TouchableOpacity>
    </View>
  );

};