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

export default function Lesson20() {
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
      paddingTop: Platform.OS === "ios" ? 60 : 16,
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
    affixCard: {
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
    affixHeader: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 16,
    },
    affixTitle: {
      fontSize: 28,
      fontWeight: "800",
      color: colors.orange[800],
      marginLeft: 12,
    },
    affixDescription: {
      fontSize: 16,
      color: colors.text[200],
      fontStyle: "italic",
      marginBottom: 16,
      textAlign: "center",
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
    exampleBox: {
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
    exampleTitle: {
      fontSize: 18,
      fontWeight: "800",
      color: colors.text[100],
      marginBottom: 16,
      textAlign: "center",
    },
    transformationRow: {
      marginBottom: 16,
      paddingBottom: 16,
      borderBottomWidth: 1,
      borderBottomColor: colors.orange[800] + "20",
    },
    rootWord: {
      fontSize: 16,
      fontWeight: "700",
      color: colors.orange[700],
      marginBottom: 4,
    },
    arrowIcon: {
      fontSize: 14,
      color: colors.orange[800],
      marginVertical: 4,
    },
    affixedWord: {
      fontSize: 20,
      fontWeight: "700",
      color: colors.text[100],
      marginBottom: 4,
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
    breakdownBox: {
      backgroundColor: colors.orange[800] + "10",
      padding: 16,
      borderRadius: 12,
      marginVertical: 12,
    },
    breakdownText: {
      fontSize: 14,
      color: colors.text[100],
      lineHeight: 20,
      fontFamily: "monospace",
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
              <Text style={styles.lessonNumber}>Lesson 20</Text>
              <Text style={styles.headerTitle}>Affixes & Root Words</Text>
              <Text style={styles.headerDescription}>
                Unlock Bisaya word formation with prefixes, infixes, and
                suffixes
              </Text>
            </View>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons name="cube" size={24} color={colors.orange[800]} />
              </View>
              <Text style={styles.patternTitle}>Understanding Affixes</Text>
              <Text style={styles.patternText}>
                Bisaya is an agglutinative language - we build complex words by
                adding affixes to root words. Master affixes and your vocabulary
                multiplies!
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Root Word</Text> - Basic
                  meaning (kaon = eat)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Prefix</Text> - Added to
                  beginning (ni-kaon = ate)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Infix</Text> - Inserted
                  inside (k-in-aon = was eaten)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Suffix</Text> - Added to
                  end (kaon-an = place to eat)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Common Prefixes</Text>
            <Text style={styles.sectionSubtitle}>
              Building blocks at the start of words
            </Text>

            <View style={styles.affixCard}>
              <View style={styles.affixHeader}>
                <Ionicons
                  name="arrow-forward"
                  size={32}
                  color={colors.orange[800]}
                />
                <Text style={styles.affixTitle}>Mag-</Text>
              </View>
              <Text style={styles.affixDescription}>
                Actor focus - someone doing an action (often repeated or
                ongoing)
              </Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Very common prefix for creating verbs
                </Text>
              </View>
            </View>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>Mag- Examples</Text>
              <View style={styles.transformationRow}>
                <Text style={styles.rootWord}>Root: kaon (eat)</Text>
                <Text style={styles.arrowIcon}>↓</Text>
                <Text style={styles.affixedWord}>magkaon</Text>
                <Text style={styles.englishText}>to eat / will eat</Text>
              </View>
              <View style={styles.transformationRow}>
                <Text style={styles.rootWord}>Root: trabaho (work)</Text>
                <Text style={styles.arrowIcon}>↓</Text>
                <Text style={styles.affixedWord}>magtrabaho</Text>
                <Text style={styles.englishText}>to work / will work</Text>
              </View>
              <View style={styles.transformationRow}>
                <Text style={styles.rootWord}>Root: tuon (study)</Text>
                <Text style={styles.arrowIcon}>↓</Text>
                <Text style={styles.affixedWord}>magtuon</Text>
                <Text style={styles.englishText}>to study / will study</Text>
              </View>
              <View style={styles.transformationRow}>
                <Text style={styles.rootWord}>Root: luto (cook)</Text>
                <Text style={styles.arrowIcon}>↓</Text>
                <Text style={styles.affixedWord}>magluto</Text>
                <Text style={styles.englishText}>to cook / will cook</Text>
              </View>
            </View>

            <View style={styles.affixCard}>
              <View style={styles.affixHeader}>
                <Ionicons name="play" size={32} color={colors.orange[800]} />
                <Text style={styles.affixTitle}>Nag-</Text>
              </View>
              <Text style={styles.affixDescription}>
                Ongoing aspect - action happening now or habitually
              </Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Present continuous / progressive aspect
                </Text>
              </View>
            </View>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>Nag- Examples</Text>
              <View style={styles.transformationRow}>
                <Text style={styles.rootWord}>Root: kaon (eat)</Text>
                <Text style={styles.arrowIcon}>↓</Text>
                <Text style={styles.affixedWord}>nagkaon</Text>
                <Text style={styles.englishText}>eating / is eating</Text>
              </View>
              <View style={styles.transformationRow}>
                <Text style={styles.rootWord}>Root: lakaw (walk)</Text>
                <Text style={styles.arrowIcon}>↓</Text>
                <Text style={styles.affixedWord}>naglakaw</Text>
                <Text style={styles.englishText}>walking / is walking</Text>
              </View>
              <View style={styles.transformationRow}>
                <Text style={styles.rootWord}>Root: sulti (speak)</Text>
                <Text style={styles.arrowIcon}>↓</Text>
                <Text style={styles.affixedWord}>nagsulti</Text>
                <Text style={styles.englishText}>speaking / is speaking</Text>
              </View>
            </View>

            <View style={styles.affixCard}>
              <View style={styles.affixHeader}>
                <Ionicons
                  name="checkmark"
                  size={32}
                  color={colors.orange[800]}
                />
                <Text style={styles.affixTitle}>Ni-</Text>
              </View>
              <Text style={styles.affixDescription}>
                Completed aspect - action already done
              </Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Past tense / completed action marker
                </Text>
              </View>
            </View>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>Ni- Examples</Text>
              <View style={styles.transformationRow}>
                <Text style={styles.rootWord}>Root: kaon (eat)</Text>
                <Text style={styles.arrowIcon}>↓</Text>
                <Text style={styles.affixedWord}>nikaon</Text>
                <Text style={styles.englishText}>ate / has eaten</Text>
              </View>
              <View style={styles.transformationRow}>
                <Text style={styles.rootWord}>Root: abot (arrive)</Text>
                <Text style={styles.arrowIcon}>↓</Text>
                <Text style={styles.affixedWord}>niabot</Text>
                <Text style={styles.englishText}>arrived / has arrived</Text>
              </View>
              <View style={styles.transformationRow}>
                <Text style={styles.rootWord}>Root: tuon (study)</Text>
                <Text style={styles.arrowIcon}>↓</Text>
                <Text style={styles.affixedWord}>nituon</Text>
                <Text style={styles.englishText}>studied / has studied</Text>
              </View>
            </View>

            <View style={styles.affixCard}>
              <View style={styles.affixHeader}>
                <Ionicons name="timer" size={32} color={colors.orange[800]} />
                <Text style={styles.affixTitle}>Mo-</Text>
              </View>
              <Text style={styles.affixDescription}>
                Contemplated aspect - will do / going to do
              </Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Future tense / contemplated action marker
                </Text>
              </View>
            </View>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>Mo- Examples</Text>
              <View style={styles.transformationRow}>
                <Text style={styles.rootWord}>Root: kaon (eat)</Text>
                <Text style={styles.arrowIcon}>↓</Text>
                <Text style={styles.affixedWord}>mokaon</Text>
                <Text style={styles.englishText}>will eat</Text>
              </View>
              <View style={styles.transformationRow}>
                <Text style={styles.rootWord}>Root: adto (go)</Text>
                <Text style={styles.arrowIcon}>↓</Text>
                <Text style={styles.affixedWord}>moadto</Text>
                <Text style={styles.englishText}>will go</Text>
              </View>
              <View style={styles.transformationRow}>
                <Text style={styles.rootWord}>Root: balik (return)</Text>
                <Text style={styles.arrowIcon}>↓</Text>
                <Text style={styles.affixedWord}>mobalik</Text>
                <Text style={styles.englishText}>will return</Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Aspect prefixes in action</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Ana:</Text>
                <Text style={styles.bisayaText}>Nikaon ka na ba?</Text>
                <Text style={styles.englishText}>
                  (Have you eaten already?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Juan:</Text>
                <Text style={styles.bisayaText}>
                  Wala pa. Nagtuon pa ko. Mokaon ko human.
                </Text>
                <Text style={styles.englishText}>
                  (Not yet. I&apos;m still studying. I&apos;ll eat after.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Ana:</Text>
                <Text style={styles.bisayaText}>
                  Sige. Magluto ko ug pagkaon para nimo.
                </Text>
                <Text style={styles.englishText}>
                  (Okay. I&apos;ll cook food for you.)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>More Important Prefixes</Text>
            <Text style={styles.sectionSubtitle}>
              Expanding your vocabulary toolkit
            </Text>

            <View style={styles.affixCard}>
              <View style={styles.affixHeader}>
                <Ionicons
                  name="hand-left"
                  size={32}
                  color={colors.orange[700]}
                />
                <Text style={styles.affixTitle}>Gi-</Text>
              </View>
              <Text style={styles.affixDescription}>
                Object focus - something was done to something
              </Text>
            </View>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>Gi- Examples</Text>
              <View style={styles.transformationRow}>
                <Text style={styles.rootWord}>Root: kaon (eat)</Text>
                <Text style={styles.arrowIcon}>↓</Text>
                <Text style={styles.affixedWord}>gikaon</Text>
                <Text style={styles.englishText}>was eaten</Text>
              </View>
              <View style={styles.transformationRow}>
                <Text style={styles.rootWord}>Root: basa (read)</Text>
                <Text style={styles.arrowIcon}>↓</Text>
                <Text style={styles.affixedWord}>gibasa</Text>
                <Text style={styles.englishText}>was read</Text>
              </View>
              <View style={styles.transformationRow}>
                <Text style={styles.rootWord}>Root: luto (cook)</Text>
                <Text style={styles.arrowIcon}>↓</Text>
                <Text style={styles.affixedWord}>giluto</Text>
                <Text style={styles.englishText}>was cooked</Text>
              </View>
            </View>

            <View style={styles.affixCard}>
              <View style={styles.affixHeader}>
                <Ionicons name="repeat" size={32} color={colors.orange[700]} />
                <Text style={styles.affixTitle}>Pag-</Text>
              </View>
              <Text style={styles.affixDescription}>
                Nominalizer - turns verbs into nouns (the act of...)
              </Text>
            </View>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>Pag- Examples</Text>
              <View style={styles.transformationRow}>
                <Text style={styles.rootWord}>Root: kaon (eat)</Text>
                <Text style={styles.arrowIcon}>↓</Text>
                <Text style={styles.affixedWord}>pagkaon</Text>
                <Text style={styles.englishText}>food / eating</Text>
              </View>
              <View style={styles.transformationRow}>
                <Text style={styles.rootWord}>Root: tuon (study)</Text>
                <Text style={styles.arrowIcon}>↓</Text>
                <Text style={styles.affixedWord}>pagtuon</Text>
                <Text style={styles.englishText}>studying / studies</Text>
              </View>
              <View style={styles.transformationRow}>
                <Text style={styles.rootWord}>Root: basa (read)</Text>
                <Text style={styles.arrowIcon}>↓</Text>
                <Text style={styles.affixedWord}>pagbasa</Text>
                <Text style={styles.englishText}>reading (the act)</Text>
              </View>
            </View>

            <View style={styles.affixCard}>
              <View style={styles.affixHeader}>
                <Ionicons name="create" size={32} color={colors.orange[700]} />
                <Text style={styles.affixTitle}>Ma-</Text>
              </View>
              <Text style={styles.affixDescription}>
                Creates adjectives or passive voice (becomes/can be)
              </Text>
            </View>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>Ma- Examples</Text>
              <View style={styles.transformationRow}>
                <Text style={styles.rootWord}>Root: buhat (do/make)</Text>
                <Text style={styles.arrowIcon}>↓</Text>
                <Text style={styles.affixedWord}>mabuhat</Text>
                <Text style={styles.englishText}>can be done / doable</Text>
              </View>
              <View style={styles.transformationRow}>
                <Text style={styles.rootWord}>Root: tawo (person)</Text>
                <Text style={styles.arrowIcon}>↓</Text>
                <Text style={styles.affixedWord}>matawo</Text>
                <Text style={styles.englishText}>to be born</Text>
              </View>
              <View style={styles.transformationRow}>
                <Text style={styles.rootWord}>Root: ayohay (good)</Text>
                <Text style={styles.arrowIcon}>↓</Text>
                <Text style={styles.affixedWord}>maayo</Text>
                <Text style={styles.englishText}>good / well</Text>
              </View>
            </View>

            <View style={styles.affixCard}>
              <View style={styles.affixHeader}>
                <Ionicons name="people" size={32} color={colors.orange[700]} />
                <Text style={styles.affixTitle}>Maki-</Text>
              </View>
              <Text style={styles.affixDescription}>
                Social actions - joining others, requesting permission
              </Text>
            </View>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>Maki- Examples</Text>
              <View style={styles.transformationRow}>
                <Text style={styles.rootWord}>Root: kaon (eat)</Text>
                <Text style={styles.arrowIcon}>↓</Text>
                <Text style={styles.affixedWord}>makikaon</Text>
                <Text style={styles.englishText}>to join in eating</Text>
              </View>
              <View style={styles.transformationRow}>
                <Text style={styles.rootWord}>Root: duwa (play)</Text>
                <Text style={styles.arrowIcon}>↓</Text>
                <Text style={styles.affixedWord}>makiduwa</Text>
                <Text style={styles.englishText}>to join in playing</Text>
              </View>
              <View style={styles.transformationRow}>
                <Text style={styles.rootWord}>Root: gamit (use)</Text>
                <Text style={styles.arrowIcon}>↓</Text>
                <Text style={styles.affixedWord}>makigamit</Text>
                <Text style={styles.englishText}>to ask to use</Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Infixes</Text>
            <Text style={styles.sectionSubtitle}>
              Affixes inserted inside words
            </Text>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons name="code" size={24} color={colors.orange[800]} />
              </View>
              <Text style={styles.patternTitle}>What Are Infixes?</Text>
              <Text style={styles.patternText}>
                Unlike prefixes and suffixes, infixes are inserted INSIDE the
                root word, typically after the first consonant. Less common but
                important!
              </Text>
            </View>

            <View style={styles.affixCard}>
              <View style={styles.affixHeader}>
                <Ionicons name="enter" size={32} color={colors.orange[700]} />
                <Text style={styles.affixTitle}>-in-</Text>
              </View>
              <Text style={styles.affixDescription}>
                Completed aspect infix - marks past action (object focus)
              </Text>
            </View>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>-in- Infix Examples</Text>
              <View style={styles.transformationRow}>
                <Text style={styles.rootWord}>Root: kuha (get/take)</Text>
                <Text style={styles.arrowIcon}>↓</Text>
                <Text style={styles.affixedWord}>kinuha</Text>
                <Text style={styles.englishText}>was taken / got</Text>
                <View style={styles.breakdownBox}>
                  <Text style={styles.breakdownText}>
                    k + in + uha = kinuha
                  </Text>
                </View>
              </View>
              <View style={styles.transformationRow}>
                <Text style={styles.rootWord}>Root: sulat (write)</Text>
                <Text style={styles.arrowIcon}>↓</Text>
                <Text style={styles.affixedWord}>sinulat</Text>
                <Text style={styles.englishText}>was written</Text>
                <View style={styles.breakdownBox}>
                  <Text style={styles.breakdownText}>
                    s + in + ulat = sinulat
                  </Text>
                </View>
              </View>
              <View style={styles.transformationRow}>
                <Text style={styles.rootWord}>Root: buhat (do/make)</Text>
                <Text style={styles.arrowIcon}>↓</Text>
                <Text style={styles.affixedWord}>gibuhat</Text>
                <Text style={styles.englishText}>was done/made</Text>
                <View style={styles.breakdownBox}>
                  <Text style={styles.breakdownText}>
                    gi + b + in + uhat (becomes gibuhat in modern usage)
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.affixCard}>
              <View style={styles.affixHeader}>
                <Ionicons
                  name="arrow-redo"
                  size={32}
                  color={colors.orange[700]}
                />
                <Text style={styles.affixTitle}>-um-</Text>
              </View>
              <Text style={styles.affixDescription}>
                Actor focus - focuses on who does the action
              </Text>
            </View>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>-um- Infix Examples</Text>
              <View style={styles.transformationRow}>
                <Text style={styles.rootWord}>Root: kaon (eat)</Text>
                <Text style={styles.arrowIcon}>↓</Text>
                <Text style={styles.affixedWord}>kumaon</Text>
                <Text style={styles.englishText}>to eat (formal)</Text>
                <View style={styles.breakdownBox}>
                  <Text style={styles.breakdownText}>
                    k + um + aon = kumaon
                  </Text>
                </View>
              </View>
              <View style={styles.transformationRow}>
                <Text style={styles.rootWord}>Root: lakaw (walk)</Text>
                <Text style={styles.arrowIcon}>↓</Text>
                <Text style={styles.affixedWord}>lumakaw</Text>
                <Text style={styles.englishText}>to walk / walked</Text>
                <View style={styles.breakdownBox}>
                  <Text style={styles.breakdownText}>
                    l + um + akaw = lumakaw
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.highlightBox}>
              <Text style={styles.highlightText}>
                💡 Note: Infixes are less common in modern Bisaya. Many have
                been replaced by prefix forms!
              </Text>
            </View>

            <Text style={styles.sectionTitle}>Suffixes</Text>
            <Text style={styles.sectionSubtitle}>
              Affixes added to the end of words
            </Text>

            <View style={styles.affixCard}>
              <View style={styles.affixHeader}>
                <Ionicons name="home" size={32} color={colors.orange[700]} />
                <Text style={styles.affixTitle}>-an</Text>
              </View>
              <Text style={styles.affixDescription}>
                Location marker - place where action happens or is done
              </Text>
            </View>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>-an Suffix Examples</Text>
              <View style={styles.transformationRow}>
                <Text style={styles.rootWord}>Root: kaon (eat)</Text>
                <Text style={styles.arrowIcon}>↓</Text>
                <Text style={styles.affixedWord}>kaonan</Text>
                <Text style={styles.englishText}>
                  dining room / place to eat
                </Text>
              </View>
              <View style={styles.transformationRow}>
                <Text style={styles.rootWord}>Root: tulog (sleep)</Text>
                <Text style={styles.arrowIcon}>↓</Text>
                <Text style={styles.affixedWord}>tulogan</Text>
                <Text style={styles.englishText}>bedroom / place to sleep</Text>
              </View>
              <View style={styles.transformationRow}>
                <Text style={styles.rootWord}>Root: tinda (sell)</Text>
                <Text style={styles.arrowIcon}>↓</Text>
                <Text style={styles.affixedWord}>tindahan</Text>
                <Text style={styles.englishText}>store / place to sell</Text>
              </View>
              <View style={styles.transformationRow}>
                <Text style={styles.rootWord}>Root: basura (trash)</Text>
                <Text style={styles.arrowIcon}>↓</Text>
                <Text style={styles.affixedWord}>basurahan</Text>
                <Text style={styles.englishText}>
                  trash can / place for trash
                </Text>
              </View>
            </View>

            <View style={styles.affixCard}>
              <View style={styles.affixHeader}>
                <Ionicons
                  name="settings"
                  size={32}
                  color={colors.orange[700]}
                />
                <Text style={styles.affixTitle}>-on</Text>
              </View>
              <Text style={styles.affixDescription}>
                Future passive - will be done to (object focus)
              </Text>
            </View>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>-on Suffix Examples</Text>
              <View style={styles.transformationRow}>
                <Text style={styles.rootWord}>Root: kaon (eat)</Text>
                <Text style={styles.arrowIcon}>↓</Text>
                <Text style={styles.affixedWord}>kaonon</Text>
                <Text style={styles.englishText}>
                  will be eaten / to be eaten
                </Text>
              </View>
              <View style={styles.transformationRow}>
                <Text style={styles.rootWord}>Root: luto (cook)</Text>
                <Text style={styles.arrowIcon}>↓</Text>
                <Text style={styles.affixedWord}>lutuon</Text>
                <Text style={styles.englishText}>
                  will be cooked / to be cooked
                </Text>
              </View>
              <View style={styles.transformationRow}>
                <Text style={styles.rootWord}>Root: buhat (do/make)</Text>
                <Text style={styles.arrowIcon}>↓</Text>
                <Text style={styles.affixedWord}>buhaton</Text>
                <Text style={styles.englishText}>
                  will be done / to be done
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Planning dinner</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Maria:</Text>
                <Text style={styles.bisayaText}>
                  Unsa ang lutuon nato para sa panihapon?
                </Text>
                <Text style={styles.englishText}>
                  (What will we cook for dinner?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Juan:</Text>
                <Text style={styles.bisayaText}>
                  Magluto ta ug adobo. Asa ang lutuan?
                </Text>
                <Text style={styles.englishText}>
                  (Let&apos;s cook adobo. Where&apos;s the kitchen/cooking
                  place?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Maria:</Text>
                <Text style={styles.bisayaText}>
                  Didto sa kusina. Unsa pay kaonon?
                </Text>
                <Text style={styles.englishText}>
                  (There in the kitchen. What else will we eat?)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Circumfixes</Text>
            <Text style={styles.sectionSubtitle}>
              Prefix and suffix working together
            </Text>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons
                  name="git-merge"
                  size={24}
                  color={colors.orange[800]}
                />
              </View>
              <Text style={styles.patternTitle}>What Are Circumfixes?</Text>
              <Text style={styles.patternText}>
                Circumfixes are affixes that wrap around the root word - both
                prefix AND suffix together create the meaning
              </Text>
            </View>

            <View style={styles.affixCard}>
              <View style={styles.affixHeader}>
                <Ionicons name="resize" size={32} color={colors.orange[700]} />
                <Text style={styles.affixTitle}>pag-...-an</Text>
              </View>
              <Text style={styles.affixDescription}>
                Creates location nouns - place where action repeatedly happens
              </Text>
            </View>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>pag-...-an Examples</Text>
              <View style={styles.transformationRow}>
                <Text style={styles.rootWord}>Root: tuon (study)</Text>
                <Text style={styles.arrowIcon}>↓</Text>
                <Text style={styles.affixedWord}>pagtuonan</Text>
                <Text style={styles.englishText}>school / place of study</Text>
              </View>
              <View style={styles.transformationRow}>
                <Text style={styles.rootWord}>Root: laba (wash clothes)</Text>
                <Text style={styles.arrowIcon}>↓</Text>
                <Text style={styles.affixedWord}>paglabhan</Text>
                <Text style={styles.englishText}>laundry / washing place</Text>
              </View>
              <View style={styles.transformationRow}>
                <Text style={styles.rootWord}>Root: simba (worship)</Text>
                <Text style={styles.arrowIcon}>↓</Text>
                <Text style={styles.affixedWord}>pagsimbahan</Text>
                <Text style={styles.englishText}>
                  church / place of worship
                </Text>
              </View>
            </View>

            <View style={styles.affixCard}>
              <View style={styles.affixHeader}>
                <Ionicons name="shuffle" size={32} color={colors.orange[700]} />
                <Text style={styles.affixTitle}>ka-...-an</Text>
              </View>
              <Text style={styles.affixDescription}>
                Creates abstract nouns or states of being
              </Text>
            </View>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>ka-...-an Examples</Text>
              <View style={styles.transformationRow}>
                <Text style={styles.rootWord}>Root: maayo (good)</Text>
                <Text style={styles.arrowIcon}>↓</Text>
                <Text style={styles.affixedWord}>kamaayohan</Text>
                <Text style={styles.englishText}>goodness / welfare</Text>
              </View>
              <View style={styles.transformationRow}>
                <Text style={styles.rootWord}>Root: buhi (life/alive)</Text>
                <Text style={styles.arrowIcon}>↓</Text>
                <Text style={styles.affixedWord}>kabuhian</Text>
                <Text style={styles.englishText}>livelihood / way of life</Text>
              </View>
              <View style={styles.transformationRow}>
                <Text style={styles.rootWord}>Root: libre (free)</Text>
                <Text style={styles.arrowIcon}>↓</Text>
                <Text style={styles.affixedWord}>kalibrehon</Text>
                <Text style={styles.englishText}>freedom</Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Complex Affix Combinations</Text>
            <Text style={styles.sectionSubtitle}>
              Multiple affixes on one root word
            </Text>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>
                Multiple Affixes Working Together
              </Text>
              <View style={styles.transformationRow}>
                <Text style={styles.rootWord}>Root: kaon (eat)</Text>
                <Text style={styles.arrowIcon}>↓ + pag- + -an</Text>
                <Text style={styles.affixedWord}>pagkaonan</Text>
                <Text style={styles.englishText}>
                  dining area / food to be eaten
                </Text>
              </View>
              <View style={styles.transformationRow}>
                <Text style={styles.rootWord}>Root: tuon (study)</Text>
                <Text style={styles.arrowIcon}>↓ + mag- + pa- + -on</Text>
                <Text style={styles.affixedWord}>magpatuon</Text>
                <Text style={styles.englishText}>
                  to have someone study / to send to school
                </Text>
              </View>
              <View style={styles.transformationRow}>
                <Text style={styles.rootWord}>Root: buhat (do/make)</Text>
                <Text style={styles.arrowIcon}>↓ + gi- + pa- + -on</Text>
                <Text style={styles.affixedWord}>gipabuhaton</Text>
                <Text style={styles.englishText}>
                  was made to do / had done
                </Text>
              </View>
            </View>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons name="layers" size={24} color={colors.orange[800]} />
              </View>
              <Text style={styles.patternTitle}>Affix Stacking Rules</Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Aspect markers (Ni-, Nag-, Mo-) come first
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Voice markers (Gi-, Gi-...-an) can combine with aspect
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Pa- (causative) can stack with other affixes
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Location suffix -an often comes last
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>
                Complex affixes in conversation
              </Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Teacher:</Text>
                <Text style={styles.bisayaText}>
                  Gipabasa nako ang mga estudyante sa libro.
                </Text>
                <Text style={styles.englishText}>
                  (I had the students read the book.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Student:</Text>
                <Text style={styles.bisayaText}>
                  Ma&apos;am, asa ang pagtuonan sa sunod nga leksyon?
                </Text>
                <Text style={styles.englishText}>
                  (Ma&apos;am, where will the next lesson be studied?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Teacher:</Text>
                <Text style={styles.bisayaText}>
                  Sa kamaayohan sa tanan, magpahigda ta sa library.
                </Text>
                <Text style={styles.englishText}>
                  (For everyone&apos;s good, we&apos;ll meet in the library.)
                </Text>
              </View>
            </View>

            <View style={styles.highlightBox}>
              <Text style={styles.highlightText}>
                💡 Pro Tip: Learn root words first, then gradually add affixes.
                One root word can create dozens of related words!
              </Text>
            </View>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons name="bulb" size={24} color={colors.orange[800]} />
              </View>
              <Text style={styles.patternTitle}>
                Common Root Words to Practice With
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>kaon</Text> - eat →
                  nikaon, nagkaon, mokaon, pagkaon, kaonan
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>tuon</Text> - study →
                  nituon, nagtuon, motuon, pagtuon, pagtuonan
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>lakaw</Text> - walk/go →
                  nilakaw, naglakaw, molakaw, paglakaw
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>buhat</Text> - do/make →
                  nibuhat, nagbuhat, mobuhat, pagbuhat
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
                Congratulations! Affix Master Achieved!
              </Text>
              <Text style={styles.patternText}>
                You now understand how Bisaya builds words with affixes:
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Prefixes</Text> - Mag-,
                  Nag-, Ni-, Mo-, Gi-, Pag-, Ma-, Maki-
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Infixes</Text> - -in-,
                  -um- (inserted inside words)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Suffixes</Text> - -an, -on
                  (place and object markers)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Circumfixes</Text> -
                  pag-...-an, ka-...-an (wrap around root)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  How affixes change meaning (aspect, focus, location)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Complex combinations of multiple affixes
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  How one root word creates many related words
                </Text>
              </View>
              <Text style={[styles.patternText, { marginTop: 16 }]}>
                Master affixes and your Bisaya vocabulary will explode! Practice
                building words from roots every day!
              </Text>
            </View>
          </ScrollView>
        </Animated.View>
      </View>
    </View>
  );
}
