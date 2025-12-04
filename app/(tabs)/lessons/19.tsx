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

export default function Lesson19() {
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
    negationCard: {
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
    negationHeader: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 16,
    },
    negationWord: {
      fontSize: 28,
      fontWeight: "800",
      color: colors.orange[800],
      marginLeft: 12,
    },
    negationTranslation: {
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
      marginBottom: 14,
    },
    labelText: {
      fontSize: 12,
      fontWeight: "700",
      color: colors.orange[700],
      marginBottom: 4,
      textTransform: "uppercase",
    },
    positiveText: {
      fontSize: 16,
      color: colors.text[100],
      marginBottom: 4,
    },
    negativeText: {
      fontSize: 16,
      fontWeight: "700",
      color: colors.orange[900],
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
              <Text style={styles.lessonNumber}>Lesson 19</Text>
              <Text style={styles.headerTitle}>Negation Patterns</Text>
              <Text style={styles.headerDescription}>
                Master different ways to say &quot;no&quot; and &quot;not&quot;
                in Bisaya
              </Text>
            </View>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons
                  name="close-circle"
                  size={24}
                  color={colors.orange[800]}
                />
              </View>
              <Text style={styles.patternTitle}>Negation Overview</Text>
              <Text style={styles.patternText}>
                Bisaya has several negation words depending on what you&apos;re
                negating. Each one has specific uses!
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Dili</Text> - not, no
                  (general negation)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Wala</Text> - not, none,
                  didn&apos;t (for completed actions/existence)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Ayaw</Text> - don&apos;t
                  (commands)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Dili - General Negation</Text>
            <Text style={styles.sectionSubtitle}>
              The most common way to say &quot;not&quot;
            </Text>

            <View style={styles.negationCard}>
              <View style={styles.negationHeader}>
                <Ionicons
                  name="close-circle"
                  size={32}
                  color={colors.orange[800]}
                />
                <Text style={styles.negationWord}>Dili</Text>
              </View>
              <Text style={styles.negationTranslation}>Not / No</Text>
              <Text style={styles.pronunciationText}>dee-LEE</Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Used for general negation - ongoing and contemplated actions,
                  adjectives, and statements
                </Text>
              </View>
            </View>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>Dili with Adjectives</Text>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Dili ko maayo</Text>
                <Text style={styles.englishText}>I&apos;m not good</Text>
                <Text style={styles.pronunciationText}>
                  dee-LEE koh mah-AH-yoh
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Dili siya gwapa</Text>
                <Text style={styles.englishText}>She&apos;s not beautiful</Text>
                <Text style={styles.pronunciationText}>
                  dee-LEE see-yah gwah-PAH
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Dili ni lami</Text>
                <Text style={styles.englishText}>This is not delicious</Text>
                <Text style={styles.pronunciationText}>
                  dee-LEE nee lah-MEE
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Dili na init</Text>
                <Text style={styles.englishText}>
                  It&apos;s not hot anymore
                </Text>
                <Text style={styles.pronunciationText}>
                  dee-LEE nah ee-NEET
                </Text>
              </View>
            </View>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>
                Dili with Ongoing Actions (Nag-)
              </Text>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Dili ko nagkaon</Text>
                <Text style={styles.englishText}>I&apos;m not eating</Text>
                <Text style={styles.pronunciationText}>
                  dee-LEE koh nahg-kah-OHN
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Dili siya nagtuon</Text>
                <Text style={styles.englishText}>
                  He/She&apos;s not studying
                </Text>
                <Text style={styles.pronunciationText}>
                  dee-LEE see-yah nahg-too-OHN
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Dili mi naglakaw</Text>
                <Text style={styles.englishText}>We&apos;re not walking</Text>
                <Text style={styles.pronunciationText}>
                  dee-LEE mee nahg-lah-KOW
                </Text>
              </View>
            </View>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>
                Dili with Future Actions (Mo-)
              </Text>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Dili ko mokaon</Text>
                <Text style={styles.englishText}>I will not eat</Text>
                <Text style={styles.pronunciationText}>
                  dee-LEE koh moh-kah-OHN
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Dili siya moadto</Text>
                <Text style={styles.englishText}>He/She will not go</Text>
                <Text style={styles.pronunciationText}>
                  dee-LEE see-yah moh-ahd-TOH
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Dili ko motabang</Text>
                <Text style={styles.englishText}>I will not help</Text>
                <Text style={styles.pronunciationText}>
                  dee-LEE koh moh-tah-BAHNG
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Restaurant scene</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Server:</Text>
                <Text style={styles.bisayaText}>Moorder ka ba ug dessert?</Text>
                <Text style={styles.englishText}>
                  (Will you order dessert?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Customer:</Text>
                <Text style={styles.bisayaText}>
                  Dili na. Busog na kaayo ko.
                </Text>
                <Text style={styles.englishText}>
                  (Not anymore. I&apos;m very full.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Server:</Text>
                <Text style={styles.bisayaText}>
                  Sige. Dili ba nimo gusto ug kape?
                </Text>
                <Text style={styles.englishText}>
                  (Okay. Don&apos;t you want coffee?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Customer:</Text>
                <Text style={styles.bisayaText}>
                  Dili, salamat. Moinom na lang ko ug tubig.
                </Text>
                <Text style={styles.englishText}>
                  (No, thanks. I&apos;ll just drink water.)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Wala - Existential Negation</Text>
            <Text style={styles.sectionSubtitle}>
              For completed actions and non-existence
            </Text>

            <View style={styles.negationCard}>
              <View style={styles.negationHeader}>
                <Ionicons name="ban" size={32} color={colors.orange[800]} />
                <Text style={styles.negationWord}>Wala</Text>
              </View>
              <Text style={styles.negationTranslation}>
                None / Nothing / Didn&apos;t / Not there
              </Text>
              <Text style={styles.pronunciationText}>wah-LAH</Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Used for completed actions (past tense) and to express
                  non-existence or absence
                </Text>
              </View>
            </View>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>
                Wala for Non-Existence (There is no...)
              </Text>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Wala koy kwarta</Text>
                <Text style={styles.englishText}>I have no money</Text>
                <Text style={styles.pronunciationText}>
                  wah-LAH koh-ee kwahr-TAH
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Wala nay bugas</Text>
                <Text style={styles.englishText}>
                  There&apos;s no more rice
                </Text>
                <Text style={styles.pronunciationText}>
                  wah-LAH nye BOO-gahs
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Wala siya dinhi</Text>
                <Text style={styles.englishText}>He/She is not here</Text>
                <Text style={styles.pronunciationText}>
                  wah-LAH see-yah deen-HEE
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Wala koy problema</Text>
                <Text style={styles.englishText}>I have no problem</Text>
                <Text style={styles.pronunciationText}>
                  wah-LAH koh-ee proh-BLEH-mah
                </Text>
              </View>
            </View>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>
                Wala with Completed Actions (Ni-)
              </Text>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Wala ko nikaon</Text>
                <Text style={styles.englishText}>I didn&apos;t eat</Text>
                <Text style={styles.pronunciationText}>
                  wah-LAH koh nee-kah-OHN
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Wala siya miabot</Text>
                <Text style={styles.englishText}>
                  He/She didn&apos;t arrive
                </Text>
                <Text style={styles.pronunciationText}>
                  wah-LAH see-yah mee-ah-BOHT
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Wala mi nituon gahapon</Text>
                <Text style={styles.englishText}>
                  We didn&apos;t study yesterday
                </Text>
                <Text style={styles.pronunciationText}>
                  wah-LAH mee nee-too-OHN gah-hah-POHN
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Wala pa ko niinom</Text>
                <Text style={styles.englishText}>I haven&apos;t drunk yet</Text>
                <Text style={styles.pronunciationText}>
                  wah-LAH pah koh nee-ee-NOHM
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
              <Text style={styles.patternTitle}>Wala + Pa Pattern</Text>
              <Text style={styles.patternText}>
                &quot;Wala pa&quot; means &quot;not yet&quot; - very common in
                conversation!
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Wala pa ko nikaon - I haven&apos;t eaten yet
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Wala pa siya miabot - He/She hasn&apos;t arrived yet
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Wala pa mi nihuman - We haven&apos;t finished yet
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Meeting a friend</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Ana:</Text>
                <Text style={styles.bisayaText}>Nikaon ka na ba?</Text>
                <Text style={styles.englishText}>(Have you eaten?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Juan:</Text>
                <Text style={styles.bisayaText}>
                  Wala pa. Wala koy panahon gahapon.
                </Text>
                <Text style={styles.englishText}>
                  (Not yet. I had no time yesterday.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Ana:</Text>
                <Text style={styles.bisayaText}>
                  Asa ta mokaon? Wala ba kay gusto?
                </Text>
                <Text style={styles.englishText}>
                  (Where should we eat? Don&apos;t you have a preference?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Juan:</Text>
                <Text style={styles.bisayaText}>
                  Wala. Basta naa lang kaon!
                </Text>
                <Text style={styles.englishText}>
                  (None. As long as there&apos;s food!)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Dili vs Wala</Text>
            <Text style={styles.sectionSubtitle}>
              Understanding the key difference
            </Text>

            <View style={styles.comparisonBox}>
              <Text style={styles.comparisonTitle}>
                When to Use Dili vs Wala
              </Text>
              <View style={styles.comparisonRow}>
                <Text style={styles.labelText}>Use DILI for:</Text>
                <View style={styles.exampleRow}>
                  <Text style={styles.bulletPoint}>•</Text>
                  <Text style={styles.exampleText}>
                    Ongoing actions (Nag-): Dili ko nagkaon
                  </Text>
                </View>
                <View style={styles.exampleRow}>
                  <Text style={styles.bulletPoint}>•</Text>
                  <Text style={styles.exampleText}>
                    Future actions (Mo-): Dili ko mokaon
                  </Text>
                </View>
                <View style={styles.exampleRow}>
                  <Text style={styles.bulletPoint}>•</Text>
                  <Text style={styles.exampleText}>
                    Adjectives: Dili ko maayo
                  </Text>
                </View>
              </View>
              <View style={styles.comparisonRow}>
                <Text style={styles.labelText}>Use WALA for:</Text>
                <View style={styles.exampleRow}>
                  <Text style={styles.bulletPoint}>•</Text>
                  <Text style={styles.exampleText}>
                    Completed actions (Ni-): Wala ko nikaon
                  </Text>
                </View>
                <View style={styles.exampleRow}>
                  <Text style={styles.bulletPoint}>•</Text>
                  <Text style={styles.exampleText}>
                    Non-existence: Wala koy kwarta
                  </Text>
                </View>
                <View style={styles.exampleRow}>
                  <Text style={styles.bulletPoint}>•</Text>
                  <Text style={styles.exampleText}>
                    Absence: Wala siya dinhi
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>Side-by-Side Comparison</Text>
              <View style={styles.comparisonRow}>
                <Text style={styles.labelText}>Positive</Text>
                <Text style={styles.positiveText}>Mokaon ko ugma</Text>
                <Text style={styles.englishText}>I will eat tomorrow</Text>
                <Text style={styles.labelText}>Negative with DILI</Text>
                <Text style={styles.negativeText}>Dili ko mokaon ugma</Text>
                <Text style={styles.englishText}>I will not eat tomorrow</Text>
              </View>
              <View style={styles.comparisonRow}>
                <Text style={styles.labelText}>Positive</Text>
                <Text style={styles.positiveText}>Nikaon ko gahapon</Text>
                <Text style={styles.englishText}>I ate yesterday</Text>
                <Text style={styles.labelText}>Negative with WALA</Text>
                <Text style={styles.negativeText}>Wala ko nikaon gahapon</Text>
                <Text style={styles.englishText}>
                  I didn&apos;t eat yesterday
                </Text>
              </View>
              <View style={styles.comparisonRow}>
                <Text style={styles.labelText}>Positive</Text>
                <Text style={styles.positiveText}>Nagkaon ko karon</Text>
                <Text style={styles.englishText}>I&apos;m eating now</Text>
                <Text style={styles.labelText}>Negative with DILI</Text>
                <Text style={styles.negativeText}>Dili ko nagkaon karon</Text>
                <Text style={styles.englishText}>I&apos;m not eating now</Text>
              </View>
            </View>

            <View style={styles.highlightBox}>
              <Text style={styles.highlightText}>
                💡 Remember: DILI = present/future/adjectives, WALA =
                past/absence!
              </Text>
            </View>

            <Text style={styles.sectionTitle}>Ayaw - Negative Commands</Text>
            <Text style={styles.sectionSubtitle}>
              Telling someone NOT to do something
            </Text>

            <View style={styles.negationCard}>
              <View style={styles.negationHeader}>
                <Ionicons
                  name="hand-left"
                  size={32}
                  color={colors.orange[800]}
                />
                <Text style={styles.negationWord}>Ayaw</Text>
              </View>
              <Text style={styles.negationTranslation}>
                Don&apos;t / Do not
              </Text>
              <Text style={styles.pronunciationText}>ah-YOW</Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Used for negative commands - telling someone not to do
                  something
                </Text>
              </View>
            </View>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>Basic Ayaw Commands</Text>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Ayaw kaon</Text>
                <Text style={styles.englishText}>Don&apos;t eat</Text>
                <Text style={styles.pronunciationText}>ah-YOW kah-OHN</Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Ayaw lakaw</Text>
                <Text style={styles.englishText}>Don&apos;t go</Text>
                <Text style={styles.pronunciationText}>ah-YOW lah-KOW</Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Ayaw sulti</Text>
                <Text style={styles.englishText}>Don&apos;t speak/tell</Text>
                <Text style={styles.pronunciationText}>ah-YOW sool-TEE</Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Ayaw hilak</Text>
                <Text style={styles.englishText}>Don&apos;t cry</Text>
                <Text style={styles.pronunciationText}>ah-YOW hee-LAHK</Text>
              </View>
            </View>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>Ayaw with Object</Text>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Ayaw ug kaon sa tinapay</Text>
                <Text style={styles.englishText}>Don&apos;t eat the bread</Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Ayaw ug sulti niya</Text>
                <Text style={styles.englishText}>Don&apos;t tell him/her</Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Ayaw ug hilabi niadto</Text>
                <Text style={styles.englishText}>Don&apos;t touch that</Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Ayaw ug kalimot</Text>
                <Text style={styles.englishText}>Don&apos;t forget</Text>
              </View>
            </View>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons name="warning" size={24} color={colors.orange[800]} />
              </View>
              <Text style={styles.patternTitle}>Polite vs Direct Commands</Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Direct:</Text> Ayaw kaon -
                  Don&apos;t eat
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Polite:</Text> Ayaw lang -
                  Please don&apos;t
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Softer:</Text> Ayaw na -
                  Don&apos;t anymore
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Parent and child</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Child:</Text>
                <Text style={styles.bisayaText}>Mokaon ko ug candy!</Text>
                <Text style={styles.englishText}>(I&apos;ll eat candy!)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Parent:</Text>
                <Text style={styles.bisayaText}>
                  Ayaw! Dili ka pwede mokaon ug candy karon.
                </Text>
                <Text style={styles.englishText}>
                  (Don&apos;t! You can&apos;t eat candy now.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Child:</Text>
                <Text style={styles.bisayaText}>Ngano man? Wala na ba?</Text>
                <Text style={styles.englishText}>
                  (Why? Is there none left?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Parent:</Text>
                <Text style={styles.bisayaText}>
                  Naa pa pero ayaw lang karon. Mokaon ta human sa panihapon.
                </Text>
                <Text style={styles.englishText}>
                  (There is but not now. We&apos;ll eat after dinner.)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Other Negation Words</Text>
            <Text style={styles.sectionSubtitle}>
              Additional ways to express negation
            </Text>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>Walay - Have No/None</Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Contraction of &quot;wala&quot; + &quot;ug&quot; = &quot;have
                  no&quot;
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Walay problema</Text>
                <Text style={styles.englishText}>No problem</Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Walay lami</Text>
                <Text style={styles.englishText}>Not delicious / No taste</Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Walay buot</Text>
                <Text style={styles.englishText}>
                  No meaning / Doesn&apos;t want to
                </Text>
              </View>
            </View>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>Dili + Adjectives</Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Common negative adjective combinations
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Dili pwede</Text>
                <Text style={styles.englishText}>Cannot / Not allowed</Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Dili tinuod</Text>
                <Text style={styles.englishText}>Not true / False</Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Dili maayo</Text>
                <Text style={styles.englishText}>Not good / Bad</Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Dili sakto</Text>
                <Text style={styles.englishText}>Not correct / Wrong</Text>
              </View>
            </View>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>Wala + Specific Negations</Text>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Wala nay labot</Text>
                <Text style={styles.englishText}>
                  None of your business / No relation
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Wala nay laing mahimo</Text>
                <Text style={styles.englishText}>Nothing else can be done</Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Wala koy labot</Text>
                <Text style={styles.englishText}>
                  I have nothing to do with it
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Double Negatives</Text>
            <Text style={styles.sectionSubtitle}>
              Emphasis through repetition
            </Text>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons
                  name="close-circle-outline"
                  size={24}
                  color={colors.orange[800]}
                />
              </View>
              <Text style={styles.patternTitle}>
                Double Negatives for Emphasis
              </Text>
              <Text style={styles.patternText}>
                Unlike English, Bisaya double negatives strengthen negation
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Wala gyud - Really none / Absolutely not
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Dili gyud - Really not / Definitely not
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Wala jud - Truly none / Really didn&apos;t
                </Text>
              </View>
            </View>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>Emphatic Negation</Text>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Wala gyud koy kwarta</Text>
                <Text style={styles.englishText}>I really have no money</Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Dili gyud ko mokaon</Text>
                <Text style={styles.englishText}>
                  I definitely won&apos;t eat
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Wala jud siya miabot</Text>
                <Text style={styles.englishText}>
                  He/She really didn&apos;t come
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Dili na gyud</Text>
                <Text style={styles.englishText}>Really not anymore</Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Strong denial</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Person A:</Text>
                <Text style={styles.bisayaText}>
                  Ikaw ba ang mikuha sa libro?
                </Text>
                <Text style={styles.englishText}>(Did you take the book?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Person B:</Text>
                <Text style={styles.bisayaText}>
                  Wala gyud! Dili ko! Wala jud ko mikuha!
                </Text>
                <Text style={styles.englishText}>
                  (Really no! Not me! I really didn&apos;t take it!)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Person A:</Text>
                <Text style={styles.bisayaText}>
                  Kinsa man? Wala bay laing tawo dinhi?
                </Text>
                <Text style={styles.englishText}>
                  (Then who? Wasn&apos;t there anyone else here?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Person B:</Text>
                <Text style={styles.bisayaText}>
                  Wala koy kahibalo. Dili gyud ko!
                </Text>
                <Text style={styles.englishText}>
                  (I don&apos;t know. Really not me!)
                </Text>
              </View>
            </View>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons name="school" size={24} color={colors.orange[800]} />
              </View>
              <Text style={styles.patternTitle}>Negation Quick Reference</Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Present/Future action → Use DILI
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>Past action → Use WALA</Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Adjective/state → Use DILI
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>Non-existence → Use WALA</Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>Command → Use AYAW</Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Emphasis → Add GYUD or JUD
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
                Maayo Kaayo! Negation Mastered!
              </Text>
              <Text style={styles.patternText}>
                You now understand all the ways to say &quot;no&quot; in Bisaya:
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Dili</Text> for
                  present/future actions and adjectives
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Wala</Text> for past
                  actions and non-existence
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Ayaw</Text> for negative
                  commands
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  The crucial difference between dili and wala
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  &quot;Wala pa&quot; for &quot;not yet&quot;
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Emphatic negation with gyud/jud
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Common negative expressions and phrases
                </Text>
              </View>
              <Text style={[styles.patternText, { marginTop: 16 }]}>
                Practice negation in every conversation - it&apos;s essential
                for natural Bisaya!
              </Text>
            </View>
          </ScrollView>
        </Animated.View>
      </View>
    </View>
  );
}
