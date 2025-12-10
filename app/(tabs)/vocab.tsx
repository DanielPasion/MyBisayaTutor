import Header from "@/app/components/Header";
import FlashCard from "@/app/components/Flashcard";
import useThemeColors from "@/app/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import {
  Platform,
  Text,
  View,
  TouchableOpacity,
  Animated,
  ScrollView,
  Modal,
  StyleSheet,
  KeyboardAvoidingView,
  Vibration,
  useColorScheme,
} from "react-native";
import { Words } from "@/app/constants/Words";
import Alert from "@/app/components/Alert";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface VocabWord {
  english: string;
  filipino: string;
  example_english?: string;
  example_filipino?: string;
  index: number;
}

type Stage = "studying" | "learned" | "mastered";

interface VocabProgress {
  studying: number[];
  learned: number[];
  mastered: number[];
}

const VOCAB_STORAGE_KEY = "@vocab_progress";
const INITIAL_WORD_COUNT = 10;

export default function Vocab() {
  const { colors } = useThemeColors();
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  const [deck, setDeck] = useState<VocabWord[]>([]);
  const [deckIndex, setDeckIndex] = useState(0);
  const [inGame, setInGame] = useState(false);
  const [completed, setCompleted] = useState(0);
  const [autoplayAudio, setAutoplayAudio] = useState(false);
  const [showSentence, setShowSentence] = useState(true);

  const [studying, setStudying] = useState<number[]>([]);
  const [learned, setLearned] = useState<number[]>([]);
  const [mastered, setMastered] = useState<number[]>([]);

  const [IGStudying, setIGStudying] = useState<Set<number> | undefined>();
  const [IGLearned, setIGLearned] = useState<Set<number> | undefined>();
  const [IGMastered, setIGMastered] = useState<Set<number> | undefined>();

  const [wordList, setWordList] = useState<VocabWord[]>([]);

  const [isSwitchingCards, setIsSwitchingCards] = useState(false);
  const [cardStatus, setCardStatus] = useState<Stage>("studying");
  const [isLoading, setIsLoading] = useState(true);

  const [showCongrats, setShowCongrats] = useState(false);
  const [resetModalVisible, setResetModalVisible] = useState(false);
  const [addWordsModalVisible, setAddWordsModalVisible] = useState(false);
  const [wordLimitModal, setWordLimitModal] = useState(false);

  const [contentFadeAnim] = useState(new Animated.Value(0));
  const [contentScaleAnim] = useState(new Animated.Value(0.95));
  const [fadeAnim] = useState(new Animated.Value(0));
  const [scaleAnim] = useState(new Animated.Value(0.95));
  const [feedbackAnim] = useState(new Animated.Value(0));
  const [bounceAnim] = useState(new Animated.Value(1));
  const [pulseAnim] = useState(new Animated.Value(0));

  // Track if the current card has already been autoplayed
  const [hasAutoplayedCurrentCard, setHasAutoplayedCurrentCard] =
    useState(false);

  useEffect(() => {
    loadProgress();
  }, []);

  useEffect(() => {
    const saveProgress = async () => {
      try {
        const progress: VocabProgress = {
          studying,
          learned,
          mastered,
        };
        await AsyncStorage.setItem(VOCAB_STORAGE_KEY, JSON.stringify(progress));
      } catch (error) {
        console.error("Error saving progress:", error);
      }
    };
    if (!isLoading) {
      saveProgress();
    }
  }, [studying, learned, mastered, isLoading]);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 80,
        friction: 8,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, scaleAnim]);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(contentFadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(contentScaleAnim, {
        toValue: 1,
        tension: 80,
        friction: 8,
        useNativeDriver: true,
      }),
    ]).start();
  }, [contentFadeAnim, contentScaleAnim]);

  useEffect(() => {
    if (studying.length > 0) {
      setWordList(getWordsByIds(studying));
      setCardStatus("studying");
    }
  }, [studying]);

  // Reset autoplay flag when card changes
  useEffect(() => {
    if (inGame) {
      setHasAutoplayedCurrentCard(false);
    }
  }, [deckIndex, inGame]);

  const loadProgress = async () => {
    try {
      setIsLoading(true);
      const storedProgress = await AsyncStorage.getItem(VOCAB_STORAGE_KEY);

      if (storedProgress) {
        const progress: VocabProgress = JSON.parse(storedProgress);
        setStudying(progress.studying || []);
        setLearned(progress.learned || []);
        setMastered(progress.mastered || []);
      } else {
        // Initialize with first 10 words
        const initialWords = Words.slice(0, INITIAL_WORD_COUNT).map(
          (w) => w.index
        );
        setStudying(initialWords);
        setLearned([]);
        setMastered([]);
      }
    } catch (error) {
      console.error("Error loading progress:", error);
      // Initialize with first 10 words on error
      const initialWords = Words.slice(0, INITIAL_WORD_COUNT).map(
        (w) => w.index
      );
      setStudying(initialWords);
      setLearned([]);
      setMastered([]);
    } finally {
      setIsLoading(false);
    }
  };

  const playFeedbackAnimation = (stage: Stage) => {
    if (Platform.OS === "ios") {
      Vibration.vibrate(stage === "mastered" ? [100, 50, 100] : 100);
    }

    Animated.parallel([
      Animated.sequence([
        Animated.timing(feedbackAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(feedbackAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
      Animated.sequence([
        Animated.spring(bounceAnim, {
          toValue: 1.15,
          tension: 300,
          friction: 4,
          useNativeDriver: true,
        }),
        Animated.spring(bounceAnim, {
          toValue: 1,
          tension: 300,
          friction: 8,
          useNativeDriver: true,
        }),
      ]),
      ...(stage === "mastered"
        ? [
            Animated.sequence([
              Animated.timing(pulseAnim, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
              }),
              Animated.timing(pulseAnim, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
              }),
            ]),
          ]
        : []),
    ]).start();
  };

  const getWordsByIds = (ids: number[]): VocabWord[] => {
    return ids
      .map((id) => Words.find((word) => word?.index === id))
      .filter(Boolean) as VocabWord[];
  };

  const startGame = () => {
    if (!wordList.length) return;

    const shuffled = [...wordList].sort(() => Math.random() - 0.5);

    setDeck(shuffled);
    setDeckIndex(0);
    setCompleted(0);
    setHasAutoplayedCurrentCard(false); // Reset autoplay flag when starting game

    setIGStudying(new Set(studying));
    setIGLearned(new Set(learned));
    setIGMastered(new Set(mastered));

    setInGame(true);
  };

  const endGame = async () => {
    // Update the main state with in-game changes
    setStudying(Array.from(IGStudying ?? []));
    setLearned(Array.from(IGLearned ?? []));
    setMastered(Array.from(IGMastered ?? []));

    setCompleted(0);
    setDeck([]);
    setDeckIndex(0);
    setInGame(false);
    setHasAutoplayedCurrentCard(false); // Reset autoplay flag

    setShowCongrats(true);
  };

  const addThreeWords = async () => {
    setAddWordsModalVisible(true);
  };

  const confirmAddThreeWords = async () => {
    const totalWords = studying.length + learned.length + mastered.length;

    if (totalWords >= Words.length) {
      setWordLimitModal(true);
      setAddWordsModalVisible(false);
      return;
    }

    setAddWordsModalVisible(false);

    // Find words not already in any category
    const allUsedWords = new Set([...studying, ...learned, ...mastered]);
    const availableWords = Words.filter(
      (word) => !allUsedWords.has(word.index)
    );

    // Add up to 3 new words
    const wordsToAdd = availableWords.slice(0, 3).map((w) => w.index);

    if (wordsToAdd.length > 0) {
      setStudying((prev) => [...prev, ...wordsToAdd]);
    }
  };

  const resetVocab = async () => {
    setResetModalVisible(false);

    // Reset to initial 10 words
    const initialWords = Words.slice(0, INITIAL_WORD_COUNT).map((w) => w.index);
    setStudying(initialWords);
    setLearned([]);
    setMastered([]);
    setCardStatus("studying");
  };

  const updateSet = (target: Stage, id: number) => {
    const apply =
      (shouldHave: boolean) =>
      (prev?: Set<number>): Set<number> => {
        const next = new Set(prev ? Array.from(prev) : []);
        if (shouldHave) next.add(id);
        else next.delete(id);
        return next;
      };

    setIGStudying(apply(target === "studying"));
    setIGLearned(apply(target === "learned"));
    setIGMastered(apply(target === "mastered"));
  };

  const classify = (stage: Stage) => {
    const current = deck[deckIndex];
    if (!current) return;

    setCardStatus(stage);
    updateSet(stage, current.index);
    setCompleted((c) => c + 1);
    playFeedbackAnimation(stage);

    setIsSwitchingCards(true);
    setTimeout(() => {
      setDeck((prev) => {
        setIsSwitchingCards(false);
        const next = prev.slice();
        next.splice(deckIndex, 1);
        return next;
      });
      setDeckIndex(0);
      setHasAutoplayedCurrentCard(false);
    }, 600);
  };

  const getStatusColor = (status: Stage) => {
    switch (status) {
      case "studying":
        return colors.orange["500"];
      case "learned":
        return colors.green["400"];
      case "mastered":
        return colors.green["600"];
    }
  };

  const getStatusIcon = (status: Stage) => {
    switch (status) {
      case "studying":
        return "school-outline" as const;
      case "learned":
        return "checkmark-done" as const;
      case "mastered":
        return "trophy-outline" as const;
    }
  };

  const progress =
    wordList.length > 0 ? (completed / wordList.length) * 100 : 0;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.cream[500],
    },
    scrollContainer: {
      flex: 1,
      padding: 16,
    },
    categoryContainer: {
      flexDirection: "row",
      gap: 8,
      marginBottom: 20,
    },
    categoryButton: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 12,
      gap: 6,
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 4,
    },
    categoryButtonText: {
      fontWeight: "800",
      fontSize: 10,
    },
    categoryCount: {
      fontSize: 10,
      fontWeight: "700",
      opacity: 0.9,
    },
    wordCard: {
      backgroundColor: isDarkMode
        ? colors.cream[100] + "F5"
        : colors.white[100] + "F5",
      borderRadius: 20,
      padding: 16,
      marginVertical: 16,
      borderWidth: 1.5,
      borderColor: isDarkMode
        ? colors.orange[400] + "50"
        : colors.orange[300] + "60",
      shadowColor: isDarkMode ? colors.orange[600] : colors.orange[400],
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.12,
      shadowRadius: 6,
      elevation: 4,
    },
    wordHeader: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 16,
    },
    wordTitle: {
      fontSize: 16,
      fontWeight: "800",
      marginLeft: 8,
      color: colors.text[400],
    },
    wordItem: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 10,
      paddingHorizontal: 16,
      marginBottom: 6,
      borderRadius: 12,
      backgroundColor: colors.cream[100],
    },
    wordEnglish: {
      fontSize: 15,
      fontWeight: "700",
      color: colors.text[400],
      flex: 1,
    },
    wordFilipino: {
      fontSize: 13,
      fontWeight: "600",
      fontStyle: "italic",
      color: colors.orange[600],
      marginLeft: 12,
    },
    bottomContainer: {
      padding: 16,
      paddingTop: 12,
      borderTopWidth: 1,
      borderTopColor: isDarkMode
        ? colors.cream[300] + "60"
        : colors.cream[400] + "60",
      backgroundColor: isDarkMode
        ? colors.cream[100] + "F8"
        : colors.white[100] + "F8",
      shadowColor: colors.orange[400],
      shadowOffset: { width: 0, height: -2 },
      shadowOpacity: 0.08,
      shadowRadius: 6,
      elevation: 4,
    },
    actionRow: {
      flexDirection: "row",
      gap: 12,
      marginBottom: 20,
      justifyContent: "center",
      alignItems: "center",
    },
    actionButton: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 14,
      borderRadius: 12,
      gap: 8,
      shadowColor: colors.orange[500],
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 4,
      backgroundColor: colors.orange[500],
    },
    actionButtonText: {
      fontSize: 14,
      fontWeight: "800",
      color: colors.white[100],
    },
    startButton: {
      backgroundColor: colors.green[500],
      borderRadius: 16,
      paddingVertical: 12,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      gap: 12,
      shadowColor: colors.green[500],
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 12,
      elevation: 6,
    },
    startButtonText: {
      color: colors.white[100],
      fontWeight: "900",
      fontSize: 18,
    },
    gameContainer: {
      flex: 1,
    },
    gameHeader: {
      paddingHorizontal: 16,
      paddingVertical: 16,
      backgroundColor: isDarkMode
        ? colors.cream[200] + "80"
        : colors.white[100] + "F0",
      borderBottomWidth: 1,
      borderBottomColor: isDarkMode
        ? colors.cream[300] + "60"
        : colors.cream[400] + "60",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 8,
      elevation: 3,
    },
    gameHeaderTop: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 12,
    },
    exitButton: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 10,
      paddingHorizontal: 16,
      borderRadius: 12,
      backgroundColor: colors.green[500],
      gap: 8,
      shadowColor: colors.green[500],
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 6,
      elevation: 3,
    },
    exitButtonText: {
      color: colors.white[100],
      fontWeight: "800",
      fontSize: 14,
    },
    progressTextContainer: {
      alignItems: "center",
    },
    gameProgressText: {
      fontSize: 18,
      fontWeight: "900",
      color: colors.text[400],
      marginBottom: 2,
    },
    progressLabel: {
      fontSize: 11,
      fontWeight: "600",
      color: colors.text[300],
      textTransform: "uppercase",
      letterSpacing: 0.5,
    },
    progressBarContainer: {
      height: 8,
      backgroundColor: colors.cream[300],
      borderRadius: 4,
      overflow: "hidden",
      width: "100%",
    },
    progressBarFill: {
      height: "100%",
      backgroundColor: colors.green[500],
      borderRadius: 4,
    },
    cardContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "stretch",
      paddingHorizontal: 16,
      paddingVertical: 20,
    },
    buttonRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      gap: 14,
    },
    classifyButton: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 10,
      paddingHorizontal: 8,
      borderRadius: 20,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.25,
      shadowRadius: 8,
      elevation: 6,
      borderWidth: 2,
      borderColor: "transparent",
      minWidth: 0,
    },
    classifyButtonContent: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 4,
    },
    classifyButtonText: {
      color: colors.white[100],
      fontWeight: "900",
      fontSize: 8,
      letterSpacing: 0.1,
      flexShrink: 1,
    },
    feedbackOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      alignItems: "center",
      justifyContent: "center",
      pointerEvents: "none",
      zIndex: 1000,
    },
    feedbackIcon: {
      width: 80,
      height: 80,
      borderRadius: 40,
      alignItems: "center",
      justifyContent: "center",
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.4,
      shadowRadius: 12,
      elevation: 10,
    },
    pulseRing: {
      position: "absolute",
      width: 120,
      height: 120,
      borderRadius: 60,
      borderWidth: 4,
      borderColor: colors.green[400],
    },
    modalOverlay: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.6)",
    },
    modalContent: {
      backgroundColor: colors.white[100],
      borderRadius: 20,
      padding: 28,
      alignItems: "center",
      width: "88%",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.25,
      shadowRadius: 16,
      elevation: 12,
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: "900",
      marginVertical: 16,
      textAlign: "center",
      color: colors.text[400],
    },
    modalText: {
      fontSize: 15,
      marginBottom: 24,
      textAlign: "center",
      lineHeight: 22,
      color: colors.text[300],
    },
    modalButtonRow: {
      flexDirection: "row",
      gap: 12,
    },
    modalButton: {
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 12,
      minWidth: 90,
      alignItems: "center",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 6,
      elevation: 3,
    },
    modalButtonText: {
      fontWeight: "800",
      fontSize: 15,
    },
    centerContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    loadingText: {
      marginTop: 16,
      fontSize: 16,
      fontWeight: "600",
      color: colors.text[300],
    },
    tipCard: {
      flexDirection: "row",
      alignItems: "center",
      gap: 16,
      backgroundColor: isDarkMode
        ? colors.cream[100] + "F5"
        : colors.white[100] + "F5",
      borderRadius: 20,
      padding: 16,
      marginVertical: 16,
      borderWidth: 1.5,
      borderColor: isDarkMode
        ? colors.orange[400] + "50"
        : colors.orange[300] + "60",
      shadowColor: isDarkMode ? colors.orange[600] : colors.orange[400],
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.12,
      shadowRadius: 6,
      elevation: 4,
    },
    tipText: {
      flex: 1,
      fontSize: 15,
      fontWeight: "600",
      color: colors.text[300],
      lineHeight: 22,
    },
    gameControlsContainer: {
      flexDirection: "row",
      gap: 16,
      paddingHorizontal: 16,
      paddingVertical: 16,
      backgroundColor: isDarkMode
        ? colors.cream[200] + "80"
        : colors.white[100] + "F0",
      borderRadius: 16,
      marginHorizontal: 16,
      marginBottom: 12,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 8,
      elevation: 3,
    },
    toggleContainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 8,
    },
    toggleLabel: {
      fontSize: 13,
      color: colors.text[300],
      fontWeight: "700",
    },
    toggleSwitch: {
      width: 48,
      height: 28,
      borderRadius: 14,
      padding: 3,
      justifyContent: "center",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 2,
    },
    toggleThumb: {
      width: 22,
      height: 22,
      borderRadius: 11,
      backgroundColor: colors.white[100],
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 2,
    },
  });

  if (isLoading) {
    return (
      <View style={[styles.container, styles.centerContainer]}>
        <Text style={styles.loadingText}>Loading vocabulary...</Text>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}
    >
      <Header />

      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }],
        }}
      >
        <Animated.View
          style={[
            styles.feedbackOverlay,
            {
              opacity: feedbackAnim,
              transform: [{ scale: bounceAnim }],
            },
          ]}
        >
          <View
            style={[
              styles.feedbackIcon,
              {
                backgroundColor: getStatusColor(cardStatus),
                shadowColor: getStatusColor(cardStatus),
              },
            ]}
          >
            <Ionicons
              name={getStatusIcon(cardStatus)}
              size={36}
              color={colors.white[100]}
            />
          </View>

          <Animated.View
            style={[
              styles.pulseRing,
              {
                opacity: pulseAnim.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: [0, 0.7, 0],
                }),
                transform: [
                  {
                    scale: pulseAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.8, 1.6],
                    }),
                  },
                ],
              },
            ]}
          />
        </Animated.View>
      </Animated.View>

      {/* Modals */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={showCongrats}
        onRequestClose={() => setShowCongrats(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Ionicons name="trophy" size={60} color={colors.orange[500]} />
            <Text style={styles.modalTitle}>Session Complete!</Text>
            <Text style={styles.modalText}>
              Outstanding work! Regular practice is the key to mastery.
            </Text>
            <TouchableOpacity
              onPress={() => setShowCongrats(false)}
              style={[
                styles.modalButton,
                {
                  backgroundColor: colors.green[500],
                  shadowColor: colors.green[500],
                },
              ]}
            >
              <Text
                style={[styles.modalButtonText, { color: colors.white[100] }]}
              >
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent={true}
        visible={addWordsModalVisible}
        onRequestClose={() => setAddWordsModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Ionicons name="add-circle" size={50} color={colors.orange[500]} />
            <Text style={styles.modalTitle}>Add New Words?</Text>
            <Text style={styles.modalText}>
              This will add up to 3 new words to your studying collection.
            </Text>
            <View style={styles.modalButtonRow}>
              <TouchableOpacity
                onPress={() => setAddWordsModalVisible(false)}
                style={[
                  styles.modalButton,
                  {
                    backgroundColor: colors.cream[300],
                    shadowColor: colors.cream[400],
                  },
                ]}
              >
                <Text
                  style={[styles.modalButtonText, { color: colors.text[400] }]}
                >
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={confirmAddThreeWords}
                style={[
                  styles.modalButton,
                  {
                    backgroundColor: colors.orange[500],
                    shadowColor: colors.orange[500],
                  },
                ]}
              >
                <Text
                  style={[styles.modalButtonText, { color: colors.white[100] }]}
                >
                  Add Words
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent={true}
        visible={resetModalVisible}
        onRequestClose={() => setResetModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Ionicons name="warning" size={50} color={colors.orange[500]} />
            <Text style={styles.modalTitle}>Reset Progress?</Text>
            <Text style={styles.modalText}>
              This will permanently delete all your progress. This cannot be
              undone.
            </Text>
            <View style={styles.modalButtonRow}>
              <TouchableOpacity
                onPress={() => setResetModalVisible(false)}
                style={[
                  styles.modalButton,
                  {
                    backgroundColor: colors.cream[300],
                    shadowColor: colors.cream[400],
                  },
                ]}
              >
                <Text
                  style={[styles.modalButtonText, { color: colors.text[400] }]}
                >
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={resetVocab}
                style={[
                  styles.modalButton,
                  {
                    backgroundColor: colors.orange[500],
                    shadowColor: colors.orange[500],
                  },
                ]}
              >
                <Text
                  style={[styles.modalButtonText, { color: colors.white[100] }]}
                >
                  Reset
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent={true}
        visible={wordLimitModal}
        onRequestClose={() => setWordLimitModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Ionicons
              name="alert-circle"
              size={60}
              color={colors.orange[500]}
            />
            <Text style={styles.modalTitle}>All Words Added!</Text>
            <Text style={styles.modalText}>
              {"You've added all available words. Great job on your progress!"}
            </Text>
            <TouchableOpacity
              onPress={() => setWordLimitModal(false)}
              style={[
                styles.modalButton,
                {
                  backgroundColor: colors.orange[500],
                  shadowColor: colors.orange[500],
                },
              ]}
            >
              <Text
                style={[styles.modalButtonText, { color: colors.white[100] }]}
              >
                Got It
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Animated.View
        style={{
          flex: 1,
          opacity: contentFadeAnim,
          transform: [{ scale: contentScaleAnim }],
        }}
      >
        {!inGame ? (
          <ScrollView
            style={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.categoryContainer}>
              {[
                {
                  status: "studying",
                  count: studying.length,
                  words: studying,
                  icon: "school-outline" as const,
                },
                {
                  status: "learned",
                  count: learned.length,
                  words: learned,
                  icon: "checkmark-done-outline" as const,
                },
                {
                  status: "mastered",
                  count: mastered.length,
                  words: mastered,
                  icon: "trophy-outline" as const,
                },
              ].map(({ status, count, words, icon }) => (
                <TouchableOpacity
                  key={status}
                  onPress={() => {
                    setCardStatus(status as Stage);
                    setWordList(getWordsByIds(words));
                  }}
                  style={[
                    styles.categoryButton,
                    {
                      backgroundColor:
                        cardStatus === status
                          ? status === "mastered"
                            ? colors.green[500]
                            : status === "learned"
                            ? colors.middle
                            : colors.orange[500]
                          : colors.cream[200],
                      shadowColor:
                        cardStatus === status
                          ? status === "mastered"
                            ? colors.green[500]
                            : status === "learned"
                            ? colors.middle
                            : colors.orange[500]
                          : colors.cream[300],
                    },
                  ]}
                >
                  <Ionicons
                    name={icon}
                    size={16}
                    color={
                      cardStatus === status
                        ? colors.white[100]
                        : colors.text[300]
                    }
                  />
                  <Text
                    style={[
                      styles.categoryButtonText,
                      {
                        color:
                          cardStatus === status
                            ? colors.white[100]
                            : colors.text[300],
                      },
                    ]}
                  >
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </Text>
                  <Text
                    style={[
                      styles.categoryCount,
                      {
                        color:
                          cardStatus === status
                            ? colors.white[100]
                            : colors.text[300],
                      },
                    ]}
                  >
                    {count}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <Alert
              text={`For best results, review each category accordingly: Studying: 3x/day, Learned: 2x/day, Mastered: 1x/day.`}
            />

            {wordList.length > 0 ? (
              <View style={styles.wordCard}>
                <View style={styles.wordHeader}>
                  <Ionicons name="book" size={20} color={colors.orange[500]} />
                  <Text style={styles.wordTitle}>
                    {cardStatus.charAt(0).toUpperCase() + cardStatus.slice(1)}{" "}
                    Words ({wordList.length})
                  </Text>
                </View>
                {wordList.map((word, index) => (
                  <View key={index} style={styles.wordItem}>
                    <Text style={styles.wordEnglish}>{word.english}</Text>
                    <Text style={styles.wordFilipino}>{word.filipino}</Text>
                  </View>
                ))}
              </View>
            ) : (
              <View style={styles.tipCard}>
                <Ionicons
                  name="book-outline"
                  size={24}
                  color={colors.orange[500]}
                />
                <Text style={styles.tipText}>
                  No words in this category yet. Add some words to get started!
                </Text>
              </View>
            )}
          </ScrollView>
        ) : (
          <View style={styles.gameContainer}>
            <View style={styles.gameHeader}>
              <View style={styles.gameHeaderTop}>
                <TouchableOpacity onPress={endGame} style={styles.exitButton}>
                  <Ionicons
                    name="arrow-back"
                    size={18}
                    color={colors.white[100]}
                  />
                  <Text style={styles.exitButtonText}>Exit</Text>
                </TouchableOpacity>

                <View style={styles.progressTextContainer}>
                  <Text style={styles.gameProgressText}>
                    {completed} / {wordList.length}
                  </Text>
                  <Text style={styles.progressLabel}>Progress</Text>
                </View>

                <View style={{ width: 80 }} />
              </View>

              <View style={styles.progressBarContainer}>
                <Animated.View
                  style={[
                    styles.progressBarFill,
                    {
                      width: `${progress}%`,
                    },
                  ]}
                />
              </View>
            </View>

            <View style={styles.cardContainer}>
              {deck.length > 0 ? (
                <FlashCard
                  key={deckIndex}
                  index={deckIndex}
                  flashCard={deck[deckIndex]}
                  autoplayAudio={autoplayAudio && !hasAutoplayedCurrentCard}
                  showSentence={showSentence}
                  onAutoplayComplete={() => setHasAutoplayedCurrentCard(true)}
                />
              ) : (
                <View style={styles.centerContainer}>
                  <Ionicons
                    name="checkmark-circle"
                    size={70}
                    color={colors.green[500]}
                  />
                  <Text style={styles.loadingText}>Session Complete!</Text>
                </View>
              )}
            </View>

            {deck.length > 0 && (
              <View style={styles.gameControlsContainer}>
                <View style={styles.toggleContainer}>
                  <Text style={styles.toggleLabel}>Autoplay Audio</Text>
                  <TouchableOpacity
                    onPress={() => setAutoplayAudio(!autoplayAudio)}
                    style={[
                      styles.toggleSwitch,
                      {
                        backgroundColor: autoplayAudio
                          ? colors.green[500]
                          : colors.cream[400],
                      },
                    ]}
                  >
                    <View
                      style={[
                        styles.toggleThumb,
                        {
                          transform: [{ translateX: autoplayAudio ? 20 : 0 }],
                        },
                      ]}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.toggleContainer}>
                  <Text style={styles.toggleLabel}>Show Sentence</Text>
                  <TouchableOpacity
                    onPress={() => setShowSentence(!showSentence)}
                    style={[
                      styles.toggleSwitch,
                      {
                        backgroundColor: showSentence
                          ? colors.green[500]
                          : colors.cream[400],
                      },
                    ]}
                  >
                    <View
                      style={[
                        styles.toggleThumb,
                        {
                          transform: [{ translateX: showSentence ? 20 : 0 }],
                        },
                      ]}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        )}
      </Animated.View>

      {!inGame ? (
        <View
          style={[
            styles.bottomContainer,
            {
              paddingBottom: Platform.OS !== "ios" ? 16 : 24,
            },
          ]}
        >
          <View style={styles.actionRow}>
            <TouchableOpacity
              onPress={addThreeWords}
              style={styles.actionButton}
            >
              <Ionicons name="add" size={18} color={colors.white[100]} />
              <Text style={styles.actionButtonText}>Add Words</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setResetModalVisible(true)}
              style={styles.actionButton}
            >
              <Ionicons name="refresh" size={18} color={colors.white[100]} />
              <Text style={styles.actionButtonText}>Reset</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={startGame}
            disabled={wordList.length === 0}
            style={[
              styles.startButton,
              { opacity: wordList.length === 0 ? 0.6 : 1 },
            ]}
          >
            <Ionicons name="play" size={22} color={colors.white[100]} />
            <Text style={styles.startButtonText}>Start Practice</Text>
          </TouchableOpacity>
        </View>
      ) : (
        deck.length > 0 && (
          <View
            style={[
              styles.bottomContainer,
              {
                paddingBottom: Platform.OS !== "ios" ? 16 : 24,
              },
            ]}
          >
            <View style={styles.buttonRow}>
              <TouchableOpacity
                onPress={() => classify("studying")}
                disabled={isSwitchingCards}
                style={[
                  styles.classifyButton,
                  {
                    backgroundColor: colors.orange[500],
                    shadowColor: colors.orange[500],
                    opacity: isSwitchingCards ? 0.5 : 1,
                  },
                ]}
              >
                <View style={styles.classifyButtonContent}>
                  <Ionicons name="school" size={16} color={colors.white[100]} />
                  <Text style={styles.classifyButtonText}>STUDYING</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => classify("learned")}
                disabled={isSwitchingCards}
                style={[
                  styles.classifyButton,
                  {
                    backgroundColor: colors.middle,
                    shadowColor: colors.middle,
                    opacity: isSwitchingCards ? 0.5 : 1,
                  },
                ]}
              >
                <View style={styles.classifyButtonContent}>
                  <Ionicons
                    name="checkmark-done"
                    size={16}
                    color={colors.white[100]}
                  />
                  <Text style={styles.classifyButtonText}>LEARNED</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => classify("mastered")}
                disabled={isSwitchingCards}
                style={[
                  styles.classifyButton,
                  {
                    backgroundColor: colors.green[500],
                    shadowColor: colors.green[600],
                    opacity: isSwitchingCards ? 0.5 : 1,
                  },
                ]}
              >
                <View style={styles.classifyButtonContent}>
                  <Ionicons name="trophy" size={16} color={colors.white[100]} />
                  <Text style={styles.classifyButtonText}>MASTERED</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )
      )}
    </KeyboardAvoidingView>
  );
}
