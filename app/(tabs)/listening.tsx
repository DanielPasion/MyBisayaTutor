import Header from "@/app/components/Header";
import AudioPlayerComponent from "@/app/components/AudioPlayer";
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
  ActivityIndicator,
  Modal,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  useColorScheme,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Difficulty = "New" | "Beginner" | "Intermediate" | "Advanced";

interface Sentence {
  filipino: string;
  english: string;
}

interface ListeningProgress {
  New: { total: number; correct: number; wrong: number };
  Beginner: { total: number; correct: number; wrong: number };
  Intermediate: { total: number; correct: number; wrong: number };
  Advanced: { total: number; correct: number; wrong: number };
}

const SENTENCE_COUNTS = {
  New: 5999,
  Beginner: 5180,
  Intermediate: 3076,
  Advanced: 2078,
};

const PROGRESS_STORAGE_KEY = "@listening_progress";

export default function Listening() {
  const { colors } = useThemeColors();
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  const [selectedDifficulty, setSelectedDifficulty] =
    useState<Difficulty>("New");
  const [currentSentence, setCurrentSentence] = useState<Sentence | null>(null);
  const [audioUri, setAudioUri] = useState<string | null>(null);
  const [userGuess, setUserGuess] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [inGame, setInGame] = useState(false);
  const [sessionCompleted, setSessionCompleted] = useState(0);
  const [sessionCorrect, setSessionCorrect] = useState(0);
  const [progress, setProgress] = useState<ListeningProgress>({
    New: { total: 0, correct: 0, wrong: 0 },
    Beginner: { total: 0, correct: 0, wrong: 0 },
    Intermediate: { total: 0, correct: 0, wrong: 0 },
    Advanced: { total: 0, correct: 0, wrong: 0 },
  });

  const [resetModalVisible, setResetModalVisible] = useState(false);
  const [statsModalVisible, setStatsModalVisible] = useState(false);
  const [feedbackModalVisible, setFeedbackModalVisible] = useState(false);

  const [fadeAnim] = useState(new Animated.Value(0));
  const [scaleAnim] = useState(new Animated.Value(0.95));
  const [contentFadeAnim] = useState(new Animated.Value(0));
  const [contentScaleAnim] = useState(new Animated.Value(0.95));

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
    loadProgress();
  }, []);

  const loadProgress = async () => {
    try {
      const storedProgress = await AsyncStorage.getItem(PROGRESS_STORAGE_KEY);
      if (storedProgress) {
        setProgress(JSON.parse(storedProgress));
      }
    } catch (error) {
      console.error("Error loading progress:", error);
    }
  };

  const saveProgress = async (newProgress: ListeningProgress) => {
    try {
      await AsyncStorage.setItem(
        PROGRESS_STORAGE_KEY,
        JSON.stringify(newProgress)
      );
      setProgress(newProgress);
    } catch (error) {
      console.error("Error saving progress:", error);
    }
  };

  const resetProgress = async () => {
    const initialProgress: ListeningProgress = {
      New: { total: 0, correct: 0, wrong: 0 },
      Beginner: { total: 0, correct: 0, wrong: 0 },
      Intermediate: { total: 0, correct: 0, wrong: 0 },
      Advanced: { total: 0, correct: 0, wrong: 0 },
    };
    await saveProgress(initialProgress);
    setResetModalVisible(false);
  };

  const loadRandomSentence = async () => {
    try {
      setIsLoading(true);
      const maxIndex = SENTENCE_COUNTS[selectedDifficulty];
      const randomIndex = Math.floor(Math.random() * maxIndex) + 1;

      const sentenceModule = await import(
        `@/app/constants/listening/${selectedDifficulty}/sentence/${randomIndex}.json`
      );
      const sentence: Sentence = sentenceModule.default;

      const audioPath = `@/app/constants/listening/${selectedDifficulty}/audio/${randomIndex}.mp3`;

      setCurrentSentence(sentence);
      setAudioUri(audioPath);
      setUserGuess("");
      setShowAnswer(false);
      setIsCorrect(null);
    } catch (error) {
      console.error("Error loading sentence:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const startGame = async () => {
    setInGame(true);
    setSessionCompleted(0);
    setSessionCorrect(0);
    await loadRandomSentence();
  };

  const endGame = () => {
    setInGame(false);
    setCurrentSentence(null);
    setAudioUri(null);
    setUserGuess("");
    setShowAnswer(false);
    setIsCorrect(null);
  };

  const checkAnswer = () => {
    if (!currentSentence || !userGuess.trim()) return;

    // Simple check: normalize and compare
    const normalizedGuess = userGuess.trim().toLowerCase();
    const normalizedEnglish = currentSentence.english.trim().toLowerCase();
    const normalizedFilipino = currentSentence.filipino.trim().toLowerCase();

    // Check if guess matches either English or Filipino (loose matching)
    const correct =
      normalizedGuess === normalizedEnglish ||
      normalizedGuess === normalizedFilipino ||
      normalizedGuess.includes(normalizedEnglish) ||
      normalizedEnglish.includes(normalizedGuess);

    setIsCorrect(correct);
    setShowAnswer(true);
    setFeedbackModalVisible(true);

    // Update progress
    const updatedProgress = { ...progress };
    updatedProgress[selectedDifficulty].total += 1;
    if (correct) {
      updatedProgress[selectedDifficulty].correct += 1;
      setSessionCorrect((prev) => prev + 1);
    } else {
      updatedProgress[selectedDifficulty].wrong += 1;
    }
    saveProgress(updatedProgress);
    setSessionCompleted((prev) => prev + 1);
  };

  const nextQuestion = async () => {
    setFeedbackModalVisible(false);
    await loadRandomSentence();
  };

  const getDifficultyColor = (difficulty: Difficulty) => {
    switch (difficulty) {
      case "New":
        return colors.green[400];
      case "Beginner":
        return colors.green[500];
      case "Intermediate":
        return colors.orange[500];
      case "Advanced":
        return colors.orange[600];
    }
  };

  const getDifficultyIcon = (difficulty: Difficulty) => {
    switch (difficulty) {
      case "New":
        return "leaf-outline" as const;
      case "Beginner":
        return "planet-outline" as const;
      case "Intermediate":
        return "rocket-outline" as const;
      case "Advanced":
        return "trophy-outline" as const;
    }
  };

  const getAccuracy = (difficulty: Difficulty) => {
    const { total, correct } = progress[difficulty];
    if (total === 0) return 0;
    return Math.round((correct / total) * 100);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode
        ? colors.cream[200] + "F0"
        : colors.cream[100] + "F8",
    },
    contentContainer: {
      flex: 1,
      backgroundColor: isDarkMode ? colors.cream[300] : colors.cream[100],
    },
    scrollContent: {
      padding: 16,
      paddingBottom: Platform.OS === "ios" ? 32 : 24,
    },
    difficultyContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 12,
      marginBottom: 24,
    },
    difficultyButton: {
      flex: 1,
      minWidth: "45%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 16,
      paddingHorizontal: 12,
      borderRadius: 16,
      gap: 8,
      borderWidth: 2,
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 4,
    },
    difficultyButtonText: {
      fontWeight: "800",
      fontSize: 14,
    },
    statsCard: {
      backgroundColor: isDarkMode
        ? colors.cream[100] + "F5"
        : colors.white[100] + "F5",
      borderRadius: 20,
      padding: 20,
      marginBottom: 16,
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
    statsHeader: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 16,
    },
    statsTitle: {
      fontSize: 18,
      fontWeight: "700",
      marginLeft: 12,
      color: colors.text[100],
    },
    statsRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 8,
    },
    statLabel: {
      fontSize: 14,
      fontWeight: "600",
      color: colors.text[300],
    },
    statValue: {
      fontSize: 14,
      fontWeight: "700",
      color: colors.orange[600],
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
      backgroundColor: colors.orange[500],
      gap: 8,
      shadowColor: colors.orange[500],
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
    sessionStats: {
      alignItems: "center",
    },
    sessionStatsText: {
      fontSize: 18,
      fontWeight: "900",
      color: colors.text[400],
    },
    sessionLabel: {
      fontSize: 11,
      fontWeight: "600",
      color: colors.text[300],
      textTransform: "uppercase",
      letterSpacing: 0.5,
    },
    gameContent: {
      flex: 1,
      padding: 16,
    },
    questionCard: {
      backgroundColor: isDarkMode
        ? colors.cream[100] + "F5"
        : colors.white[100] + "F5",
      borderRadius: 20,
      padding: 24,
      marginBottom: 20,
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
    questionLabel: {
      fontSize: 16,
      fontWeight: "700",
      color: colors.text[300],
      marginBottom: 16,
      textAlign: "center",
    },
    input: {
      backgroundColor: isDarkMode ? colors.cream[200] : colors.white[100],
      borderRadius: 12,
      padding: 16,
      fontSize: 16,
      fontWeight: "600",
      color: colors.text[400],
      borderWidth: 2,
      borderColor: colors.orange[300] + "40",
      marginBottom: 16,
    },
    answerSection: {
      backgroundColor: isDarkMode
        ? colors.cream[200] + "80"
        : colors.cream[100] + "E0",
      borderRadius: 12,
      padding: 16,
      marginTop: 12,
    },
    answerLabel: {
      fontSize: 14,
      fontWeight: "700",
      color: colors.text[300],
      marginBottom: 8,
    },
    answerText: {
      fontSize: 16,
      fontWeight: "600",
      color: colors.text[400],
      lineHeight: 24,
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
      marginBottom: 12,
    },
    actionButton: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 14,
      borderRadius: 12,
      gap: 8,
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 4,
    },
    actionButtonText: {
      fontSize: 14,
      fontWeight: "800",
      color: colors.white[100],
    },
    startButton: {
      backgroundColor: colors.green[500],
      borderRadius: 16,
      paddingVertical: 16,
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
    checkButton: {
      backgroundColor: colors.green[500],
      shadowColor: colors.green[500],
    },
    nextButton: {
      backgroundColor: colors.orange[500],
      shadowColor: colors.orange[500],
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
      maxHeight: "80%",
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
    feedbackContent: {
      width: "100%",
      alignItems: "center",
    },
    feedbackAnswer: {
      backgroundColor: colors.cream[100],
      borderRadius: 12,
      padding: 16,
      width: "100%",
      marginVertical: 16,
    },
    feedbackAnswerLabel: {
      fontSize: 13,
      fontWeight: "700",
      color: colors.text[300],
      marginBottom: 8,
    },
    feedbackAnswerText: {
      fontSize: 16,
      fontWeight: "600",
      color: colors.text[400],
      lineHeight: 24,
    },
    statsScroll: {
      width: "100%",
      maxHeight: 400,
    },
    statsDifficultyCard: {
      backgroundColor: colors.cream[100],
      borderRadius: 12,
      padding: 16,
      marginBottom: 12,
    },
    statsDifficultyHeader: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 12,
    },
    statsDifficultyTitle: {
      fontSize: 16,
      fontWeight: "700",
      marginLeft: 12,
      color: colors.text[400],
    },
    statsDifficultyRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 6,
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
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}
    >
      <Header />

      <View style={styles.contentContainer}>
        <Animated.View
          style={{
            flex: 1,
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          }}
        >
          {!inGame ? (
            <ScrollView
              style={{ flex: 1 }}
              contentContainerStyle={styles.scrollContent}
              showsVerticalScrollIndicator={false}
            >
              {/* Difficulty Selection */}
              <View style={styles.difficultyContainer}>
                {(
                  [
                    "New",
                    "Beginner",
                    "Intermediate",
                    "Advanced",
                  ] as Difficulty[]
                ).map((difficulty) => (
                  <TouchableOpacity
                    key={difficulty}
                    onPress={() => setSelectedDifficulty(difficulty)}
                    style={[
                      styles.difficultyButton,
                      {
                        backgroundColor:
                          selectedDifficulty === difficulty
                            ? getDifficultyColor(difficulty)
                            : colors.cream[200],
                        borderColor:
                          selectedDifficulty === difficulty
                            ? getDifficultyColor(difficulty)
                            : colors.cream[300],
                        shadowColor:
                          selectedDifficulty === difficulty
                            ? getDifficultyColor(difficulty)
                            : colors.cream[300],
                      },
                    ]}
                  >
                    <Ionicons
                      name={getDifficultyIcon(difficulty)}
                      size={20}
                      color={
                        selectedDifficulty === difficulty
                          ? colors.white[100]
                          : colors.text[300]
                      }
                    />
                    <Text
                      style={[
                        styles.difficultyButtonText,
                        {
                          color:
                            selectedDifficulty === difficulty
                              ? colors.white[100]
                              : colors.text[300],
                        },
                      ]}
                    >
                      {difficulty}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              {/* Current Difficulty Stats */}
              <View style={styles.statsCard}>
                <View style={styles.statsHeader}>
                  <Ionicons
                    name="stats-chart"
                    size={24}
                    color={getDifficultyColor(selectedDifficulty)}
                  />
                  <Text style={styles.statsTitle}>
                    {selectedDifficulty} Progress
                  </Text>
                </View>
                <View style={styles.statsRow}>
                  <Text style={styles.statLabel}>Total Attempts</Text>
                  <Text style={styles.statValue}>
                    {progress[selectedDifficulty].total}
                  </Text>
                </View>
                <View style={styles.statsRow}>
                  <Text style={styles.statLabel}>Correct</Text>
                  <Text
                    style={[styles.statValue, { color: colors.green[500] }]}
                  >
                    {progress[selectedDifficulty].correct}
                  </Text>
                </View>
                <View style={styles.statsRow}>
                  <Text style={styles.statLabel}>Wrong</Text>
                  <Text
                    style={[styles.statValue, { color: colors.orange[500] }]}
                  >
                    {progress[selectedDifficulty].wrong}
                  </Text>
                </View>
                <View style={styles.statsRow}>
                  <Text style={styles.statLabel}>Accuracy</Text>
                  <Text style={styles.statValue}>
                    {getAccuracy(selectedDifficulty)}%
                  </Text>
                </View>
              </View>
            </ScrollView>
          ) : (
            <View style={styles.gameContainer}>
              {/* Game Header */}
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

                  <View style={styles.sessionStats}>
                    <Text style={styles.sessionStatsText}>
                      {sessionCorrect} / {sessionCompleted}
                    </Text>
                    <Text style={styles.sessionLabel}>Session Score</Text>
                  </View>

                  <View style={{ width: 80 }} />
                </View>
              </View>

              {/* Game Content */}
              <ScrollView
                style={styles.gameContent}
                showsVerticalScrollIndicator={false}
              >
                {isLoading ? (
                  <View style={styles.centerContainer}>
                    <ActivityIndicator
                      size="large"
                      color={getDifficultyColor(selectedDifficulty)}
                    />
                    <Text style={styles.loadingText}>Loading question...</Text>
                  </View>
                ) : currentSentence ? (
                  <>
                    <View style={styles.questionCard}>
                      <Text style={styles.questionLabel}>
                        Listen and type what you hear:
                      </Text>

                      {audioUri && <AudioPlayerComponent uri={audioUri} />}

                      <TextInput
                        style={styles.input}
                        placeholder="Type your answer here..."
                        placeholderTextColor={colors.text[200]}
                        value={userGuess}
                        onChangeText={setUserGuess}
                        multiline
                        autoCapitalize="none"
                        autoCorrect={false}
                        editable={!showAnswer}
                      />

                      {showAnswer && (
                        <View style={styles.answerSection}>
                          <Text style={styles.answerLabel}>Filipino:</Text>
                          <Text style={styles.answerText}>
                            {currentSentence.filipino}
                          </Text>
                          <Text style={[styles.answerLabel, { marginTop: 12 }]}>
                            English:
                          </Text>
                          <Text style={styles.answerText}>
                            {currentSentence.english}
                          </Text>
                        </View>
                      )}
                    </View>
                  </>
                ) : null}
              </ScrollView>
            </View>
          )}
        </Animated.View>
      </View>

      {/* Bottom Actions */}
      {!inGame ? (
        <View
          style={[
            styles.bottomContainer,
            { paddingBottom: Platform.OS !== "ios" ? 16 : 24 },
          ]}
        >
          <View style={styles.actionRow}>
            <TouchableOpacity
              onPress={() => setStatsModalVisible(true)}
              style={[
                styles.actionButton,
                {
                  backgroundColor: colors.orange[500],
                  shadowColor: colors.orange[500],
                },
              ]}
            >
              <Ionicons
                name="stats-chart"
                size={18}
                color={colors.white[100]}
              />
              <Text style={styles.actionButtonText}>All Stats</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setResetModalVisible(true)}
              style={[
                styles.actionButton,
                {
                  backgroundColor: colors.orange[500],
                  shadowColor: colors.orange[500],
                },
              ]}
            >
              <Ionicons name="refresh" size={18} color={colors.white[100]} />
              <Text style={styles.actionButtonText}>Reset</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={startGame} style={styles.startButton}>
            <Ionicons name="play" size={22} color={colors.white[100]} />
            <Text style={styles.startButtonText}>Start Practice</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={[
            styles.bottomContainer,
            { paddingBottom: Platform.OS !== "ios" ? 16 : 24 },
          ]}
        >
          {!showAnswer ? (
            <TouchableOpacity
              onPress={checkAnswer}
              disabled={!userGuess.trim()}
              style={[
                styles.actionButton,
                styles.checkButton,
                { opacity: !userGuess.trim() ? 0.5 : 1 },
              ]}
            >
              <Ionicons
                name="checkmark-circle"
                size={20}
                color={colors.white[100]}
              />
              <Text style={styles.actionButtonText}>Check Answer</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={nextQuestion}
              style={[styles.actionButton, styles.nextButton]}
            >
              <Ionicons
                name="arrow-forward"
                size={20}
                color={colors.white[100]}
              />
              <Text style={styles.actionButtonText}>Next Question</Text>
            </TouchableOpacity>
          )}
        </View>
      )}

      {/* Reset Modal */}
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
              This will clear all your listening progress. This action cannot be
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
                onPress={resetProgress}
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

      {/* Stats Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={statsModalVisible}
        onRequestClose={() => setStatsModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Ionicons name="stats-chart" size={50} color={colors.orange[500]} />
            <Text style={styles.modalTitle}>All Progress Stats</Text>
            <ScrollView
              style={styles.statsScroll}
              showsVerticalScrollIndicator={false}
            >
              {(
                ["New", "Beginner", "Intermediate", "Advanced"] as Difficulty[]
              ).map((difficulty) => (
                <View key={difficulty} style={styles.statsDifficultyCard}>
                  <View style={styles.statsDifficultyHeader}>
                    <Ionicons
                      name={getDifficultyIcon(difficulty)}
                      size={20}
                      color={getDifficultyColor(difficulty)}
                    />
                    <Text style={styles.statsDifficultyTitle}>
                      {difficulty}
                    </Text>
                  </View>
                  <View style={styles.statsDifficultyRow}>
                    <Text style={styles.statLabel}>Total</Text>
                    <Text style={styles.statValue}>
                      {progress[difficulty].total}
                    </Text>
                  </View>
                  <View style={styles.statsDifficultyRow}>
                    <Text style={styles.statLabel}>Correct</Text>
                    <Text
                      style={[styles.statValue, { color: colors.green[500] }]}
                    >
                      {progress[difficulty].correct}
                    </Text>
                  </View>
                  <View style={styles.statsDifficultyRow}>
                    <Text style={styles.statLabel}>Wrong</Text>
                    <Text
                      style={[styles.statValue, { color: colors.orange[500] }]}
                    >
                      {progress[difficulty].wrong}
                    </Text>
                  </View>
                  <View style={styles.statsDifficultyRow}>
                    <Text style={styles.statLabel}>Accuracy</Text>
                    <Text style={styles.statValue}>
                      {getAccuracy(difficulty)}%
                    </Text>
                  </View>
                </View>
              ))}
            </ScrollView>
            <TouchableOpacity
              onPress={() => setStatsModalVisible(false)}
              style={[
                styles.modalButton,
                {
                  backgroundColor: colors.orange[500],
                  shadowColor: colors.orange[500],
                  marginTop: 16,
                },
              ]}
            >
              <Text
                style={[styles.modalButtonText, { color: colors.white[100] }]}
              >
                Close
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Feedback Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={feedbackModalVisible}
        onRequestClose={() => setFeedbackModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Ionicons
              name={isCorrect ? "checkmark-circle" : "close-circle"}
              size={60}
              color={isCorrect ? colors.green[500] : colors.orange[500]}
            />
            <Text style={styles.modalTitle}>
              {isCorrect ? "Correct!" : "Not Quite"}
            </Text>
            <View style={styles.feedbackContent}>
              {currentSentence && (
                <>
                  <View style={styles.feedbackAnswer}>
                    <Text style={styles.feedbackAnswerLabel}>Filipino:</Text>
                    <Text style={styles.feedbackAnswerText}>
                      {currentSentence.filipino}
                    </Text>
                  </View>
                  <View style={styles.feedbackAnswer}>
                    <Text style={styles.feedbackAnswerLabel}>English:</Text>
                    <Text style={styles.feedbackAnswerText}>
                      {currentSentence.english}
                    </Text>
                  </View>
                  {!isCorrect && userGuess && (
                    <View style={styles.feedbackAnswer}>
                      <Text style={styles.feedbackAnswerLabel}>
                        Your Answer:
                      </Text>
                      <Text style={styles.feedbackAnswerText}>{userGuess}</Text>
                    </View>
                  )}
                </>
              )}
            </View>
            <TouchableOpacity
              onPress={() => setFeedbackModalVisible(false)}
              style={[
                styles.modalButton,
                {
                  backgroundColor: isCorrect
                    ? colors.green[500]
                    : colors.orange[500],
                  shadowColor: isCorrect
                    ? colors.green[500]
                    : colors.orange[500],
                  marginTop: 16,
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
    </KeyboardAvoidingView>
  );
}
