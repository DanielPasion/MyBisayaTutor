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

export default function Lesson10() {
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
      borderColor: colors.orange[500] + "40",
      shadowColor: colors.orange[500],
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.15,
      shadowRadius: 12,
      elevation: 6,
      alignItems: "center",
    },
    lessonNumber: {
      fontSize: 13,
      fontWeight: "800",
      color: colors.orange[500],
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
      borderColor: colors.orange[500] + "30",
      shadowColor: colors.orange[500],
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
      color: colors.orange[500],
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
      backgroundColor: colors.orange[500] + "20",
      padding: 20,
      borderRadius: 16,
      marginVertical: 16,
      borderWidth: 2,
      borderColor: colors.orange[500] + "40",
      width: "100%",
    },
    highlightText: {
      fontSize: 18,
      fontWeight: "700",
      color: colors.orange[700],
      textAlign: "center",
      lineHeight: 26,
    },
    adjectiveGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 12,
      marginBottom: 20,
    },
    adjectiveCard: {
      width: "47%",
      minWidth: 140,
      backgroundColor: isDarkMode
        ? colors.cream[100] + "F5"
        : colors.white[100] + "F5",
      borderRadius: 16,
      padding: 18,
      alignItems: "center",
      borderWidth: 2,
      borderColor: colors.orange[500] + "30",
      shadowColor: colors.orange[500],
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    adjectiveIcon: {
      marginBottom: 12,
    },
    adjectiveWord: {
      fontSize: 22,
      fontWeight: "800",
      color: colors.text[100],
      marginBottom: 6,
      textAlign: "center",
    },
    adjectiveTranslation: {
      fontSize: 14,
      color: colors.text[200],
      textAlign: "center",
      marginBottom: 6,
    },
    adjectivePronunciation: {
      fontSize: 12,
      color: colors.orange[500],
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
      borderColor: colors.orange[500] + "30",
      shadowColor: colors.orange[500],
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
      backgroundColor: colors.orange[500] + "20",
      padding: 28,
      borderRadius: 24,
      marginTop: 20,
      marginBottom: 20,
      borderWidth: 2,
      borderColor: colors.orange[500] + "40",
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
              <Text style={styles.lessonNumber}>Lesson 10</Text>
              <Text style={styles.headerTitle}>Basic Adjectives</Text>
              <Text style={styles.headerDescription}>
                Learn descriptive words to make your Bisaya more colorful and
                expressive!
              </Text>
            </View>

            <Text style={styles.sectionTitle}>Size & Quantity</Text>
            <Text style={styles.sectionSubtitle}>
              Describing how big or how much
            </Text>

            <View style={styles.adjectiveGrid}>
              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons
                    name="expand"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.adjectiveWord}>Dako</Text>
                <Text style={styles.adjectiveTranslation}>Big / Large</Text>
                <Text style={styles.adjectivePronunciation}>dah-KOH</Text>
              </View>

              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons
                    name="contract"
                    size={40}
                    color={colors.orange[400]}
                  />
                </View>
                <Text style={styles.adjectiveWord}>Gamay</Text>
                <Text style={styles.adjectiveTranslation}>Small / Little</Text>
                <Text style={styles.adjectivePronunciation}>gah-MYE</Text>
              </View>

              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons
                    name="arrow-up"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.adjectiveWord}>Taas</Text>
                <Text style={styles.adjectiveTranslation}>Tall / High</Text>
                <Text style={styles.adjectivePronunciation}>tah-AHS</Text>
              </View>

              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons
                    name="arrow-down"
                    size={40}
                    color={colors.orange[400]}
                  />
                </View>
                <Text style={styles.adjectiveWord}>Mubo</Text>
                <Text style={styles.adjectiveTranslation}>Short / Low</Text>
                <Text style={styles.adjectivePronunciation}>moo-BOH</Text>
              </View>

              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons
                    name="remove"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.adjectiveWord}>Taas (distance)</Text>
                <Text style={styles.adjectiveTranslation}>Long</Text>
                <Text style={styles.adjectivePronunciation}>tah-AHS</Text>
              </View>

              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons
                    name="remove"
                    size={40}
                    color={colors.orange[400]}
                  />
                </View>
                <Text style={styles.adjectiveWord}>Mubo (distance)</Text>
                <Text style={styles.adjectiveTranslation}>Short</Text>
                <Text style={styles.adjectivePronunciation}>moo-BOH</Text>
              </View>

              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons
                    name="fitness"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.adjectiveWord}>Baga</Text>
                <Text style={styles.adjectiveTranslation}>Thick / Fat</Text>
                <Text style={styles.adjectivePronunciation}>bah-GAH</Text>
              </View>

              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons
                    name="remove"
                    size={40}
                    color={colors.orange[400]}
                  />
                </View>
                <Text style={styles.adjectiveWord}>Nipis</Text>
                <Text style={styles.adjectiveTranslation}>Thin</Text>
                <Text style={styles.adjectivePronunciation}>nee-PEES</Text>
              </View>

              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons
                    name="add-circle"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.adjectiveWord}>Daghan</Text>
                <Text style={styles.adjectiveTranslation}>Many / Much</Text>
                <Text style={styles.adjectivePronunciation}>dahg-HAHN</Text>
              </View>

              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons
                    name="remove-circle"
                    size={40}
                    color={colors.orange[400]}
                  />
                </View>
                <Text style={styles.adjectiveWord}>Dyutay</Text>
                <Text style={styles.adjectiveTranslation}>
                  Few / Little (amount)
                </Text>
                <Text style={styles.adjectivePronunciation}>DYOO-tye</Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Shopping conversation</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Customer:</Text>
                <Text style={styles.bisayaText}>Naa kay mas dako pa?</Text>
                <Text style={styles.englishText}>
                  (Do you have a bigger one?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Vendor:</Text>
                <Text style={styles.bisayaText}>
                  Oo, naa. Gusto nimo nga taas o mubo?
                </Text>
                <Text style={styles.englishText}>
                  (Yes, I have. Do you want tall or short?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Customer:</Text>
                <Text style={styles.bisayaText}>Taas ug gamay lang.</Text>
                <Text style={styles.englishText}>(Tall and just small.)</Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Quality & Condition</Text>
            <Text style={styles.sectionSubtitle}>
              Good, bad, and everything in between
            </Text>

            <View style={styles.adjectiveGrid}>
              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons name="happy" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.adjectiveWord}>Maayo</Text>
                <Text style={styles.adjectiveTranslation}>
                  Good / Fine / Well
                </Text>
                <Text style={styles.adjectivePronunciation}>mah-AH-yoh</Text>
              </View>

              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons name="sad" size={40} color={colors.orange[400]} />
                </View>
                <Text style={styles.adjectiveWord}>Dili maayo</Text>
                <Text style={styles.adjectiveTranslation}>Bad / Not good</Text>
                <Text style={styles.adjectivePronunciation}>
                  dee-LEE mah-AH-yoh
                </Text>
              </View>

              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons name="star" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.adjectiveWord}>Nindot</Text>
                <Text style={styles.adjectiveTranslation}>
                  Beautiful / Nice
                </Text>
                <Text style={styles.adjectivePronunciation}>neen-DOHT</Text>
              </View>

              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons
                    name="close-circle"
                    size={40}
                    color={colors.orange[400]}
                  />
                </View>
                <Text style={styles.adjectiveWord}>Daut</Text>
                <Text style={styles.adjectiveTranslation}>
                  Ugly / Bad quality
                </Text>
                <Text style={styles.adjectivePronunciation}>dah-OOT</Text>
              </View>

              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons
                    name="sparkles"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.adjectiveWord}>Limpyo</Text>
                <Text style={styles.adjectiveTranslation}>Clean</Text>
                <Text style={styles.adjectivePronunciation}>leem-PYOH</Text>
              </View>

              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons name="water" size={40} color={colors.orange[400]} />
                </View>
                <Text style={styles.adjectiveWord}>Hugaw</Text>
                <Text style={styles.adjectiveTranslation}>Dirty</Text>
                <Text style={styles.adjectivePronunciation}>hoo-GOW</Text>
              </View>

              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons name="gift" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.adjectiveWord}>Bag-o</Text>
                <Text style={styles.adjectiveTranslation}>New</Text>
                <Text style={styles.adjectivePronunciation}>bahg-OH</Text>
              </View>

              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons name="time" size={40} color={colors.orange[400]} />
                </View>
                <Text style={styles.adjectiveWord}>Daan</Text>
                <Text style={styles.adjectiveTranslation}>Old (things)</Text>
                <Text style={styles.adjectivePronunciation}>dah-AHN</Text>
              </View>

              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons
                    name="checkmark-circle"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.adjectiveWord}>Sakto</Text>
                <Text style={styles.adjectiveTranslation}>Right / Correct</Text>
                <Text style={styles.adjectivePronunciation}>sahk-TOH</Text>
              </View>

              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons
                    name="close-circle"
                    size={40}
                    color={colors.orange[400]}
                  />
                </View>
                <Text style={styles.adjectiveWord}>Sayop</Text>
                <Text style={styles.adjectiveTranslation}>
                  Wrong / Incorrect
                </Text>
                <Text style={styles.adjectivePronunciation}>sah-YOHP</Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Describing something</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Friend:</Text>
                <Text style={styles.bisayaText}>
                  Nindot ba ang imong bag-o nga balay?
                </Text>
                <Text style={styles.englishText}>
                  (Is your new house nice?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>
                  Oo, nindot kaayo! Dako ug limpyo.
                </Text>
                <Text style={styles.englishText}>
                  (Yes, very nice! Big and clean.)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Temperature & Sensation</Text>
            <Text style={styles.sectionSubtitle}>
              Hot, cold, and physical feelings
            </Text>

            <View style={styles.adjectiveGrid}>
              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons name="flame" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.adjectiveWord}>Init</Text>
                <Text style={styles.adjectiveTranslation}>Hot</Text>
                <Text style={styles.adjectivePronunciation}>ee-NEET</Text>
              </View>

              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons name="snow" size={40} color={colors.orange[400]} />
                </View>
                <Text style={styles.adjectiveWord}>Bugnaw</Text>
                <Text style={styles.adjectiveTranslation}>Cold</Text>
                <Text style={styles.adjectivePronunciation}>boong-NOW</Text>
              </View>

              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons
                    name="thermometer"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.adjectiveWord}>Mainit</Text>
                <Text style={styles.adjectiveTranslation}>Warm</Text>
                <Text style={styles.adjectivePronunciation}>mye-NEET</Text>
              </View>

              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons name="water" size={40} color={colors.orange[400]} />
                </View>
                <Text style={styles.adjectiveWord}>Basa</Text>
                <Text style={styles.adjectiveTranslation}>Wet</Text>
                <Text style={styles.adjectivePronunciation}>bah-SAH</Text>
              </View>

              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons name="sunny" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.adjectiveWord}>Uga</Text>
                <Text style={styles.adjectiveTranslation}>Dry</Text>
                <Text style={styles.adjectivePronunciation}>oo-GAH</Text>
              </View>

              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons name="happy" size={40} color={colors.orange[400]} />
                </View>
                <Text style={styles.adjectiveWord}>Humok</Text>
                <Text style={styles.adjectiveTranslation}>Soft</Text>
                <Text style={styles.adjectivePronunciation}>hoo-MOHK</Text>
              </View>

              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons
                    name="square"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.adjectiveWord}>Gahi</Text>
                <Text style={styles.adjectiveTranslation}>Hard</Text>
                <Text style={styles.adjectivePronunciation}>gah-HEE</Text>
              </View>

              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons
                    name="albums"
                    size={40}
                    color={colors.orange[400]}
                  />
                </View>
                <Text style={styles.adjectiveWord}>Patag</Text>
                <Text style={styles.adjectiveTranslation}>Flat / Smooth</Text>
                <Text style={styles.adjectivePronunciation}>pah-TAHG</Text>
              </View>

              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons
                    name="trending-up"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.adjectiveWord}>Rugoso</Text>
                <Text style={styles.adjectiveTranslation}>Rough / Bumpy</Text>
                <Text style={styles.adjectivePronunciation}>roo-goh-SOH</Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Weather talk</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Friend:</Text>
                <Text style={styles.bisayaText}>Init kaayo karon no?</Text>
                <Text style={styles.englishText}>
                  (It&apos;s really hot now, right?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>
                  Oo, init gyud! Gusto ko ug bugnaw nga tubig.
                </Text>
                <Text style={styles.englishText}>
                  (Yes, really hot! I want cold water.)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Speed & Difficulty</Text>
            <Text style={styles.sectionSubtitle}>
              Fast, slow, easy, and hard
            </Text>

            <View style={styles.adjectiveGrid}>
              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons name="flash" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.adjectiveWord}>Paspas</Text>
                <Text style={styles.adjectiveTranslation}>Fast / Quick</Text>
                <Text style={styles.adjectivePronunciation}>pahs-PAHS</Text>
              </View>

              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons
                    name="hourglass"
                    size={40}
                    color={colors.orange[400]}
                  />
                </View>
                <Text style={styles.adjectiveWord}>Hinay</Text>
                <Text style={styles.adjectiveTranslation}>Slow</Text>
                <Text style={styles.adjectivePronunciation}>hee-NYE</Text>
              </View>

              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons name="happy" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.adjectiveWord}>Sayon</Text>
                <Text style={styles.adjectiveTranslation}>Easy</Text>
                <Text style={styles.adjectivePronunciation}>sah-YOHN</Text>
              </View>

              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons
                    name="barbell"
                    size={40}
                    color={colors.orange[400]}
                  />
                </View>
                <Text style={styles.adjectiveWord}>Lisod</Text>
                <Text style={styles.adjectiveTranslation}>
                  Difficult / Hard
                </Text>
                <Text style={styles.adjectivePronunciation}>lee-SOHD</Text>
              </View>

              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons
                    name="fitness"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.adjectiveWord}>Bug-at</Text>
                <Text style={styles.adjectiveTranslation}>Heavy</Text>
                <Text style={styles.adjectivePronunciation}>boog-AHT</Text>
              </View>

              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons
                    name="balloon"
                    size={40}
                    color={colors.orange[400]}
                  />
                </View>
                <Text style={styles.adjectiveWord}>Gaan</Text>
                <Text style={styles.adjectiveTranslation}>Light (weight)</Text>
                <Text style={styles.adjectivePronunciation}>gah-AHN</Text>
              </View>

              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons name="time" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.adjectiveWord}>Dugay</Text>
                <Text style={styles.adjectiveTranslation}>
                  Long time / Slow
                </Text>
                <Text style={styles.adjectivePronunciation}>doo-GYE</Text>
              </View>

              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons name="timer" size={40} color={colors.orange[400]} />
                </View>
                <Text style={styles.adjectiveWord}>Dali</Text>
                <Text style={styles.adjectiveTranslation}>Quick / Fast</Text>
                <Text style={styles.adjectivePronunciation}>dah-LEE</Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Studying together</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Student 1:</Text>
                <Text style={styles.bisayaText}>Lisod ba ang exam?</Text>
                <Text style={styles.englishText}>(Is the exam difficult?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Student 2:</Text>
                <Text style={styles.bisayaText}>
                  Dili kaayo. Sayon ra kung mutun-an ka.
                </Text>
                <Text style={styles.englishText}>
                  (Not really. It&apos;s easy if you study.)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Personality & Emotion</Text>
            <Text style={styles.sectionSubtitle}>
              Describing people and feelings
            </Text>

            <View style={styles.adjectiveGrid}>
              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons name="happy" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.adjectiveWord}>Malipayon</Text>
                <Text style={styles.adjectiveTranslation}>Happy</Text>
                <Text style={styles.adjectivePronunciation}>
                  mah-lee-pah-YOHN
                </Text>
              </View>

              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons name="sad" size={40} color={colors.orange[400]} />
                </View>
                <Text style={styles.adjectiveWord}>Masulob-on</Text>
                <Text style={styles.adjectiveTranslation}>Sad</Text>
                <Text style={styles.adjectivePronunciation}>
                  mah-soo-lohb-OHN
                </Text>
              </View>

              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons
                    name="thunderstorm"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.adjectiveWord}>Kasuko</Text>
                <Text style={styles.adjectiveTranslation}>Angry</Text>
                <Text style={styles.adjectivePronunciation}>kah-soo-KOH</Text>
              </View>

              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons name="heart" size={40} color={colors.orange[400]} />
                </View>
                <Text style={styles.adjectiveWord}>Buotan</Text>
                <Text style={styles.adjectiveTranslation}>
                  Kind / Good-natured
                </Text>
                <Text style={styles.adjectivePronunciation}>boo-oh-TAHN</Text>
              </View>

              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons
                    name="close-circle"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.adjectiveWord}>Daotan</Text>
                <Text style={styles.adjectiveTranslation}>Mean / Evil</Text>
                <Text style={styles.adjectivePronunciation}>dah-oh-TAHN</Text>
              </View>

              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons
                    name="school"
                    size={40}
                    color={colors.orange[400]}
                  />
                </View>
                <Text style={styles.adjectiveWord}>Maalamon</Text>
                <Text style={styles.adjectiveTranslation}>Wise / Smart</Text>
                <Text style={styles.adjectivePronunciation}>
                  mah-ah-lah-MOHN
                </Text>
              </View>

              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons
                    name="nutrition"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.adjectiveWord}>Tambok</Text>
                <Text style={styles.adjectiveTranslation}>Fat / Chubby</Text>
                <Text style={styles.adjectivePronunciation}>tahm-BOHK</Text>
              </View>

              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons
                    name="remove"
                    size={40}
                    color={colors.orange[400]}
                  />
                </View>
                <Text style={styles.adjectiveWord}>Niwang</Text>
                <Text style={styles.adjectiveTranslation}>Thin / Skinny</Text>
                <Text style={styles.adjectivePronunciation}>nee-WAHNG</Text>
              </View>

              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons name="man" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.adjectiveWord}>Tigulang</Text>
                <Text style={styles.adjectiveTranslation}>Old (person)</Text>
                <Text style={styles.adjectivePronunciation}>tee-goo-LAHNG</Text>
              </View>

              <View style={styles.adjectiveCard}>
                <View style={styles.adjectiveIcon}>
                  <Ionicons
                    name="person"
                    size={40}
                    color={colors.orange[400]}
                  />
                </View>
                <Text style={styles.adjectiveWord}>Batan-on</Text>
                <Text style={styles.adjectiveTranslation}>Young</Text>
                <Text style={styles.adjectivePronunciation}>bah-tahn-OHN</Text>
              </View>
            </View>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons name="warning" size={24} color={colors.orange[600]} />
              </View>
              <Text style={styles.patternTitle}>Polite Descriptions</Text>
              <Text style={styles.patternText}>
                Be careful when describing people&apos;s appearance in Filipino
                culture. It&apos;s more polite to focus on positive traits!
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Instead of &ldquo;tambok&rdquo; (fat), say
                  &ldquo;tam-is&rdquo; (sweet/cute)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Instead of &ldquo;niwang&rdquo; (skinny), say
                  &ldquo;payat&rdquo; (slender)
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Describing a friend</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>
                  Ang akong higala buotan kaayo ug malipayon.
                </Text>
                <Text style={styles.englishText}>
                  (My friend is very kind and happy.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Friend:</Text>
                <Text style={styles.bisayaText}>
                  Ah, nindot! Batan-on pa ba siya?
                </Text>
                <Text style={styles.englishText}>
                  (Ah, nice! Is he/she still young?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>
                  Oo, batan-on pa. Ug maalamon pud.
                </Text>
                <Text style={styles.englishText}>
                  (Yes, still young. And smart too.)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>
              Using Adjectives in Sentences
            </Text>
            <Text style={styles.sectionSubtitle}>
              Grammar patterns with descriptive words
            </Text>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons name="link" size={24} color={colors.orange[600]} />
              </View>
              <Text style={styles.patternTitle}>Adjective + nga + Noun</Text>
              <Text style={styles.patternText}>
                Use &ldquo;nga&rdquo; to connect adjectives with nouns:
              </Text>
              <View style={styles.highlightBox}>
                <Text style={styles.highlightText}>
                  [Adjective] + nga + [Noun]
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Dako nga balay = Big house
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Nindot nga adlaw = Beautiful day
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Buotan nga bata = Good child
                </Text>
              </View>
            </View>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons name="add" size={24} color={colors.orange[600]} />
              </View>
              <Text style={styles.patternTitle}>Making Comparisons</Text>
              <Text style={styles.patternText}>
                Use &ldquo;mas&rdquo; for &ldquo;more&rdquo; and comparisons:
              </Text>
              <View style={styles.highlightBox}>
                <Text style={styles.highlightText}>mas + [Adjective]</Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>Mas dako = Bigger</Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Mas nindot = More beautiful
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>Mas maayo = Better</Text>
              </View>
            </View>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons name="star" size={24} color={colors.orange[600]} />
              </View>
              <Text style={styles.patternTitle}>
                Intensifiers - Very / Really
              </Text>
              <Text style={styles.patternText}>
                Use &ldquo;kaayo&rdquo; or &ldquo;gyud&rdquo; for emphasis:
              </Text>
              <View style={styles.highlightBox}>
                <Text style={styles.highlightText}>
                  [Adjective] + kaayo / gyud
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>Dako kaayo = Very big</Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Nindot gyud = Really beautiful
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>Init kaayo = Very hot</Text>
              </View>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>
                Complete sentence pattern
              </Text>
              <Text style={styles.bisayaText}>Ang balay nindot kaayo.</Text>
              <Text style={styles.englishText}>
                The house is very beautiful.
              </Text>
              <Text style={styles.pronunciationText}>
                ahng bah-LYE neen-DOHT kah-AH-yoh
              </Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Pattern: Ang + [noun] + [adjective] + kaayo/gyud
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>
                Complete comparison conversation
              </Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Friend 1:</Text>
                <Text style={styles.bisayaText}>
                  Kinsa ang mas taas, ikaw o ang imong igsoon?
                </Text>
                <Text style={styles.englishText}>
                  (Who is taller, you or your sibling?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Friend 2:</Text>
                <Text style={styles.bisayaText}>
                  Ang akong kuya mas taas. Taas kaayo siya!
                </Text>
                <Text style={styles.englishText}>
                  (My older brother is taller. He&apos;s very tall!)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Friend 1:</Text>
                <Text style={styles.bisayaText}>
                  Ah oo? Ug kinsa ang mas batan-on?
                </Text>
                <Text style={styles.englishText}>
                  (Oh really? And who is younger?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Friend 2:</Text>
                <Text style={styles.bisayaText}>
                  Ako ang mas batan-on. Kinamanghorang ko.
                </Text>
                <Text style={styles.englishText}>
                  (I&apos;m the younger one. I&apos;m the youngest.)
                </Text>
              </View>
            </View>

            <View style={styles.summaryBox}>
              <View style={styles.iconRow}>
                <Ionicons
                  name="checkmark-circle"
                  size={28}
                  color={colors.orange[500]}
                />
              </View>
              <Text style={styles.patternTitle}>Maayo Kaayo! You Did It!</Text>
              <Text style={styles.patternText}>
                You just learned essential Bisaya adjectives! Now you can:
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Describe size and quantity (big, small, many, few)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Express quality and condition (good, bad, clean, dirty, new,
                  old)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Talk about temperature and sensation (hot, cold, soft, hard)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Describe speed and difficulty (fast, slow, easy, hard)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Express personality and emotions (happy, sad, kind, smart)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Use &ldquo;nga&rdquo; to connect adjectives with nouns
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Make comparisons with &ldquo;mas&rdquo; and add emphasis with
                  &ldquo;kaayo/gyud&rdquo;
                </Text>
              </View>
              <Text style={[styles.patternText, { marginTop: 16 }]}>
                Practice describing everything you see in Bisaya!
              </Text>
            </View>
          </ScrollView>
        </Animated.View>
      </View>
    </View>
  );
}
