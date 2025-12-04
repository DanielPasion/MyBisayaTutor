import Header from "@/app/components/Header";
import useThemeColors from "@/app/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
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
} from "react-native";

export default function Lesson16() {
  const { colors } = useThemeColors();
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const [fadeAnim] = useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

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
    backButton: {
      flexDirection: "row",
      alignItems: "center",
      padding: 16,
      paddingTop: 16,
      paddingBottom: 8,
    },
    backButtonText: {
      fontSize: 16,
      fontWeight: "600",
      color: colors.orange[500],
      marginLeft: 8,
    },
    scrollContent: {
      padding: 20,
      paddingTop: 8,
      paddingBottom: Platform.OS === "ios" ? 32 : 24,
    },
    headerSection: {
      marginBottom: 28,
      padding: 28,
      backgroundColor: isDarkMode
        ? colors.cream[100] + "F5"
        : colors.white[100] + "F5",
      borderRadius: 24,
      borderWidth: 2,
      borderColor: colors.orange[800] + "40",
      shadowColor: colors.orange[800],
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.15,
      shadowRadius: 12,
      elevation: 6,
      alignItems: "center",
    },
    lessonNumber: {
      fontSize: 13,
      fontWeight: "800",
      color: colors.orange[800],
      marginBottom: 10,
      textTransform: "uppercase",
      letterSpacing: 2,
      textAlign: "center",
    },
    headerTitle: {
      fontSize: 30,
      fontWeight: "800",
      color: colors.text[100],
      marginBottom: 12,
      textAlign: "center",
    },
    headerDescription: {
      fontSize: 16,
      color: colors.text[200],
      lineHeight: 24,
      textAlign: "center",
    },
    sectionTitle: {
      fontSize: 26,
      fontWeight: "800",
      color: colors.text[100],
      marginTop: 32,
      marginBottom: 8,
      textAlign: "center",
    },
    sectionSubtitle: {
      fontSize: 15,
      color: colors.text[200],
      marginBottom: 24,
      lineHeight: 22,
      fontStyle: "italic",
      textAlign: "center",
    },
    aspectCard: {
      backgroundColor: isDarkMode
        ? colors.cream[100] + "F5"
        : colors.white[100] + "F5",
      borderRadius: 20,
      padding: 24,
      marginBottom: 20,
      borderWidth: 2,
      borderColor: colors.orange[800] + "30",
      shadowColor: colors.orange[800],
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.12,
      shadowRadius: 6,
      elevation: 4,
    },
    aspectHeader: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 16,
    },
    aspectTitle: {
      fontSize: 22,
      fontWeight: "800",
      color: colors.text[100],
      marginLeft: 12,
    },
    aspectDescription: {
      fontSize: 15,
      color: colors.text[200],
      lineHeight: 22,
      marginBottom: 16,
      textAlign: "center",
    },
    timelineRow: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 12,
      paddingHorizontal: 8,
    },
    timelineDot: {
      width: 12,
      height: 12,
      borderRadius: 6,
      backgroundColor: colors.orange[800],
      marginRight: 12,
    },
    timelineText: {
      flex: 1,
      fontSize: 15,
      color: colors.text[100],
      lineHeight: 22,
    },
    patternBox: {
      backgroundColor: colors.orange[800] + "18",
      padding: 24,
      borderRadius: 20,
      marginBottom: 20,
      borderWidth: 2,
      borderColor: colors.orange[800],
      alignItems: "center",
    },
    patternTitle: {
      fontSize: 20,
      fontWeight: "800",
      color: colors.text[100],
      marginBottom: 14,
      textAlign: "center",
    },
    patternText: {
      fontSize: 15,
      color: colors.text[200],
      lineHeight: 24,
      marginBottom: 10,
      textAlign: "center",
    },
    exampleRow: {
      flexDirection: "row",
      alignItems: "flex-start",
      marginBottom: 12,
      width: "100%",
    },
    bulletPoint: {
      fontSize: 18,
      color: colors.orange[800],
      marginRight: 12,
      fontWeight: "700",
    },
    exampleText: {
      flex: 1,
      fontSize: 15,
      color: colors.text[100],
      lineHeight: 22,
    },
    conjugationBox: {
      backgroundColor: isDarkMode
        ? colors.cream[100] + "F5"
        : colors.white[100] + "F5",
      borderRadius: 20,
      padding: 24,
      marginBottom: 20,
      borderWidth: 2,
      borderColor: colors.orange[800] + "30",
      shadowColor: colors.orange[800],
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.12,
      shadowRadius: 6,
      elevation: 4,
    },
    conjugationTitle: {
      fontSize: 18,
      fontWeight: "800",
      color: colors.text[100],
      marginBottom: 16,
      textAlign: "center",
    },
    conjugationRow: {
      marginBottom: 16,
      paddingBottom: 16,
      borderBottomWidth: 1,
      borderBottomColor: colors.orange[800] + "20",
    },
    aspectLabel: {
      fontSize: 12,
      fontWeight: "700",
      color: colors.orange[700],
      marginBottom: 6,
      textTransform: "uppercase",
      letterSpacing: 1,
    },
    bisayaText: {
      fontSize: 20,
      fontWeight: "700",
      color: colors.text[100],
      marginBottom: 4,
      lineHeight: 28,
    },
    englishText: {
      fontSize: 15,
      color: colors.text[200],
      fontStyle: "italic",
      lineHeight: 22,
    },
    pronunciationText: {
      fontSize: 13,
      color: colors.orange[800],
      marginTop: 4,
      fontWeight: "600",
      textAlign: "center",
    },
    dialogueBox: {
      backgroundColor: isDarkMode
        ? colors.cream[100] + "F5"
        : colors.white[100] + "F5",
      borderRadius: 20,
      padding: 24,
      marginBottom: 20,
      borderWidth: 2,
      borderColor: colors.orange[800] + "30",
      shadowColor: colors.orange[800],
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.12,
      shadowRadius: 6,
      elevation: 4,
    },
    sceneLabel: {
      fontSize: 14,
      fontWeight: "700",
      color: colors.orange[800],
      marginBottom: 16,
      textAlign: "center",
      textTransform: "uppercase",
      letterSpacing: 1,
    },
    dialogueLine: {
      marginBottom: 16,
      paddingVertical: 8,
    },
    speakerName: {
      fontSize: 12,
      fontWeight: "700",
      color: colors.orange[700],
      marginBottom: 6,
      textTransform: "uppercase",
      letterSpacing: 1,
    },
    highlightBox: {
      backgroundColor: colors.orange[800] + "20",
      padding: 20,
      borderRadius: 16,
      marginVertical: 16,
      borderWidth: 2,
      borderColor: colors.orange[800] + "40",
      width: "100%",
    },
    highlightText: {
      fontSize: 18,
      fontWeight: "700",
      color: colors.orange[900],
      textAlign: "center",
      lineHeight: 26,
    },
    comparisonBox: {
      backgroundColor: isDarkMode
        ? colors.cream[100] + "F5"
        : colors.white[100] + "F5",
      borderRadius: 20,
      padding: 24,
      marginBottom: 20,
      borderWidth: 2,
      borderColor: colors.orange[800] + "30",
    },
    comparisonTitle: {
      fontSize: 18,
      fontWeight: "800",
      color: colors.text[100],
      marginBottom: 16,
      textAlign: "center",
    },
    comparisonRow: {
      marginBottom: 12,
    },
    rootWord: {
      fontSize: 16,
      fontWeight: "700",
      color: colors.orange[800],
      marginBottom: 8,
      textAlign: "center",
    },
    aspectGrid: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 8,
    },
    aspectColumn: {
      flex: 1,
      alignItems: "center",
      paddingHorizontal: 4,
    },
    aspectType: {
      fontSize: 11,
      fontWeight: "700",
      color: colors.orange[700],
      marginBottom: 4,
      textTransform: "uppercase",
    },
    aspectForm: {
      fontSize: 16,
      fontWeight: "600",
      color: colors.text[100],
      textAlign: "center",
    },
    contextNote: {
      backgroundColor: colors.orange[800] + "15",
      padding: 16,
      borderRadius: 12,
      marginTop: 12,
      borderWidth: 1,
      borderColor: colors.orange[600] + "30",
    },
    contextNoteText: {
      fontSize: 14,
      color: colors.text[200],
      lineHeight: 22,
      textAlign: "center",
    },
    iconRow: {
      marginBottom: 12,
      alignItems: "center",
    },
    summaryBox: {
      backgroundColor: colors.orange[800] + "20",
      padding: 28,
      borderRadius: 24,
      marginTop: 20,
      marginBottom: 20,
      borderWidth: 2,
      borderColor: colors.orange[800] + "40",
      alignItems: "center",
    },
  });

  return (
    <View style={styles.container}>
      <Header />
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor="transparent"
        translucent
      />
      <View style={styles.contentContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color={colors.orange[500]} />
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>

        <Animated.View style={{ opacity: fadeAnim, flex: 1 }}>
          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.headerSection}>
              <Text style={styles.lessonNumber}>Lesson 16</Text>
              <Text style={styles.headerTitle}>Aspect Markers</Text>
              <Text style={styles.headerDescription}>
                Master the three aspects: completed, ongoing, and contemplated
                actions
              </Text>
            </View>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons name="reload" size={24} color={colors.orange[800]} />
              </View>
              <Text style={styles.patternTitle}>What Are Aspects?</Text>
              <Text style={styles.patternText}>
                Aspects show when an action happens in relation to time. Unlike
                English tenses, Bisaya uses three main aspects:
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Completed (Nahuman)</Text>{" "}
                  - Action already finished
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>
                    Ongoing (Nagpadayon)
                  </Text>{" "}
                  - Action happening now
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>
                    Contemplated (Pag-uyon)
                  </Text>{" "}
                  - Action planned or future
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>The Three Aspects</Text>
            <Text style={styles.sectionSubtitle}>
              Understanding time in Bisaya
            </Text>

            <View style={styles.aspectCard}>
              <View style={styles.aspectHeader}>
                <Ionicons
                  name="checkmark-circle"
                  size={32}
                  color={colors.orange[800]}
                />
                <Text style={styles.aspectTitle}>Completed Aspect</Text>
              </View>
              <Text style={styles.aspectDescription}>
                Actions that have already been completed or finished
              </Text>
              <View style={styles.timelineRow}>
                <View style={styles.timelineDot} />
                <Text style={styles.timelineText}>
                  English: past tense (ate, walked, studied)
                </Text>
              </View>
              <View style={styles.timelineRow}>
                <View style={styles.timelineDot} />
                <Text style={styles.timelineText}>
                  Marker prefix: <Text style={{ fontWeight: "700" }}>Ni-</Text>{" "}
                  or <Text style={{ fontWeight: "700" }}>-in-</Text>
                </Text>
              </View>
              <View style={styles.timelineRow}>
                <View style={styles.timelineDot} />
                <Text style={styles.timelineText}>
                  Example: kaon → nikaon (ate)
                </Text>
              </View>
            </View>

            <View style={styles.aspectCard}>
              <View style={styles.aspectHeader}>
                <Ionicons
                  name="play-circle"
                  size={32}
                  color={colors.orange[700]}
                />
                <Text style={styles.aspectTitle}>Ongoing Aspect</Text>
              </View>
              <Text style={styles.aspectDescription}>
                Actions happening right now or continuously
              </Text>
              <View style={styles.timelineRow}>
                <View style={styles.timelineDot} />
                <Text style={styles.timelineText}>
                  English: present continuous (eating, walking, studying)
                </Text>
              </View>
              <View style={styles.timelineRow}>
                <View style={styles.timelineDot} />
                <Text style={styles.timelineText}>
                  Marker prefix: <Text style={{ fontWeight: "700" }}>Nag-</Text>{" "}
                  or <Text style={{ fontWeight: "700" }}>Ga-</Text>
                </Text>
              </View>
              <View style={styles.timelineRow}>
                <View style={styles.timelineDot} />
                <Text style={styles.timelineText}>
                  Example: kaon → nagkaon (eating)
                </Text>
              </View>
            </View>

            <View style={styles.aspectCard}>
              <View style={styles.aspectHeader}>
                <Ionicons
                  name="time-outline"
                  size={32}
                  color={colors.orange[600]}
                />
                <Text style={styles.aspectTitle}>Contemplated Aspect</Text>
              </View>
              <Text style={styles.aspectDescription}>
                Actions planned, intended, or will happen in the future
              </Text>
              <View style={styles.timelineRow}>
                <View style={styles.timelineDot} />
                <Text style={styles.timelineText}>
                  English: future tense (will eat, will walk, will study)
                </Text>
              </View>
              <View style={styles.timelineRow}>
                <View style={styles.timelineDot} />
                <Text style={styles.timelineText}>
                  Marker prefix: <Text style={{ fontWeight: "700" }}>Mo-</Text>{" "}
                  or <Text style={{ fontWeight: "700" }}>Mag-</Text>
                </Text>
              </View>
              <View style={styles.timelineRow}>
                <View style={styles.timelineDot} />
                <Text style={styles.timelineText}>
                  Example: kaon → mokaon (will eat)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Common Verbs Conjugated</Text>
            <Text style={styles.sectionSubtitle}>
              See how aspects change verbs
            </Text>

            <View style={styles.conjugationBox}>
              <Text style={styles.conjugationTitle}>Kaon (to eat)</Text>
              <View style={styles.conjugationRow}>
                <Text style={styles.aspectLabel}>Completed</Text>
                <Text style={styles.bisayaText}>Nikaon ko</Text>
                <Text style={styles.englishText}>I ate</Text>
                <Text style={styles.pronunciationText}>nee-kah-OHN koh</Text>
              </View>
              <View style={styles.conjugationRow}>
                <Text style={styles.aspectLabel}>Ongoing</Text>
                <Text style={styles.bisayaText}>Nagkaon ko</Text>
                <Text style={styles.englishText}>I am eating</Text>
                <Text style={styles.pronunciationText}>nahg-kah-OHN koh</Text>
              </View>
              <View style={styles.conjugationRow}>
                <Text style={styles.aspectLabel}>Contemplated</Text>
                <Text style={styles.bisayaText}>Mokaon ko</Text>
                <Text style={styles.englishText}>I will eat</Text>
                <Text style={styles.pronunciationText}>moh-kah-OHN koh</Text>
              </View>
            </View>

            <View style={styles.conjugationBox}>
              <Text style={styles.conjugationTitle}>Lakaw (to walk/go)</Text>
              <View style={styles.conjugationRow}>
                <Text style={styles.aspectLabel}>Completed</Text>
                <Text style={styles.bisayaText}>Nilakaw ko</Text>
                <Text style={styles.englishText}>I walked/went</Text>
                <Text style={styles.pronunciationText}>nee-lah-KOW koh</Text>
              </View>
              <View style={styles.conjugationRow}>
                <Text style={styles.aspectLabel}>Ongoing</Text>
                <Text style={styles.bisayaText}>Naglakaw ko</Text>
                <Text style={styles.englishText}>I am walking</Text>
                <Text style={styles.pronunciationText}>nahg-lah-KOW koh</Text>
              </View>
              <View style={styles.conjugationRow}>
                <Text style={styles.aspectLabel}>Contemplated</Text>
                <Text style={styles.bisayaText}>Molakaw ko</Text>
                <Text style={styles.englishText}>I will walk/go</Text>
                <Text style={styles.pronunciationText}>moh-lah-KOW koh</Text>
              </View>
            </View>

            <View style={styles.conjugationBox}>
              <Text style={styles.conjugationTitle}>Tuon (to study)</Text>
              <View style={styles.conjugationRow}>
                <Text style={styles.aspectLabel}>Completed</Text>
                <Text style={styles.bisayaText}>Nituon ko</Text>
                <Text style={styles.englishText}>I studied</Text>
                <Text style={styles.pronunciationText}>nee-too-OHN koh</Text>
              </View>
              <View style={styles.conjugationRow}>
                <Text style={styles.aspectLabel}>Ongoing</Text>
                <Text style={styles.bisayaText}>Nagtuon ko</Text>
                <Text style={styles.englishText}>I am studying</Text>
                <Text style={styles.pronunciationText}>nahg-too-OHN koh</Text>
              </View>
              <View style={styles.conjugationRow}>
                <Text style={styles.aspectLabel}>Contemplated</Text>
                <Text style={styles.bisayaText}>Motuon ko</Text>
                <Text style={styles.englishText}>I will study</Text>
                <Text style={styles.pronunciationText}>moh-too-OHN koh</Text>
              </View>
            </View>

            <View style={styles.conjugationBox}>
              <Text style={styles.conjugationTitle}>Luto (to cook)</Text>
              <View style={styles.conjugationRow}>
                <Text style={styles.aspectLabel}>Completed</Text>
                <Text style={styles.bisayaText}>Niluto niya</Text>
                <Text style={styles.englishText}>He/She cooked</Text>
                <Text style={styles.pronunciationText}>
                  nee-loo-TOH nee-yah
                </Text>
              </View>
              <View style={styles.conjugationRow}>
                <Text style={styles.aspectLabel}>Ongoing</Text>
                <Text style={styles.bisayaText}>Nagluto siya</Text>
                <Text style={styles.englishText}>He/She is cooking</Text>
                <Text style={styles.pronunciationText}>
                  nahg-loo-TOH see-yah
                </Text>
              </View>
              <View style={styles.conjugationRow}>
                <Text style={styles.aspectLabel}>Contemplated</Text>
                <Text style={styles.bisayaText}>Moluto siya</Text>
                <Text style={styles.englishText}>He/She will cook</Text>
                <Text style={styles.pronunciationText}>
                  moh-loo-TOH see-yah
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Daily routine conversation</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Maria:</Text>
                <Text style={styles.bisayaText}>Nikaon ka na ba?</Text>
                <Text style={styles.englishText}>(Have you eaten?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Juan:</Text>
                <Text style={styles.bisayaText}>Wala pa. Nagtuon pa ko.</Text>
                <Text style={styles.englishText}>
                  (Not yet. I&apos;m still studying.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Maria:</Text>
                <Text style={styles.bisayaText}>
                  Mokaon ka ba later? Moluto ko ug spaghetti.
                </Text>
                <Text style={styles.englishText}>
                  (Will you eat later? I&apos;ll cook spaghetti.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Juan:</Text>
                <Text style={styles.bisayaText}>
                  Oo! Salamat. Human na nako nituon, mokaon jud ko.
                </Text>
                <Text style={styles.englishText}>
                  (Yes! Thanks. After I finish studying, I&apos;ll definitely
                  eat.)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Aspect Patterns</Text>
            <Text style={styles.sectionSubtitle}>
              Common prefixes for each aspect
            </Text>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons
                  name="checkmark-done"
                  size={24}
                  color={colors.orange[800]}
                />
              </View>
              <Text style={styles.patternTitle}>Completed Aspect Markers</Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Ni-</Text> for actor focus
                  (nikaon, nilakaw, nituon)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>-in-</Text> inserted after
                  first consonant (kinuha, ginikan)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Gi-</Text> for object
                  focus (gikaon, giluto, gibasa)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Na-</Text> for some verbs
                  (nahuman, nabuhat)
                </Text>
              </View>
            </View>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons
                  name="play-circle"
                  size={24}
                  color={colors.orange[800]}
                />
              </View>
              <Text style={styles.patternTitle}>Ongoing Aspect Markers</Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Nag-</Text> most common
                  (nagkaon, nagluto, nagtuon)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Ga-</Text> shorter form
                  (gakaon, galuto, gatuon)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Naga-</Text> emphatic form
                  (nagakaon - really eating)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Often used with <Text style={{ fontWeight: "700" }}>pa</Text>{" "}
                  (still) or <Text style={{ fontWeight: "700" }}>karon</Text>{" "}
                  (now)
                </Text>
              </View>
            </View>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons name="time" size={24} color={colors.orange[800]} />
              </View>
              <Text style={styles.patternTitle}>
                Contemplated Aspect Markers
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Mo-</Text> most common
                  (mokaon, moluto, motuon)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Mag-</Text> for repeated
                  actions (magtuon, magluto)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Maga-</Text> emphatic
                  future (magakaon - will definitely eat)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Often used with{" "}
                  <Text style={{ fontWeight: "700" }}>ugma</Text> (tomorrow) or{" "}
                  <Text style={{ fontWeight: "700" }}>unya</Text> (later)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>More Verb Conjugations</Text>
            <Text style={styles.sectionSubtitle}>Practice with more verbs</Text>

            <View style={styles.comparisonBox}>
              <Text style={styles.rootWord}>Basa (to read)</Text>
              <View style={styles.aspectGrid}>
                <View style={styles.aspectColumn}>
                  <Text style={styles.aspectType}>Completed</Text>
                  <Text style={styles.aspectForm}>Nibasa</Text>
                </View>
                <View style={styles.aspectColumn}>
                  <Text style={styles.aspectType}>Ongoing</Text>
                  <Text style={styles.aspectForm}>Nagbasa</Text>
                </View>
                <View style={styles.aspectColumn}>
                  <Text style={styles.aspectType}>Contemplated</Text>
                  <Text style={styles.aspectForm}>Mobasa</Text>
                </View>
              </View>
            </View>

            <View style={styles.comparisonBox}>
              <Text style={styles.rootWord}>Tan-aw (to watch/look)</Text>
              <View style={styles.aspectGrid}>
                <View style={styles.aspectColumn}>
                  <Text style={styles.aspectType}>Completed</Text>
                  <Text style={styles.aspectForm}>Nitan-aw</Text>
                </View>
                <View style={styles.aspectColumn}>
                  <Text style={styles.aspectType}>Ongoing</Text>
                  <Text style={styles.aspectForm}>Nagtan-aw</Text>
                </View>
                <View style={styles.aspectColumn}>
                  <Text style={styles.aspectType}>Contemplated</Text>
                  <Text style={styles.aspectForm}>Motan-aw</Text>
                </View>
              </View>
            </View>

            <View style={styles.comparisonBox}>
              <Text style={styles.rootWord}>Sulti (to speak/say)</Text>
              <View style={styles.aspectGrid}>
                <View style={styles.aspectColumn}>
                  <Text style={styles.aspectType}>Completed</Text>
                  <Text style={styles.aspectForm}>Nisulti</Text>
                </View>
                <View style={styles.aspectColumn}>
                  <Text style={styles.aspectType}>Ongoing</Text>
                  <Text style={styles.aspectForm}>Nagsulti</Text>
                </View>
                <View style={styles.aspectColumn}>
                  <Text style={styles.aspectType}>Contemplated</Text>
                  <Text style={styles.aspectForm}>Mosulti</Text>
                </View>
              </View>
            </View>

            <View style={styles.comparisonBox}>
              <Text style={styles.rootWord}>Inom (to drink)</Text>
              <View style={styles.aspectGrid}>
                <View style={styles.aspectColumn}>
                  <Text style={styles.aspectType}>Completed</Text>
                  <Text style={styles.aspectForm}>Niinom</Text>
                </View>
                <View style={styles.aspectColumn}>
                  <Text style={styles.aspectType}>Ongoing</Text>
                  <Text style={styles.aspectForm}>Nag-inom</Text>
                </View>
                <View style={styles.aspectColumn}>
                  <Text style={styles.aspectType}>Contemplated</Text>
                  <Text style={styles.aspectForm}>Moinom</Text>
                </View>
              </View>
            </View>

            <View style={styles.comparisonBox}>
              <Text style={styles.rootWord}>Trabaho (to work)</Text>
              <View style={styles.aspectGrid}>
                <View style={styles.aspectColumn}>
                  <Text style={styles.aspectType}>Completed</Text>
                  <Text style={styles.aspectForm}>Nitrabaho</Text>
                </View>
                <View style={styles.aspectColumn}>
                  <Text style={styles.aspectType}>Ongoing</Text>
                  <Text style={styles.aspectForm}>Nagtrabaho</Text>
                </View>
                <View style={styles.aspectColumn}>
                  <Text style={styles.aspectType}>Contemplated</Text>
                  <Text style={styles.aspectForm}>Motrabaho</Text>
                </View>
              </View>
            </View>

            <View style={styles.comparisonBox}>
              <Text style={styles.rootWord}>Duwa (to play)</Text>
              <View style={styles.aspectGrid}>
                <View style={styles.aspectColumn}>
                  <Text style={styles.aspectType}>Completed</Text>
                  <Text style={styles.aspectForm}>Niduwa</Text>
                </View>
                <View style={styles.aspectColumn}>
                  <Text style={styles.aspectType}>Ongoing</Text>
                  <Text style={styles.aspectForm}>Nagduwa</Text>
                </View>
                <View style={styles.aspectColumn}>
                  <Text style={styles.aspectType}>Contemplated</Text>
                  <Text style={styles.aspectForm}>Moduwa</Text>
                </View>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Making plans</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Ana:</Text>
                <Text style={styles.bisayaText}>
                  Nitan-aw ka na ba sa movie?
                </Text>
                <Text style={styles.englishText}>
                  (Have you watched the movie?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Pedro:</Text>
                <Text style={styles.bisayaText}>
                  Wala pa. Motan-aw ko ugma. Gusto ka ba mouban?
                </Text>
                <Text style={styles.englishText}>
                  (Not yet. I&apos;ll watch tomorrow. Do you want to come?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Ana:</Text>
                <Text style={styles.bisayaText}>
                  Dili ko makauban. Nagtrabaho ko ugma.
                </Text>
                <Text style={styles.englishText}>
                  (I can&apos;t come. I&apos;m working tomorrow.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Pedro:</Text>
                <Text style={styles.bisayaText}>
                  Sige. Motan-aw na lang ko sa Domingo.
                </Text>
                <Text style={styles.englishText}>
                  (Okay. I&apos;ll just watch on Sunday.)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>
              Time Expressions with Aspects
            </Text>
            <Text style={styles.sectionSubtitle}>
              Words that signal which aspect to use
            </Text>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons
                  name="checkmark-done"
                  size={24}
                  color={colors.orange[800]}
                />
              </View>
              <Text style={styles.patternTitle}>
                Completed Aspect Time Words
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Gahapon</Text> - yesterday
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Kagabii</Text> - last
                  night
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Kaniadto</Text> - before,
                  earlier
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Na</Text> - already
                  (nikaon na - already ate)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Human</Text> -
                  after/finished
                </Text>
              </View>
            </View>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons
                  name="play-circle"
                  size={24}
                  color={colors.orange[800]}
                />
              </View>
              <Text style={styles.patternTitle}>Ongoing Aspect Time Words</Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Karon</Text> - now
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Pa</Text> - still (nagkaon
                  pa - still eating)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Gihapon</Text> - still, as
                  usual
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Sa pagka-karon</Text> - at
                  the moment
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Karong</Text> - this
                  (karong adlawa - today)
                </Text>
              </View>
            </View>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons name="time" size={24} color={colors.orange[800]} />
              </View>
              <Text style={styles.patternTitle}>
                Contemplated Aspect Time Words
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Ugma</Text> - tomorrow
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Unya</Text> - later
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Sunod</Text> - next (sunod
                  semana - next week)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Sa umaabot</Text> - in the
                  future
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Pag-</Text> - when
                  (pag-abot - when [you] arrive)
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>School conversation</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Teacher:</Text>
                <Text style={styles.bisayaText}>
                  Nituon ba mo gahapon sa exam?
                </Text>
                <Text style={styles.englishText}>
                  (Did you study yesterday for the exam?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Student 1:</Text>
                <Text style={styles.bisayaText}>
                  Oo, nituon ko og maayo gahapon.
                </Text>
                <Text style={styles.englishText}>
                  (Yes, I studied well yesterday.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Student 2:</Text>
                <Text style={styles.bisayaText}>
                  Nagtuon pa ko karon, Ma&apos;am. Motuon pa ko ugma.
                </Text>
                <Text style={styles.englishText}>
                  (I&apos;m still studying now, Ma&apos;am. I&apos;ll study more
                  tomorrow.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Teacher:</Text>
                <Text style={styles.bisayaText}>
                  Maayo. Importante nga motuon mo permi.
                </Text>
                <Text style={styles.englishText}>
                  (Good. It&apos;s important that you always study.)
                </Text>
              </View>
            </View>

            <View style={styles.highlightBox}>
              <Text style={styles.highlightText}>
                💡 Key Tip: Listen for the prefix to know when the action
                happens!
              </Text>
            </View>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons name="warning" size={24} color={colors.orange[800]} />
              </View>
              <Text style={styles.patternTitle}>Common Mistakes to Avoid</Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Don&apos;t mix English tense thinking - Bisaya aspects work
                  differently
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Remember: Ni- (completed), Nag- (ongoing), Mo- (contemplated)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Watch out for irregular verbs that have unique patterns
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  The aspect prefix changes, but the root word stays the same
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Context matters! Time words help clarify which aspect to use
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>At a restaurant</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Server:</Text>
                <Text style={styles.bisayaText}>Niorder na mo?</Text>
                <Text style={styles.englishText}>(Have you ordered?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Customer:</Text>
                <Text style={styles.bisayaText}>
                  Wala pa. Nagtan-aw pa mi sa menu. Moorder mi human.
                </Text>
                <Text style={styles.englishText}>
                  (Not yet. We&apos;re still looking at the menu. We&apos;ll
                  order after.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Server:</Text>
                <Text style={styles.bisayaText}>
                  Sige. Naa moy niorder na nga drinks?
                </Text>
                <Text style={styles.englishText}>
                  (Okay. Have you ordered drinks?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Customer:</Text>
                <Text style={styles.bisayaText}>
                  Oo, niorder na mi ug juice. Moorder pa mi ug dessert later.
                </Text>
                <Text style={styles.englishText}>
                  (Yes, we already ordered juice. We&apos;ll order dessert
                  later.)
                </Text>
              </View>
            </View>

            <View style={styles.summaryBox}>
              <View style={styles.iconRow}>
                <Ionicons
                  name="checkmark-circle"
                  size={28}
                  color={colors.orange[800]}
                />
              </View>
              <Text style={styles.patternTitle}>
                Congratulations! You&apos;ve Mastered Aspects!
              </Text>
              <Text style={styles.patternText}>
                You now understand how Bisaya expresses time through aspects:
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Completed aspect with Ni- (actions already done)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Ongoing aspect with Nag-/Ga- (actions happening now)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Contemplated aspect with Mo-/Mag- (future actions)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  How to conjugate common verbs in all three aspects
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Time expressions that signal which aspect to use
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  How aspects work differently from English tenses
                </Text>
              </View>
              <Text style={[styles.patternText, { marginTop: 16 }]}>
                Practice using aspects in every sentence - they&apos;re
                essential for natural Bisaya!
              </Text>
            </View>
          </ScrollView>
        </Animated.View>
      </View>
    </View>
  );
}
