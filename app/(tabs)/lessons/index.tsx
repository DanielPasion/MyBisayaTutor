import Header from "@/app/components/Header";
import useThemeColors from "@/app/hooks/useThemeColor";
import { router } from "expo-router";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
  useColorScheme,
  Platform,
  StatusBar,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Lesson {
  id:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20;
  title: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  isLocked?: boolean;
}

interface LessonProgress {
  [key: string]: boolean; // lesson id as key, completed status as value
}

const PROGRESS_STORAGE_KEY = "@lesson_progress";

export default function Lessons() {
  const { colors } = useThemeColors();
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const [fadeAnim] = useState(new Animated.Value(0));
  const [scaleAnim] = useState(new Animated.Value(0.95));
  const [lessonProgress, setLessonProgress] = useState<LessonProgress>({});
  const [resetModalVisible, setResetModalVisible] = useState(false);

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

    loadProgress();
  }, [fadeAnim, scaleAnim]);

  const loadProgress = async () => {
    try {
      const storedProgress = await AsyncStorage.getItem(PROGRESS_STORAGE_KEY);
      if (storedProgress) {
        setLessonProgress(JSON.parse(storedProgress));
      }
    } catch (error) {
      console.error("Error loading progress:", error);
    }
  };

  const markLessonAsVisited = async (lessonId: number) => {
    try {
      const updatedProgress = {
        ...lessonProgress,
        [lessonId.toString()]: true,
      };
      setLessonProgress(updatedProgress);
      await AsyncStorage.setItem(
        PROGRESS_STORAGE_KEY,
        JSON.stringify(updatedProgress)
      );
    } catch (error) {
      console.error("Error saving progress:", error);
    }
  };

  const resetProgress = async () => {
    try {
      setLessonProgress({});
      await AsyncStorage.removeItem(PROGRESS_STORAGE_KEY);
      setResetModalVisible(false);
    } catch (error) {
      console.error("Error resetting progress:", error);
    }
  };

  const handleLessonPress = (lessonId: Lesson["id"]) => {
    markLessonAsVisited(lessonId);
    router.push(`/lessons/${lessonId}`);
  };

  const getCompletedCount = () => {
    return Object.values(lessonProgress).filter(Boolean).length;
  };

  const lessons: Lesson[] = [
    {
      id: 1,
      title: "Greetings & Basic Phrases",
      description: "Hello, goodbye, please, thank you",
      icon: "hand-right",
      color: colors.green[500],
      isLocked: false,
    },
    {
      id: 2,
      title: "Numbers",
      description: "Count from 1-20 and beyond",
      icon: "calculator",
      color: colors.green[500],
      isLocked: false,
    },
    {
      id: 3,
      title: "Family Members",
      description: "Parents, siblings, relatives",
      icon: "people",
      color: colors.green[500],
      isLocked: false,
    },
    {
      id: 4,
      title: "Colors",
      description: "Basic colors for descriptions",
      icon: "color-palette",
      color: colors.green[500],
      isLocked: false,
    },
    {
      id: 5,
      title: "Food & Drinks",
      description: "Common foods and dining vocab",
      icon: "restaurant",
      color: colors.green[500],
      isLocked: false,
    },
    {
      id: 6,
      title: "Body Parts",
      description: "Head, arms, legs, and more",
      icon: "body",
      color: colors.orange[500],
      isLocked: false,
    },
    {
      id: 7,
      title: "Common Verbs & Actions",
      description: "Go, come, eat, drink, sleep",
      icon: "flash",
      color: colors.orange[500],
      isLocked: false,
    },
    {
      id: 8,
      title: "Time Expressions",
      description: "Days, months, today, tomorrow",
      icon: "time",
      color: colors.orange[500],
      isLocked: false,
    },
    {
      id: 9,
      title: "Places & Locations",
      description: "Home, school, market, hospital",
      icon: "location",
      color: colors.orange[500],
      isLocked: false,
    },
    {
      id: 10,
      title: "Basic Adjectives",
      description: "Big, small, hot, cold, beautiful",
      icon: "star",
      color: colors.orange[500],
      isLocked: false,
    },
    {
      id: 11,
      title: "Verb Conjugation",
      description: "Past, present, future tense forms",
      icon: "git-branch",
      color: colors.orange[600],
      isLocked: false,
    },
    {
      id: 12,
      title: "Possession & Ownership",
      description: "My, your, his, her - showing ownership",
      icon: "key",
      color: colors.orange[600],
      isLocked: false,
    },
    {
      id: 13,
      title: "Pronouns & Cases",
      description: "Subject, object, and possessive pronouns",
      icon: "person-circle",
      color: colors.orange[600],
      isLocked: false,
    },
    {
      id: 14,
      title: "Sentence Structure",
      description: "Word order and basic grammar rules",
      icon: "list",
      color: colors.orange[600],
      isLocked: false,
    },
    {
      id: 15,
      title: "Focus Markers (Ang/Ng/Sa)",
      description: "Understanding case marking system",
      icon: "eye",
      color: colors.orange[600],
      isLocked: false,
    },
    {
      id: 16,
      title: "Aspect Markers",
      description: "Completed, ongoing, and contemplated actions",
      icon: "reload",
      color: colors.orange[600],
      isLocked: false,
    },
    {
      id: 17,
      title: "Linkers (Nga/Ug)",
      description: "Connecting words and phrases properly",
      icon: "link",
      color: colors.orange[600],
      isLocked: false,
    },
    {
      id: 18,
      title: "Question Formation",
      description: "Who, what, where, when, why, how",
      icon: "help-circle",
      color: colors.orange[600],
      isLocked: false,
    },
    {
      id: 19,
      title: "Negation Patterns",
      description: "Different ways to express 'not' and 'no'",
      icon: "close-circle",
      color: colors.orange[600],
      isLocked: false,
    },
    {
      id: 20,
      title: "Affixes & Root Words",
      description: "Prefixes, infixes, and suffixes in Bisaya",
      icon: "cube",
      color: colors.orange[600],
      isLocked: false,
    },
  ];

  const totalLessons = lessons.length;
  const completedLessons = getCompletedCount();
  const progressPercentage = (completedLessons / totalLessons) * 100;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? "#1a1a1a" : colors.cream[100],
    },
    contentContainer: {
      flex: 1,
      backgroundColor: isDarkMode ? "#1a1a1a" : colors.cream[100],
    },
    scrollContent: {
      padding: 20,
      paddingBottom: Platform.OS === "ios" ? 32 : 24,
    },
    progressSection: {
      marginBottom: 28,
      padding: 24,
      backgroundColor: isDarkMode ? "#2a2a2a" : colors.white[100],
      borderRadius: 24,
      borderWidth: isDarkMode ? 0 : 1,
      borderColor: colors.orange[300] + "30",
      shadowColor: isDarkMode ? "#000" : colors.orange[400],
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: isDarkMode ? 0.4 : 0.08,
      shadowRadius: 12,
      elevation: 5,
    },
    progressHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 16,
    },
    progressHeaderLeft: {
      flex: 1,
    },
    progressTitle: {
      fontSize: 20,
      fontWeight: "800",
      color: isDarkMode ? "#ffffff" : colors.text[100],
      marginBottom: 4,
    },
    progressStats: {
      fontSize: 28,
      fontWeight: "800",
      color: colors.orange[500],
      letterSpacing: 0.5,
    },
    resetButton: {
      marginLeft: 12,
      padding: 10,
      borderRadius: 12,
      backgroundColor: isDarkMode
        ? colors.orange[600] + "30"
        : colors.orange[500] + "20",
    },
    progressBarContainer: {
      height: 10,
      backgroundColor: isDarkMode ? "#3a3a3a" : colors.cream[200],
      borderRadius: 8,
      overflow: "hidden",
    },
    progressBarFill: {
      height: "100%",
      backgroundColor: colors.orange[500],
      borderRadius: 8,
    },
    lessonCard: {
      marginBottom: 16,
      backgroundColor: isDarkMode ? "#2a2a2a" : colors.white[100],
      borderRadius: 20,
      padding: 20,
      borderWidth: isDarkMode ? 0 : 1,
      borderColor: colors.cream[300],
      shadowColor: isDarkMode ? "#000" : colors.text[400],
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: isDarkMode ? 0.3 : 0.06,
      shadowRadius: 8,
      elevation: 3,
    },
    lessonCardCompleted: {
      borderWidth: 2,
      borderColor: isDarkMode ? colors.green[500] + "50" : colors.green[400],
      backgroundColor: isDarkMode
        ? colors.green[600] + "15"
        : colors.green[400] + "08",
    },
    lessonCardLocked: {
      opacity: 0.5,
    },
    lessonHeader: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 12,
    },
    iconContainer: {
      width: 60,
      height: 60,
      borderRadius: 16,
      alignItems: "center",
      justifyContent: "center",
      marginRight: 16,
      position: "relative",
    },
    completedBadge: {
      position: "absolute",
      top: -6,
      right: -6,
      borderRadius: 14,
      width: 28,
      height: 28,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 3,
      borderColor: isDarkMode ? "#2a2a2a" : colors.white[100],
      backgroundColor: colors.green[500],
    },
    lessonContent: {
      flex: 1,
    },
    lessonTitle: {
      fontSize: 17,
      fontWeight: "700",
      marginBottom: 6,
      color: isDarkMode ? "#ffffff" : colors.text[100],
    },
    lessonDescription: {
      fontSize: 14,
      color: isDarkMode ? "#a0a0a0" : colors.text[200],
      lineHeight: 20,
    },
    lessonFooter: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
      marginTop: 12,
      paddingTop: 12,
      borderTopWidth: 1,
      borderTopColor: isDarkMode ? "#3a3a3a" : colors.cream[300],
    },
    startButton: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 18,
      paddingVertical: 10,
      borderRadius: 14,
      shadowColor: isDarkMode ? "#000" : colors.orange[500],
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: isDarkMode ? 0.4 : 0.2,
      shadowRadius: 6,
      elevation: 3,
    },
    startButtonText: {
      fontSize: 14,
      fontWeight: "700",
      color: colors.white[100],
      marginLeft: 6,
    },
    lockedBadge: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: isDarkMode ? "#3a3a3a" : colors.cream[300],
      paddingHorizontal: 14,
      paddingVertical: 8,
      borderRadius: 12,
    },
    lockedText: {
      fontSize: 13,
      fontWeight: "600",
      color: isDarkMode ? "#a0a0a0" : colors.text[200],
      marginLeft: 6,
    },
    modalOverlay: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.7)",
    },
    modalContent: {
      backgroundColor: isDarkMode ? "#2a2a2a" : colors.white[100],
      borderRadius: 24,
      padding: 32,
      alignItems: "center",
      width: "88%",
      maxWidth: 400,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.3,
      shadowRadius: 20,
      elevation: 15,
    },
    modalTitle: {
      fontSize: 22,
      fontWeight: "900",
      marginVertical: 16,
      textAlign: "center",
      color: isDarkMode ? "#ffffff" : colors.text[400],
    },
    modalText: {
      fontSize: 15,
      marginBottom: 28,
      textAlign: "center",
      lineHeight: 22,
      color: isDarkMode ? "#a0a0a0" : colors.text[300],
    },
    modalButtonRow: {
      flexDirection: "row",
      gap: 12,
      width: "100%",
    },
    modalButton: {
      flex: 1,
      paddingVertical: 14,
      paddingHorizontal: 24,
      borderRadius: 14,
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
  });

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor="transparent"
        translucent
      />
      <Header />
      <View style={styles.contentContainer}>
        <Animated.View
          style={{
            flex: 1,
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          }}
        >
          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            bounces={false}
          >
            {/* Progress Section */}
            <View style={styles.progressSection}>
              <View style={styles.progressHeader}>
                <View style={styles.progressHeaderLeft}>
                  <Text style={styles.progressTitle}>Your Progress</Text>
                </View>
                <Text style={styles.progressStats}>
                  {completedLessons}/{totalLessons}
                </Text>
                {completedLessons > 0 && (
                  <TouchableOpacity
                    style={styles.resetButton}
                    onPress={() => setResetModalVisible(true)}
                  >
                    <Ionicons
                      name="refresh"
                      size={18}
                      color={colors.orange[500]}
                    />
                  </TouchableOpacity>
                )}
              </View>
              <View style={styles.progressBarContainer}>
                <Animated.View
                  style={[
                    styles.progressBarFill,
                    { width: `${progressPercentage}%` },
                  ]}
                />
              </View>
            </View>

            {/* Lessons List */}
            {lessons.map((lesson) => {
              const isCompleted = lessonProgress[lesson.id.toString()] || false;

              return (
                <TouchableOpacity
                  key={lesson.id}
                  style={[
                    styles.lessonCard,
                    isCompleted && styles.lessonCardCompleted,
                    lesson.isLocked && styles.lessonCardLocked,
                  ]}
                  disabled={lesson.isLocked}
                  activeOpacity={0.7}
                  onPress={() => handleLessonPress(lesson.id)}
                >
                  <View style={styles.lessonHeader}>
                    <View
                      style={[
                        styles.iconContainer,
                        {
                          backgroundColor: isDarkMode
                            ? lesson.color + "25"
                            : lesson.color + "20",
                        },
                      ]}
                    >
                      <Ionicons
                        name={lesson.icon}
                        size={28}
                        color={lesson.color}
                      />
                      {isCompleted && (
                        <View style={styles.completedBadge}>
                          <Ionicons
                            name="checkmark"
                            size={16}
                            color={colors.white[100]}
                          />
                        </View>
                      )}
                    </View>
                    <View style={styles.lessonContent}>
                      <Text style={styles.lessonTitle}>{lesson.title}</Text>
                      <Text style={styles.lessonDescription}>
                        {lesson.description}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.lessonFooter}>
                    {lesson.isLocked ? (
                      <View style={styles.lockedBadge}>
                        <Ionicons
                          name="lock-closed"
                          size={14}
                          color={isDarkMode ? "#a0a0a0" : colors.text[200]}
                        />
                        <Text style={styles.lockedText}>Locked</Text>
                      </View>
                    ) : (
                      <View
                        style={[
                          styles.startButton,
                          {
                            backgroundColor: lesson.color,
                          },
                        ]}
                      >
                        <Ionicons
                          name={isCompleted ? "checkmark-circle" : "play"}
                          size={16}
                          color={colors.white[100]}
                        />
                        <Text style={styles.startButtonText}>
                          {isCompleted ? "Review" : "Start"}
                        </Text>
                      </View>
                    )}
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </Animated.View>
      </View>

      {/* Reset Confirmation Modal */}
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
              This will clear all your lesson progress. This action cannot be
              undone.
            </Text>
            <View style={styles.modalButtonRow}>
              <TouchableOpacity
                onPress={() => setResetModalVisible(false)}
                style={[
                  styles.modalButton,
                  {
                    backgroundColor: isDarkMode ? "#3a3a3a" : colors.cream[300],
                    shadowColor: isDarkMode ? "#000" : colors.cream[400],
                  },
                ]}
              >
                <Text
                  style={[
                    styles.modalButtonText,
                    { color: isDarkMode ? "#ffffff" : colors.text[400] },
                  ]}
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
    </View>
  );
}
