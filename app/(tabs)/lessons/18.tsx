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

export default function Lesson18() {
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
    questionCard: {
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
    questionHeader: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 16,
    },
    questionWord: {
      fontSize: 28,
      fontWeight: "800",
      color: colors.orange[800],
      marginLeft: 12,
    },
    questionTranslation: {
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
    examplePair: {
      marginBottom: 16,
      paddingBottom: 16,
      borderBottomWidth: 1,
      borderBottomColor: colors.orange[800] + "20",
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
    qaGrid: {
      marginBottom: 16,
    },
    qaRow: {
      marginBottom: 12,
      paddingVertical: 8,
    },
    qLabel: {
      fontSize: 12,
      fontWeight: "700",
      color: colors.orange[700],
      marginBottom: 4,
      textTransform: "uppercase",
    },
    aLabel: {
      fontSize: 12,
      fontWeight: "700",
      color: colors.text[200],
      marginBottom: 4,
      textTransform: "uppercase",
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
              <Text style={styles.lessonNumber}>Lesson 18</Text>
              <Text style={styles.headerTitle}>Question Formation</Text>
              <Text style={styles.headerDescription}>
                Learn to ask who, what, where, when, why, and how in Bisaya
              </Text>
            </View>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons
                  name="help-circle"
                  size={24}
                  color={colors.orange[800]}
                />
              </View>
              <Text style={styles.patternTitle}>Question Words Overview</Text>
              <Text style={styles.patternText}>
                Bisaya question words are straightforward and essential for
                conversation. Master these and you can ask about anything!
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Kinsa</Text> - Who
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Unsa</Text> - What
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Asa</Text> - Where
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Kanus-a</Text> - When
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Ngano</Text> - Why
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Unsaon</Text> - How
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Kinsa - Who</Text>
            <Text style={styles.sectionSubtitle}>
              Asking about people and identity
            </Text>

            <View style={styles.questionCard}>
              <View style={styles.questionHeader}>
                <Ionicons name="person" size={32} color={colors.orange[800]} />
                <Text style={styles.questionWord}>Kinsa</Text>
              </View>
              <Text style={styles.questionTranslation}>Who / Whom</Text>
              <Text style={styles.pronunciationText}>KEEN-sah</Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Used to ask about identity or to identify someone
                </Text>
              </View>
            </View>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>Basic Kinsa Questions</Text>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Kinsa ka?</Text>
                <Text style={styles.englishText}>Who are you?</Text>
                <Text style={styles.pronunciationText}>KEEN-sah kah</Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Kinsa siya?</Text>
                <Text style={styles.englishText}>Who is he/she?</Text>
                <Text style={styles.pronunciationText}>KEEN-sah see-yah</Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Kinsa ang nag-ingon?</Text>
                <Text style={styles.englishText}>Who said that?</Text>
                <Text style={styles.pronunciationText}>
                  KEEN-sah ahng nahg-ee-NGOHN
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Kinsa ang imong amigo?</Text>
                <Text style={styles.englishText}>Who is your friend?</Text>
                <Text style={styles.pronunciationText}>
                  KEEN-sah ahng ee-MOHNG ah-MEE-goh
                </Text>
              </View>
            </View>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>
                Kinsa with Different Verbs
              </Text>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Kinsa ang mokaon?</Text>
                <Text style={styles.englishText}>Who will eat?</Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>
                  Kinsa ang nikaon sa tinapay?
                </Text>
                <Text style={styles.englishText}>Who ate the bread?</Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Kinsa ang nagbasa?</Text>
                <Text style={styles.englishText}>Who is reading?</Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Kinsa ang moluto?</Text>
                <Text style={styles.englishText}>Who will cook?</Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Unsa - What</Text>
            <Text style={styles.sectionSubtitle}>
              Asking about things and actions
            </Text>

            <View style={styles.questionCard}>
              <View style={styles.questionHeader}>
                <Ionicons
                  name="help-circle-outline"
                  size={32}
                  color={colors.orange[800]}
                />
                <Text style={styles.questionWord}>Unsa</Text>
              </View>
              <Text style={styles.questionTranslation}>What</Text>
              <Text style={styles.pronunciationText}>oon-SAH</Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Most versatile question word - asks about things, actions, and
                  descriptions
                </Text>
              </View>
            </View>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>Basic Unsa Questions</Text>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Unsa ni?</Text>
                <Text style={styles.englishText}>What is this?</Text>
                <Text style={styles.pronunciationText}>oon-SAH nee</Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Unsa na?</Text>
                <Text style={styles.englishText}>
                  What now? / What&apos;s up?
                </Text>
                <Text style={styles.pronunciationText}>oon-SAH nah</Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Unsa ang imong ngalan?</Text>
                <Text style={styles.englishText}>What is your name?</Text>
                <Text style={styles.pronunciationText}>
                  oon-SAH ahng ee-MOHNG NGAH-lahn
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Unsa ang problema?</Text>
                <Text style={styles.englishText}>What is the problem?</Text>
                <Text style={styles.pronunciationText}>
                  oon-SAH ahng proh-BLEH-mah
                </Text>
              </View>
            </View>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>Unsa with Actions</Text>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Unsa ang imong gibuhat?</Text>
                <Text style={styles.englishText}>What did you do?</Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Unsa ang imong gikaon?</Text>
                <Text style={styles.englishText}>What did you eat?</Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Unsa ang moabot?</Text>
                <Text style={styles.englishText}>What will arrive?</Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>
                  Unsa ang imong ganahan kaon?
                </Text>
                <Text style={styles.englishText}>What do you want to eat?</Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Meeting someone new</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Person A:</Text>
                <Text style={styles.bisayaText}>Hi! Unsa imong ngalan?</Text>
                <Text style={styles.englishText}>
                  (Hi! What&apos;s your name?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Person B:</Text>
                <Text style={styles.bisayaText}>
                  Maria. Ikaw? Kinsa ka man?
                </Text>
                <Text style={styles.englishText}>
                  (Maria. You? Who are you?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Person A:</Text>
                <Text style={styles.bisayaText}>
                  Ako si Juan. Unsa imong trabaho?
                </Text>
                <Text style={styles.englishText}>
                  (I&apos;m Juan. What&apos;s your job?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Person B:</Text>
                <Text style={styles.bisayaText}>
                  Maestra ko. Kinsa man imong kauban?
                </Text>
                <Text style={styles.englishText}>
                  (I&apos;m a teacher. Who is your companion?)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Asa - Where</Text>
            <Text style={styles.sectionSubtitle}>
              Asking about location and direction
            </Text>

            <View style={styles.questionCard}>
              <View style={styles.questionHeader}>
                <Ionicons
                  name="location"
                  size={32}
                  color={colors.orange[800]}
                />
                <Text style={styles.questionWord}>Asa</Text>
              </View>
              <Text style={styles.questionTranslation}>Where</Text>
              <Text style={styles.pronunciationText}>ah-SAH</Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Used to ask about places, locations, and directions
                </Text>
              </View>
            </View>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>Basic Asa Questions</Text>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Asa ka?</Text>
                <Text style={styles.englishText}>Where are you?</Text>
                <Text style={styles.pronunciationText}>ah-SAH kah</Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Asa ka paingon?</Text>
                <Text style={styles.englishText}>Where are you going?</Text>
                <Text style={styles.pronunciationText}>
                  ah-SAH kah pah-ee-NGOHN
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Asa ang CR?</Text>
                <Text style={styles.englishText}>Where is the bathroom?</Text>
                <Text style={styles.pronunciationText}>
                  ah-SAH ahng see-ahr
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Asa siya nagpuyo?</Text>
                <Text style={styles.englishText}>Where does he/she live?</Text>
                <Text style={styles.pronunciationText}>
                  ah-SAH see-yah nahg-POO-yoh
                </Text>
              </View>
            </View>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>
                Asa with Different Contexts
              </Text>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Asa ang mall?</Text>
                <Text style={styles.englishText}>Where is the mall?</Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Asa ta mokaon?</Text>
                <Text style={styles.englishText}>Where will we eat?</Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Asa nimo nakita?</Text>
                <Text style={styles.englishText}>Where did you see it?</Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Asa ang libro?</Text>
                <Text style={styles.englishText}>Where is the book?</Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Kanus-a - When</Text>
            <Text style={styles.sectionSubtitle}>Asking about time</Text>

            <View style={styles.questionCard}>
              <View style={styles.questionHeader}>
                <Ionicons name="time" size={32} color={colors.orange[800]} />
                <Text style={styles.questionWord}>Kanus-a</Text>
              </View>
              <Text style={styles.questionTranslation}>When</Text>
              <Text style={styles.pronunciationText}>kah-noos-AH</Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Used to ask about time - past, present, or future
                </Text>
              </View>
            </View>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>Basic Kanus-a Questions</Text>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Kanus-a ka moabot?</Text>
                <Text style={styles.englishText}>When will you arrive?</Text>
                <Text style={styles.pronunciationText}>
                  kah-noos-AH kah moh-ah-BOHT
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Kanus-a ang klase?</Text>
                <Text style={styles.englishText}>When is the class?</Text>
                <Text style={styles.pronunciationText}>
                  kah-noos-AH ahng KLAH-seh
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Kanus-a ka natawo?</Text>
                <Text style={styles.englishText}>When were you born?</Text>
                <Text style={styles.pronunciationText}>
                  kah-noos-AH kah nah-TAH-woh
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Kanus-a ta molakaw?</Text>
                <Text style={styles.englishText}>When will we leave?</Text>
                <Text style={styles.pronunciationText}>
                  kah-noos-AH tah moh-lah-KOW
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Planning a trip</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Ana:</Text>
                <Text style={styles.bisayaText}>
                  Kanus-a ta molakaw para sa Boracay?
                </Text>
                <Text style={styles.englishText}>
                  (When will we leave for Boracay?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Pedro:</Text>
                <Text style={styles.bisayaText}>
                  Sa sunod nga Sabado. Asa ta mag-stay?
                </Text>
                <Text style={styles.englishText}>
                  (Next Saturday. Where will we stay?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Ana:</Text>
                <Text style={styles.bisayaText}>
                  Sa hotel duol sa beach. Kanus-a ta mobalik?
                </Text>
                <Text style={styles.englishText}>
                  (At a hotel near the beach. When will we return?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Pedro:</Text>
                <Text style={styles.bisayaText}>
                  Sa Domingo sa hapon. Kinsa pa ang mouban?
                </Text>
                <Text style={styles.englishText}>
                  (Sunday afternoon. Who else will join?)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Ngano - Why</Text>
            <Text style={styles.sectionSubtitle}>Asking about reasons</Text>

            <View style={styles.questionCard}>
              <View style={styles.questionHeader}>
                <Ionicons
                  name="help-buoy"
                  size={32}
                  color={colors.orange[800]}
                />
                <Text style={styles.questionWord}>Ngano</Text>
              </View>
              <Text style={styles.questionTranslation}>Why</Text>
              <Text style={styles.pronunciationText}>NGAH-noh</Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Used to ask for reasons, causes, or explanations
                </Text>
              </View>
            </View>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>Basic Ngano Questions</Text>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Ngano man?</Text>
                <Text style={styles.englishText}>Why? / Why is that?</Text>
                <Text style={styles.pronunciationText}>NGAH-noh mahn</Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Ngano ka triste?</Text>
                <Text style={styles.englishText}>Why are you sad?</Text>
                <Text style={styles.pronunciationText}>
                  NGAH-noh kah TREES-teh
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Ngano wala ka mikaon?</Text>
                <Text style={styles.englishText}>Why didn&apos;t you eat?</Text>
                <Text style={styles.pronunciationText}>
                  NGAH-noh wah-LAH kah mee-kah-OHN
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Ngano siya wala moabot?</Text>
                <Text style={styles.englishText}>
                  Why didn&apos;t he/she come?
                </Text>
                <Text style={styles.pronunciationText}>
                  NGAH-noh see-yah wah-LAH moh-ah-BOHT
                </Text>
              </View>
            </View>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons
                  name="information-circle"
                  size={24}
                  color={colors.orange[800]}
                />
              </View>
              <Text style={styles.patternTitle}>Answering Ngano</Text>
              <Text style={styles.patternText}>
                Common ways to respond to why questions:
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Kay...</Text> - Because...
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Tungod kay...</Text> -
                  Because of...
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Example: Ngano ka triste? Kay naluya ko. (Why are you sad?
                  Because I&apos;m tired.)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Unsaon - How</Text>
            <Text style={styles.sectionSubtitle}>
              Asking about methods and manner
            </Text>

            <View style={styles.questionCard}>
              <View style={styles.questionHeader}>
                <Ionicons name="build" size={32} color={colors.orange[800]} />
                <Text style={styles.questionWord}>Unsaon</Text>
              </View>
              <Text style={styles.questionTranslation}>How</Text>
              <Text style={styles.pronunciationText}>oon-sah-OHN</Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Used to ask about methods, processes, or ways of doing things
                </Text>
              </View>
            </View>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>Basic Unsaon Questions</Text>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Unsaon man ni?</Text>
                <Text style={styles.englishText}>How is this done?</Text>
                <Text style={styles.pronunciationText}>
                  oon-sah-OHN mahn nee
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Unsaon nako pagluto?</Text>
                <Text style={styles.englishText}>How do I cook?</Text>
                <Text style={styles.pronunciationText}>
                  oon-sah-OHN nah-KOH pahg-LOO-toh
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Unsaon pag-adto?</Text>
                <Text style={styles.englishText}>How to get there?</Text>
                <Text style={styles.pronunciationText}>
                  oon-sah-OHN pahg-ahd-TOH
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Unsaon ang imong adlaw?</Text>
                <Text style={styles.englishText}>
                  How was your day? / How&apos;s your day?
                </Text>
                <Text style={styles.pronunciationText}>
                  oon-sah-OHN ahng ee-MOHNG ahd-LOW
                </Text>
              </View>
            </View>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>Pila - How Much/Many</Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Special question word for quantities and prices
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Pila ka?</Text>
                <Text style={styles.englishText}>
                  How old are you? / How many are you?
                </Text>
                <Text style={styles.pronunciationText}>PEE-lah kah</Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Pila ni?</Text>
                <Text style={styles.englishText}>How much is this?</Text>
                <Text style={styles.pronunciationText}>PEE-lah nee</Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Pila ka tuig?</Text>
                <Text style={styles.englishText}>How many years?</Text>
                <Text style={styles.pronunciationText}>
                  PEE-lah kah too-EEG
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Pila ang tanan?</Text>
                <Text style={styles.englishText}>How much is everything?</Text>
                <Text style={styles.pronunciationText}>
                  PEE-lah ahng tah-NAHN
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>At a restaurant</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Customer:</Text>
                <Text style={styles.bisayaText}>
                  Unsa ang imong i-recommend nga kaon?
                </Text>
                <Text style={styles.englishText}>
                  (What do you recommend to eat?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Server:</Text>
                <Text style={styles.bisayaText}>
                  Ang adobo lami kaayo. Pila ka order?
                </Text>
                <Text style={styles.englishText}>
                  (The adobo is very delicious. How many orders?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Customer:</Text>
                <Text style={styles.bisayaText}>
                  Usa lang. Pila ang usa ka order?
                </Text>
                <Text style={styles.englishText}>
                  (Just one. How much is one order?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Server:</Text>
                <Text style={styles.bisayaText}>
                  Dos-siyentos. Kanus-a nimo gusto ang kaon?
                </Text>
                <Text style={styles.englishText}>
                  (Two hundred. When do you want the food?)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Yes/No Questions</Text>
            <Text style={styles.sectionSubtitle}>
              Questions that can be answered with yes or no
            </Text>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons
                  name="checkbox-outline"
                  size={24}
                  color={colors.orange[800]}
                />
              </View>
              <Text style={styles.patternTitle}>
                Using &quot;Ba&quot; for Questions
              </Text>
              <Text style={styles.patternText}>
                Add &quot;ba&quot; to turn statements into yes/no questions
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Statement: Mokaon ka - You will eat
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Question: Mokaon ka ba? - Will you eat?
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Ba turns any statement into a question!
                </Text>
              </View>
            </View>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>Yes/No Questions with Ba</Text>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Nikaon ka na ba?</Text>
                <Text style={styles.englishText}>Have you eaten?</Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Gusto ka ba ug kape?</Text>
                <Text style={styles.englishText}>Do you want coffee?</Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Moabot ka ba ugma?</Text>
                <Text style={styles.englishText}>Will you come tomorrow?</Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Naa ka ba didto?</Text>
                <Text style={styles.englishText}>Are you there?</Text>
              </View>
            </View>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>
                Answering Yes/No Questions
              </Text>
              <View style={styles.qaGrid}>
                <View style={styles.qaRow}>
                  <Text style={styles.qLabel}>Question:</Text>
                  <Text style={styles.bisayaText}>Mokaon ka ba?</Text>
                  <Text style={styles.englishText}>Will you eat?</Text>
                </View>
                <View style={styles.qaRow}>
                  <Text style={styles.aLabel}>Yes Answer:</Text>
                  <Text style={styles.bisayaText}>Oo, mokaon ko</Text>
                  <Text style={styles.englishText}>Yes, I will eat</Text>
                </View>
                <View style={styles.qaRow}>
                  <Text style={styles.aLabel}>No Answer:</Text>
                  <Text style={styles.bisayaText}>Dili, dili ko mokaon</Text>
                  <Text style={styles.englishText}>No, I won&apos;t eat</Text>
                </View>
              </View>
            </View>

            <View style={styles.highlightBox}>
              <Text style={styles.highlightText}>
                💡 Pro Tip: Intonation matters! Raise your voice at the end to
                make it sound like a question, even without &quot;ba&quot;
              </Text>
            </View>

            <Text style={styles.sectionTitle}>Question Particles</Text>
            <Text style={styles.sectionSubtitle}>
              Small words that add nuance to questions
            </Text>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons
                  name="sparkles"
                  size={24}
                  color={colors.orange[800]}
                />
              </View>
              <Text style={styles.patternTitle}>Common Question Particles</Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Ba</Text> - makes it a
                  question (Mokaon ka ba?)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Man</Text> - emphasis,
                  &quot;really&quot; (Unsa man ni?)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Diay</Text> - surprise,
                  &quot;oh really?&quot; (Kinsa diay siya?)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Kaha</Text> - wondering,
                  &quot;I wonder&quot; (Asa kaha siya?)
                </Text>
              </View>
            </View>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>Using Question Particles</Text>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Kinsa man siya?</Text>
                <Text style={styles.englishText}>
                  Who is he/she really? (emphasis)
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Unsa diay ang problema?</Text>
                <Text style={styles.englishText}>
                  What&apos;s the problem then? (surprise)
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Asa kaha siya?</Text>
                <Text style={styles.englishText}>
                  Where could he/she be? (wondering)
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Pila man ni?</Text>
                <Text style={styles.englishText}>
                  How much is this really? (emphasis)
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Casual conversation</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Ana:</Text>
                <Text style={styles.bisayaText}>
                  Nakita nimo si Pedro? Asa man siya?
                </Text>
                <Text style={styles.englishText}>
                  (Did you see Pedro? Where is he really?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Juan:</Text>
                <Text style={styles.bisayaText}>
                  Wala ko. Kinsa man ang nangutana?
                </Text>
                <Text style={styles.englishText}>
                  (I didn&apos;t. Who&apos;s asking anyway?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Ana:</Text>
                <Text style={styles.bisayaText}>
                  Si Maria. Ngano man? Naa bay problema?
                </Text>
                <Text style={styles.englishText}>
                  (Maria. Why? Is there a problem?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Juan:</Text>
                <Text style={styles.bisayaText}>
                  Wala diay. Asa kaha si Pedro karon?
                </Text>
                <Text style={styles.englishText}>
                  (Nothing then. Where could Pedro be now?)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Complex Questions</Text>
            <Text style={styles.sectionSubtitle}>
              Combining question words and structures
            </Text>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>
                Questions with Multiple Elements
              </Text>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>
                  Kinsa ang mouban nimo ug asa mo paingon?
                </Text>
                <Text style={styles.englishText}>
                  Who will join you and where are you going?
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>
                  Kanus-a ka moabot ug unsa ang imong dalhon?
                </Text>
                <Text style={styles.englishText}>
                  When will you arrive and what will you bring?
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>
                  Ngano ka triste ug asa ang imong amiga?
                </Text>
                <Text style={styles.englishText}>
                  Why are you sad and where is your friend?
                </Text>
              </View>
            </View>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons name="ribbon" size={24} color={colors.orange[800]} />
              </View>
              <Text style={styles.patternTitle}>Question Formation Tips</Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Question words usually come at the beginning
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Use &quot;ba&quot; for yes/no questions
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Add &quot;man&quot; for emphasis or stronger inquiry
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Intonation is key - rise at the end of questions
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Context often makes the question clear even without particles
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
                Maayo! Question Master Achieved!
              </Text>
              <Text style={styles.patternText}>
                You now know how to ask questions in Bisaya:
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Kinsa</Text> - Who (for
                  people)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Unsa</Text> - What (for
                  things/actions)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Asa</Text> - Where (for
                  places)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Kanus-a</Text> - When (for
                  time)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Ngano</Text> - Why (for
                  reasons)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Unsaon</Text> - How (for
                  methods)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Pila</Text> - How
                  much/many (for quantity)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Using &quot;ba&quot; for yes/no questions
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Question particles (man, diay, kaha) for nuance
                </Text>
              </View>
              <Text style={[styles.patternText, { marginTop: 16 }]}>
                Now you can ask anything! Practice these questions every day!
              </Text>
            </View>
          </ScrollView>
        </Animated.View>
      </View>
    </View>
  );
}
