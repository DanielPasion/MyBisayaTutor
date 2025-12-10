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

export default function Lesson7() {
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
    verbGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 12,
      marginBottom: 20,
    },
    verbCard: {
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
    verbIcon: {
      marginBottom: 12,
    },
    verbWord: {
      fontSize: 22,
      fontWeight: "800",
      color: colors.text[100],
      marginBottom: 6,
      textAlign: "center",
    },
    verbTranslation: {
      fontSize: 14,
      color: colors.text[200],
      textAlign: "center",
      marginBottom: 6,
    },
    verbPronunciation: {
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
              <Text style={styles.lessonNumber}>Lesson 7</Text>
              <Text style={styles.headerTitle}>Common Verbs & Actions</Text>
              <Text style={styles.headerDescription}>
                Learn essential action words to describe what you do every day!
              </Text>
            </View>

            <Text style={styles.sectionTitle}>Basic Movement Verbs</Text>
            <Text style={styles.sectionSubtitle}>
              Getting around - lakaw, dagan, ug uban pa
            </Text>

            <View style={styles.verbGrid}>
              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons name="walk" size={40} color={colors.orange[400]} />
                </View>
                <Text style={styles.verbWord}>Lakaw</Text>
                <Text style={styles.verbTranslation}>To walk / Go</Text>
                <Text style={styles.verbPronunciation}>lah-KOW</Text>
              </View>

              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons name="flash" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.verbWord}>Dagan</Text>
                <Text style={styles.verbTranslation}>To run</Text>
                <Text style={styles.verbPronunciation}>dah-GAHN</Text>
              </View>

              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons name="stop" size={40} color={colors.orange[400]} />
                </View>
                <Text style={styles.verbWord}>Hunong</Text>
                <Text style={styles.verbTranslation}>To stop</Text>
                <Text style={styles.verbPronunciation}>hoo-NOHNG</Text>
              </View>

              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons
                    name="arrow-forward"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.verbWord}>Adto</Text>
                <Text style={styles.verbTranslation}>To go (to a place)</Text>
                <Text style={styles.verbPronunciation}>ahd-TOH</Text>
              </View>

              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons
                    name="arrow-back"
                    size={40}
                    color={colors.orange[400]}
                  />
                </View>
                <Text style={styles.verbWord}>Balik</Text>
                <Text style={styles.verbTranslation}>To return / Go back</Text>
                <Text style={styles.verbPronunciation}>bah-LEEK</Text>
              </View>

              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons name="enter" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.verbWord}>Sulod</Text>
                <Text style={styles.verbTranslation}>To enter / Go in</Text>
                <Text style={styles.verbPronunciation}>soo-LOHD</Text>
              </View>

              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons name="exit" size={40} color={colors.orange[400]} />
                </View>
                <Text style={styles.verbWord}>Gawas</Text>
                <Text style={styles.verbTranslation}>To go out / Exit</Text>
                <Text style={styles.verbPronunciation}>gah-WAHS</Text>
              </View>

              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons
                    name="arrow-up"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.verbWord}>Saka</Text>
                <Text style={styles.verbTranslation}>To go up / Climb</Text>
                <Text style={styles.verbPronunciation}>sah-KAH</Text>
              </View>

              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons
                    name="arrow-down"
                    size={40}
                    color={colors.orange[400]}
                  />
                </View>
                <Text style={styles.verbWord}>Kanaog</Text>
                <Text style={styles.verbTranslation}>To go down / Descend</Text>
                <Text style={styles.verbPronunciation}>kah-nah-OHG</Text>
              </View>

              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons
                    name="bicycle"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.verbWord}>Sakay</Text>
                <Text style={styles.verbTranslation}>To ride / Board</Text>
                <Text style={styles.verbPronunciation}>sah-KYE</Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Planning to meet</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Friend:</Text>
                <Text style={styles.bisayaText}>Adto ka sa mall ugma?</Text>
                <Text style={styles.englishText}>
                  (Will you go to the mall tomorrow?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>
                  Oo, molakaw ko ugma sa buntag.
                </Text>
                <Text style={styles.englishText}>
                  (Yes, I&apos;ll go tomorrow morning.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Friend:</Text>
                <Text style={styles.bisayaText}>Mosakay ka ug bus?</Text>
                <Text style={styles.englishText}>(Will you ride the bus?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>
                  Dili, molakaw lang ko. Duol ra man.
                </Text>
                <Text style={styles.englishText}>
                  (No, I&apos;ll just walk. It&apos;s close anyway.)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Daily Actions</Text>
            <Text style={styles.sectionSubtitle}>Things you do every day</Text>

            <View style={styles.verbGrid}>
              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons
                    name="restaurant"
                    size={40}
                    color={colors.orange[400]}
                  />
                </View>
                <Text style={styles.verbWord}>Kaon</Text>
                <Text style={styles.verbTranslation}>To eat</Text>
                <Text style={styles.verbPronunciation}>kah-OHN</Text>
              </View>

              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons name="water" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.verbWord}>Inom</Text>
                <Text style={styles.verbTranslation}>To drink</Text>
                <Text style={styles.verbPronunciation}>ee-NOHM</Text>
              </View>

              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons name="bed" size={40} color={colors.orange[400]} />
                </View>
                <Text style={styles.verbWord}>Tulog</Text>
                <Text style={styles.verbTranslation}>To sleep</Text>
                <Text style={styles.verbPronunciation}>too-LOHG</Text>
              </View>

              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons name="eye" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.verbWord}>Mata</Text>
                <Text style={styles.verbTranslation}>To wake up</Text>
                <Text style={styles.verbPronunciation}>mah-TAH</Text>
              </View>

              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons name="water" size={40} color={colors.orange[400]} />
                </View>
                <Text style={styles.verbWord}>Ligo</Text>
                <Text style={styles.verbTranslation}>To bathe / Shower</Text>
                <Text style={styles.verbPronunciation}>lee-GOH</Text>
              </View>

              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons name="shirt" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.verbWord}>Sinina</Text>
                <Text style={styles.verbTranslation}>To dress / Wear</Text>
                <Text style={styles.verbPronunciation}>see-NEE-nah</Text>
              </View>

              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons name="flame" size={40} color={colors.orange[400]} />
                </View>
                <Text style={styles.verbWord}>Luto</Text>
                <Text style={styles.verbTranslation}>To cook</Text>
                <Text style={styles.verbPronunciation}>loo-TOH</Text>
              </View>

              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons
                    name="sparkles"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.verbWord}>Limpyo</Text>
                <Text style={styles.verbTranslation}>To clean</Text>
                <Text style={styles.verbPronunciation}>leem-PYOH</Text>
              </View>

              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons name="water" size={40} color={colors.orange[400]} />
                </View>
                <Text style={styles.verbWord}>Hugas</Text>
                <Text style={styles.verbTranslation}>To wash</Text>
                <Text style={styles.verbPronunciation}>hoo-GAHS</Text>
              </View>

              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons
                    name="briefcase"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.verbWord}>Trabaho</Text>
                <Text style={styles.verbTranslation}>To work</Text>
                <Text style={styles.verbPronunciation}>trah-BAH-hoh</Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Morning routine</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Parent:</Text>
                <Text style={styles.bisayaText}>Mata na! Alas sais na.</Text>
                <Text style={styles.englishText}>
                  (Wake up! It&apos;s already six o&apos;clock.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>Oo, Ma. Moligo na ko.</Text>
                <Text style={styles.englishText}>
                  (Yes, Mom. I&apos;ll shower now.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Parent:</Text>
                <Text style={styles.bisayaText}>
                  Pagdali! Kaon na unya mangadto ka sa trabaho.
                </Text>
                <Text style={styles.englishText}>
                  (Hurry! Eat and then go to work.)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Communication Verbs</Text>
            <Text style={styles.sectionSubtitle}>Talking and expressing</Text>

            <View style={styles.verbGrid}>
              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons
                    name="chatbubble"
                    size={40}
                    color={colors.orange[400]}
                  />
                </View>
                <Text style={styles.verbWord}>Sulti</Text>
                <Text style={styles.verbTranslation}>
                  To say / Tell / Speak
                </Text>
                <Text style={styles.verbPronunciation}>sool-TEE</Text>
              </View>

              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons
                    name="chatbubbles"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.verbWord}>Estorya</Text>
                <Text style={styles.verbTranslation}>To chat / Talk</Text>
                <Text style={styles.verbPronunciation}>ehs-TOHR-yah</Text>
              </View>

              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons name="ear" size={40} color={colors.orange[400]} />
                </View>
                <Text style={styles.verbWord}>Paminaw</Text>
                <Text style={styles.verbTranslation}>To listen</Text>
                <Text style={styles.verbPronunciation}>pah-mee-NOW</Text>
              </View>

              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons
                    name="help-circle"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.verbWord}>Pangutana</Text>
                <Text style={styles.verbTranslation}>To ask</Text>
                <Text style={styles.verbPronunciation}>pah-ngoo-TAH-nah</Text>
              </View>

              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons
                    name="checkmark-circle"
                    size={40}
                    color={colors.orange[400]}
                  />
                </View>
                <Text style={styles.verbWord}>Tubag</Text>
                <Text style={styles.verbTranslation}>To answer</Text>
                <Text style={styles.verbPronunciation}>too-BAHG</Text>
              </View>

              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons name="call" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.verbWord}>Tawag</Text>
                <Text style={styles.verbTranslation}>To call</Text>
                <Text style={styles.verbPronunciation}>tah-WAHG</Text>
              </View>

              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons
                    name="megaphone"
                    size={40}
                    color={colors.orange[400]}
                  />
                </View>
                <Text style={styles.verbWord}>Singgit</Text>
                <Text style={styles.verbTranslation}>To shout</Text>
                <Text style={styles.verbPronunciation}>seeng-GEET</Text>
              </View>

              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons name="happy" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.verbWord}>Katawa</Text>
                <Text style={styles.verbTranslation}>To laugh</Text>
                <Text style={styles.verbPronunciation}>kah-tah-WAH</Text>
              </View>

              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons name="sad" size={40} color={colors.orange[400]} />
                </View>
                <Text style={styles.verbWord}>Hilak</Text>
                <Text style={styles.verbTranslation}>To cry</Text>
                <Text style={styles.verbPronunciation}>hee-LAHK</Text>
              </View>

              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons
                    name="musical-notes"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.verbWord}>Kanta</Text>
                <Text style={styles.verbTranslation}>To sing</Text>
                <Text style={styles.verbPronunciation}>kahn-TAH</Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Phone conversation</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>Hello? Kinsa ni?</Text>
                <Text style={styles.englishText}>(Hello? Who is this?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Caller:</Text>
                <Text style={styles.bisayaText}>
                  Si Maria ni. Naa ba si Ana?
                </Text>
                <Text style={styles.englishText}>
                  (This is Maria. Is Ana there?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>
                  Naa, hulata. Tawagon nako.
                </Text>
                <Text style={styles.englishText}>
                  (She&apos;s here, wait. I&apos;ll call her.)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Mental & Sensory Verbs</Text>
            <Text style={styles.sectionSubtitle}>
              Thinking, feeling, and perceiving
            </Text>

            <View style={styles.verbGrid}>
              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons name="bulb" size={40} color={colors.orange[400]} />
                </View>
                <Text style={styles.verbWord}>Hunahuna</Text>
                <Text style={styles.verbTranslation}>To think</Text>
                <Text style={styles.verbPronunciation}>hoo-nah-HOO-nah</Text>
              </View>

              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons
                    name="school"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.verbWord}>Kahibalo</Text>
                <Text style={styles.verbTranslation}>To know</Text>
                <Text style={styles.verbPronunciation}>kah-hee-bah-LOH</Text>
              </View>

              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons
                    name="school"
                    size={40}
                    color={colors.orange[400]}
                  />
                </View>
                <Text style={styles.verbWord}>Tun-an</Text>
                <Text style={styles.verbTranslation}>To learn / Study</Text>
                <Text style={styles.verbPronunciation}>toon-AHN</Text>
              </View>

              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons name="heart" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.verbWord}>Higugma</Text>
                <Text style={styles.verbTranslation}>To love</Text>
                <Text style={styles.verbPronunciation}>hee-GOOG-mah</Text>
              </View>

              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons
                    name="heart-half"
                    size={40}
                    color={colors.orange[400]}
                  />
                </View>
                <Text style={styles.verbWord}>Gusto</Text>
                <Text style={styles.verbTranslation}>To like / Want</Text>
                <Text style={styles.verbPronunciation}>GOOS-toh</Text>
              </View>

              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons name="eye" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.verbWord}>Tan-aw</Text>
                <Text style={styles.verbTranslation}>
                  To see / Look / Watch
                </Text>
                <Text style={styles.verbPronunciation}>tahn-OW</Text>
              </View>

              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons name="book" size={40} color={colors.orange[400]} />
                </View>
                <Text style={styles.verbWord}>Basa</Text>
                <Text style={styles.verbTranslation}>To read</Text>
                <Text style={styles.verbPronunciation}>bah-SAH</Text>
              </View>

              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons
                    name="create"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.verbWord}>Sulat</Text>
                <Text style={styles.verbTranslation}>To write</Text>
                <Text style={styles.verbPronunciation}>soo-LAHT</Text>
              </View>

              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons
                    name="archive"
                    size={40}
                    color={colors.orange[400]}
                  />
                </View>
                <Text style={styles.verbWord}>Hinumdomi</Text>
                <Text style={styles.verbTranslation}>To remember</Text>
                <Text style={styles.verbPronunciation}>hee-noom-doh-MEE</Text>
              </View>

              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons
                    name="close-circle"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.verbWord}>Kalimot</Text>
                <Text style={styles.verbTranslation}>To forget</Text>
                <Text style={styles.verbPronunciation}>kah-lee-MOHT</Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>At the library</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Friend:</Text>
                <Text style={styles.bisayaText}>Unsa imong gibasa?</Text>
                <Text style={styles.englishText}>(What are you reading?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>
                  Libro para sa exam. Kinahanglan ko mutun-an.
                </Text>
                <Text style={styles.englishText}>
                  (Book for the exam. I need to study.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Friend:</Text>
                <Text style={styles.bisayaText}>
                  Ah, nahinumdoman ko. Ugma na diay ang exam!
                </Text>
                <Text style={styles.englishText}>
                  (Ah, I remember. The exam is tomorrow!)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Verb Conjugation Basics</Text>
            <Text style={styles.sectionSubtitle}>
              Understanding verb prefixes - mo, nag, mag
            </Text>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons
                  name="git-branch"
                  size={24}
                  color={colors.orange[600]}
                />
              </View>
              <Text style={styles.patternTitle}>
                The &ldquo;Mo-&rdquo; Pattern
              </Text>
              <Text style={styles.patternText}>
                Add &ldquo;mo-&rdquo; to express future or intention (will/going
                to):
              </Text>
              <View style={styles.highlightBox}>
                <Text style={styles.highlightText}>mo + verb root</Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>kaon → mokaon = will eat</Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  lakaw → molakaw = will go/walk
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  tulog → motulog = will sleep
                </Text>
              </View>
            </View>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons
                  name="git-branch"
                  size={24}
                  color={colors.orange[600]}
                />
              </View>
              <Text style={styles.patternTitle}>
                The &ldquo;Nag-&rdquo; Pattern
              </Text>
              <Text style={styles.patternText}>
                Add &ldquo;nag-&rdquo; to express ongoing or completed action:
              </Text>
              <View style={styles.highlightBox}>
                <Text style={styles.highlightText}>nag + verb root</Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  kaon → nagkaon = ate / is eating
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  lakaw → naglakaw = walked / is walking
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  tulog → nagtulog = slept / is sleeping
                </Text>
              </View>
            </View>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons
                  name="git-branch"
                  size={24}
                  color={colors.orange[600]}
                />
              </View>
              <Text style={styles.patternTitle}>
                The &ldquo;Mag-&rdquo; Pattern
              </Text>
              <Text style={styles.patternText}>
                Use &ldquo;mag-&rdquo; for actions, especially with other
                people:
              </Text>
              <View style={styles.highlightBox}>
                <Text style={styles.highlightText}>mag + verb root</Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  estorya → magestorya = will chat together
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  limpyo → maglimpyo = will clean
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  trabaho → magtrabaho = will work
                </Text>
              </View>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Quick Comparison</Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  <Text style={{ fontWeight: "700" }}>kaon</Text> = eat (base
                  form){"\n"}
                  <Text style={{ fontWeight: "700" }}>mokaon</Text> = will eat
                  {"\n"}
                  <Text style={{ fontWeight: "700" }}>nagkaon</Text> = ate / is
                  eating{"\n"}
                  <Text style={{ fontWeight: "700" }}>magkaon</Text> = will eat
                  together{"\n\n"}
                  Don&apos;t worry about perfect conjugation yet - natives will
                  understand the root word!
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Making plans</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Friend:</Text>
                <Text style={styles.bisayaText}>Unsa imong buhaton ugma?</Text>
                <Text style={styles.englishText}>
                  (What will you do tomorrow?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>
                  Moadto ko sa beach. Moligo sa dagat.
                </Text>
                <Text style={styles.englishText}>
                  (I&apos;ll go to the beach. I&apos;ll swim in the sea.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Friend:</Text>
                <Text style={styles.bisayaText}>
                  Nindot! Pwede ba ko mouban?
                </Text>
                <Text style={styles.englishText}>
                  (Nice! Can I come along?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>
                  Siyempre! Maglakaw ta mga alas nuybe.
                </Text>
                <Text style={styles.englishText}>
                  (Of course! We&apos;ll leave around nine.)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>
              Helping & Transactional Verbs
            </Text>
            <Text style={styles.sectionSubtitle}>
              Giving, taking, buying, and selling
            </Text>

            <View style={styles.verbGrid}>
              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons
                    name="hand-right"
                    size={40}
                    color={colors.orange[400]}
                  />
                </View>
                <Text style={styles.verbWord}>Hatag</Text>
                <Text style={styles.verbTranslation}>To give</Text>
                <Text style={styles.verbPronunciation}>hah-TAHG</Text>
              </View>

              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons
                    name="hand-left"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.verbWord}>Kuha</Text>
                <Text style={styles.verbTranslation}>To take / Get</Text>
                <Text style={styles.verbPronunciation}>KOO-hah</Text>
              </View>

              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons name="cart" size={40} color={colors.orange[400]} />
                </View>
                <Text style={styles.verbWord}>Palit</Text>
                <Text style={styles.verbTranslation}>To buy</Text>
                <Text style={styles.verbPronunciation}>pah-LEET</Text>
              </View>

              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons name="cash" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.verbWord}>Baligya</Text>
                <Text style={styles.verbTranslation}>To sell</Text>
                <Text style={styles.verbPronunciation}>bah-leeg-YAH</Text>
              </View>

              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons
                    name="people"
                    size={40}
                    color={colors.orange[400]}
                  />
                </View>
                <Text style={styles.verbWord}>Tabang</Text>
                <Text style={styles.verbTranslation}>To help</Text>
                <Text style={styles.verbPronunciation}>tah-BAHNG</Text>
              </View>

              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons
                    name="swap-horizontal"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.verbWord}>Baylo</Text>
                <Text style={styles.verbTranslation}>To exchange / Trade</Text>
                <Text style={styles.verbPronunciation}>BYE-loh</Text>
              </View>

              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons name="gift" size={40} color={colors.orange[400]} />
                </View>
                <Text style={styles.verbWord}>Regalo</Text>
                <Text style={styles.verbTranslation}>To give a gift</Text>
                <Text style={styles.verbPronunciation}>reh-GAH-loh</Text>
              </View>

              <View style={styles.verbCard}>
                <View style={styles.verbIcon}>
                  <Ionicons
                    name="repeat"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.verbWord}>Iuli</Text>
                <Text style={styles.verbTranslation}>
                  To return (something)
                </Text>
                <Text style={styles.verbPronunciation}>ee-OO-lee</Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>At the store</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Cashier:</Text>
                <Text style={styles.bisayaText}>Unsa imong paliton?</Text>
                <Text style={styles.englishText}>(What will you buy?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>
                  Mopalit ko ug tubig ug biskwit.
                </Text>
                <Text style={styles.englishText}>
                  (I&apos;ll buy water and biscuits.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Cashier:</Text>
                <Text style={styles.bisayaText}>
                  Sige. Singkwenta pesos tanan.
                </Text>
                <Text style={styles.englishText}>
                  (Okay. Fifty pesos total.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>Ania ang bayad. Salamat!</Text>
                <Text style={styles.englishText}>
                  (Here&apos;s the payment. Thank you!)
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
                You just learned essential Bisaya verbs! Now you can:
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Express basic movements (walk, run, go, come, enter, exit)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Describe daily actions (eat, drink, sleep, bathe, work)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Use communication verbs (talk, listen, ask, answer, call)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Express thoughts and feelings (think, know, love, like, want)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Use verb prefixes (mo-, nag-, mag-) for different tenses
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Handle transactions (give, take, buy, sell, help)
                </Text>
              </View>
              <Text style={[styles.patternText, { marginTop: 16 }]}>
                Practice using these verbs in sentences every day!
              </Text>
            </View>
          </ScrollView>
        </Animated.View>
      </View>
    </View>
  );
}
