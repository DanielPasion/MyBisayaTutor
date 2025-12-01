import { VocabWord } from "@/app/(tabs)/vocab";
import useThemeColors from "@/app/hooks/useThemeColor";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Text,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Speech from "expo-speech";

export default function FlashCard({
  index,
  flashCard,
  autoplayAudio = false,
  showSentence = true,
}: {
  index: number;
  flashCard: VocabWord;
  autoplayAudio?: boolean;
  showSentence?: boolean;
}) {
  const { colors } = useThemeColors();

  const [flipped, setFlipped] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const flipAnim = useRef(new Animated.Value(0)).current;
  const hasAutoPlayed = useRef(false);

  useEffect(() => {
    flipAnim.setValue(0);
    setFlipped(false);
    hasAutoPlayed.current = false;

    const speakText = async (text: string) => {
      // Don't queue audio if already playing
      if (isPlayingAudio) {
        return;
      }

      try {
        setIsPlayingAudio(true);

        // Use Indonesian voice for Filipino/Bisaya text
        await Speech.speak(text, {
          language: "id-ID",
          voice: "Google Bahasa Indonesia",
          pitch: 1.0,
          rate: 0.85,
          onDone: () => {
            setIsPlayingAudio(false);
          },
          onStopped: () => {
            setIsPlayingAudio(false);
          },
          onError: (error) => {
            console.error("Speech error:", error);
            setIsPlayingAudio(false);
          },
        });
      } catch (error) {
        console.error("TTS error:", error);
        setIsPlayingAudio(false);
      }
    };

    // Only autoplay once when card first loads
    if (autoplayAudio && !hasAutoPlayed.current) {
      hasAutoPlayed.current = true;
      const text =
        showSentence && flashCard.example_filipino
          ? `${flashCard.filipino}, ${flashCard.example_filipino}`
          : flashCard.filipino;
      speakText(text);
    }
  }, [autoplayAudio, flashCard, flipAnim, index, isPlayingAudio, showSentence]); // Only depend on flashCard and index changes

  const speakText = async (text: string) => {
    // Don't queue audio if already playing
    if (isPlayingAudio) {
      return;
    }

    try {
      setIsPlayingAudio(true);

      // Use Indonesian voice for Filipino/Bisaya text
      await Speech.speak(text, {
        language: "id-ID",
        voice: "Google Bahasa Indonesia",
        pitch: 1.0,
        rate: 0.85,
        onDone: () => {
          setIsPlayingAudio(false);
        },
        onStopped: () => {
          setIsPlayingAudio(false);
        },
        onError: (error) => {
          console.error("Speech error:", error);
          setIsPlayingAudio(false);
        },
      });
    } catch (error) {
      console.error("TTS error:", error);
      setIsPlayingAudio(false);
    }
  };

  const frontInterpolate = flipAnim.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });

  const backInterpolate = flipAnim.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
  });

  const frontOpacity = flipAnim.interpolate({
    inputRange: [0, 89, 90, 180],
    outputRange: [1, 1, 0, 0],
  });

  const backOpacity = flipAnim.interpolate({
    inputRange: [0, 89, 90, 180],
    outputRange: [0, 0, 1, 1],
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

  const getMainTextSize = (text: string) => {
    const length = text.length;
    if (length <= 10) return 32;
    if (length <= 20) return 28;
    if (length <= 30) return 24;
    return 20;
  };

  const getExampleTextSize = (text: string) => {
    const length = text.length;
    if (length <= 30) return 16;
    if (length <= 60) return 14;
    return 12;
  };

  const filipinoMainSize = getMainTextSize(flashCard.filipino);
  const englishMainSize = getMainTextSize(flashCard.english);
  const filipinoExampleSize = flashCard.example_filipino
    ? getExampleTextSize(flashCard.example_filipino)
    : 16;
  const englishExampleSize = flashCard.example_english
    ? getExampleTextSize(flashCard.example_english)
    : 16;

  const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      height: 240,
      paddingHorizontal: 16,
    },
    card: {
      width: "100%",
      maxWidth: 340,
      height: 240,
      justifyContent: "center",
      alignItems: "center",
      padding: 28,
      borderRadius: 20,
      shadowColor: "#000",
      shadowOpacity: 0.12,
      shadowRadius: 16,
      shadowOffset: { width: 0, height: 6 },
      elevation: 8,
      position: "absolute",
      backfaceVisibility: "hidden",
    },
    backCard: {
      backgroundColor: colors.white[100],
      borderWidth: 2,
      borderColor: colors.orange[300],
    },
    frontCard: {
      backgroundColor: colors.white[100],
      borderWidth: 2,
      borderColor: colors.green[400],
    },
    mainText: {
      fontWeight: "900",
      textAlign: "center",
      marginBottom: 16,
      letterSpacing: -0.5,
    },
    backMainText: {
      fontSize: filipinoMainSize,
      color: colors.text[400],
    },
    frontMainText: {
      fontSize: englishMainSize,
      color: colors.text[400],
    },
    exampleText: {
      textAlign: "center",
      fontWeight: "500",
      lineHeight: 24,
      marginTop: 8,
      paddingHorizontal: 16,
    },
    backExampleText: {
      fontSize: filipinoExampleSize,
      color: colors.orange[600],
      fontStyle: "italic",
    },
    frontExampleText: {
      fontSize: englishExampleSize,
      color: colors.green[600],
      fontStyle: "italic",
    },
    flipIndicator: {
      position: "absolute",
      bottom: 16,
      left: 0,
      right: 0,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      backgroundColor: colors.cream[100],
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 20,
      marginHorizontal: 20,
    },
    flipText: {
      fontSize: 13,
      fontWeight: "700",
    },
    backFlipText: {
      color: colors.orange[600],
    },
    frontFlipText: {
      color: colors.green[600],
    },
    languageBadge: {
      position: "absolute",
      top: 16,
      left: 16,
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 12,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    backLanguageBadge: {
      backgroundColor: colors.orange[500],
    },
    frontLanguageBadge: {
      backgroundColor: colors.green[500],
    },
    languageText: {
      fontSize: 12,
      fontWeight: "800",
      textTransform: "uppercase",
      color: colors.white[100],
      letterSpacing: 0.5,
    },
    soundButton: {
      position: "absolute",
      top: 16,
      right: 16,
      padding: 12,
      borderRadius: 12,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    backSoundButton: {
      backgroundColor: colors.orange[500],
    },
    frontSoundButton: {
      backgroundColor: colors.green[500],
    },
    soundButtonDisabled: {
      opacity: 0.6,
    },
  });

  return (
    <TouchableWithoutFeedback onPress={flipCard}>
      <View style={styles.container}>
        {/* Front Side - Bisaya (with TTS) */}
        <Animated.View
          style={[
            styles.card,
            styles.frontCard,
            {
              opacity: frontOpacity,
              transform: [{ rotateY: frontInterpolate }],
            },
          ]}
        >
          <View style={[styles.languageBadge, styles.frontLanguageBadge]}>
            <Text style={styles.languageText}>Bisaya</Text>
          </View>

          <TouchableOpacity
            style={[
              styles.soundButton,
              styles.frontSoundButton,
              isPlayingAudio && styles.soundButtonDisabled,
            ]}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            disabled={isPlayingAudio}
            onPress={() => {
              const text =
                showSentence && flashCard.example_filipino
                  ? `${flashCard.filipino}, ${flashCard.example_filipino}`
                  : flashCard.filipino;
              speakText(text);
            }}
          >
            <Ionicons name="volume-high" size={20} color={colors.white[100]} />
          </TouchableOpacity>

          <Text
            style={[styles.mainText, styles.frontMainText]}
            numberOfLines={2}
            adjustsFontSizeToFit
          >
            {flashCard.filipino}
          </Text>

          {showSentence && flashCard.example_filipino && (
            <Text
              style={[styles.exampleText, styles.frontExampleText]}
              numberOfLines={3}
            >
              {flashCard.example_filipino}
            </Text>
          )}

          <View style={styles.flipIndicator}>
            <Ionicons name="refresh" size={16} color={colors.orange[600]} />
            <Text style={[styles.flipText, styles.frontFlipText]}>
              Tap to see English
            </Text>
          </View>
        </Animated.View>

        {/* Back Side - English (NO TTS) */}
        <Animated.View
          style={[
            styles.card,
            styles.backCard,
            {
              opacity: backOpacity,
              transform: [{ rotateY: backInterpolate }],
            },
          ]}
        >
          <View style={[styles.languageBadge, styles.backLanguageBadge]}>
            <Text style={styles.languageText}>English</Text>
          </View>

          {/* No sound button on English side */}

          <Text
            style={[styles.mainText, styles.backMainText]}
            numberOfLines={2}
            adjustsFontSizeToFit
          >
            {flashCard.english}
          </Text>

          {showSentence && flashCard.example_english && (
            <Text
              style={[styles.exampleText, styles.backExampleText]}
              numberOfLines={3}
            >
              {flashCard.example_english}
            </Text>
          )}

          <View style={styles.flipIndicator}>
            <Ionicons name="refresh" size={16} color={colors.green[600]} />
            <Text style={[styles.flipText, styles.backFlipText]}>
              Tap to see Bisaya
            </Text>
          </View>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
}
