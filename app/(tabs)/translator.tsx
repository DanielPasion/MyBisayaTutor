import Header from "@/components/Header";
import { colors } from "@/constants/Colors";
import React from "react";
import { TextInput, View } from "react-native";

export default function Translator() {
  const [translateToBisaya, setTranslateToBisaya] = React.useState(true);
  const [incomingText, setIncomingText] = React.useState("");
  const [translatedText, setTranslatedText] = React.useState("");
  // const res = await fetch(
  //   `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${language}&dt=t&q=${encodeURIComponent(
  //     text
  //   )}`
  // );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.cream["500"],
      }}
    >
      <Header />
      <View
        style={{
          flex: 1,
          backgroundColor: colors.cream["500"],
        }}
      ></View>
      <TextInput
        style={{}}
        onChangeText={setIncomingText}
        value={incomingText}
      />
    </View>
  );
}
