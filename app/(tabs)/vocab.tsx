import FlashCard from "@/components/FlashCard";
import Header from "@/components/Header";
import { Adjectives } from "@/constants/Adjectives";
import { colors } from "@/constants/Colors";
import { Nouns } from "@/constants/Nouns";
import { Other } from "@/constants/Other";
import { Verbs } from "@/constants/Verbs";
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
        const newIndex = Math.floor(Math.random() * (newFlashCards.length - 1));
        setFlashCardIndex(newIndex);
      } else {
        setInGame(false);
      }

      return newFlashCards;
    });
  };

  const wrongGuess = () => {
    const newIndex = Math.floor(Math.random() * (flashCards.length - 1));
    setFlashCardIndex(newIndex);
  };

  const endGame = () => {
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
            display: "flex",
            flexDirection: "row",
            gap: 3,
            justifyContent: "center",
            margin: 20,
          }}
        >
          <View
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 3,
              justifyContent: "center",
            }}
          >
            <Button
              style={{
                backgroundColor:
                  vocabList === "Nouns"
                    ? colors.orange["400"]
                    : colors.green["500"],
                paddingHorizontal: 14,
                paddingVertical: 60,
                borderRadius: 12,
              }}
              onPress={() => {
                setVocabList("Nouns");
                setFlashCards(Nouns);
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
                paddingHorizontal: 14,
                paddingVertical: 60,
                borderRadius: 12,
              }}
              onPress={() => {
                setVocabList("Verbs");
                setFlashCards(Verbs);
              }}
              disabled={vocabList === "Verbs"}
              color={colors.white["500"]}
            >
              Verbs
            </Button>
          </View>
          <View
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 3,
              justifyContent: "center",
            }}
          >
            <Button
              style={{
                backgroundColor:
                  vocabList === "Adjectives"
                    ? colors.orange["400"]
                    : colors.green["500"],
                paddingHorizontal: 14,
                paddingVertical: 60,
                borderRadius: 12,
              }}
              onPress={() => {
                setVocabList("Adjectives");
                setFlashCards(Adjectives);
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
                paddingHorizontal: 14,
                paddingVertical: 60,
                borderRadius: 12,
              }}
              onPress={() => {
                setVocabList("Misc");
                setFlashCards(Other);
              }}
              disabled={vocabList === "Misc"}
              color={colors.white["500"]}
            >
              Other
            </Button>
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
          }}
          color={colors.white["500"]}
        >
          Start
        </Button>
      )}
    </View>
  );
}
