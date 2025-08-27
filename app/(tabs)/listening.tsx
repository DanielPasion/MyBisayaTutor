import AudioPlayer from "@/components/AudioPlayer";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import { colors } from "@/constants/Colors";
import { generateAudioUrl } from "@/utils/generate-audio-url";
import { uri } from "@/utils/uri";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { Button } from "@react-navigation/elements";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Translator() {
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [guessing, setGuessing] = useState(false);
  const [level, setLevel] = useState<"A1" | "A2" | "B1" | "B2" | "C1" | "C2">(
    "A1"
  );
  const [sentence, setSentence] = useState<{
    bisaya: string;
    english: string;
  }>();
  const [showBisaya, setShowBisaya] = useState(false);
  const [showEnglish, setShowEnglish] = useState(false);
  const [url, setUrl] = useState<string | undefined>();
  const [guess, setGuess] = useState<string | undefined>();
  const [isCorrect, setIsCorrect] = useState<boolean | undefined>();
  const [feedBack, setFeedback] = useState<string | undefined>();

  const [error, setError] = useState<string | undefined>();

  const generateSentence = async () => {
    setError(undefined);
    setLoading(true);
    setSentence(undefined);
    setShowBisaya(false);
    setShowEnglish(false);
    setUrl(undefined);
    setGuess(undefined);
    setIsCorrect(undefined);
    setFeedback(undefined);

    try {
      const response = await fetch(`${uri}/openaisentence`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: level }),
      });

      const data = (await response.json()) as { data: string };
      const parsed = JSON.parse(data.data) as {
        bisaya: string;
        english: string;
      };

      setSentence(parsed);
      const url = await generateAudioUrl(parsed.bisaya);
      if (!url) {
        setError("Error generating audio");
        return;
      }
      setUrl(url);
    } catch {
      setError("An error occured");
    } finally {
      setLoading(false);
    }
  };

  const guessTranslation = async () => {
    if (!guess) {
      return;
    }
    setGuessing(true);
    try {
      const response = await fetch(`${uri}/openaiguess`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ original: sentence?.bisaya, guess: guess }),
      });

      const data = (await response.json()) as { data: string };
      const parsed = JSON.parse(data.data) as {
        correct: boolean;
        feedback: string;
      };

      if (parsed.correct) {
        setScore((prev) => prev + 1);
      }
      setTotal((prev) => prev + 1);
      setIsCorrect(parsed.correct);
      setFeedback(parsed.feedback);
    } catch {
      setError("An error occurred validating your answer");
    } finally {
      setGuessing(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1, backgroundColor: colors.cream["500"] }}
    >
      <Header />

      {!error ? (
        <View style={{ flex: 1, justifyContent: "space-between" }}>
          <ScrollView
            contentContainerStyle={{
              padding: 20,
              paddingBottom: 200,
              flexGrow: 1,
            }}
            bounces={false}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <View
                style={{
                  borderColor: colors.orange["500"],
                  borderRadius: 8,
                  overflow: "hidden",
                  backgroundColor: colors.green["500"],
                  marginVertical: 10,
                }}
              >
                <Picker
                  selectedValue={level}
                  onValueChange={(value) => setLevel(value)}
                  style={{
                    width: "100%",
                    height: 150, // controls iOS wheel height
                    color: "#fff", // text color
                  }}
                  itemStyle={{
                    fontSize: 18,
                    color: "#fff", // iOS picker item color
                  }}
                  mode="dropdown"
                >
                  <Picker.Item label="A1" value="A1" />
                  <Picker.Item label="A2" value="A2" />
                  <Picker.Item label="B1" value="B1" />
                  <Picker.Item label="B2" value="B2" />
                  <Picker.Item label="C1" value="C1" />
                  <Picker.Item label="C2" value="C2" />
                </Picker>
              </View>

              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  color: colors.green["700"],
                }}
              >
                {`Score ${score}/${total}`}
              </Text>
            </View>

            {/* Audio player and sentence */}
            {url && sentence ? (
              <View>
                <AudioPlayer uri={url} />

                {feedBack ? (
                  <View
                    style={{
                      backgroundColor: colors.white["500"],
                      padding: 15,
                      borderWidth: 1,
                      borderColor: isCorrect
                        ? colors.green["500"]
                        : colors.orange["500"],
                      borderRadius: 12,
                      shadowColor: "#000",
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.1,
                      shadowRadius: 4,
                      elevation: 3,
                      marginTop: 10,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 8,
                      }}
                    >
                      <Ionicons
                        name={isCorrect ? "checkmark-circle" : "close-circle"}
                        size={24}
                        color={
                          isCorrect ? colors.green["500"] : colors.orange["500"]
                        }
                      />
                      <Text
                        style={{
                          color: isCorrect
                            ? colors.green["500"]
                            : colors.orange["500"],
                          fontSize: 16,
                          fontWeight: "600",
                          marginLeft: 8,
                        }}
                      >
                        {isCorrect ? "Correct" : "Incorrect"}
                      </Text>
                    </View>
                    <Text style={{ fontSize: 14, color: "#333" }}>
                      {feedBack}
                    </Text>
                  </View>
                ) : (
                  <View style={{ marginVertical: 30 }}>
                    {showBisaya && (
                      <Text style={{ fontSize: 16, marginBottom: 8 }}>
                        {sentence.bisaya}
                      </Text>
                    )}

                    <Button
                      style={{
                        backgroundColor: colors.green["500"],
                        padding: 10,
                        borderRadius: 10,
                        marginBottom: 8,
                      }}
                      color={colors.white["500"]}
                      onPress={() => {
                        setShowBisaya((prev) => !prev);
                        if (showBisaya) {
                          setShowEnglish(false);
                        }
                      }}
                    >
                      {showBisaya ? "Hide Bisaya" : "Show Bisaya"}
                    </Button>

                    {showBisaya && (
                      <>
                        {showEnglish && (
                          <Text style={{ fontSize: 16, marginBottom: 8 }}>
                            {sentence.english}
                          </Text>
                        )}

                        <Button
                          style={{
                            backgroundColor: colors.green["500"],
                            padding: 10,
                            borderRadius: 10,
                          }}
                          color={colors.white["500"]}
                          onPress={() => setShowEnglish((prev) => !prev)}
                        >
                          {showEnglish ? "Hide English" : "Show English"}
                        </Button>
                      </>
                    )}
                  </View>
                )}
              </View>
            ) : (
              loading && <Loader />
            )}
          </ScrollView>

          <View
            style={{
              padding: 10,
              borderTopWidth: 1,
              borderTopColor: "#ccc",
              backgroundColor: colors.cream["500"],
              marginBottom: 50,
            }}
          >
            {url && sentence && (
              <TextInput
                style={{
                  backgroundColor: colors.white["500"],
                  borderWidth: 1,
                  borderColor: colors.green["500"],
                  borderRadius: 10,
                  paddingHorizontal: 12,
                  paddingVertical: 12,
                  fontSize: 16,
                  width: "100%",
                  maxWidth: 600,
                  marginBottom: 10,
                }}
                onSubmitEditing={guessTranslation}
                onChangeText={setGuess}
                value={guess}
                placeholder="Guess translation"
                placeholderTextColor={colors.green["500"]}
                multiline
                returnKeyType="send"
              />
            )}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Button
                style={{
                  backgroundColor: colors.orange["500"],
                  paddingHorizontal: 16,
                  paddingVertical: 10,
                  borderRadius: 12,
                }}
                color={colors.white["500"]}
                onPress={generateSentence}
              >
                Generate New Audio
              </Button>
              {guessing ? (
                <Loader />
              ) : (
                sentence &&
                url && (
                  <Button
                    style={{
                      backgroundColor: colors.green["500"],
                      paddingHorizontal: 16,
                      paddingVertical: 10,
                      borderRadius: 12,
                    }}
                    color={colors.white["500"]}
                    onPress={guessTranslation}
                  >
                    Guess
                  </Button>
                )
              )}
            </View>
          </View>
        </View>
      ) : (
        <View style={{ padding: 20 }}>{error}</View>
      )}
    </KeyboardAvoidingView>
  );
}
