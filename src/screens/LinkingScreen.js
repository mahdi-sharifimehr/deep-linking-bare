import React from "react";
import { View, TouchableOpacity, Text, Linking } from "react-native";

export default function LinkingScreen({ }) {

  const Url_A = "myapp://app/a";
  const Url_B = "myapp://app/b/come-from-url";
  const Url_C = "myapp://app/c";

  return (
    <View style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: "#007aff",
          margin: 5,
          paddingHorizontal: 30,
          paddingVertical: 5,
          borderRadius: 5
        }}
        onPress={() => Linking.openURL(Url_A)}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: '400',
            color: "#fff",
          }}
        >
          Deeplink to ScreenA
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#007aff",
          margin: 5,
          paddingHorizontal: 30,
          paddingVertical: 5,
          borderRadius: 5
        }}
        onPress={() => Linking.openURL(Url_B)}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: '400',
            color: "#fff",
          }}
        >
          Deeplink to ScreenB
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#007aff",
          margin: 5,
          paddingHorizontal: 30,
          paddingVertical: 5,
          borderRadius: 5
        }}
        onPress={() => Linking.openURL(Url_C)}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: '400',
            color: "#fff",
          }}
        >
          Deeplink to ScreenC
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#007aff",
          margin: 5,
          paddingHorizontal: 30,
          paddingVertical: 5,
          borderRadius: 5
        }}
        onPress={() => Linking.openURL("https://reactnative.dev/")}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: '400',
            color: "#fff",
          }}
        >
          Open public Url
        </Text>
      </TouchableOpacity>
    </View>
  );

}