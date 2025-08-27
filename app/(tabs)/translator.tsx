import Header from "@/components/Header";
import useThemeColors from "@/hooks/useThemeColor";
import { sayOutLoud } from "@/utils/say-out-loud";
import { uri } from "@/utils/uri";
import { Button } from "@react-navigation/elements";
import React from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Translator() {
  const { colors } = useThemeColors();

  const [incomingText, setIncomingText] = React.useState("");
  const [translatedToBisaya, setTranslatedToBisaya] = React.useState(false);
  const [translatedText, setTranslatedText] = React.useState("");
  const [isSentence, setIsSentence] = React.useState(false);
  const [sentenceExampleOriginal, setSentenceExampleOriginal] =
    React.useState("");
  const [sentenceExampleTranslated, setSentenceExampleTranslated] =
    React.useState("");
  const [isError, setIsError] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const translate = async () => {
    if (!incomingText.trim() || isLoading) return;
    setIsError(false);
    setMessage("");
    setIsLoading(true);
    try {
      type TranslationResult = {
        translateToBisaya: boolean;
        translatedText: string;
        isSentence: boolean;
        sentenceExampleOriginal: string | null;
        sentenceExampleTranslated: string | null;
        isError?: boolean;
        message?: string;
      };

      const response = await fetch(`${uri}/openaitranslate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: incomingText }),
      });

      const data = (await response.json()) as { data: string };

      const parsed = JSON.parse(data.data) as TranslationResult;

      if (parsed.isError) {
        setIsError(true);
        setMessage(parsed.message ?? "Failed to translate");
        setTranslatedText("");
        setSentenceExampleOriginal("");
        setSentenceExampleTranslated("");
      } else {
        setTranslatedToBisaya(parsed.translateToBisaya);
        setTranslatedText(parsed.translatedText);
        setIsSentence(parsed.isSentence);
        setSentenceExampleOriginal(parsed.sentenceExampleOriginal ?? "");
        setSentenceExampleTranslated(parsed.sentenceExampleTranslated ?? "");
      }
    } catch {
      setIsError(true);
      setMessage("Translation failed. Please try again.");
      setTranslatedText("");
      setSentenceExampleOriginal("");
      setSentenceExampleTranslated("");
    } finally {
      setIsLoading(false);
    }
  };

  const clearAll = () => {
    setIncomingText("");
    setTranslatedText("");
    setSentenceExampleOriginal("");
    setSentenceExampleTranslated("");
    setIsSentence(false);
    setIsError(false);
    setMessage("");
  };

  const direction = translatedToBisaya
    ? "English → Bisaya"
    : "Bisaya → English";

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1, backgroundColor: colors.cream["500"] }}
    >
      <Header />
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <View
          style={{
            backgroundColor: colors.white["500"],
            borderRadius: 15,
            borderWidth: 1,
            borderColor: colors.green["900"],
            paddingHorizontal: 16,
            paddingTop: 12,
            paddingBottom: 12,
            gap: 10,
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
                fontWeight: "700",
                color: colors.orange["500"],
              }}
            >
              Enter Phrase
            </Text>
            <Text style={{ fontSize: 12, color: colors.green["700"] }}>
              {direction}
            </Text>
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
              minHeight: 60,
              color: colors.cream["900"],
            }}
            onSubmitEditing={translate}
            onChangeText={setIncomingText}
            value={incomingText}
            placeholder="Type a word or sentence..."
            placeholderTextColor={colors.green["500"]}
            multiline
            returnKeyType="send"
          />

          <View style={{ flexDirection: "row", columnGap: 10 }}>
            <Button
              style={{
                backgroundColor: colors.orange["500"],
                paddingHorizontal: 14,
                paddingVertical: 10,
                borderRadius: 12,
                opacity: isLoading ? 0.7 : 1,
              }}
              onPress={translate}
              disabled={isLoading || !incomingText.trim()}
              color={colors.white["500"]}
            >
              {isLoading ? "Translating..." : "Translate"}
            </Button>
            <Button
              style={{
                backgroundColor: colors.green["500"],
                paddingHorizontal: 14,
                paddingVertical: 10,
                borderRadius: 12,
              }}
              onPress={clearAll}
              color={colors.white["500"]}
            >
              Clear
            </Button>
          </View>

          {isLoading ? (
            <View style={{ paddingVertical: 8 }}>
              <ActivityIndicator />
            </View>
          ) : null}

          {isError ? (
            <View
              style={{
                backgroundColor: colors.orange["100"],
                borderColor: colors.orange["500"],
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
              }}
            >
              <Text style={{ color: colors.orange["700"], fontSize: 14 }}>
                {message}
              </Text>
            </View>
          ) : null}

          {translatedText ? (
            <View
              style={{
                marginTop: 6,
                backgroundColor: colors.cream["100"],
                borderRadius: 12,
                borderWidth: 1,
                borderColor: colors.green["300"],
                padding: 12,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: colors.green["700"],
                  marginBottom: 6,
                }}
              >
                Result
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: colors.orange["700"],
                  fontWeight: "600",
                  marginBottom: 10,
                }}
              >
                {translatedText}
              </Text>
              <Button
                style={{
                  backgroundColor: colors.green["500"],
                  paddingHorizontal: 14,
                  paddingVertical: 10,
                  borderRadius: 12,
                }}
                onPress={() =>
                  sayOutLoud(translatedToBisaya ? translatedText : incomingText)
                }
                color={colors.white["500"]}
              >
                Say Out Loud
              </Button>
            </View>
          ) : null}

          {!isSentence &&
          translatedText &&
          sentenceExampleOriginal &&
          sentenceExampleTranslated ? (
            <View
              style={{
                marginTop: 10,
                backgroundColor: colors.white["500"],
                borderRadius: 12,
                borderWidth: 1,
                borderColor: colors.green["300"],
                padding: 12,
                rowGap: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "700",
                  color: colors.orange["500"],
                }}
              >
                Usage Example
              </Text>
              <View
                style={{
                  backgroundColor: colors.cream["300"],
                  borderRadius: 10,
                  padding: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: colors.green["700"],
                    marginBottom: 4,
                  }}
                >
                  Original
                </Text>
                <Text style={{ fontSize: 16, color: colors.green["900"] }}>
                  {sentenceExampleOriginal}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: colors.cream["300"],
                  borderRadius: 10,
                  padding: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: colors.green["700"],
                    marginBottom: 4,
                  }}
                >
                  Translation
                </Text>
                <Text style={{ fontSize: 16, color: colors.green["900"] }}>
                  {sentenceExampleTranslated}
                </Text>
              </View>
            </View>
          ) : null}
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
