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

export default function Lesson8() {
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
      borderColor: colors.orange[400] + "40",
      shadowColor: colors.orange[400],
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.15,
      shadowRadius: 12,
      elevation: 6,
      alignItems: "center",
    },
    lessonNumber: {
      fontSize: 13,
      fontWeight: "800",
      color: colors.orange[400],
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
      borderColor: colors.orange[400] + "30",
      shadowColor: colors.orange[400],
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
      color: colors.orange[400],
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
      backgroundColor: colors.orange[400] + "20",
      padding: 20,
      borderRadius: 16,
      marginVertical: 16,
      borderWidth: 2,
      borderColor: colors.orange[400] + "40",
      width: "100%",
    },
    highlightText: {
      fontSize: 18,
      fontWeight: "700",
      color: colors.orange[700],
      textAlign: "center",
      lineHeight: 26,
    },
    timeGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 12,
      marginBottom: 20,
    },
    timeCard: {
      width: "47%",
      minWidth: 140,
      backgroundColor: isDarkMode
        ? colors.cream[100] + "F5"
        : colors.white[100] + "F5",
      borderRadius: 16,
      padding: 18,
      alignItems: "center",
      borderWidth: 2,
      borderColor: colors.orange[400] + "30",
      shadowColor: colors.orange[400],
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    timeIcon: {
      marginBottom: 12,
    },
    timeWord: {
      fontSize: 22,
      fontWeight: "800",
      color: colors.text[100],
      marginBottom: 6,
      textAlign: "center",
    },
    timeTranslation: {
      fontSize: 14,
      color: colors.text[200],
      textAlign: "center",
      marginBottom: 6,
    },
    timePronunciation: {
      fontSize: 12,
      color: colors.orange[400],
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
      borderColor: colors.orange[400] + "30",
      shadowColor: colors.orange[400],
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
      backgroundColor: colors.orange[400] + "20",
      padding: 28,
      borderRadius: 24,
      marginTop: 20,
      marginBottom: 20,
      borderWidth: 2,
      borderColor: colors.orange[400] + "40",
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
              <Text style={styles.lessonNumber}>Lesson 8</Text>
              <Text style={styles.headerTitle}>Time Expressions</Text>
              <Text style={styles.headerDescription}>
                Master talking about time - panahon, adlaw, ug oras!
              </Text>
            </View>

            <Text style={styles.sectionTitle}>Days of the Week</Text>
            <Text style={styles.sectionSubtitle}>
              The seven days - mga adlaw sa semana
            </Text>

            <View style={styles.timeGrid}>
              <View style={styles.timeCard}>
                <View style={styles.timeIcon}>
                  <Ionicons name="sunny" size={40} color={colors.orange[400]} />
                </View>
                <Text style={styles.timeWord}>Lunes</Text>
                <Text style={styles.timeTranslation}>Monday</Text>
                <Text style={styles.timePronunciation}>LOO-nehs</Text>
              </View>

              <View style={styles.timeCard}>
                <View style={styles.timeIcon}>
                  <Ionicons
                    name="partly-sunny"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.timeWord}>Martes</Text>
                <Text style={styles.timeTranslation}>Tuesday</Text>
                <Text style={styles.timePronunciation}>MAHR-tehs</Text>
              </View>

              <View style={styles.timeCard}>
                <View style={styles.timeIcon}>
                  <Ionicons
                    name="cloudy"
                    size={40}
                    color={colors.orange[400]}
                  />
                </View>
                <Text style={styles.timeWord}>Miyerkules</Text>
                <Text style={styles.timeTranslation}>Wednesday</Text>
                <Text style={styles.timePronunciation}>mee-yehr-KOO-lehs</Text>
              </View>

              <View style={styles.timeCard}>
                <View style={styles.timeIcon}>
                  <Ionicons name="cloud" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.timeWord}>Huwebes</Text>
                <Text style={styles.timeTranslation}>Thursday</Text>
                <Text style={styles.timePronunciation}>hoo-WEH-behs</Text>
              </View>

              <View style={styles.timeCard}>
                <View style={styles.timeIcon}>
                  <Ionicons name="rainy" size={40} color={colors.orange[400]} />
                </View>
                <Text style={styles.timeWord}>Biyernes</Text>
                <Text style={styles.timeTranslation}>Friday</Text>
                <Text style={styles.timePronunciation}>bee-YEHR-nehs</Text>
              </View>

              <View style={styles.timeCard}>
                <View style={styles.timeIcon}>
                  <Ionicons name="moon" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.timeWord}>Sabado</Text>
                <Text style={styles.timeTranslation}>Saturday</Text>
                <Text style={styles.timePronunciation}>SAH-bah-doh</Text>
              </View>

              <View style={styles.timeCard}>
                <View style={styles.timeIcon}>
                  <Ionicons name="heart" size={40} color={colors.orange[400]} />
                </View>
                <Text style={styles.timeWord}>Dominggo</Text>
                <Text style={styles.timeTranslation}>Sunday</Text>
                <Text style={styles.timePronunciation}>doh-MEENG-goh</Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Making plans</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Friend:</Text>
                <Text style={styles.bisayaText}>Kanus-a ta magkita?</Text>
                <Text style={styles.englishText}>(When shall we meet?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>Pwede ba sa Sabado?</Text>
                <Text style={styles.englishText}>(Is Saturday okay?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Friend:</Text>
                <Text style={styles.bisayaText}>Okay ra. Unsa nga oras?</Text>
                <Text style={styles.englishText}>
                  (That&apos;s fine. What time?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>Alas dos sa hapon.</Text>
                <Text style={styles.englishText}>(Two in the afternoon.)</Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Months of the Year</Text>
            <Text style={styles.sectionSubtitle}>
              The twelve months - mga bulan sa tuig
            </Text>

            <View style={styles.timeGrid}>
              <View style={styles.timeCard}>
                <View style={styles.timeIcon}>
                  <Ionicons
                    name="calendar"
                    size={40}
                    color={colors.orange[400]}
                  />
                </View>
                <Text style={styles.timeWord}>Enero</Text>
                <Text style={styles.timeTranslation}>January</Text>
                <Text style={styles.timePronunciation}>eh-NEH-roh</Text>
              </View>

              <View style={styles.timeCard}>
                <View style={styles.timeIcon}>
                  <Ionicons name="heart" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.timeWord}>Pebrero</Text>
                <Text style={styles.timeTranslation}>February</Text>
                <Text style={styles.timePronunciation}>peh-BREH-roh</Text>
              </View>

              <View style={styles.timeCard}>
                <View style={styles.timeIcon}>
                  <Ionicons
                    name="flower"
                    size={40}
                    color={colors.orange[400]}
                  />
                </View>
                <Text style={styles.timeWord}>Marso</Text>
                <Text style={styles.timeTranslation}>March</Text>
                <Text style={styles.timePronunciation}>MAHR-soh</Text>
              </View>

              <View style={styles.timeCard}>
                <View style={styles.timeIcon}>
                  <Ionicons name="rainy" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.timeWord}>Abril</Text>
                <Text style={styles.timeTranslation}>April</Text>
                <Text style={styles.timePronunciation}>ah-BREEL</Text>
              </View>

              <View style={styles.timeCard}>
                <View style={styles.timeIcon}>
                  <Ionicons
                    name="flower"
                    size={40}
                    color={colors.orange[400]}
                  />
                </View>
                <Text style={styles.timeWord}>Mayo</Text>
                <Text style={styles.timeTranslation}>May</Text>
                <Text style={styles.timePronunciation}>mah-YOH</Text>
              </View>

              <View style={styles.timeCard}>
                <View style={styles.timeIcon}>
                  <Ionicons name="sunny" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.timeWord}>Hunyo</Text>
                <Text style={styles.timeTranslation}>June</Text>
                <Text style={styles.timePronunciation}>HOON-yoh</Text>
              </View>

              <View style={styles.timeCard}>
                <View style={styles.timeIcon}>
                  <Ionicons name="sunny" size={40} color={colors.orange[400]} />
                </View>
                <Text style={styles.timeWord}>Hulyo</Text>
                <Text style={styles.timeTranslation}>July</Text>
                <Text style={styles.timePronunciation}>HOOL-yoh</Text>
              </View>

              <View style={styles.timeCard}>
                <View style={styles.timeIcon}>
                  <Ionicons name="sunny" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.timeWord}>Agosto</Text>
                <Text style={styles.timeTranslation}>August</Text>
                <Text style={styles.timePronunciation}>ah-GOHS-toh</Text>
              </View>

              <View style={styles.timeCard}>
                <View style={styles.timeIcon}>
                  <Ionicons
                    name="school"
                    size={40}
                    color={colors.orange[400]}
                  />
                </View>
                <Text style={styles.timeWord}>Setyembre</Text>
                <Text style={styles.timeTranslation}>September</Text>
                <Text style={styles.timePronunciation}>seht-YEHM-breh</Text>
              </View>

              <View style={styles.timeCard}>
                <View style={styles.timeIcon}>
                  <Ionicons name="leaf" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.timeWord}>Oktubre</Text>
                <Text style={styles.timeTranslation}>October</Text>
                <Text style={styles.timePronunciation}>ohk-TOO-breh</Text>
              </View>

              <View style={styles.timeCard}>
                <View style={styles.timeIcon}>
                  <Ionicons name="skull" size={40} color={colors.orange[400]} />
                </View>
                <Text style={styles.timeWord}>Nobyembre</Text>
                <Text style={styles.timeTranslation}>November</Text>
                <Text style={styles.timePronunciation}>nohb-YEHM-breh</Text>
              </View>

              <View style={styles.timeCard}>
                <View style={styles.timeIcon}>
                  <Ionicons name="gift" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.timeWord}>Disyembre</Text>
                <Text style={styles.timeTranslation}>December</Text>
                <Text style={styles.timePronunciation}>dees-YEHM-breh</Text>
              </View>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Saying dates</Text>
              <Text style={styles.bisayaText}>
                Enero dose, dos mil baynte singko
              </Text>
              <Text style={styles.englishText}>January 12, 2025</Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Pattern: [Month] + [Day number] + [Year]{"\n\n"}
                  Use Spanish numbers for dates!
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Birthday conversation</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Friend:</Text>
                <Text style={styles.bisayaText}>Kanus-a imong birthday?</Text>
                <Text style={styles.englishText}>(When is your birthday?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>
                  Hulyo baynte, mil nuwebsiyentos nobenta.
                </Text>
                <Text style={styles.englishText}>(July 20, 1990.)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Friend:</Text>
                <Text style={styles.bisayaText}>
                  Ah, sa Hulyo pa! Taga-init!
                </Text>
                <Text style={styles.englishText}>
                  (Ah, in July! Summer baby!)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Times of Day</Text>
            <Text style={styles.sectionSubtitle}>
              Morning, afternoon, evening, and night
            </Text>

            <View style={styles.timeGrid}>
              <View style={styles.timeCard}>
                <View style={styles.timeIcon}>
                  <Ionicons name="sunny" size={40} color={colors.orange[400]} />
                </View>
                <Text style={styles.timeWord}>Buntag</Text>
                <Text style={styles.timeTranslation}>Morning</Text>
                <Text style={styles.timePronunciation}>boon-TAHG</Text>
              </View>

              <View style={styles.timeCard}>
                <View style={styles.timeIcon}>
                  <Ionicons
                    name="partly-sunny"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.timeWord}>Udto</Text>
                <Text style={styles.timeTranslation}>Noon</Text>
                <Text style={styles.timePronunciation}>ood-TOH</Text>
              </View>

              <View style={styles.timeCard}>
                <View style={styles.timeIcon}>
                  <Ionicons
                    name="sunny-outline"
                    size={40}
                    color={colors.orange[400]}
                  />
                </View>
                <Text style={styles.timeWord}>Hapon</Text>
                <Text style={styles.timeTranslation}>Afternoon</Text>
                <Text style={styles.timePronunciation}>hah-POHN</Text>
              </View>

              <View style={styles.timeCard}>
                <View style={styles.timeIcon}>
                  <Ionicons name="moon" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.timeWord}>Gabii</Text>
                <Text style={styles.timeTranslation}>Evening / Night</Text>
                <Text style={styles.timePronunciation}>gah-BEE-ee</Text>
              </View>

              <View style={styles.timeCard}>
                <View style={styles.timeIcon}>
                  <Ionicons
                    name="moon-outline"
                    size={40}
                    color={colors.orange[400]}
                  />
                </View>
                <Text style={styles.timeWord}>Kaadlawon</Text>
                <Text style={styles.timeTranslation}>
                  Dawn / Very early morning
                </Text>
                <Text style={styles.timePronunciation}>kah-ahd-lah-WOHN</Text>
              </View>

              <View style={styles.timeCard}>
                <View style={styles.timeIcon}>
                  <Ionicons name="moon" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.timeWord}>Tungang gabii</Text>
                <Text style={styles.timeTranslation}>Midnight</Text>
                <Text style={styles.timePronunciation}>
                  toong-AHNG gah-BEE-ee
                </Text>
              </View>
            </View>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons
                  name="information-circle"
                  size={24}
                  color={colors.orange[600]}
                />
              </View>
              <Text style={styles.patternTitle}>Greetings by Time</Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Maayong buntag</Text> -
                  Good morning
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Maayong udto</Text> - Good
                  noon
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Maayong hapon</Text> -
                  Good afternoon
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Maayong gabii</Text> -
                  Good evening/night
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Telling Time</Text>
            <Text style={styles.sectionSubtitle}>
              Clock time - oras sa orasan
            </Text>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Basic time pattern</Text>
              <Text style={styles.bisayaText}>Alas [number]</Text>
              <Text style={styles.englishText}>[Number] o&apos;clock</Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Use Spanish numbers for telling time!{"\n\n"}
                  Alas una = 1 o&apos;clock{"\n"}
                  Alas dos = 2 o&apos;clock{"\n"}
                  Alas tres = 3 o&apos;clock
                </Text>
              </View>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Adding minutes</Text>
              <Text style={styles.bisayaText}>Alas dos y medya</Text>
              <Text style={styles.englishText}>
                2:30 (Two thirty / Half past two)
              </Text>
              <Text style={styles.pronunciationText}>
                AH-lahs dohs ee MEHD-yah
              </Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  y medya = and a half (30 minutes){"\n"}y kinse = and 15
                  minutes{"\n"}
                  menos kinse = minus 15 minutes (quarter to)
                </Text>
              </View>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Quarter hours</Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Alas tres y kinse = 3:15{"\n"}
                  Alas tres y medya = 3:30{"\n"}
                  Alas tres menos kinse = 2:45 (quarter to 3){"\n"}
                  Alas tres menos singko = 2:55 (five to 3)
                </Text>
              </View>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Asking what time</Text>
              <Text style={styles.bisayaText}>Unsa na ang oras?</Text>
              <Text style={styles.englishText}>What time is it?</Text>
              <Text style={styles.pronunciationText}>
                oon-SAH nah ahng oh-RAHS
              </Text>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>
                Asking when something happens
              </Text>
              <Text style={styles.bisayaText}>Unsa nga oras ka moadto?</Text>
              <Text style={styles.englishText}>What time will you go?</Text>
              <Text style={styles.pronunciationText}>
                oon-SAH ngah oh-RAHS kah moh-ahd-TOH
              </Text>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Checking the time</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>Unsa na ang oras?</Text>
                <Text style={styles.englishText}>(What time is it?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Friend:</Text>
                <Text style={styles.bisayaText}>Alas tres y medya na.</Text>
                <Text style={styles.englishText}>
                  (It&apos;s already 3:30.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>
                  Ay! Ulahi na ko! Kinahanglan ko molakaw.
                </Text>
                <Text style={styles.englishText}>
                  (Oh! I&apos;m late! I need to go.)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Relative Time</Text>
            <Text style={styles.sectionSubtitle}>
              Yesterday, today, tomorrow, and more
            </Text>

            <View style={styles.timeGrid}>
              <View style={styles.timeCard}>
                <View style={styles.timeIcon}>
                  <Ionicons
                    name="arrow-back"
                    size={40}
                    color={colors.orange[400]}
                  />
                </View>
                <Text style={styles.timeWord}>Kaghapon</Text>
                <Text style={styles.timeTranslation}>Yesterday</Text>
                <Text style={styles.timePronunciation}>kahg-hah-POHN</Text>
              </View>

              <View style={styles.timeCard}>
                <View style={styles.timeIcon}>
                  <Ionicons
                    name="radio-button-on"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.timeWord}>Karon</Text>
                <Text style={styles.timeTranslation}>Today / Now</Text>
                <Text style={styles.timePronunciation}>kah-ROHN</Text>
              </View>

              <View style={styles.timeCard}>
                <View style={styles.timeIcon}>
                  <Ionicons
                    name="arrow-forward"
                    size={40}
                    color={colors.orange[400]}
                  />
                </View>
                <Text style={styles.timeWord}>Ugma</Text>
                <Text style={styles.timeTranslation}>Tomorrow</Text>
                <Text style={styles.timePronunciation}>oog-MAH</Text>
              </View>

              <View style={styles.timeCard}>
                <View style={styles.timeIcon}>
                  <Ionicons name="time" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.timeWord}>Sauna</Text>
                <Text style={styles.timeTranslation}>Before / Long ago</Text>
                <Text style={styles.timePronunciation}>sah-OO-nah</Text>
              </View>

              <View style={styles.timeCard}>
                <View style={styles.timeIcon}>
                  <Ionicons name="play" size={40} color={colors.orange[400]} />
                </View>
                <Text style={styles.timeWord}>Karon</Text>
                <Text style={styles.timeTranslation}>Now</Text>
                <Text style={styles.timePronunciation}>kah-ROHN</Text>
              </View>

              <View style={styles.timeCard}>
                <View style={styles.timeIcon}>
                  <Ionicons name="time" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.timeWord}>Sunod</Text>
                <Text style={styles.timeTranslation}>Next / Later</Text>
                <Text style={styles.timePronunciation}>soo-NOHD</Text>
              </View>

              <View style={styles.timeCard}>
                <View style={styles.timeIcon}>
                  <Ionicons
                    name="calendar"
                    size={40}
                    color={colors.orange[400]}
                  />
                </View>
                <Text style={styles.timeWord}>Karong semana</Text>
                <Text style={styles.timeTranslation}>This week</Text>
                <Text style={styles.timePronunciation}>
                  kah-ROHNG seh-MAH-nah
                </Text>
              </View>

              <View style={styles.timeCard}>
                <View style={styles.timeIcon}>
                  <Ionicons
                    name="calendar-outline"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.timeWord}>Sunod semana</Text>
                <Text style={styles.timeTranslation}>Next week</Text>
                <Text style={styles.timePronunciation}>
                  soo-NOHD seh-MAH-nah
                </Text>
              </View>

              <View style={styles.timeCard}>
                <View style={styles.timeIcon}>
                  <Ionicons
                    name="calendar"
                    size={40}
                    color={colors.orange[400]}
                  />
                </View>
                <Text style={styles.timeWord}>Karong bulan</Text>
                <Text style={styles.timeTranslation}>This month</Text>
                <Text style={styles.timePronunciation}>kah-ROHNG boo-LAHN</Text>
              </View>

              <View style={styles.timeCard}>
                <View style={styles.timeIcon}>
                  <Ionicons
                    name="calendar-outline"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.timeWord}>Sunod bulan</Text>
                <Text style={styles.timeTranslation}>Next month</Text>
                <Text style={styles.timePronunciation}>soo-NOHD boo-LAHN</Text>
              </View>

              <View style={styles.timeCard}>
                <View style={styles.timeIcon}>
                  <Ionicons name="time" size={40} color={colors.orange[400]} />
                </View>
                <Text style={styles.timeWord}>Karong tuig</Text>
                <Text style={styles.timeTranslation}>This year</Text>
                <Text style={styles.timePronunciation}>kah-ROHNG too-EEG</Text>
              </View>

              <View style={styles.timeCard}>
                <View style={styles.timeIcon}>
                  <Ionicons
                    name="time-outline"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.timeWord}>Sunod tuig</Text>
                <Text style={styles.timeTranslation}>Next year</Text>
                <Text style={styles.timePronunciation}>soo-NOHD too-EEG</Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Discussing schedules</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Friend:</Text>
                <Text style={styles.bisayaText}>
                  Niadto ka sa party kaghapon?
                </Text>
                <Text style={styles.englishText}>
                  (Did you go to the party yesterday?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>
                  Wala, busy ko kaghapon. Ikaw?
                </Text>
                <Text style={styles.englishText}>
                  (No, I was busy yesterday. You?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Friend:</Text>
                <Text style={styles.bisayaText}>
                  Niadto ko. Nindot kaayo! Moadto ka ugma?
                </Text>
                <Text style={styles.englishText}>
                  (I went. It was great! Will you go tomorrow?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>Oo, moadto ko ugma.</Text>
                <Text style={styles.englishText}>
                  (Yes, I&apos;ll go tomorrow.)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Duration & Frequency</Text>
            <Text style={styles.sectionSubtitle}>How long and how often</Text>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Asking how long</Text>
              <Text style={styles.bisayaText}>Pila ka oras?</Text>
              <Text style={styles.englishText}>How many hours?</Text>
              <Text style={styles.pronunciationText}>pee-LAH kah oh-RAHS</Text>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Duration expressions</Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Usa ka oras = One hour{"\n"}
                  Duha ka adlaw = Two days{"\n"}
                  Tulo ka semana = Three weeks{"\n"}
                  Upat ka bulan = Four months{"\n"}
                  Lima ka tuig = Five years
                </Text>
              </View>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Frequency words</Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  <Text style={{ fontWeight: "700" }}>Kanunay</Text> = Always
                  {"\n"}
                  <Text style={{ fontWeight: "700" }}>Kasagaran</Text> = Usually
                  / Often{"\n"}
                  <Text style={{ fontWeight: "700" }}>Usahay</Text> = Sometimes
                  {"\n"}
                  <Text style={{ fontWeight: "700" }}>Panagsa</Text> = Rarely
                  {"\n"}
                  <Text style={{ fontWeight: "700" }}>Wala gyuy</Text> = Never
                </Text>
              </View>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Every [time period]</Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Kada adlaw = Every day{"\n"}
                  Kada semana = Every week{"\n"}
                  Kada bulan = Every month{"\n"}
                  Kada tuig = Every year{"\n"}
                  Kada buntag = Every morning
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Job interview</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Interviewer:</Text>
                <Text style={styles.bisayaText}>
                  Pila ka oras ka mutrabaho kada adlaw?
                </Text>
                <Text style={styles.englishText}>
                  (How many hours will you work every day?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>
                  Walo ka oras, Lunes hangtod Biyernes.
                </Text>
                <Text style={styles.englishText}>
                  (Eight hours, Monday to Friday.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Interviewer:</Text>
                <Text style={styles.bisayaText}>
                  Okay ra ba nimo ang overtime usahay?
                </Text>
                <Text style={styles.englishText}>
                  (Is overtime sometimes okay with you?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>Oo, okay ra nako.</Text>
                <Text style={styles.englishText}>
                  (Yes, that&apos;s fine with me.)
                </Text>
              </View>
            </View>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons name="time" size={24} color={colors.orange[600]} />
              </View>
              <Text style={styles.patternTitle}>Filipino Time Culture</Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Filipino Time</Text> -
                  Being 15-30 minutes late is somewhat common and often
                  tolerated
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Flexible schedules</Text>{" "}
                  - Time is more fluid, relationships valued over punctuality
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Mamayang hapon</Text> -
                  &ldquo;Later this afternoon&rdquo; can mean anytime in the
                  afternoon
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Sharp</Text> - If someone
                  says &ldquo;alas dos sharp&rdquo; they mean exactly on time!
                </Text>
              </View>
            </View>

            <View style={styles.summaryBox}>
              <View style={styles.iconRow}>
                <Ionicons
                  name="checkmark-circle"
                  size={28}
                  color={colors.orange[400]}
                />
              </View>
              <Text style={styles.patternTitle}>Maayo Kaayo! You Did It!</Text>
              <Text style={styles.patternText}>
                You just learned Bisaya time expressions! Now you can:
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Name all days of the week and months of the year
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Tell time and ask what time it is
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Use time of day expressions (morning, afternoon, evening,
                  night)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Talk about yesterday, today, tomorrow, and relative time
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Express duration (how long) and frequency (how often)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Understand Filipino cultural attitudes toward time
                </Text>
              </View>
              <Text style={[styles.patternText, { marginTop: 16 }]}>
                Practice telling time in Bisaya throughout your day!
              </Text>
            </View>
          </ScrollView>
        </Animated.View>
      </View>
    </View>
  );
}
