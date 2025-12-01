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

export default function Lesson3() {
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
      borderColor: colors.green[500] + "40",
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
      borderColor: colors.green[500] + "30",
      shadowColor: colors.green[500],
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
      textAlign: "center",
    },
    patternBox: {
      backgroundColor: colors.orange[500] + "18",
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
    vocabGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 12,
      marginBottom: 20,
    },
    vocabCard: {
      width: "47%",
      minWidth: 140,
      backgroundColor: isDarkMode
        ? colors.cream[100] + "F5"
        : colors.white[100] + "F5",
      borderRadius: 16,
      padding: 18,
      alignItems: "center",
      borderWidth: 2,
      borderColor: colors.green[500] + "30",
      shadowColor: colors.green[400],
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    vocabIcon: {
      marginBottom: 12,
    },
    vocabWord: {
      fontSize: 22,
      fontWeight: "800",
      color: colors.text[100],
      marginBottom: 6,
      textAlign: "center",
    },
    vocabTranslation: {
      fontSize: 14,
      color: colors.text[200],
      textAlign: "center",
      marginBottom: 6,
    },
    vocabPronunciation: {
      fontSize: 12,
      color: colors.green[600],
      fontWeight: "600",
      textAlign: "center",
    },
    breakdownBox: {
      backgroundColor: isDarkMode
        ? colors.cream[100] + "F5"
        : colors.white[100] + "F5",
      borderRadius: 20,
      padding: 24,
      marginBottom: 20,
      borderWidth: 2,
      borderColor: colors.green[500] + "30",
      shadowColor: colors.green[400],
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.12,
      shadowRadius: 6,
      elevation: 4,
    },
    breakdownTitle: {
      fontSize: 18,
      fontWeight: "800",
      color: colors.text[100],
      marginBottom: 14,
      textAlign: "center",
    },
    contextNote: {
      backgroundColor: colors.orange[500] + "15",
      padding: 16,
      borderRadius: 12,
      marginTop: 12,
      borderWidth: 1,
      borderColor: colors.orange[400] + "30",
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
      backgroundColor: colors.green[600] + "20",
      padding: 28,
      borderRadius: 24,
      marginTop: 20,
      marginBottom: 20,
      borderWidth: 2,
      borderColor: colors.green[600] + "40",
      alignItems: "center",
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
              <Text style={styles.lessonNumber}>Lesson 3</Text>
              <Text style={styles.headerTitle}>Family Members</Text>
              <Text style={styles.headerDescription}>
                Learn to talk about your pamilya (family) - the heart of
                Filipino culture!
              </Text>
            </View>

            <Text style={styles.sectionTitle}>Core Family Members</Text>
            <Text style={styles.sectionSubtitle}>
              The immediate family - ginikanan ug mga anak
            </Text>

            <View style={styles.vocabGrid}>
              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons name="man" size={40} color={colors.green[500]} />
                </View>
                <Text style={styles.vocabWord}>Papa / Tatay</Text>
                <Text style={styles.vocabTranslation}>Father / Dad</Text>
                <Text style={styles.vocabPronunciation}>PAH-pah / TAH-tie</Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons name="woman" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.vocabWord}>Mama / Nanay</Text>
                <Text style={styles.vocabTranslation}>Mother / Mom</Text>
                <Text style={styles.vocabPronunciation}>
                  MAH-mah / NAH-nigh
                </Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons name="male" size={40} color={colors.green[600]} />
                </View>
                <Text style={styles.vocabWord}>Anak nga lalaki</Text>
                <Text style={styles.vocabTranslation}>Son</Text>
                <Text style={styles.vocabPronunciation}>
                  AH-nak ngah lah-LAH-kee
                </Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons
                    name="female"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.vocabWord}>Anak nga babaye</Text>
                <Text style={styles.vocabTranslation}>Daughter</Text>
                <Text style={styles.vocabPronunciation}>
                  AH-nak ngah bah-BYE-eh
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Meeting someone new</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Friend:</Text>
                <Text style={styles.bisayaText}>
                  Pila man ka buok ninyo sa pamilya?
                </Text>
                <Text style={styles.englishText}>
                  (How many are you in the family?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>
                  Lima mi - papa, mama, ug tulo ka mga igsoon.
                </Text>
                <Text style={styles.englishText}>
                  (We&apos;re five - dad, mom, and three siblings.)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Siblings</Text>
            <Text style={styles.sectionSubtitle}>
              Brothers and sisters - mga igsoon
            </Text>

            <View style={styles.vocabGrid}>
              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons name="people" size={40} color={colors.green[500]} />
                </View>
                <Text style={styles.vocabWord}>Igsoon</Text>
                <Text style={styles.vocabTranslation}>Sibling</Text>
                <Text style={styles.vocabPronunciation}>eeg-soh-OHN</Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons name="man" size={40} color={colors.green[600]} />
                </View>
                <Text style={styles.vocabWord}>Manghod nga lalaki</Text>
                <Text style={styles.vocabTranslation}>Younger brother</Text>
                <Text style={styles.vocabPronunciation}>
                  mah-NGOHD ngah lah-LAH-kee
                </Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons name="woman" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.vocabWord}>Manghod nga babaye</Text>
                <Text style={styles.vocabTranslation}>Younger sister</Text>
                <Text style={styles.vocabPronunciation}>
                  mah-NGOHD ngah bah-BYE-eh
                </Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons name="man" size={40} color={colors.green[500]} />
                </View>
                <Text style={styles.vocabWord}>Kuya</Text>
                <Text style={styles.vocabTranslation}>Older brother</Text>
                <Text style={styles.vocabPronunciation}>KOO-yah</Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons name="woman" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.vocabWord}>Ate / Manang</Text>
                <Text style={styles.vocabTranslation}>Older sister</Text>
                <Text style={styles.vocabPronunciation}>
                  AH-teh / mah-NAHNG
                </Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons name="person" size={40} color={colors.green[600]} />
                </View>
                <Text style={styles.vocabWord}>Kinamanghorang</Text>
                <Text style={styles.vocabTranslation}>Youngest child</Text>
                <Text style={styles.vocabPronunciation}>
                  kee-nah-mahng-hoh-RAHNG
                </Text>
              </View>
            </View>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons name="bulb" size={24} color={colors.orange[600]} />
              </View>
              <Text style={styles.patternTitle}>Important Cultural Note</Text>
              <Text style={styles.patternText}>
                In Filipino culture, we use &ldquo;Kuya&rdquo; and
                &ldquo;Ate&rdquo; as respectful terms, even for non-relatives
                who are older than you!
              </Text>
              <View style={styles.highlightBox}>
                <Text style={styles.highlightText}>
                  Age hierarchy matters - always show respect to elders
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Talking about siblings</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Friend:</Text>
                <Text style={styles.bisayaText}>Naa kay igsoon?</Text>
                <Text style={styles.englishText}>(Do you have siblings?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>
                  Oo, duha. Usa ka kuya ug usa ka manghod nga babaye.
                </Text>
                <Text style={styles.englishText}>
                  (Yes, two. One older brother and one younger sister.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Friend:</Text>
                <Text style={styles.bisayaText}>Ah, tunga ka!</Text>
                <Text style={styles.englishText}>
                  (Ah, you&apos;re the middle child!)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Extended Family</Text>
            <Text style={styles.sectionSubtitle}>
              Grandparents, aunts, uncles, and cousins
            </Text>

            <View style={styles.vocabGrid}>
              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons name="man" size={40} color={colors.green[500]} />
                </View>
                <Text style={styles.vocabWord}>Lolo</Text>
                <Text style={styles.vocabTranslation}>Grandfather</Text>
                <Text style={styles.vocabPronunciation}>LOH-loh</Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons name="woman" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.vocabWord}>Lola</Text>
                <Text style={styles.vocabTranslation}>Grandmother</Text>
                <Text style={styles.vocabPronunciation}>LOH-lah</Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons name="man" size={40} color={colors.green[600]} />
                </View>
                <Text style={styles.vocabWord}>Uyoan nga lalaki</Text>
                <Text style={styles.vocabTranslation}>Uncle</Text>
                <Text style={styles.vocabPronunciation}>
                  oo-YOH-ahn ngah lah-LAH-kee
                </Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons name="woman" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.vocabWord}>Uyoan nga babaye</Text>
                <Text style={styles.vocabTranslation}>Aunt</Text>
                <Text style={styles.vocabPronunciation}>
                  oo-YOH-ahn ngah bah-BYE-eh
                </Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons name="people" size={40} color={colors.green[500]} />
                </View>
                <Text style={styles.vocabWord}>Ig-agaw</Text>
                <Text style={styles.vocabTranslation}>Cousin</Text>
                <Text style={styles.vocabPronunciation}>eeg-AH-gow</Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons
                    name="person"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.vocabWord}>Apo</Text>
                <Text style={styles.vocabTranslation}>Grandchild</Text>
                <Text style={styles.vocabPronunciation}>AH-poh</Text>
              </View>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Useful Pattern</Text>
              <Text style={styles.bisayaText}>nga lalaki / nga babaye</Text>
              <Text style={styles.englishText}>male / female</Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Add these to specify gender:{"\n\n"}
                  &ldquo;lalaki&rdquo; = male{"\n"}
                  &ldquo;babaye&rdquo; = female{"\n\n"}
                  Example: apo nga lalaki = grandson
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Family gathering</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Lola:</Text>
                <Text style={styles.bisayaText}>
                  Kamusta man ang imong papa ug mama?
                </Text>
                <Text style={styles.englishText}>
                  (How are your father and mother?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>
                  Maayo sila, Lola. Nangutana sila nimo.
                </Text>
                <Text style={styles.englishText}>
                  (They&apos;re good, Grandma. They&apos;re asking about you.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Lola:</Text>
                <Text style={styles.bisayaText}>
                  Ay, maayo ra pud ko. Naa na diha imong mga ig-agaw.
                </Text>
                <Text style={styles.englishText}>
                  (Oh, I&apos;m fine too. Your cousins are over there.)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>In-Laws & Marriage</Text>
            <Text style={styles.sectionSubtitle}>
              Family through marriage - mga ugangkag
            </Text>

            <View style={styles.vocabGrid}>
              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons name="heart" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.vocabWord}>Bana</Text>
                <Text style={styles.vocabTranslation}>Husband</Text>
                <Text style={styles.vocabPronunciation}>BAH-nah</Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons name="heart" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.vocabWord}>Asawa</Text>
                <Text style={styles.vocabTranslation}>Wife</Text>
                <Text style={styles.vocabPronunciation}>ah-sah-WAH</Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons name="man" size={40} color={colors.green[600]} />
                </View>
                <Text style={styles.vocabWord}>Ugangan nga lalaki</Text>
                <Text style={styles.vocabTranslation}>Father-in-law</Text>
                <Text style={styles.vocabPronunciation}>
                  oo-gah-NGAHN ngah lah-LAH-kee
                </Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons name="woman" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.vocabWord}>Ugangan nga babaye</Text>
                <Text style={styles.vocabTranslation}>Mother-in-law</Text>
                <Text style={styles.vocabPronunciation}>
                  oo-gah-NGAHN ngah bah-BYE-eh
                </Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons name="people" size={40} color={colors.green[500]} />
                </View>
                <Text style={styles.vocabWord}>Bayaw</Text>
                <Text style={styles.vocabTranslation}>Brother-in-law</Text>
                <Text style={styles.vocabPronunciation}>BYE-ow</Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons
                    name="people"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.vocabWord}>Bilas</Text>
                <Text style={styles.vocabTranslation}>Sister-in-law</Text>
                <Text style={styles.vocabPronunciation}>bee-LAHS</Text>
              </View>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Alternative Terms</Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Many families also use:{"\n\n"}• Kuya/Ate for older in-laws
                  (respectful){"\n"}• Spanish terms: Tiyuhin (uncle/aunt),
                  Pamangkin (niece/nephew){"\n"}• &ldquo;Manugang&rdquo; =
                  son/daughter-in-law
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Introducing your spouse</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>
                  Papa, Mama, kini si Maria, akong uyab.
                </Text>
                <Text style={styles.englishText}>
                  (Dad, Mom, this is Maria, my girlfriend.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Maria:</Text>
                <Text style={styles.bisayaText}>
                  Maayong buntag. Nalipay ko nga nakaila ninyo.
                </Text>
                <Text style={styles.englishText}>
                  (Good morning. I&apos;m happy to meet you.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Mama:</Text>
                <Text style={styles.bisayaText}>
                  Maayo pud nga nakaila nimo! Kaon ta!
                </Text>
                <Text style={styles.englishText}>
                  (Nice to meet you too! Let&apos;s eat!)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Common Family Phrases</Text>
            <Text style={styles.sectionSubtitle}>
              Essential expressions about family
            </Text>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Asking about family</Text>
              <Text style={styles.bisayaText}>
                Pila ka buok ang inyong pamilya?
              </Text>
              <Text style={styles.englishText}>
                How many are in your family?
              </Text>
              <Text style={styles.pronunciationText}>
                pee-LAH kah boo-OHK ahng een-YOHNG pah-MEEL-yah
              </Text>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Asking if married</Text>
              <Text style={styles.bisayaText}>Minyo na ka?</Text>
              <Text style={styles.englishText}>Are you married?</Text>
              <Text style={styles.pronunciationText}>MEEN-yoh nah kah</Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Response: &ldquo;Oo, minyo na ko&rdquo; (Yes, I&apos;m
                  married) or &ldquo;Wala pa&rdquo; (Not yet)
                </Text>
              </View>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Asking about children</Text>
              <Text style={styles.bisayaText}>Naa kay mga anak?</Text>
              <Text style={styles.englishText}>Do you have children?</Text>
              <Text style={styles.pronunciationText}>
                nah-AH kye mah-ngah AH-nak
              </Text>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Describing family size</Text>
              <Text style={styles.bisayaText}>Daghan mi sa pamilya.</Text>
              <Text style={styles.englishText}>We&apos;re a big family.</Text>
              <Text style={styles.pronunciationText}>
                DAH-ghahn mee sah pah-MEEL-yah
              </Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  &ldquo;Daghan&rdquo; = many/big{"\n"}
                  &ldquo;Gamay&rdquo; = few/small
                </Text>
              </View>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Expressing love</Text>
              <Text style={styles.bisayaText}>
                Gihigugma nako ang akong pamilya.
              </Text>
              <Text style={styles.englishText}>I love my family.</Text>
              <Text style={styles.pronunciationText}>
                gee-hee-GOOG-mah NAH-koh ahng AH-kong pah-MEEL-yah
              </Text>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>
                Complete family conversation
              </Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>New friend:</Text>
                <Text style={styles.bisayaText}>
                  Kinsa tanan ang naa sa imong balay?
                </Text>
                <Text style={styles.englishText}>
                  (Who all lives in your house?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>
                  Akong papa, mama, duha ka manghod, ug akong lola.
                </Text>
                <Text style={styles.englishText}>
                  (My dad, mom, two younger siblings, and my grandmother.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>New friend:</Text>
                <Text style={styles.bisayaText}>
                  Ah, nindot! Uban mo ang inyong lola.
                </Text>
                <Text style={styles.englishText}>
                  (Ah, nice! Your grandmother lives with you.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>
                  Oo, tigulang na siya. Atiman namo siya.
                </Text>
                <Text style={styles.englishText}>
                  (Yes, she&apos;s elderly. We take care of her.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>New friend:</Text>
                <Text style={styles.bisayaText}>
                  Maayo na kaayo! Importante ang pamilya.
                </Text>
                <Text style={styles.englishText}>
                  (That&apos;s very good! Family is important.)
                </Text>
              </View>
            </View>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons
                  name="heart-circle"
                  size={28}
                  color={colors.orange[600]}
                />
              </View>
              <Text style={styles.patternTitle}>Filipino Family Values</Text>
              <Text style={styles.patternText}>
                Family is the center of Filipino culture. Key values include:
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Respect for elders</Text>{" "}
                  - Always use &ldquo;po&rdquo; and proper titles
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Extended families</Text> -
                  Often live together across generations
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Close-knit bonds</Text> -
                  Cousins are like siblings, relatives help each other
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Caring for parents</Text>{" "}
                  - Children take care of aging parents
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
              <Text style={styles.patternTitle}>Salamat! You Did It!</Text>
              <Text style={styles.patternText}>
                You just learned Bisaya family vocabulary! Now you can:
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Name immediate family members (parents, siblings, children)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Talk about extended family (grandparents, aunts, uncles,
                  cousins)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Use respectful terms like Kuya, Ate, Lolo, and Lola properly
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Ask and answer questions about family size and relationships
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Understand Filipino family values and cultural importance
                </Text>
              </View>
              <Text style={[styles.patternText, { marginTop: 16 }]}>
                Practice by talking about your own pamilya!
              </Text>
            </View>
          </ScrollView>
        </Animated.View>
      </View>
    </View>
  );
}
