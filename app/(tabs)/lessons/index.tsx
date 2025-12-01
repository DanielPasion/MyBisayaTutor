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
      color: colors.green[300],
      isLocked: false,
    },
    {
      id: 2,
      title: "Numbers",
      description: "Count from 1-20 and beyond",
      icon: "calculator",
      color: colors.green[400],
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
      color: colors.green[600],
      isLocked: false,
    },
    {
      id: 5,
      title: "Food & Drinks",
      description: "Common foods and dining vocab",
      icon: "restaurant",
      color: colors.green[700],
      isLocked: false,
    },
    {
      id: 6,
      title: "Body Parts",
      description: "Head, arms, legs, and more",
      icon: "body",
      color: colors.orange[300],
      isLocked: false,
    },
    {
      id: 7,
      title: "Common Verbs & Actions",
      description: "Go, come, eat, drink, sleep",
      icon: "flash",
      color: colors.orange[400],
      isLocked: false,
    },
    {
      id: 8,
      title: "Time Expressions",
      description: "Days, months, today, tomorrow",
      icon: "time",
      color: colors.orange[400],
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
      color: colors.orange[700],
      isLocked: false,
    },
    {
      id: 15,
      title: "Focus Markers (Ang/Ng/Sa)",
      description: "Understanding case marking system",
      icon: "eye",
      color: colors.orange[700],
      isLocked: false,
    },
    {
      id: 16,
      title: "Aspect Markers",
      description: "Completed, ongoing, and contemplated actions",
      icon: "reload",
      color: colors.orange[700],
      isLocked: false,
    },
    {
      id: 17,
      title: "Linkers (Nga/Ug)",
      description: "Connecting words and phrases properly",
      icon: "link",
      color: colors.orange[700],
      isLocked: false,
    },
    {
      id: 18,
      title: "Question Formation",
      description: "Who, what, where, when, why, how",
      icon: "help-circle",
      color: colors.orange[700],
      isLocked: false,
    },
    {
      id: 19,
      title: "Negation Patterns",
      description: "Different ways to express 'not' and 'no'",
      icon: "close-circle",
      color: colors.orange[700],
      isLocked: false,
    },
    {
      id: 20,
      title: "Affixes & Root Words",
      description: "Prefixes, infixes, and suffixes in Bisaya",
      icon: "cube",
      color: colors.orange[700],
      isLocked: false,
    },
  ];

  const totalLessons = lessons.length;
  const completedLessons = getCompletedCount();
  const progressPercentage = (completedLessons / totalLessons) * 100;

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
    progressSection: {
      marginBottom: 24,
      padding: 20,
      backgroundColor: isDarkMode
        ? colors.cream[100] + "F5"
        : colors.white[100] + "F5",
      borderRadius: 20,
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
    progressHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 12,
    },
    progressHeaderLeft: {
      flex: 1,
    },
    progressTitle: {
      fontSize: 18,
      fontWeight: "700",
      color: colors.text[100],
    },
    progressStats: {
      fontSize: 16,
      fontWeight: "600",
      color: colors.orange[600],
    },
    resetButton: {
      marginLeft: 12,
      padding: 8,
      borderRadius: 8,
      backgroundColor: colors.orange[500],
    },
    progressBarContainer: {
      height: 12,
      backgroundColor: colors.cream[300],
      borderRadius: 6,
      overflow: "hidden",
    },
    progressBarFill: {
      height: "100%",
      backgroundColor: colors.orange[500],
      borderRadius: 6,
    },
    lessonCard: {
      marginBottom: 16,
      backgroundColor: isDarkMode
        ? colors.cream[100] + "F5"
        : colors.white[100] + "F5",
      borderRadius: 20,
      padding: 20,
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
    lessonCardCompleted: {
      borderWidth: 2,
    },
    lessonCardLocked: {
      opacity: 0.6,
    },
    lessonHeader: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 12,
    },
    iconContainer: {
      width: 56,
      height: 56,
      borderRadius: 14,
      alignItems: "center",
      justifyContent: "center",
      marginRight: 16,
      position: "relative",
    },
    completedBadge: {
      position: "absolute",
      top: -4,
      right: -4,
      borderRadius: 12,
      width: 24,
      height: 24,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 2,
      borderColor: colors.white[100],
    },
    lessonContent: {
      flex: 1,
    },
    lessonTitle: {
      fontSize: 18,
      fontWeight: "700",
      marginBottom: 4,
    },
    lessonDescription: {
      fontSize: 14,
      color: colors.text[200],
      lineHeight: 20,
    },
    lessonFooter: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
      marginTop: 12,
      paddingTop: 12,
      borderTopWidth: 1,
      borderTopColor: colors.orange[300] + "40",
    },
    startButton: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 12,
      shadowColor: isDarkMode ? colors.orange[600] : colors.orange[400],
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 4,
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
      backgroundColor: colors.cream[300],
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 12,
    },
    lockedText: {
      fontSize: 13,
      fontWeight: "600",
      color: colors.text[200],
      marginLeft: 6,
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
                      color={colors.white[100]}
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
                    isCompleted && [
                      styles.lessonCardCompleted,
                      {
                        borderColor: lesson.color + "80",
                        backgroundColor: isDarkMode
                          ? lesson.color + "15"
                          : lesson.color + "10",
                      },
                    ],
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
                        { backgroundColor: lesson.color + "20" },
                      ]}
                    >
                      <Ionicons
                        name={lesson.icon}
                        size={28}
                        color={lesson.color}
                      />
                      {isCompleted && (
                        <View
                          style={[
                            styles.completedBadge,
                            { backgroundColor: lesson.color },
                          ]}
                        >
                          <Ionicons
                            name="checkmark"
                            size={14}
                            color={colors.white[100]}
                          />
                        </View>
                      )}
                    </View>
                    <View style={styles.lessonContent}>
                      <Text
                        style={[
                          styles.lessonTitle,
                          {
                            color: isCompleted
                              ? lesson.color
                              : colors.text[100],
                          },
                        ]}
                      >
                        {lesson.title}
                      </Text>
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
                          color={colors.text[200]}
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
    </View>
  );
}
