import Header from "@/components/Header";
import { colors } from "@/constants/Colors";
import { Button } from "@react-navigation/elements";
import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";

export default function Translator() {
  const [translateToBisaya, setTranslateToBisaya] = React.useState(true);
  const [incomingText, setIncomingText] = React.useState("");
  const [translatedText, setTranslatedText] = React.useState("");

  const translate = async () => {
    if (!incomingText.trim()) return;

    const sl = translateToBisaya ? "en" : "ceb";
    const tl = translateToBisaya ? "ceb" : "en";

    try {
      const res = await fetch(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sl}&tl=${tl}&dt=t&q=${encodeURIComponent(
          incomingText.trim()
        )}`
      );
      const data = (await res.json()) as any;
      const text =
        Array.isArray(data) && Array.isArray(data[0])
          ? data[0].map((chunk: any[]) => chunk?.[0]).join("")
          : "";
      setTranslatedText(text ?? "");
    } catch {
      setTranslatedText("Translation failed. Please try again.");
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.cream["500"] }}>
      <Header />

      <View
        style={{
          backgroundColor: colors.white["500"],
          borderRadius: "15px",
          borderWidth: 1,
          borderColor: colors.green["900"],
          paddingHorizontal: 16,
          paddingTop: 12,
          paddingBottom: 10,
          gap: 10,
          margin: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              color: colors.orange["500"],
            }}
          >
            Enter Sentence
          </Text>

          <Pressable
            onPress={() => setTranslateToBisaya((v) => !v)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              paddingHorizontal: 10,
              paddingVertical: 6,
              borderRadius: 10,
              backgroundColor: colors.cream["400"],
              borderWidth: 1,
              borderColor: colors.green["500"],
            }}
          >
            <Text
              style={{
                fontSize: 12,
                color: colors.green["500"],
                fontWeight: "600",
              }}
            >
              {translateToBisaya ? "EN → CEB" : "CEB → EN"}
            </Text>
          </Pressable>
        </View>

        <TextInput
          style={{
            backgroundColor: colors.cream["300"],
            borderWidth: 1,
            borderColor: colors.green["500"],
            borderRadius: 12,
            paddingHorizontal: 12,
            paddingVertical: 10,
            fontSize: 16,
          }}
          onSubmitEditing={translate}
          onChangeText={setIncomingText}
          value={incomingText}
          placeholder="Type a word or sentence..."
          placeholderTextColor={colors.green["500"]}
          multiline
        />

        <View style={{ flexDirection: "row", gap: 10 }}>
          <Button
            style={{
              backgroundColor: colors.orange["500"],
              paddingHorizontal: 14,
              paddingVertical: 10,
              borderRadius: 12,
            }}
            onPress={translate}
            color={colors.white["500"]}
          >
            Translate
          </Button>
        </View>

        {translatedText ? (
          <Text
            numberOfLines={2}
            style={{
              marginTop: 2,
              fontSize: 14,
              color: colors.orange["500"],
            }}
          >
            Preview: {translatedText}
          </Text>
        ) : null}
      </View>
    </View>
  );
}
