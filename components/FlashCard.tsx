import { FlashCardModel } from "@/app/(tabs)/vocab";
import useThemeColors from "@/hooks/useThemeColor";
import { useEffect, useRef, useState } from "react";
import { Animated, Text, TouchableWithoutFeedback, View } from "react-native";

export default function FlashCard({
  flashCard,
}: {
  flashCard: FlashCardModel;
}) {
  const { colors } = useThemeColors();

  const [flipped, setFlipped] = useState(false);
  const flipAnim = useRef(new Animated.Value(0)).current;

  // Reset flip when flashCard changes
  useEffect(() => {
    // Reset animation value to 0 (front side)
    flipAnim.setValue(0);
    setFlipped(false);
  }, [flashCard, flipAnim]);

  const frontInterpolate = flipAnim.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });

  const backInterpolate = flipAnim.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
  });

  const flipCard = () => {
    if (flipped) {
      Animated.spring(flipAnim, {
        toValue: 0,
        useNativeDriver: true,
        friction: 8,
        tension: 10,
      }).start(() => setFlipped(false));
    } else {
      Animated.spring(flipAnim, {
        toValue: 180,
        useNativeDriver: true,
        friction: 8,
        tension: 10,
      }).start(() => setFlipped(true));
    }
  };

  return (
    <TouchableWithoutFeedback onPress={flipCard}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        {/* Front Side */}
        <Animated.View
          style={{
            backfaceVisibility: "hidden",
            transform: [{ rotateY: frontInterpolate }],
            width: 300,
            height: 200,
            backgroundColor: colors.white["500"],
            justifyContent: "space-between",
            alignItems: "center",
            padding: 20,
            borderRadius: 12,
            shadowColor: "#000",
            shadowOpacity: 0.2,
            shadowRadius: 5,
            shadowOffset: { width: 0, height: 3 },
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: "700" }}>
            {flashCard.bisaya}
          </Text>
          <Text style={{ fontSize: 18 }}>{flashCard.example_bisaya}</Text>
        </Animated.View>

        {/* Back Side */}
        <Animated.View
          style={{
            position: "absolute",
            backfaceVisibility: "hidden",
            transform: [{ rotateY: backInterpolate }],
            width: 300,
            height: 200,
            backgroundColor: colors.white["500"],
            justifyContent: "space-between",
            alignItems: "center",
            padding: 20,
            borderRadius: 12,
            shadowColor: "#000",
            shadowOpacity: 0.2,
            shadowRadius: 5,
            shadowOffset: { width: 0, height: 3 },
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: "700" }}>
            {flashCard.english}
          </Text>
          <Text style={{ fontSize: 18 }}>{flashCard.example_english}</Text>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
}
