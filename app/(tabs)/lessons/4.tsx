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

export default function Lesson4() {
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
      borderColor: colors.green[600] + "40",
      shadowColor: colors.green[600],
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.15,
      shadowRadius: 12,
      elevation: 6,
      alignItems: "center",
    },
    lessonNumber: {
      fontSize: 13,
      fontWeight: "800",
      color: colors.green[600],
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
      borderColor: colors.green[600] + "30",
      shadowColor: colors.green[600],
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
      borderColor: colors.orange[600],
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
      backgroundColor: colors.green[600] + "20",
      padding: 20,
      borderRadius: 16,
      marginVertical: 16,
      borderWidth: 2,
      borderColor: colors.green[600] + "40",
      width: "100%",
    },
    highlightText: {
      fontSize: 18,
      fontWeight: "700",
      color: colors.green[700],
      textAlign: "center",
      lineHeight: 26,
    },
    colorGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 12,
      marginBottom: 20,
    },
    colorCard: {
      width: "47%",
      minWidth: 140,
      backgroundColor: isDarkMode
        ? colors.cream[100] + "F5"
        : colors.white[100] + "F5",
      borderRadius: 16,
      padding: 18,
      alignItems: "center",
      borderWidth: 2,
      borderColor: colors.green[600] + "30",
      shadowColor: colors.green[600],
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    colorSwatch: {
      width: 60,
      height: 60,
      borderRadius: 30,
      marginBottom: 12,
      borderWidth: 3,
      borderColor: isDarkMode ? colors.cream[300] : colors.white[100],
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
    },
    colorWord: {
      fontSize: 22,
      fontWeight: "800",
      color: colors.text[100],
      marginBottom: 6,
      textAlign: "center",
    },
    colorTranslation: {
      fontSize: 14,
      color: colors.text[200],
      textAlign: "center",
      marginBottom: 6,
    },
    colorPronunciation: {
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
      borderColor: colors.green[600] + "30",
      shadowColor: colors.green[600],
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
              <Text style={styles.lessonNumber}>Lesson 4</Text>
              <Text style={styles.headerTitle}>Colors</Text>
              <Text style={styles.headerDescription}>
                Learn to describe the world around you with beautiful Bisaya
                color words!
              </Text>
            </View>

            <Text style={styles.sectionTitle}>Basic Colors</Text>
            <Text style={styles.sectionSubtitle}>
              Essential colors for everyday descriptions
            </Text>

            <View style={styles.colorGrid}>
              <View style={styles.colorCard}>
                <View
                  style={[styles.colorSwatch, { backgroundColor: "#FF0000" }]}
                />
                <Text style={styles.colorWord}>Pula</Text>
                <Text style={styles.colorTranslation}>Red</Text>
                <Text style={styles.colorPronunciation}>POO-lah</Text>
              </View>

              <View style={styles.colorCard}>
                <View
                  style={[styles.colorSwatch, { backgroundColor: "#0000FF" }]}
                />
                <Text style={styles.colorWord}>Asul</Text>
                <Text style={styles.colorTranslation}>Blue</Text>
                <Text style={styles.colorPronunciation}>AH-sool</Text>
              </View>

              <View style={styles.colorCard}>
                <View
                  style={[styles.colorSwatch, { backgroundColor: "#FFFF00" }]}
                />
                <Text style={styles.colorWord}>Dalag</Text>
                <Text style={styles.colorTranslation}>Yellow</Text>
                <Text style={styles.colorPronunciation}>DAH-lahg</Text>
              </View>

              <View style={styles.colorCard}>
                <View
                  style={[styles.colorSwatch, { backgroundColor: "#00FF00" }]}
                />
                <Text style={styles.colorWord}>Lunhaw</Text>
                <Text style={styles.colorTranslation}>Green</Text>
                <Text style={styles.colorPronunciation}>loon-HOW</Text>
              </View>

              <View style={styles.colorCard}>
                <View
                  style={[styles.colorSwatch, { backgroundColor: "#FFA500" }]}
                />
                <Text style={styles.colorWord}>Kahel</Text>
                <Text style={styles.colorTranslation}>Orange</Text>
                <Text style={styles.colorPronunciation}>kah-HELL</Text>
              </View>

              <View style={styles.colorCard}>
                <View
                  style={[styles.colorSwatch, { backgroundColor: "#800080" }]}
                />
                <Text style={styles.colorWord}>Ube / Morado</Text>
                <Text style={styles.colorTranslation}>Purple</Text>
                <Text style={styles.colorPronunciation}>
                  OO-beh / moh-RAH-doh
                </Text>
              </View>

              <View style={styles.colorCard}>
                <View
                  style={[styles.colorSwatch, { backgroundColor: "#FFC0CB" }]}
                />
                <Text style={styles.colorWord}>Rosas</Text>
                <Text style={styles.colorTranslation}>Pink</Text>
                <Text style={styles.colorPronunciation}>ROH-sahs</Text>
              </View>

              <View style={styles.colorCard}>
                <View
                  style={[styles.colorSwatch, { backgroundColor: "#8B4513" }]}
                />
                <Text style={styles.colorWord}>Kulay kape</Text>
                <Text style={styles.colorTranslation}>Brown</Text>
                <Text style={styles.colorPronunciation}>koo-LYE kah-PEH</Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Shopping for clothes</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Vendor:</Text>
                <Text style={styles.bisayaText}>
                  Unsa imong gusto nga kolor?
                </Text>
                <Text style={styles.englishText}>
                  (What color do you want?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>Naa kay asul?</Text>
                <Text style={styles.englishText}>(Do you have blue?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Vendor:</Text>
                <Text style={styles.bisayaText}>
                  Oo, naa koy asul ug lunhaw.
                </Text>
                <Text style={styles.englishText}>
                  (Yes, I have blue and green.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>Kuhaon nako ang asul.</Text>
                <Text style={styles.englishText}>
                  (I&apos;ll take the blue one.)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Neutral Colors</Text>
            <Text style={styles.sectionSubtitle}>
              Black, white, and shades in between
            </Text>

            <View style={styles.colorGrid}>
              <View style={styles.colorCard}>
                <View
                  style={[styles.colorSwatch, { backgroundColor: "#000000" }]}
                />
                <Text style={styles.colorWord}>Itom</Text>
                <Text style={styles.colorTranslation}>Black</Text>
                <Text style={styles.colorPronunciation}>ee-TOHM</Text>
              </View>

              <View style={styles.colorCard}>
                <View
                  style={[
                    styles.colorSwatch,
                    { backgroundColor: "#FFFFFF", borderColor: "#E0E0E0" },
                  ]}
                />
                <Text style={styles.colorWord}>Puti</Text>
                <Text style={styles.colorTranslation}>White</Text>
                <Text style={styles.colorPronunciation}>poo-TEE</Text>
              </View>

              <View style={styles.colorCard}>
                <View
                  style={[styles.colorSwatch, { backgroundColor: "#808080" }]}
                />
                <Text style={styles.colorWord}>Abuhon</Text>
                <Text style={styles.colorTranslation}>Gray</Text>
                <Text style={styles.colorPronunciation}>ah-boo-HOHN</Text>
              </View>

              <View style={styles.colorCard}>
                <View
                  style={[styles.colorSwatch, { backgroundColor: "#C0C0C0" }]}
                />
                <Text style={styles.colorWord}>Pilak</Text>
                <Text style={styles.colorTranslation}>Silver</Text>
                <Text style={styles.colorPronunciation}>pee-LAHK</Text>
              </View>

              <View style={styles.colorCard}>
                <View
                  style={[styles.colorSwatch, { backgroundColor: "#FFD700" }]}
                />
                <Text style={styles.colorWord}>Bulawan</Text>
                <Text style={styles.colorTranslation}>Gold / Golden</Text>
                <Text style={styles.colorPronunciation}>boo-lah-WAHN</Text>
              </View>
            </View>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons name="bulb" size={24} color={colors.orange[600]} />
              </View>
              <Text style={styles.patternTitle}>Two Words for Brown</Text>
              <Text style={styles.patternText}>
                Brown doesn&apos;t have a single native Bisaya word, so we
                describe it:
              </Text>
              <View style={styles.highlightBox}>
                <Text style={styles.highlightText}>
                  Kulay kape = coffee-colored{"\n"}
                  Kulay kahoy = wood-colored
                </Text>
              </View>
              <Text style={styles.patternText}>
                Both are commonly used and understood!
              </Text>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Describing someone</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Friend:</Text>
                <Text style={styles.bisayaText}>Kinsa si Ana?</Text>
                <Text style={styles.englishText}>(Who is Ana?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>
                  Ang babaye nga nagsul-ob ug pula nga sinina.
                </Text>
                <Text style={styles.englishText}>
                  (The girl wearing a red dress.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Friend:</Text>
                <Text style={styles.bisayaText}>Ah, ang nindot nga buhok?</Text>
                <Text style={styles.englishText}>
                  (Ah, the one with beautiful hair?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>Oo, itom nga buhok.</Text>
                <Text style={styles.englishText}>(Yes, black hair.)</Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Color Shades</Text>
            <Text style={styles.sectionSubtitle}>
              Light, dark, and describing intensity
            </Text>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Making Colors Lighter</Text>
              <Text style={styles.bisayaText}>Hayag + [color]</Text>
              <Text style={styles.englishText}>Light [color]</Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Examples:{"\n"}
                  Hayag nga asul = Light blue{"\n"}
                  Hayag nga pula = Light red / Pink-ish red
                </Text>
              </View>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Making Colors Darker</Text>
              <Text style={styles.bisayaText}>Ngitngit + [color]</Text>
              <Text style={styles.englishText}>Dark [color]</Text>
              <Text style={styles.pronunciationText}>NGEHT-ngeht</Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Examples:{"\n"}
                  Ngitngit nga asul = Dark blue{"\n"}
                  Ngitngit nga lunhaw = Dark green
                </Text>
              </View>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Bright / Vivid Colors</Text>
              <Text style={styles.bisayaText}>Hayag kaayo</Text>
              <Text style={styles.englishText}>Very bright</Text>
              <Text style={styles.pronunciationText}>hah-YAHG kah-AH-yoh</Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Example: Hayag kaayo nga pula = Very bright red
                </Text>
              </View>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Dull / Faded Colors</Text>
              <Text style={styles.bisayaText}>Kulang</Text>
              <Text style={styles.englishText}>Faded / Dull</Text>
              <Text style={styles.pronunciationText}>koo-LAHNG</Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Example: Kulang nga asul = Faded blue
                </Text>
              </View>
            </View>

            <View style={styles.colorGrid}>
              <View style={styles.colorCard}>
                <View
                  style={[styles.colorSwatch, { backgroundColor: "#ADD8E6" }]}
                />
                <Text style={styles.colorWord}>Hayag nga asul</Text>
                <Text style={styles.colorTranslation}>Light blue</Text>
                <Text style={styles.colorPronunciation}>
                  hah-YAHG ngah AH-sool
                </Text>
              </View>

              <View style={styles.colorCard}>
                <View
                  style={[styles.colorSwatch, { backgroundColor: "#00008B" }]}
                />
                <Text style={styles.colorWord}>Ngitngit nga asul</Text>
                <Text style={styles.colorTranslation}>Dark blue</Text>
                <Text style={styles.colorPronunciation}>
                  NGEHT-ngeht ngah AH-sool
                </Text>
              </View>

              <View style={styles.colorCard}>
                <View
                  style={[styles.colorSwatch, { backgroundColor: "#90EE90" }]}
                />
                <Text style={styles.colorWord}>Hayag nga lunhaw</Text>
                <Text style={styles.colorTranslation}>Light green</Text>
                <Text style={styles.colorPronunciation}>
                  hah-YAHG ngah loon-HOW
                </Text>
              </View>

              <View style={styles.colorCard}>
                <View
                  style={[styles.colorSwatch, { backgroundColor: "#006400" }]}
                />
                <Text style={styles.colorWord}>Ngitngit nga lunhaw</Text>
                <Text style={styles.colorTranslation}>Dark green</Text>
                <Text style={styles.colorPronunciation}>
                  NGEHT-ngeht ngah loon-HOW
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>At the paint store</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>
                  Gusto nako ug lunhaw para sa akong kwarto.
                </Text>
                <Text style={styles.englishText}>
                  (I want green for my room.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Clerk:</Text>
                <Text style={styles.bisayaText}>
                  Hayag nga lunhaw o ngitngit?
                </Text>
                <Text style={styles.englishText}>(Light green or dark?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>
                  Hayag lang. Dili kaayo ngitngit.
                </Text>
                <Text style={styles.englishText}>
                  (Just light. Not too dark.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Clerk:</Text>
                <Text style={styles.bisayaText}>
                  Nindot kini. Hayag nga lunhaw, pareho sa tanom.
                </Text>
                <Text style={styles.englishText}>
                  (This is nice. Light green, like plants.)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Useful Color Phrases</Text>
            <Text style={styles.sectionSubtitle}>
              Asking about and describing colors
            </Text>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>
                Asking &ldquo;What color?&rdquo;
              </Text>
              <Text style={styles.bisayaText}>Unsa nga kolor?</Text>
              <Text style={styles.englishText}>What color?</Text>
              <Text style={styles.pronunciationText}>
                oon-SAH ngah koh-LOHR
              </Text>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Asking if available</Text>
              <Text style={styles.bisayaText}>Naa kay [color]?</Text>
              <Text style={styles.englishText}>Do you have [color]?</Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Example: Naa kay pula? = Do you have red?
                </Text>
              </View>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Expressing preference</Text>
              <Text style={styles.bisayaText}>Gusto nako ang [color].</Text>
              <Text style={styles.englishText}>I like/want the [color].</Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Example: Gusto nako ang asul. = I want the blue one.
                </Text>
              </View>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Describing objects</Text>
              <Text style={styles.bisayaText}>[color] nga [object]</Text>
              <Text style={styles.englishText}>[color] [object]</Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Examples:{"\n"}
                  Pula nga kotse = Red car{"\n"}
                  Asul nga balay = Blue house{"\n"}
                  Puti nga bola = White ball
                </Text>
              </View>
            </View>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons name="link" size={24} color={colors.orange[600]} />
              </View>
              <Text style={styles.patternTitle}>
                The Linker &ldquo;nga&rdquo;
              </Text>
              <Text style={styles.patternText}>
                To connect colors with nouns, always use &ldquo;nga&rdquo;
                (which means &ldquo;that&rdquo; or acts as a connector):
              </Text>
              <View style={styles.highlightBox}>
                <Text style={styles.highlightText}>Color + nga + Object</Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Pula nga bulak = Red flower
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Dalag nga adlaw = Yellow sun
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>Itom nga iro = Black dog</Text>
              </View>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Favorite color</Text>
              <Text style={styles.bisayaText}>
                Unsa imong paborito nga kolor?
              </Text>
              <Text style={styles.englishText}>
                What&apos;s your favorite color?
              </Text>
              <Text style={styles.pronunciationText}>
                oon-SAH ee-MOHNG pah-boh-REE-toh ngah koh-LOHR
              </Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Response: Ang akong paborito kay [color].{"\n"}
                  (My favorite is [color].)
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Describing nature</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Child:</Text>
                <Text style={styles.bisayaText}>Unsa kining kolor?</Text>
                <Text style={styles.englishText}>(What color is this?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>Lunhaw. Pareho sa dahon.</Text>
                <Text style={styles.englishText}>(Green. Like leaves.)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Child:</Text>
                <Text style={styles.bisayaText}>Ug kini? Ang kalangitan?</Text>
                <Text style={styles.englishText}>(And this? The sky?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>
                  Asul! Nindot nga asul ang kalangitan karon.
                </Text>
                <Text style={styles.englishText}>
                  (Blue! The sky is beautiful blue today.)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Colors in Culture</Text>
            <Text style={styles.sectionSubtitle}>
              Symbolic meanings and common associations
            </Text>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons
                  name="color-palette"
                  size={24}
                  color={colors.orange[600]}
                />
              </View>
              <Text style={styles.patternTitle}>Cultural Color Meanings</Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>🔴</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Pula (Red)</Text> - Love,
                  passion, luck, celebration. Common at weddings and Christmas.
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>⚪</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Puti (White)</Text> -
                  Purity, peace, mourning (traditional). Worn at funerals.
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>⚫</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Itom (Black)</Text> -
                  Mourning, formality, elegance. Worn at funerals.
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>🟡</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Dalag (Yellow)</Text> -
                  Joy, friendship, sunshine. Positive and cheerful.
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>🟢</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Lunhaw (Green)</Text> -
                  Nature, growth, prosperity, Islam (in Mindanao).
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>
                Complete shopping conversation
              </Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>
                  Maayong hapon! Naa mo&apos;y bag?
                </Text>
                <Text style={styles.englishText}>
                  (Good afternoon! Do you have bags?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Vendor:</Text>
                <Text style={styles.bisayaText}>
                  Oo, daghan. Unsa nga kolor?
                </Text>
                <Text style={styles.englishText}>(Yes, many. What color?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>
                  Naa kay itom o kulay kape?
                </Text>
                <Text style={styles.englishText}>
                  (Do you have black or brown?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Vendor:</Text>
                <Text style={styles.bisayaText}>
                  Naa ko&apos;y itom, ug naa pod kulay kape. Tan-awa.
                </Text>
                <Text style={styles.englishText}>
                  (I have black, and also brown. Look.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>Nindot ang itom. Pila ni?</Text>
                <Text style={styles.englishText}>
                  (The black one is nice. How much is this?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Vendor:</Text>
                <Text style={styles.bisayaText}>
                  Traynta y singko pesos lang.
                </Text>
                <Text style={styles.englishText}>
                  (Only thirty-five pesos.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>
                  Sige, kuhaon nako. Salamat!
                </Text>
                <Text style={styles.englishText}>
                  (Okay, I&apos;ll take it. Thank you!)
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
              <Text style={styles.patternTitle}>Maayo! You Did It!</Text>
              <Text style={styles.patternText}>
                You just learned Bisaya colors! Now you can:
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Name all the basic colors in Bisaya
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Describe shades (light, dark, bright, faded)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Use &ldquo;nga&rdquo; to connect colors with objects
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Ask about and express color preferences
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Understand cultural meanings behind colors
                </Text>
              </View>
              <Text style={[styles.patternText, { marginTop: 16 }]}>
                Look around and practice describing colors in Bisaya!
              </Text>
            </View>
          </ScrollView>
        </Animated.View>
      </View>
    </View>
  );
}
