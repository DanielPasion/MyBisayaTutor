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

export default function Lesson14() {
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
      borderColor: colors.orange[700] + "40",
      shadowColor: colors.orange[700],
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.15,
      shadowRadius: 12,
      elevation: 6,
      alignItems: "center",
    },
    lessonNumber: {
      fontSize: 13,
      fontWeight: "800",
      color: colors.orange[700],
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
      borderColor: colors.orange[700] + "30",
      shadowColor: colors.orange[700],
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.12,
      shadowRadius: 6,
      elevation: 4,
    },
    sceneLabel: {
      fontSize: 14,
      fontWeight: "700",
      color: colors.orange[700],
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
      color: colors.orange[600],
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
      color: colors.orange[700],
      marginTop: 4,
      fontWeight: "600",
      textAlign: "center",
    },
    patternBox: {
      backgroundColor: colors.orange[700] + "18",
      padding: 24,
      borderRadius: 20,
      marginBottom: 20,
      borderWidth: 2,
      borderColor: colors.orange[700],
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
      color: colors.orange[700],
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
      backgroundColor: colors.orange[700] + "20",
      padding: 20,
      borderRadius: 16,
      marginVertical: 16,
      borderWidth: 2,
      borderColor: colors.orange[700] + "40",
      width: "100%",
    },
    highlightText: {
      fontSize: 18,
      fontWeight: "700",
      color: colors.orange[800],
      textAlign: "center",
      lineHeight: 26,
    },
    bodyGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 12,
      marginBottom: 20,
    },
    bodyCard: {
      width: "47%",
      minWidth: 140,
      backgroundColor: isDarkMode
        ? colors.cream[100] + "F5"
        : colors.white[100] + "F5",
      borderRadius: 16,
      padding: 18,
      alignItems: "center",
      borderWidth: 2,
      borderColor: colors.orange[700] + "30",
      shadowColor: colors.orange[700],
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    bodyIcon: {
      marginBottom: 12,
    },
    bodyWord: {
      fontSize: 22,
      fontWeight: "800",
      color: colors.text[100],
      marginBottom: 6,
      textAlign: "center",
    },
    bodyTranslation: {
      fontSize: 14,
      color: colors.text[200],
      textAlign: "center",
      marginBottom: 6,
    },
    bodyPronunciation: {
      fontSize: 12,
      color: colors.orange[700],
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
      borderColor: colors.orange[700] + "30",
      shadowColor: colors.orange[700],
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
      backgroundColor: colors.orange[700] + "15",
      padding: 16,
      borderRadius: 12,
      marginTop: 12,
      borderWidth: 1,
      borderColor: colors.orange[500] + "30",
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
      backgroundColor: colors.orange[700] + "20",
      padding: 28,
      borderRadius: 24,
      marginTop: 20,
      marginBottom: 20,
      borderWidth: 2,
      borderColor: colors.orange[700] + "40",
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
              <Text style={styles.lessonNumber}>Lesson 14</Text>
              <Text style={styles.headerTitle}>Health & Body</Text>
              <Text style={styles.headerDescription}>
                Learn vocabulary about lawas (body) and panglawas (health)!
              </Text>
            </View>

            <Text style={styles.sectionTitle}>Body Parts - Head & Face</Text>
            <Text style={styles.sectionSubtitle}>Parts of the ulo (head)</Text>

            <View style={styles.bodyGrid}>
              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons
                    name="person"
                    size={40}
                    color={colors.orange[700]}
                  />
                </View>
                <Text style={styles.bodyWord}>Ulo</Text>
                <Text style={styles.bodyTranslation}>Head</Text>
                <Text style={styles.bodyPronunciation}>oo-LOH</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons name="happy" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.bodyWord}>Nawong</Text>
                <Text style={styles.bodyTranslation}>Face</Text>
                <Text style={styles.bodyPronunciation}>nah-WOHNG</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons name="eye" size={40} color={colors.orange[700]} />
                </View>
                <Text style={styles.bodyWord}>Mata</Text>
                <Text style={styles.bodyTranslation}>Eye</Text>
                <Text style={styles.bodyPronunciation}>mah-TAH</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons name="ear" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.bodyWord}>Dalunggan</Text>
                <Text style={styles.bodyTranslation}>Ear</Text>
                <Text style={styles.bodyPronunciation}>dah-loong-GAHN</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons name="water" size={40} color={colors.orange[700]} />
                </View>
                <Text style={styles.bodyWord}>Ilong</Text>
                <Text style={styles.bodyTranslation}>Nose</Text>
                <Text style={styles.bodyPronunciation}>ee-LOHNG</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons
                    name="chatbubble"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.bodyWord}>Baba</Text>
                <Text style={styles.bodyTranslation}>Mouth</Text>
                <Text style={styles.bodyPronunciation}>bah-BAH</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons name="happy" size={40} color={colors.orange[700]} />
                </View>
                <Text style={styles.bodyWord}>Ngipon</Text>
                <Text style={styles.bodyTranslation}>Tooth / Teeth</Text>
                <Text style={styles.bodyPronunciation}>ngee-POHN</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons
                    name="chatbubble"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.bodyWord}>Dila</Text>
                <Text style={styles.bodyTranslation}>Tongue</Text>
                <Text style={styles.bodyPronunciation}>dee-LAH</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons
                    name="chatbubble"
                    size={40}
                    color={colors.orange[700]}
                  />
                </View>
                <Text style={styles.bodyWord}>Ngabil</Text>
                <Text style={styles.bodyTranslation}>Lip</Text>
                <Text style={styles.bodyPronunciation}>ngah-BEEL</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons
                    name="person"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.bodyWord}>Buhok</Text>
                <Text style={styles.bodyTranslation}>Hair</Text>
                <Text style={styles.bodyPronunciation}>boo-HOHK</Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>At the dentist</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Dentist:</Text>
                <Text style={styles.bisayaText}>
                  Ablihi ang imong baba. Tan-awon nako ang ngipon.
                </Text>
                <Text style={styles.englishText}>
                  (Open your mouth. I&apos;ll check your teeth.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Patient:</Text>
                <Text style={styles.bisayaText}>
                  Ania, Doc. Masakit ang akong ngipon.
                </Text>
                <Text style={styles.englishText}>
                  (Here, Doc. My tooth hurts.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Dentist:</Text>
                <Text style={styles.bisayaText}>
                  Kini ba? Sa tuo nga kilid?
                </Text>
                <Text style={styles.englishText}>
                  (This one? On the right side?)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Body Parts - Upper Body</Text>
            <Text style={styles.sectionSubtitle}>Arms, chest, and torso</Text>

            <View style={styles.bodyGrid}>
              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons name="body" size={40} color={colors.orange[700]} />
                </View>
                <Text style={styles.bodyWord}>Liog</Text>
                <Text style={styles.bodyTranslation}>Neck</Text>
                <Text style={styles.bodyPronunciation}>lee-OHG</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons
                    name="fitness"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.bodyWord}>Abaga</Text>
                <Text style={styles.bodyTranslation}>Shoulder</Text>
                <Text style={styles.bodyPronunciation}>ah-bah-GAH</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons
                    name="hand-right"
                    size={40}
                    color={colors.orange[700]}
                  />
                </View>
                <Text style={styles.bodyWord}>Bukton</Text>
                <Text style={styles.bodyTranslation}>Arm</Text>
                <Text style={styles.bodyPronunciation}>book-TOHN</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons
                    name="hand-right"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.bodyWord}>Siko</Text>
                <Text style={styles.bodyTranslation}>Elbow</Text>
                <Text style={styles.bodyPronunciation}>see-KOH</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons
                    name="hand-right"
                    size={40}
                    color={colors.orange[700]}
                  />
                </View>
                <Text style={styles.bodyWord}>Kamot</Text>
                <Text style={styles.bodyTranslation}>Hand</Text>
                <Text style={styles.bodyPronunciation}>kah-MOHT</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons
                    name="finger-print"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.bodyWord}>Tudlo</Text>
                <Text style={styles.bodyTranslation}>Finger</Text>
                <Text style={styles.bodyPronunciation}>tood-LOH</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons name="heart" size={40} color={colors.orange[700]} />
                </View>
                <Text style={styles.bodyWord}>Dughan</Text>
                <Text style={styles.bodyTranslation}>Chest</Text>
                <Text style={styles.bodyPronunciation}>doo-GHAHN</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons name="body" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.bodyWord}>Tiyan</Text>
                <Text style={styles.bodyTranslation}>Stomach / Belly</Text>
                <Text style={styles.bodyPronunciation}>tee-YAHN</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons name="body" size={40} color={colors.orange[700]} />
                </View>
                <Text style={styles.bodyWord}>Likod</Text>
                <Text style={styles.bodyTranslation}>Back</Text>
                <Text style={styles.bodyPronunciation}>lee-KOHD</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons name="heart" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.bodyWord}>Kasingkasing</Text>
                <Text style={styles.bodyTranslation}>Heart</Text>
                <Text style={styles.bodyPronunciation}>
                  kah-seeng-kah-SEENG
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Body Parts - Lower Body</Text>
            <Text style={styles.sectionSubtitle}>Legs and feet</Text>

            <View style={styles.bodyGrid}>
              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons name="body" size={40} color={colors.orange[700]} />
                </View>
                <Text style={styles.bodyWord}>Hawak</Text>
                <Text style={styles.bodyTranslation}>Waist / Hips</Text>
                <Text style={styles.bodyPronunciation}>hah-WAHK</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons name="walk" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.bodyWord}>Paa</Text>
                <Text style={styles.bodyTranslation}>Leg / Foot</Text>
                <Text style={styles.bodyPronunciation}>pah-AH</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons name="walk" size={40} color={colors.orange[700]} />
                </View>
                <Text style={styles.bodyWord}>Tuhod</Text>
                <Text style={styles.bodyTranslation}>Knee</Text>
                <Text style={styles.bodyPronunciation}>too-HOHD</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons
                    name="footsteps"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.bodyWord}>Tiil</Text>
                <Text style={styles.bodyTranslation}>Foot</Text>
                <Text style={styles.bodyPronunciation}>tee-EEL</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons
                    name="finger-print"
                    size={40}
                    color={colors.orange[700]}
                  />
                </View>
                <Text style={styles.bodyWord}>Tudlo sa tiil</Text>
                <Text style={styles.bodyTranslation}>Toe</Text>
                <Text style={styles.bodyPronunciation}>
                  tood-LOH sah tee-EEL
                </Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons name="walk" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.bodyWord}>Bukobuko</Text>
                <Text style={styles.bodyTranslation}>Ankle</Text>
                <Text style={styles.bodyPronunciation}>boo-koh-boo-KOH</Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Common Illnesses</Text>
            <Text style={styles.sectionSubtitle}>
              Talking about sakit (sickness)
            </Text>

            <View style={styles.bodyGrid}>
              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons
                    name="thermometer"
                    size={40}
                    color={colors.orange[700]}
                  />
                </View>
                <Text style={styles.bodyWord}>Hilanat</Text>
                <Text style={styles.bodyTranslation}>Fever</Text>
                <Text style={styles.bodyPronunciation}>hee-lah-NAHT</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons name="sad" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.bodyWord}>Ubo</Text>
                <Text style={styles.bodyTranslation}>Cough</Text>
                <Text style={styles.bodyPronunciation}>oo-BOH</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons name="water" size={40} color={colors.orange[700]} />
                </View>
                <Text style={styles.bodyWord}>Sip-on</Text>
                <Text style={styles.bodyTranslation}>Cold / Runny nose</Text>
                <Text style={styles.bodyPronunciation}>seep-OHN</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons name="sad" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.bodyWord}>Sakit sa ulo</Text>
                <Text style={styles.bodyTranslation}>Headache</Text>
                <Text style={styles.bodyPronunciation}>
                  sah-KEET sah oo-LOH
                </Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons
                    name="restaurant"
                    size={40}
                    color={colors.orange[700]}
                  />
                </View>
                <Text style={styles.bodyWord}>Sakit sa tiyan</Text>
                <Text style={styles.bodyTranslation}>Stomachache</Text>
                <Text style={styles.bodyPronunciation}>
                  sah-KEET sah tee-YAHN
                </Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons
                    name="fitness"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.bodyWord}>Sakit sa likod</Text>
                <Text style={styles.bodyTranslation}>Backache</Text>
                <Text style={styles.bodyPronunciation}>
                  sah-KEET sah lee-KOHD
                </Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons
                    name="medical"
                    size={40}
                    color={colors.orange[700]}
                  />
                </View>
                <Text style={styles.bodyWord}>Hubag</Text>
                <Text style={styles.bodyTranslation}>Swelling / Wound</Text>
                <Text style={styles.bodyPronunciation}>hoo-BAHG</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons name="water" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.bodyWord}>Pagkaluya</Text>
                <Text style={styles.bodyTranslation}>Weakness / Dizziness</Text>
                <Text style={styles.bodyPronunciation}>pahg-kah-loo-YAH</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons
                    name="restaurant"
                    size={40}
                    color={colors.orange[700]}
                  />
                </View>
                <Text style={styles.bodyWord}>Suka</Text>
                <Text style={styles.bodyTranslation}>Vomit</Text>
                <Text style={styles.bodyPronunciation}>soo-KAH</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons
                    name="medkit"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.bodyWord}>Hubak</Text>
                <Text style={styles.bodyTranslation}>Asthma</Text>
                <Text style={styles.bodyPronunciation}>hoo-BAHK</Text>
              </View>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Saying something hurts</Text>
              <Text style={styles.bisayaText}>
                Masakit ang akong [body part].
              </Text>
              <Text style={styles.englishText}>My [body part] hurts.</Text>
              <Text style={styles.pronunciationText}>
                mah-sah-KEET ahng ah-KOHNG [body part]
              </Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Example: Masakit ang akong ulo = My head hurts
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Feeling sick</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Mother:</Text>
                <Text style={styles.bisayaText}>
                  Unsay gibati nimo? Dili ka maayo tan-awon.
                </Text>
                <Text style={styles.englishText}>
                  (What do you feel? You don&apos;t look well.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Child:</Text>
                <Text style={styles.bisayaText}>
                  Masakit ang akong ulo ug tiyan. Hilanat ko.
                </Text>
                <Text style={styles.englishText}>
                  (My head and stomach hurt. I have a fever.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Mother:</Text>
                <Text style={styles.bisayaText}>
                  Kanus-a pa man ni? Adto ta sa doctor.
                </Text>
                <Text style={styles.englishText}>
                  (Since when? Let&apos;s go to the doctor.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Child:</Text>
                <Text style={styles.bisayaText}>
                  Kagahapon pa, Ma. Luya kaayo ko.
                </Text>
                <Text style={styles.englishText}>
                  (Since yesterday, Mom. I&apos;m very weak.)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>
              Health Conditions & Symptoms
            </Text>
            <Text style={styles.sectionSubtitle}>Describing how you feel</Text>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>
                Asking how someone feels
              </Text>
              <Text style={styles.bisayaText}>Unsay gibati nimo?</Text>
              <Text style={styles.englishText}>
                How do you feel? / What do you feel?
              </Text>
              <Text style={styles.pronunciationText}>
                oon-SAY ghee-bah-TEE nee-MOH
              </Text>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Saying you&apos;re sick</Text>
              <Text style={styles.bisayaText}>Masakiton ko.</Text>
              <Text style={styles.englishText}>I&apos;m sick.</Text>
              <Text style={styles.pronunciationText}>mah-sah-kee-TOHN koh</Text>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>
                Saying you&apos;re feeling better
              </Text>
              <Text style={styles.bisayaText}>Maayo na ko.</Text>
              <Text style={styles.englishText}>
                I&apos;m okay now / I&apos;m better.
              </Text>
              <Text style={styles.pronunciationText}>mah-AH-yoh nah koh</Text>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>
                Saying you&apos;re tired
              </Text>
              <Text style={styles.bisayaText}>Gikapoy ko.</Text>
              <Text style={styles.englishText}>I&apos;m tired.</Text>
              <Text style={styles.pronunciationText}>ghee-kah-POY koh</Text>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Saying you need to rest</Text>
              <Text style={styles.bisayaText}>Kinahanglan ko ug pahulay.</Text>
              <Text style={styles.englishText}>I need rest.</Text>
              <Text style={styles.pronunciationText}>
                kee-nah-hahng-LAHN koh oog pah-hoo-LYE
              </Text>
            </View>

            <View style={styles.bodyGrid}>
              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons
                    name="fitness"
                    size={40}
                    color={colors.orange[700]}
                  />
                </View>
                <Text style={styles.bodyWord}>Himsog</Text>
                <Text style={styles.bodyTranslation}>Healthy / Strong</Text>
                <Text style={styles.bodyPronunciation}>heem-SOHG</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons name="happy" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.bodyWord}>Lig-on</Text>
                <Text style={styles.bodyTranslation}>Strong / Sturdy</Text>
                <Text style={styles.bodyPronunciation}>leeg-OHN</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons name="sad" size={40} color={colors.orange[700]} />
                </View>
                <Text style={styles.bodyWord}>Luya</Text>
                <Text style={styles.bodyTranslation}>Weak</Text>
                <Text style={styles.bodyPronunciation}>loo-YAH</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons name="bed" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.bodyWord}>Kapoy</Text>
                <Text style={styles.bodyTranslation}>Tired</Text>
                <Text style={styles.bodyPronunciation}>kah-POY</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons name="sad" size={40} color={colors.orange[700]} />
                </View>
                <Text style={styles.bodyWord}>Sakit</Text>
                <Text style={styles.bodyTranslation}>Pain / Hurt / Sick</Text>
                <Text style={styles.bodyPronunciation}>sah-KEET</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons
                    name="medical"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.bodyWord}>Samad</Text>
                <Text style={styles.bodyTranslation}>Wound / Injury</Text>
                <Text style={styles.bodyPronunciation}>sah-MAHD</Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Medical & Healthcare</Text>
            <Text style={styles.sectionSubtitle}>
              Visiting the doctor or hospital
            </Text>

            <View style={styles.bodyGrid}>
              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons
                    name="medical"
                    size={40}
                    color={colors.orange[700]}
                  />
                </View>
                <Text style={styles.bodyWord}>Doktor</Text>
                <Text style={styles.bodyTranslation}>Doctor</Text>
                <Text style={styles.bodyPronunciation}>DOHK-tohr</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons
                    name="medkit"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.bodyWord}>Nars</Text>
                <Text style={styles.bodyTranslation}>Nurse</Text>
                <Text style={styles.bodyPronunciation}>NAHRS</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons
                    name="business"
                    size={40}
                    color={colors.orange[700]}
                  />
                </View>
                <Text style={styles.bodyWord}>Ospital</Text>
                <Text style={styles.bodyTranslation}>Hospital</Text>
                <Text style={styles.bodyPronunciation}>ohs-pee-TAHL</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons
                    name="medical"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.bodyWord}>Klinika</Text>
                <Text style={styles.bodyTranslation}>Clinic</Text>
                <Text style={styles.bodyPronunciation}>klee-NEE-kah</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons name="flask" size={40} color={colors.orange[700]} />
                </View>
                <Text style={styles.bodyWord}>Tambal</Text>
                <Text style={styles.bodyTranslation}>Medicine</Text>
                <Text style={styles.bodyPronunciation}>tahm-BAHL</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons
                    name="storefront"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.bodyWord}>Botica</Text>
                <Text style={styles.bodyTranslation}>Pharmacy</Text>
                <Text style={styles.bodyPronunciation}>boh-TEE-kah</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons
                    name="document"
                    size={40}
                    color={colors.orange[700]}
                  />
                </View>
                <Text style={styles.bodyWord}>Reseta</Text>
                <Text style={styles.bodyTranslation}>Prescription</Text>
                <Text style={styles.bodyPronunciation}>reh-SEH-tah</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons
                    name="fitness"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.bodyWord}>Injection</Text>
                <Text style={styles.bodyTranslation}>Injection / Shot</Text>
                <Text style={styles.bodyPronunciation}>een-JEHK-shohn</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons
                    name="clipboard"
                    size={40}
                    color={colors.orange[700]}
                  />
                </View>
                <Text style={styles.bodyWord}>Checkup</Text>
                <Text style={styles.bodyTranslation}>Medical checkup</Text>
                <Text style={styles.bodyPronunciation}>CHEHK-ahp</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons
                    name="bandage"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.bodyWord}>Banda</Text>
                <Text style={styles.bodyTranslation}>Bandage</Text>
                <Text style={styles.bodyPronunciation}>BAHN-dah</Text>
              </View>
            </View>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons name="medkit" size={24} color={colors.orange[700]} />
              </View>
              <Text style={styles.patternTitle}>
                Healthcare in the Philippines
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Public hospitals</Text> -
                  Government hospitals, cheaper but often crowded
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Private hospitals</Text> -
                  Better facilities but more expensive
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Botika/Pharmacy</Text> -
                  Many medicines available without prescription
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Hilot</Text> - Traditional
                  massage therapy, very popular
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>At the doctor&apos;s office</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Doctor:</Text>
                <Text style={styles.bisayaText}>
                  Maayong buntag. Unsay imong problema?
                </Text>
                <Text style={styles.englishText}>
                  (Good morning. What&apos;s your problem?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Patient:</Text>
                <Text style={styles.bisayaText}>
                  Masakit ang akong tutunlan ug naa koy ubo.
                </Text>
                <Text style={styles.englishText}>
                  (My throat hurts and I have a cough.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Doctor:</Text>
                <Text style={styles.bisayaText}>
                  Pila ka adlaw na ni? Naa bay hilanat?
                </Text>
                <Text style={styles.englishText}>
                  (How many days has this been? Is there fever?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Patient:</Text>
                <Text style={styles.bisayaText}>
                  Tulo ka adlaw na. Naa, gamay lang nga hilanat.
                </Text>
                <Text style={styles.englishText}>
                  (Three days now. Yes, just a slight fever.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Doctor:</Text>
                <Text style={styles.bisayaText}>
                  Sige, hatagan tika ug reseta. Inom ni tulo ka beses kada
                  adlaw.
                </Text>
                <Text style={styles.englishText}>
                  (Okay, I&apos;ll give you a prescription. Take this three
                  times a day.)
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>At the pharmacy</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Pharmacist:</Text>
                <Text style={styles.bisayaText}>
                  Maayo nga udto! Unsa akong matabang?
                </Text>
                <Text style={styles.englishText}>
                  (Good afternoon! How can I help?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Customer:</Text>
                <Text style={styles.bisayaText}>
                  Naa ba kamoy tambal para sa sakit sa ulo?
                </Text>
                <Text style={styles.englishText}>
                  (Do you have medicine for headache?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Pharmacist:</Text>
                <Text style={styles.bisayaText}>
                  Naa. Kini nga paracetamol epektibo kaayo.
                </Text>
                <Text style={styles.englishText}>
                  (Yes. This paracetamol is very effective.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Customer:</Text>
                <Text style={styles.bisayaText}>
                  Sige, paliton nako. Pila ni?
                </Text>
                <Text style={styles.englishText}>
                  (Okay, I&apos;ll buy it. How much is this?)
                </Text>
              </View>
            </View>

            <View style={styles.summaryBox}>
              <View style={styles.iconRow}>
                <Ionicons
                  name="checkmark-circle"
                  size={28}
                  color={colors.orange[700]}
                />
              </View>
              <Text style={styles.patternTitle}>Maayo Kaayo! You Did It!</Text>
              <Text style={styles.patternText}>
                You just learned Bisaya health and body vocabulary! Now you can:
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Name body parts (ulo, mata, dalunggan, kamot, paa, tiyan)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Describe common illnesses (hilanat, ubo, sip-on, sakit sa ulo)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Express how you feel (masakiton, gikapoy, luya, himsog)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Say what hurts (Masakit ang akong...)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Talk to doctors and medical professionals
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Get medicine at the pharmacy
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Understand Philippine healthcare culture
                </Text>
              </View>
              <Text style={[styles.patternText, { marginTop: 16 }]}>
                Stay healthy and practice your medical Bisaya vocabulary!
              </Text>
            </View>
          </ScrollView>
        </Animated.View>
      </View>
    </View>
  );
}
