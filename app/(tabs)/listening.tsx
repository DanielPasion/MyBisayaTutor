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
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
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
  const [showPicker, setShowPicker] = useState(false);
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
    setLoading(true);
    setSentence(undefined);
    setShowBisaya(false);
    setShowEnglish(false);
    setUrl(undefined);
    setGuess(undefined);
    setIsCorrect(undefined);
    setFeedback(undefined);

    const response = await fetch(`${uri}/openaisentence`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: level }),
    });

    const data = (await response.json()) as { data: string };
    const parsed = JSON.parse(data.data) as { bisaya: string; english: string };

    setSentence(parsed);
    setLoading(false);
    const url = await generateAudioUrl(parsed.bisaya);
    if (!url) {
      setError("Error generating audio");
      return;
    }
    setUrl(url);
  };

  const guessTranslation = async () => {
    setGuessing(true);
    if (!guess) {
      return;
    }
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
    setGuessing(false);
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.cream["500"] }}>
      <Header />

      {!error ? (
        <ScrollView
          contentContainerStyle={{
            padding: 20,
            marginVertical: 10,
            flexGrow: 3,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <TouchableOpacity
                onPress={() => setShowPicker(!showPicker)}
                style={{
                  borderWidth: 2,
                  borderColor: colors.green["500"],
                  borderRadius: 10,
                  padding: 10,
                  backgroundColor: colors.green["100"],
                  width: 100,
                }}
              >
                <Text style={{ color: colors.green["700"], fontSize: 16 }}>
                  {level || "Select Level"}
                </Text>
              </TouchableOpacity>

              {showPicker && (
                <Picker
                  selectedValue={level}
                  onValueChange={(value) => {
                    setLevel(value);
                    setShowPicker(false);
                  }}
                >
                  <Picker.Item label="A1" value="A1" />
                  <Picker.Item label="A2" value="A2" />
                  <Picker.Item label="B1" value="B1" />
                  <Picker.Item label="B2" value="B2" />
                  <Picker.Item label="C1" value="C1" />
                  <Picker.Item label="C2" value="C2" />
                </Picker>
              )}
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

          {url && sentence ? (
            <View>
              <AudioPlayer uri={url} />

              {feedBack ? (
                <View
                  style={{
                    backgroundColor: colors.white["500"],
                    padding: 20,
                    borderWidth: 1,
                    borderColor: isCorrect
                      ? colors.green["500"]
                      : colors.orange["500"],
                    borderRadius: 15,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 4,
                    elevation: 3,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: 10,
                    }}
                  >
                    <Ionicons
                      name={isCorrect ? "checkmark-circle" : "close-circle"}
                      size={28}
                      color={
                        isCorrect ? colors.green["500"] : colors.orange["500"]
                      }
                    />
                    <Text
                      style={{
                        color: isCorrect
                          ? colors.green["500"]
                          : colors.orange["500"],
                        fontSize: 18,
                        fontWeight: "600",
                        marginLeft: 10,
                      }}
                    >
                      {isCorrect ? "Correct" : "Incorrect"}
                    </Text>
                  </View>
                  <Text style={{ fontSize: 16, color: "#333" }}>
                    {feedBack}
                  </Text>
                </View>
              ) : (
                <View
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  {showBisaya && (
                    <Text style={{ fontSize: 18, marginBottom: 10 }}>
                      {sentence.bisaya}
                    </Text>
                  )}

                  <Button
                    style={{
                      backgroundColor: colors.green["500"],
                      paddingHorizontal: 14,
                      paddingVertical: 10,
                      borderRadius: 12,
                      marginBottom: 10,
                      marginHorizontal: 20,
                    }}
                    color={colors.white["500"]}
                    onPress={() => setShowBisaya((prev) => !prev)}
                  >
                    {showBisaya ? "Hide Bisaya" : "Show Bisaya"}
                  </Button>

                  {showBisaya && (
                    <View
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: 10,
                      }}
                    >
                      {showEnglish && (
                        <Text style={{ fontSize: 18, marginBottom: 10 }}>
                          {sentence.english}
                        </Text>
                      )}

                      <Button
                        style={{
                          backgroundColor: colors.green["500"],
                          paddingHorizontal: 14,
                          paddingVertical: 10,
                          borderRadius: 12,
                          marginBottom: 10,
                          marginHorizontal: 20,
                        }}
                        color={colors.white["500"]}
                        onPress={() => setShowEnglish((prev) => !prev)}
                      >
                        {showEnglish ? "Hide English" : "Show English"}
                      </Button>
                    </View>
                  )}
                </View>
              )}
            </View>
          ) : (
            loading && <Loader />
          )}
        </ScrollView>
      ) : (
        <View>{error}</View>
      )}

      {url && sentence && (
        <TextInput
          style={{
            backgroundColor: colors.white["500"],
            borderWidth: 1,
            borderColor: colors.green["500"],
            borderRadius: 12,
            paddingHorizontal: 16,
            paddingVertical: 10,
            fontSize: 16,
            height: 41,
            marginBottom: 12,
            marginHorizontal: 30,
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
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 10,
          flex: 1,
        }}
      >
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
                marginRight: 10,
              }}
              color={colors.white["500"]}
              onPress={guessTranslation}
            >
              Guess
            </Button>
          )
        )}
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
      </View>
    </View>
  );
}
