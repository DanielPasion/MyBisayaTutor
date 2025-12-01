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

export default function Lesson1() {
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
      borderColor: colors.green[400] + "40",
      shadowColor: colors.green[500],
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.15,
      shadowRadius: 12,
      elevation: 6,
      alignItems: "center",
    },
    lessonNumber: {
      fontSize: 13,
      fontWeight: "800",
      color: colors.green[500],
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
    dialogueBox: {
      backgroundColor: isDarkMode
        ? colors.cream[100] + "F5"
        : colors.white[100] + "F5",
      borderRadius: 20,
      padding: 24,
      marginBottom: 20,
      borderWidth: 2,
      borderColor: colors.green[400] + "30",
      shadowColor: colors.green[400],
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.12,
      shadowRadius: 6,
      elevation: 4,
    },
    sceneLabel: {
      fontSize: 14,
      fontWeight: "700",
      color: colors.orange[600],
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
      color: colors.orange[500],
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
      color: colors.green[600],
      marginTop: 4,
      fontWeight: "600",
    },
    patternBox: {
      backgroundColor: colors.orange[400] + "18",
      padding: 24,
      borderRadius: 20,
      marginBottom: 20,
      borderWidth: 2,
      borderColor: colors.orange[500],
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
      color: colors.orange[500],
      marginRight: 12,
      fontWeight: "700",
    },
    exampleText: {
      flex: 1,
      fontSize: 15,
      color: colors.text[100],
      lineHeight: 22,
    },
    highlightBox: {
      backgroundColor: colors.green[500] + "20",
      padding: 20,
      borderRadius: 16,
      marginVertical: 16,
      borderWidth: 2,
      borderColor: colors.green[500] + "40",
      width: "100%",
    },
    highlightText: {
      fontSize: 18,
      fontWeight: "700",
      color: colors.green[700],
      textAlign: "center",
      lineHeight: 26,
    },
    breakdownBox: {
      backgroundColor: isDarkMode
        ? colors.cream[100] + "F5"
        : colors.white[100] + "F5",
      padding: 24,
      borderRadius: 20,
      marginBottom: 16,
      borderWidth: 2,
      borderColor: colors.green[400] + "40",
      shadowColor: colors.green[400],
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.1,
      shadowRadius: 6,
      elevation: 3,
      alignItems: "center",
    },
    breakdownTitle: {
      fontSize: 28,
      fontWeight: "800",
      color: colors.text[100],
      marginBottom: 8,
      textAlign: "center",
    },
    contextNote: {
      backgroundColor: colors.green[400] + "20",
      padding: 16,
      borderRadius: 14,
      marginTop: 16,
      borderWidth: 1.5,
      borderColor: colors.green[400] + "40",
      width: "100%",
    },
    contextNoteText: {
      fontSize: 14,
      color: colors.text[100],
      lineHeight: 21,
      textAlign: "center",
      fontWeight: "500",
    },
    comparisonBox: {
      flexDirection: "row",
      gap: 16,
      marginBottom: 20,
    },
    comparisonItem: {
      flex: 1,
      backgroundColor: isDarkMode
        ? colors.cream[100] + "F5"
        : colors.white[100] + "F5",
      padding: 20,
      borderRadius: 18,
      borderWidth: 2,
      borderColor: colors.green[400] + "30",
      alignItems: "center",
      shadowColor: colors.green[400],
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3,
    },
    comparisonLabel: {
      fontSize: 13,
      fontWeight: "800",
      color: colors.orange[500],
      marginBottom: 12,
      textTransform: "uppercase",
      letterSpacing: 1,
    },
    comparisonWord: {
      fontSize: 30,
      fontWeight: "800",
      color: colors.text[100],
      marginBottom: 8,
    },
    comparisonMeaning: {
      fontSize: 15,
      color: colors.text[200],
      fontStyle: "italic",
      marginBottom: 12,
    },
    summaryBox: {
      backgroundColor: colors.green[500] + "20",
      padding: 28,
      borderRadius: 20,
      marginTop: 24,
      marginBottom: 16,
      borderWidth: 2,
      borderColor: colors.green[500] + "40",
      alignItems: "center",
      shadowColor: colors.green[500],
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 5,
    },
    iconRow: {
      marginBottom: 16,
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
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Ionicons name="arrow-back" size={24} color={colors.orange[500]} />
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>

        <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            bounces={false}
          >
            <View style={styles.headerSection}>
              <Text style={styles.lessonNumber}>Lesson 1</Text>
              <Text style={styles.headerTitle}>Greetings & Basic Phrases</Text>
              <Text style={styles.headerDescription}>
                Your first steps in Bisaya conversation
              </Text>
            </View>

            <Text style={styles.sectionTitle}>The Greeting Pattern</Text>
            <Text style={styles.sectionSubtitle}>
              Master this and greet people all day long
            </Text>

            <View style={styles.patternBox}>
              <Text style={styles.patternTitle}>The Magic Formula</Text>
              <Text style={styles.patternText}>
                Maayong + [time of day] = Perfect greeting
              </Text>
              <View style={styles.highlightBox}>
                <Text style={styles.highlightText}>
                  Maayong means &ldquo;good&rdquo; in Bisaya
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Buntag = Morning → Maayong buntag
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Udto = Noon → Maayong udto
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Hapon = Afternoon → Maayong hapon
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Gabii = Evening/Night → Maayong gabii
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Morning Scene</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>Maayong buntag!</Text>
                <Text style={styles.englishText}>(Good morning!)</Text>
                <Text style={styles.pronunciationText}>
                  mah-AH-yong BOON-tahg
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Local:</Text>
                <Text style={styles.bisayaText}>Maayong buntag! Kumusta?</Text>
                <Text style={styles.englishText}>
                  (Good morning! How are you?)
                </Text>
              </View>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Kumusta</Text>
              <Text style={styles.pronunciationText}>koo-MOOS-tah</Text>
              <Text
                style={[
                  styles.englishText,
                  { marginTop: 12, fontSize: 16, textAlign: "center" },
                ]}
              >
                How are you?
              </Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  This is your go-to conversation starter. Works in any
                  situation, formal or casual.
                </Text>
              </View>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Maayo man</Text>
              <Text style={styles.pronunciationText}>mah-AH-yo mahn</Text>
              <Text
                style={[
                  styles.englishText,
                  { marginTop: 12, fontSize: 16, textAlign: "center" },
                ]}
              >
                I&apos;m good
              </Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  The &ldquo;man&rdquo; at the end softens it, like saying
                  &ldquo;I&apos;m good, you know&rdquo;
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>The Polite Trinity</Text>
            <Text style={styles.sectionSubtitle}>
              Three phrases that show respect
            </Text>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Salamat</Text>
              <Text style={styles.pronunciationText}>sah-LAH-maht</Text>
              <Text
                style={[
                  styles.englishText,
                  { marginTop: 12, fontSize: 16, textAlign: "center" },
                ]}
              >
                Thank you
              </Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Add &ldquo;kaayo&rdquo; (kah-AH-yo) for &ldquo;thank you very
                  much&rdquo;
                </Text>
              </View>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Palihug</Text>
              <Text style={styles.pronunciationText}>pah-LEE-hoog</Text>
              <Text
                style={[
                  styles.englishText,
                  { marginTop: 12, fontSize: 16, textAlign: "center" },
                ]}
              >
                Please
              </Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Usually comes at the end of a request, not the beginning like
                  English
                </Text>
              </View>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Pasensya na</Text>
              <Text style={styles.pronunciationText}>pah-SEN-shah nah</Text>
              <Text
                style={[
                  styles.englishText,
                  { marginTop: 12, fontSize: 16, textAlign: "center" },
                ]}
              >
                Excuse me / Sorry
              </Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Your multi-tool phrase! Bumped someone? &ldquo;Pasensya
                  na.&rdquo; Need to squeeze past? &ldquo;Pasensya na.&rdquo;
                  Late to meeting? &ldquo;Pasensya na.&rdquo;
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>At a local eatery</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>Adobo, palihug.</Text>
                <Text style={styles.englishText}>(Adobo, please.)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Vendor:</Text>
                <Text style={styles.bisayaText}>Sige, kuya.</Text>
                <Text style={styles.englishText}>(Okay, brother.)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>Salamat!</Text>
                <Text style={styles.englishText}>(Thank you!)</Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Yes or No?</Text>
            <Text style={styles.sectionSubtitle}>
              The two simplest (but most important) words
            </Text>

            <View style={styles.comparisonBox}>
              <View style={styles.comparisonItem}>
                <Text style={styles.comparisonLabel}>YES</Text>
                <Text style={styles.comparisonWord}>Oo</Text>
                <Text style={styles.comparisonMeaning}>Oh-oh</Text>
                <View style={styles.contextNote}>
                  <Text style={styles.contextNoteText}>
                    Careful! Sounds like &ldquo;oh oh&rdquo; but means YES
                  </Text>
                </View>
              </View>
              <View style={styles.comparisonItem}>
                <Text style={styles.comparisonLabel}>NO</Text>
                <Text style={styles.comparisonWord}>Dili</Text>
                <Text style={styles.comparisonMeaning}>DEE-lee</Text>
                <View style={styles.contextNote}>
                  <Text style={styles.contextNoteText}>
                    Can say twice for emphasis: &ldquo;Dili, dili!&rdquo;
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Quick daily exchanges</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Friend:</Text>
                <Text style={styles.bisayaText}>Gusto ka ug kape?</Text>
                <Text style={styles.englishText}>(Do you want coffee?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>Oo, salamat!</Text>
                <Text style={styles.englishText}>(Yes, thank you!)</Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Saying Goodbye</Text>
            <Text style={styles.sectionSubtitle}>
              Different ways to part ways
            </Text>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Babay</Text>
              <Text style={styles.pronunciationText}>BAH-bye</Text>
              <Text
                style={[
                  styles.englishText,
                  { marginTop: 12, fontSize: 16, textAlign: "center" },
                ]}
              >
                Goodbye (casual)
              </Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Your everyday goodbye. Short, sweet, friendly.
                </Text>
              </View>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Adios</Text>
              <Text style={styles.pronunciationText}>ah-dee-OHS</Text>
              <Text
                style={[
                  styles.englishText,
                  { marginTop: 12, fontSize: 16, textAlign: "center" },
                ]}
              >
                Goodbye (formal)
              </Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Use with older people, bosses, formal situations.
                </Text>
              </View>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Hangtod sunod</Text>
              <Text style={styles.pronunciationText}>HAHNG-tohd SOO-nohd</Text>
              <Text
                style={[
                  styles.englishText,
                  { marginTop: 12, fontSize: 16, textAlign: "center" },
                ]}
              >
                See you next time
              </Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  When you know you&apos;ll see the person again soon.
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Complete Conversation</Text>
            <Text style={styles.sectionSubtitle}>
              Using everything you learned!
            </Text>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Meeting a new neighbor</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>Maayong buntag!</Text>
                <Text style={styles.englishText}>(Good morning!)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Neighbor:</Text>
                <Text style={styles.bisayaText}>
                  Maayong buntag! Bag-o ka diri?
                </Text>
                <Text style={styles.englishText}>
                  (Good morning! Are you new here?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>Oo, bag-o ko.</Text>
                <Text style={styles.englishText}>(Yes, I&apos;m new.)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Neighbor:</Text>
                <Text style={styles.bisayaText}>Welcome! Kumusta?</Text>
                <Text style={styles.englishText}>(Welcome! How are you?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>Maayo man, salamat!</Text>
                <Text style={styles.englishText}>
                  (I&apos;m good, thank you!)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Neighbor:</Text>
                <Text style={styles.bisayaText}>Sige, babay!</Text>
                <Text style={styles.englishText}>(Alright, bye!)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>Babay! Hangtod sunod!</Text>
                <Text style={styles.englishText}>
                  (Bye! See you next time!)
                </Text>
              </View>
            </View>

            <View style={styles.summaryBox}>
              <View style={styles.iconRow}>
                <Ionicons
                  name="checkmark-circle"
                  size={28}
                  color={colors.green[600]}
                />
              </View>
              <Text style={styles.patternTitle}>You Did It!</Text>
              <Text style={styles.patternText}>
                You just learned the foundation of Bisaya greetings! Now you
                can:
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Greet people at any time using the Maayong pattern
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Be polite with Salamat, Palihug, and Pasensya na
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Answer questions with Oo and Dili
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Say goodbye appropriately for any situation
                </Text>
              </View>
              <Text style={[styles.patternText, { marginTop: 16 }]}>
                Practice these every day and they&apos;ll become natural!
              </Text>
            </View>
          </ScrollView>
        </Animated.View>
      </View>
    </View>
  );
}
