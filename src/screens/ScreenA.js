import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

export default function ScreenA({ navigation }) {

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: "#007aff",
          paddingHorizontal: 30,
          paddingVertical: 5,
          borderRadius: 5
        }}
        onPress={() => navigation.navigate("ScreenB", { message: 'Come from Screen A' })}
      >
        <Text
          style={{
            fontSize: 40,
            fontWeight: '400',
            color: "#fff",
          }}
        >
          Go to ScreenB
        </Text>
      </TouchableOpacity>
    </View>
  );

};