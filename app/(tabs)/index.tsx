import Header from "@/app/components/Header";
import useThemeColors from "@/app/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useColorScheme,
  Animated,
  StatusBar,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from "react-native";

export default function HomeIndex() {
  const { colors } = useThemeColors();
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const [fadeAnim] = useState(new Animated.Value(0));
  const [scaleAnim] = useState(new Animated.Value(0.95));
  const [currentTime, setCurrentTime] = useState(new Date());

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
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  const features = [
    {
      route: "/listening",
      icon: "headset",
      title: "Listening Practice",
      description: "Train your ear with native Bisaya audio",
      color: colors.orange[500],
      gradient: [colors.orange[400], colors.orange[600]],
    },
    {
      route: "/vocab",
      icon: "layers",
      title: "Vocabulary",
      description: "Build your word bank with flashcards",
      color: colors.green[500],
      gradient: [colors.green[400], colors.green[600]],
    },
    {
      route: "/lessons",
      icon: "book",
      title: "Grammar Lessons",
      description: "Master the structure of Bisaya",
      color: colors.orange[600],
      gradient: [colors.orange[500], colors.orange[700]],
    },
    {
      route: "/translator",
      icon: "language",
      title: "Translator",
      description: "Translate between English and Bisaya",
      color: colors.green[600],
      gradient: [colors.green[500], colors.green[700]],
    },
  ];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.cream["500"],
    },
    gradientBackground: {
      flex: 1,
      backgroundColor: isDarkMode ? colors.cream[300] : colors.cream[100],
    },
    contentContainer: {
      flex: 1,
    },
    content: {
      flexGrow: 1,
      padding: 20,
      paddingBottom: 24,
    },
    welcomeSection: {
      marginBottom: 40,
      padding: 32,
      backgroundColor: isDarkMode
        ? colors.cream[100] + "F5"
        : colors.white[100] + "F5",
      borderRadius: 24,
      borderWidth: 1.5,
      borderColor: isDarkMode
        ? colors.orange[400] + "50"
        : colors.orange[300] + "60",
      shadowColor: isDarkMode ? colors.orange[600] : colors.orange[400],
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 5,
      alignItems: "center",
    },
    greetingText: {
      fontSize: 20,
      fontWeight: "600",
      color: colors.orange[600],
      marginBottom: 8,
      textAlign: "center",
    },
    welcomeText: {
      fontSize: 32,
      fontWeight: "800",
      color: colors.text[400],
      marginBottom: 16,
      textAlign: "center",
    },
    subtitle: {
      fontSize: 16,
      fontWeight: "500",
      color: colors.text[300],
      lineHeight: 24,
      textAlign: "center",
      maxWidth: 320,
    },
    sectionTitle: {
      fontSize: 22,
      fontWeight: "800",
      color: colors.text[400],
      marginBottom: 20,
      paddingHorizontal: 4,
    },
    featuresGrid: {
      gap: 16,
    },
    featureCard: {
      backgroundColor: isDarkMode
        ? colors.cream[100] + "F5"
        : colors.white[100] + "F5",
      padding: 24,
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
      flexDirection: "row",
      alignItems: "center",
      gap: 20,
    },
    featureIconContainer: {
      width: 64,
      height: 64,
      borderRadius: 16,
      justifyContent: "center",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    featureContent: {
      flex: 1,
    },
    featureTitle: {
      fontSize: 18,
      fontWeight: "700",
      color: colors.text[400],
      marginBottom: 6,
    },
    featureDescription: {
      fontSize: 14,
      fontWeight: "500",
      color: colors.text[300],
      lineHeight: 20,
    },
    featureArrow: {
      opacity: 0.6,
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor="transparent"
        translucent
      />

      <View style={styles.gradientBackground}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={styles.contentContainer}
        >
          <Header />

          <Animated.View
            style={{
              flex: 1,
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }],
            }}
          >
            <ScrollView
              contentContainerStyle={styles.content}
              showsVerticalScrollIndicator={false}
              bounces={true}
            >
              <View style={styles.welcomeSection}>
                <Text style={styles.greetingText}>{getGreeting()}!</Text>
                <Text style={styles.welcomeText}>
                  Welcome to My Bisaya Tutor
                </Text>
                <Text style={styles.subtitle}>
                  Your journey to speaking Cebuano starts here. Choose a
                  learning path below!
                </Text>
              </View>

              <Text style={styles.sectionTitle}>Start Learning</Text>

              <View style={styles.featuresGrid}>
                {features.map((feature, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.featureCard}
                    onPress={() => router.push(feature.route)}
                    activeOpacity={0.7}
                  >
                    <View
                      style={[
                        styles.featureIconContainer,
                        { backgroundColor: feature.color },
                      ]}
                    >
                      <Ionicons
                        name={feature.icon as any}
                        size={32}
                        color={colors.white[100]}
                      />
                    </View>

                    <View style={styles.featureContent}>
                      <Text style={styles.featureTitle}>{feature.title}</Text>
                      <Text style={styles.featureDescription}>
                        {feature.description}
                      </Text>
                    </View>

                    <Ionicons
                      name="chevron-forward"
                      size={24}
                      color={colors.text[300]}
                      style={styles.featureArrow}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </Animated.View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}
