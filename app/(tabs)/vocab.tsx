import FlashCard from "@/components/FlashCard";
import Header from "@/components/Header";
import { Adjectives } from "@/constants/Adjectives";
import { colors } from "@/constants/Colors";
import { Nouns } from "@/constants/Nouns";
import { Other } from "@/constants/Other";
import { Verbs } from "@/constants/Verbs";
import { Picker } from "@react-native-picker/picker";
import { Button } from "@react-navigation/elements";
import { useState } from "react";
import { Text, View } from "react-native";

export interface FlashCardModel {
  english: string;
  bisaya: string;
  example_english: string;
  example_bisaya: string;
}
export default function Vocab() {
  const [vocabList, setVocabList] = useState<
    "Nouns" | "Verbs" | "Adjectives" | "Misc"
  >("Nouns");
  const [flashCards, setFlashCards] = useState<FlashCardModel[]>(Nouns);
  const [flashCardIndex, setFlashCardIndex] = useState(0);
  const [size, setSize] = useState(1);

  const [inGame, setInGame] = useState<boolean>(false);
  const [completed, setCompleted] = useState<number>(0);

  const correctGuess = () => {
    setCompleted((prev) => prev + 1);

    setFlashCards((prev) => {
      const newFlashCards = [
        ...prev.slice(0, flashCardIndex),
        ...prev.slice(flashCardIndex + 1),
      ];

      if (newFlashCards.length > 0) {
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * newFlashCards.length); // ✅ use newFlashCards
        } while (newIndex === flashCardIndex && newFlashCards.length > 1);

        setFlashCardIndex(newIndex);
      } else {
        endGame();
      }

      return newFlashCards;
    });
  };

  const wrongGuess = () => {
    if (flashCards.length <= 1) return;

    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * flashCards.length);
    } while (newIndex === flashCardIndex);

    setFlashCardIndex(newIndex);
  };

  const endGame = () => {
    setSize(1);
    setFlashCards(Nouns);
    setVocabList("Nouns");
    setCompleted(0);
    setFlashCardIndex(0);
    setInGame(false);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.cream["500"],
      }}
    >
      <Header />
      {inGame ? (
        <View
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 3,
            justifyContent: "center",
            margin: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 10,
              flex: 1,
            }}
          >
            <Button
              style={{
                paddingHorizontal: 14,
                paddingVertical: 10,
                borderRadius: 12,
                width: 100,
              }}
              onPress={endGame}
              color={colors.orange["500"]}
            >
              ← Exit
            </Button>

            <View style={{ flex: 1, alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "700",
                  color: colors.orange["500"],
                }}
              >
                {vocabList}
              </Text>
            </View>

            <Text
              style={{
                fontSize: 20,
                fontWeight: "700",
                color: colors.green["500"],
              }}
            >
              {completed}/{completed + flashCards.length}
            </Text>
          </View>

          <FlashCard flashCard={flashCards[flashCardIndex]} />
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            margin: 20,
            gap: 12,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              gap: 12,
            }}
          >
            <Button
              style={{
                backgroundColor:
                  vocabList === "Nouns"
                    ? colors.orange["400"]
                    : colors.green["500"],
                width: 150, // fixed width
                height: 120, // fixed height
                borderRadius: 16,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                setVocabList("Nouns");
                setFlashCards(Nouns);
                setSize(1);
              }}
              disabled={vocabList === "Nouns"}
              color={colors.white["500"]}
            >
              Nouns
            </Button>
            <Button
              style={{
                backgroundColor:
                  vocabList === "Verbs"
                    ? colors.orange["400"]
                    : colors.green["500"],
                width: 150,
                height: 120,
                borderRadius: 16,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                setVocabList("Verbs");
                setFlashCards(Verbs);
                setSize(1);
              }}
              disabled={vocabList === "Verbs"}
              color={colors.white["500"]}
            >
              Verbs
            </Button>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              gap: 12,
            }}
          >
            <Button
              style={{
                backgroundColor:
                  vocabList === "Adjectives"
                    ? colors.orange["400"]
                    : colors.green["500"],
                width: 150,
                height: 120,
                borderRadius: 16,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                setVocabList("Adjectives");
                setFlashCards(Adjectives);
                setSize(1);
              }}
              disabled={vocabList === "Adjectives"}
              color={colors.white["500"]}
            >
              Adjectives
            </Button>
            <Button
              style={{
                backgroundColor:
                  vocabList === "Misc"
                    ? colors.orange["400"]
                    : colors.green["500"],
                width: 150,
                height: 120,
                borderRadius: 16,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                setVocabList("Misc");
                setFlashCards(Other);
                setSize(1);
              }}
              disabled={vocabList === "Misc"}
              color={colors.white["500"]}
            >
              Other
            </Button>
          </View>

          <View
            style={{
              borderColor: colors.orange["500"],
              borderRadius: 8,
              overflow: "hidden",
              backgroundColor: colors.green["500"],
              marginVertical: 10,
              zIndex: 10,
            }}
          >
            <Picker
              selectedValue={size}
              onValueChange={(value) => setSize(value)}
              style={{
                width: "100%",
                height: 150, // iOS wheel height
                color: "#fff", // text color inside picker
              }}
              itemStyle={{
                fontSize: 18,
                color: "#fff", // item color on iOS
              }}
              mode="dropdown"
            >
              {Array.from({ length: flashCards.length }, (_, i) => (
                <Picker.Item key={i + 1} label={`${i + 1}`} value={i + 1} />
              ))}
            </Picker>
          </View>
        </View>
      )}
      {inGame ? (
        <View
          style={{ marginBottom: 150, display: "flex", flexDirection: "row" }}
        >
          <Button
            style={{
              backgroundColor: colors.orange["500"],
              paddingHorizontal: 14,
              paddingVertical: 10,
              borderRadius: 12,
              width: 100,
              marginHorizontal: "auto",
              marginBottom: 50,
            }}
            onPress={wrongGuess}
            color={colors.white["500"]}
          >
            Wrong
          </Button>
          <Button
            style={{
              backgroundColor: colors.green["500"],
              paddingHorizontal: 14,
              paddingVertical: 10,
              borderRadius: 12,
              width: 100,
              marginHorizontal: "auto",
              marginBottom: 50,
            }}
            onPress={correctGuess}
            color={colors.white["500"]}
          >
            Correct
          </Button>
        </View>
      ) : (
        <Button
          style={{
            backgroundColor: colors.green["500"],
            paddingHorizontal: 14,
            paddingVertical: 10,
            borderRadius: 12,
            width: 100,
            marginHorizontal: "auto",
            marginBottom: 150,
          }}
          onPress={() => {
            setInGame(true);
            setFlashCards((prev) => {
              if (!prev || prev.length === 0) return [];

              const shuffled = [...prev].sort(() => Math.random() - 0.5);
              return shuffled.slice(0, size);
            });
          }}
          color={colors.white["500"]}
        >
          Start
        </Button>
      )}
    </View>
  );
}
