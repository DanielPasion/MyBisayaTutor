import Alert from "@/app/components/Alert";
import Header from "@/app/components/Header";
import useThemeColors from "@/app/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Animated,
  useColorScheme,
  StatusBar,
  Modal,
} from "react-native";
import * as Speech from "expo-speech";

export default function Translator() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const { colors } = useThemeColors();
  const [incomingText, setIncomingText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [translationDirection, setTranslationDirection] = useState("en_to_ceb");
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [showNoInternetModal, setShowNoInternetModal] = useState(false);

  const [fadeAnim] = useState(new Animated.Value(0));
  const [scaleAnim] = useState(new Animated.Value(0.95));
  const [slideAnim] = useState(new Animated.Value(0));
  const [floatingElements] = useState(
    Array.from({ length: 3 }, () => ({
      x: new Animated.Value(Math.random() * 300),
      y: new Animated.Value(Math.random() * 400),
      opacity: new Animated.Value(0.06),
      rotate: new Animated.Value(0),
    }))
  );

  useEffect(() => {
    const animateFloatingElements = () => {
      floatingElements.forEach((element) => {
        Animated.loop(
          Animated.parallel([
            Animated.timing(element.x, {
              toValue: Math.random() * 300,
              duration: 12000 + Math.random() * 5000,
              useNativeDriver: true,
            }),
            Animated.timing(element.y, {
              toValue: Math.random() * 400,
              duration: 10000 + Math.random() * 7000,
              useNativeDriver: true,
            }),
            Animated.timing(element.rotate, {
              toValue: 360,
              duration: 30000 + Math.random() * 10000,
              useNativeDriver: true,
            }),
          ])
        ).start();
      });
    };

    animateFloatingElements();
  }, [floatingElements]);

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

  const toggleTranslationDirection = () => {
    setTranslationDirection((prev) =>
      prev === "en_to_ceb" ? "ceb_to_en" : "en_to_ceb"
    );
    setTranslatedText("");
    setIsError(false);
    setMessage("");
  };

  const translate = async () => {
    if (!incomingText.trim() || isLoading) return;

    setIsError(false);
    setMessage("");
    setIsLoading(true);
    setTranslatedText("");

    Animated.timing(slideAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();

    try {
      const sourceLang = translationDirection === "en_to_ceb" ? "en" : "ceb";
      const targetLang = translationDirection === "en_to_ceb" ? "ceb" : "en";

      const response = await fetch(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(
          incomingText
        )}`
      );

      if (!response.ok) {
        throw new Error("Translation failed");
      }

      const data = await response.json();

      let translated = "";
      if (data && data[0]) {
        data[0].forEach((item: string[]) => {
          if (item[0]) {
            translated += item[0];
          }
        });
      }

      if (translated) {
        setTranslatedText(translated);
      } else {
        throw new Error("No translation received");
      }
    } catch (error) {
      console.error("Translation error:", error);
      setIsError(true);
      setMessage(
        "Translation failed. Please check your connection and try again."
      );
      setTranslatedText("");
      setShowNoInternetModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  const clearAll = () => {
    setIncomingText("");
    setTranslatedText("");
    setIsError(false);
    setMessage("");
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const getTranslationDirectionText = () => {
    if (translationDirection === "en_to_ceb") {
      return "English → Bisaya";
    } else {
      return "Bisaya → English";
    }
  };

  const speakText = async (text: string) => {
    // Don't queue audio if already playing
    if (isPlayingAudio) {
      return;
    }

    try {
      setIsPlayingAudio(true);

      const voices = await Speech.getAvailableVoicesAsync();

      // Try to find voices in order of preference for Filipino/Cebuano
      const preferredLanguages = [
        "fil", // Filipino
        "tl", // Tagalog
        "id", // Indonesian (phonetically similar)
        "ms", // Malay (also similar)
      ];

      let selectedVoice = null;

      for (const lang of preferredLanguages) {
        selectedVoice = voices.find((voice) =>
          voice.language.toLowerCase().includes(lang)
        );
        if (selectedVoice) break;
      }

      // If no similar voice found, try to find any Indonesian voice
      if (!selectedVoice) {
        selectedVoice = voices.find(
          (voice) =>
            voice.language.toLowerCase().includes("id") ||
            voice.identifier.toLowerCase().includes("indonesia") ||
            voice.identifier.toLowerCase().includes("damayanti")
        );
      }

      await Speech.speak(text, {
        language: selectedVoice?.language || "id-ID",
        voice: selectedVoice?.identifier,
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
      setShowNoInternetModal(true);
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode
        ? colors.cream[200] + "F0"
        : colors.cream[100] + "F8",
    },
    backgroundContainer: {
      flex: 1,
      position: "relative",
    },
    floatingElement: {
      position: "absolute",
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: colors.orange[300] + "15",
    },
    contentContainer: {
      flex: 1,
      zIndex: 10,
    },
    scrollContainer: {
      flexGrow: 1,
      padding: 16,
      paddingBottom: 8,
    },
    directionToggle: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 16,
      paddingHorizontal: 20,
      borderRadius: 20,
      marginBottom: 20,
      gap: 12,
      backgroundColor: isDarkMode
        ? colors.orange[600] + "F0"
        : colors.orange[500] + "F0",
      borderWidth: 1.5,
      borderColor: colors.orange[400] + "60",
      shadowColor: isDarkMode ? colors.orange[600] : colors.orange[400],
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.15,
      shadowRadius: 6,
      elevation: 4,
    },
    directionText: {
      fontSize: 16,
      fontWeight: "800",
      color: colors.white[100],
    },
    directionIcon: {
      padding: 4,
      backgroundColor: colors.white[100] + "30",
      borderRadius: 8,
    },
    card: {
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
    cardHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 16,
    },
    cardTitle: {
      fontSize: 17,
      fontWeight: "700",
      color: colors.text[400],
    },
    cardIcon: {
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: colors.orange[500] + "20",
      alignItems: "center",
      justifyContent: "center",
    },
    input: {
      borderWidth: 2,
      borderRadius: 16,
      padding: 16,
      fontSize: 16,
      minHeight: 120,
      textAlignVertical: "top",
      marginBottom: 16,
      backgroundColor: isDarkMode
        ? colors.cream[200] + "F0"
        : colors.white[200] + "F0",
      borderColor: isDarkMode
        ? colors.orange[400] + "80"
        : colors.orange[300] + "80",
      color: colors.text[400],
      fontWeight: "500",
      lineHeight: 22,
    },
    buttonRow: {
      flexDirection: "row",
      gap: 12,
    },
    actionButton: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 14,
      paddingHorizontal: 18,
      borderRadius: 16,
      gap: 8,
      borderWidth: 1.5,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 4,
      elevation: 3,
    },
    translateButton: {
      flex: 2,
      backgroundColor: isDarkMode ? colors.orange[600] : colors.orange[500],
      borderColor: colors.orange[400] + "60",
      shadowColor: colors.orange[400],
    },
    clearButton: {
      flex: 1,
      backgroundColor: isDarkMode ? colors.green[600] : colors.green[500],
      borderColor: colors.green[400] + "60",
      shadowColor: colors.green[400],
    },
    buttonText: {
      color: colors.white[100],
      fontWeight: "800",
      fontSize: 14,
    },
    loadingContainer: {
      paddingVertical: 20,
      alignItems: "center",
      gap: 8,
    },
    loadingText: {
      fontSize: 14,
      fontWeight: "600",
      color: colors.text[300],
    },
    errorContainer: {
      flexDirection: "row",
      alignItems: "center",
      padding: 16,
      borderRadius: 16,
      borderWidth: 1.5,
      gap: 12,
      marginTop: 12,
      backgroundColor: isDarkMode
        ? colors.orange[100] + "F0"
        : colors.orange[100] + "F0",
      borderColor: colors.orange[400] + "60",
      shadowColor: colors.orange[400],
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    errorIcon: {
      padding: 4,
      backgroundColor: colors.orange[500] + "20",
      borderRadius: 8,
    },
    errorText: {
      fontSize: 14,
      fontWeight: "600",
      flex: 1,
      color: colors.orange[600],
      lineHeight: 18,
    },
    translationContainer: {
      backgroundColor: colors.green[100] + "F0",
      borderRadius: 16,
      padding: 20,
      marginBottom: 16,
      borderWidth: 2,
      borderColor: colors.green[300] + "60",
      shadowColor: colors.green[400],
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    translatedText: {
      fontSize: 17,
      fontWeight: "600",
      lineHeight: 26,
      color: colors.green[600],
    },
    speakButton: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 16,
      paddingVertical: 10,
      borderRadius: 14,
      gap: 6,
      backgroundColor: isDarkMode ? colors.green[600] : colors.green[500],
      borderWidth: 1.5,
      borderColor: colors.green[400] + "60",
      shadowColor: colors.green[400],
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 4,
      elevation: 3,
    },
    speakButtonDisabled: {
      opacity: 0.6,
    },
    speakButtonText: {
      color: colors.white[100],
      fontSize: 13,
      fontWeight: "700",
    },
    tipContainer: {
      marginTop: 8,
    },
    // Modal styles
    modalOverlay: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },
    modalContent: {
      width: "100%",
      maxWidth: 400,
      borderRadius: 20,
      padding: 24,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 10,
      elevation: 10,
    },
    modalIconContainer: {
      alignItems: "center",
      marginBottom: 16,
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: "700",
      textAlign: "center",
      marginBottom: 12,
    },
    modalMessage: {
      fontSize: 15,
      textAlign: "center",
      marginBottom: 20,
      lineHeight: 22,
    },
    modalButton: {
      paddingVertical: 14,
      borderRadius: 12,
      alignItems: "center",
      justifyContent: "center",
    },
    modalButtonText: {
      fontSize: 16,
      fontWeight: "600",
    },
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
    >
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor="transparent"
        translucent
      />

      <View style={styles.backgroundContainer}>
        {/* Floating background elements */}
        {floatingElements.map((element, index) => (
          <Animated.View
            key={index}
            style={[
              styles.floatingElement,
              {
                transform: [
                  { translateX: element.x },
                  { translateY: element.y },
                  {
                    rotate: element.rotate.interpolate({
                      inputRange: [0, 360],
                      outputRange: ["0deg", "360deg"],
                    }),
                  },
                ],
                opacity: element.opacity,
              },
            ]}
          />
        ))}

        <View style={styles.contentContainer}>
          <Header />

          <Animated.View
            style={{
              flex: 1,
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }],
            }}
          >
            <ScrollView
              contentContainerStyle={styles.scrollContainer}
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
              keyboardDismissMode="on-drag"
            >
              {/* Translation Direction Toggle */}
              <TouchableOpacity
                style={styles.directionToggle}
                onPress={toggleTranslationDirection}
                disabled={isLoading}
              >
                <Text style={styles.directionText}>
                  {getTranslationDirectionText()}
                </Text>
                <View style={styles.directionIcon}>
                  <Ionicons
                    name="swap-vertical"
                    size={18}
                    color={colors.white[100]}
                  />
                </View>
              </TouchableOpacity>

              {/* Input Card */}
              <View style={styles.card}>
                <View style={styles.cardHeader}>
                  <Text style={styles.cardTitle}>
                    {translationDirection === "en_to_ceb"
                      ? "English Text"
                      : "Bisaya Text"}
                  </Text>
                  <View style={styles.cardIcon}>
                    <Ionicons
                      name={
                        translationDirection === "en_to_ceb"
                          ? "chatbox"
                          : "language"
                      }
                      size={16}
                      color={colors.orange[600]}
                    />
                  </View>
                </View>

                <TextInput
                  style={styles.input}
                  onSubmitEditing={translate}
                  onChangeText={setIncomingText}
                  value={incomingText}
                  placeholder={
                    translationDirection === "en_to_ceb"
                      ? "Type English text to translate..."
                      : "Type Bisaya text to translate..."
                  }
                  placeholderTextColor={colors.text[200]}
                  multiline
                  returnKeyType="send"
                  blurOnSubmit={false}
                />

                {/* Action Buttons */}
                <View style={styles.buttonRow}>
                  <TouchableOpacity
                    style={[
                      styles.actionButton,
                      styles.translateButton,
                      {
                        opacity: isLoading || !incomingText.trim() ? 0.6 : 1,
                      },
                    ]}
                    onPress={translate}
                    disabled={isLoading || !incomingText.trim()}
                  >
                    <Ionicons
                      name="language"
                      size={18}
                      color={colors.white[100]}
                    />
                    <Text style={styles.buttonText}>
                      {isLoading ? "Translating..." : "Translate"}
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[styles.actionButton, styles.clearButton]}
                    onPress={clearAll}
                    disabled={isLoading}
                  >
                    <Ionicons
                      name="refresh"
                      size={16}
                      color={colors.white[100]}
                    />
                    <Text style={styles.buttonText}>Clear</Text>
                  </TouchableOpacity>
                </View>

                {/* Loading Indicator */}
                {isLoading && (
                  <View style={styles.loadingContainer}>
                    <ActivityIndicator
                      size="large"
                      color={colors.orange[500]}
                    />
                    <Text style={styles.loadingText}>
                      Processing translation...
                    </Text>
                  </View>
                )}

                {/* Error Message */}
                {isError && (
                  <Animated.View
                    style={[
                      styles.errorContainer,
                      {
                        transform: [
                          {
                            translateY: slideAnim.interpolate({
                              inputRange: [0, 1],
                              outputRange: [20, 0],
                            }),
                          },
                        ],
                        opacity: slideAnim,
                      },
                    ]}
                  >
                    <View style={styles.errorIcon}>
                      <Ionicons
                        name="warning"
                        size={18}
                        color={colors.orange[600]}
                      />
                    </View>
                    <Text style={styles.errorText}>{message}</Text>
                  </Animated.View>
                )}
              </View>

              {/* Translation Result */}
              {translatedText && (
                <Animated.View
                  style={[
                    styles.card,
                    {
                      transform: [
                        {
                          translateY: slideAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [30, 0],
                          }),
                        },
                      ],
                      opacity: slideAnim,
                    },
                  ]}
                >
                  <View style={styles.cardHeader}>
                    <Text style={styles.cardTitle}>
                      {translationDirection === "en_to_ceb"
                        ? "Bisaya Translation"
                        : "English Translation"}
                    </Text>
                    <TouchableOpacity
                      style={[
                        styles.speakButton,
                        isPlayingAudio && styles.speakButtonDisabled,
                      ]}
                      onPress={() => speakText(translatedText)}
                      disabled={isPlayingAudio}
                    >
                      <Ionicons
                        name={isPlayingAudio ? "volume-high" : "volume-high"}
                        size={16}
                        color={colors.white[100]}
                      />
                      <Text style={styles.speakButtonText}>
                        {isPlayingAudio ? "Playing..." : "Listen"}
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.translationContainer}>
                    <Text style={styles.translatedText}>{translatedText}</Text>
                  </View>
                </Animated.View>
              )}

              {/* Quick Tips */}
              <View style={styles.tipContainer}>
                <Alert
                  text={
                    translationDirection === "en_to_ceb"
                      ? 'Try translating common phrases like "How are you?" or "Thank you" to practice everyday Bisaya.'
                      : 'Try translating common Bisaya phrases like "Kumusta ka?" or "Salamat" to improve your English.'
                  }
                />
              </View>
            </ScrollView>
          </Animated.View>
        </View>
      </View>

      {/* No Internet Modal */}
      <Modal
        visible={showNoInternetModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowNoInternetModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View
            style={[
              styles.modalContent,
              { backgroundColor: colors.cream[100] },
            ]}
          >
            <View style={styles.modalIconContainer}>
              <Ionicons
                name="cloud-offline"
                size={64}
                color={colors.orange[500]}
              />
            </View>

            <Text style={[styles.modalTitle, { color: colors.orange[700] }]}>
              No Internet Connection
            </Text>

            <Text style={[styles.modalMessage, { color: colors.text[300] }]}>
              Please make sure you have a valid internet connection and try
              again.
            </Text>

            <TouchableOpacity
              style={[
                styles.modalButton,
                { backgroundColor: colors.orange[500] },
              ]}
              onPress={() => setShowNoInternetModal(false)}
            >
              <Text
                style={[styles.modalButtonText, { color: colors.white[100] }]}
              >
                OK
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
}
