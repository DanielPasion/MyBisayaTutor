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

export default function Lesson6() {
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
      borderColor: colors.orange[300] + "40",
      shadowColor: colors.orange[300],
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.15,
      shadowRadius: 12,
      elevation: 6,
      alignItems: "center",
    },
    lessonNumber: {
      fontSize: 13,
      fontWeight: "800",
      color: colors.orange[300],
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
      borderColor: colors.orange[300] + "30",
      shadowColor: colors.orange[300],
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
      color: colors.orange[300],
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
      backgroundColor: colors.orange[300] + "20",
      padding: 20,
      borderRadius: 16,
      marginVertical: 16,
      borderWidth: 2,
      borderColor: colors.orange[300] + "40",
      width: "100%",
    },
    highlightText: {
      fontSize: 18,
      fontWeight: "700",
      color: colors.orange[700],
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
      borderColor: colors.orange[300] + "30",
      shadowColor: colors.orange[300],
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
      color: colors.orange[300],
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
      borderColor: colors.orange[300] + "30",
      shadowColor: colors.orange[300],
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
      backgroundColor: colors.orange[300] + "20",
      padding: 28,
      borderRadius: 24,
      marginTop: 20,
      marginBottom: 20,
      borderWidth: 2,
      borderColor: colors.orange[300] + "40",
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
              <Text style={styles.lessonNumber}>Lesson 6</Text>
              <Text style={styles.headerTitle}>Body Parts</Text>
              <Text style={styles.headerDescription}>
                Learn to talk about your lawas (body) - essential for health and
                daily life!
              </Text>
            </View>

            <Text style={styles.sectionTitle}>The Head & Face</Text>
            <Text style={styles.sectionSubtitle}>
              Parts of the ulo (head) and nawong (face)
            </Text>

            <View style={styles.bodyGrid}>
              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons
                    name="person-circle"
                    size={40}
                    color={colors.orange[300]}
                  />
                </View>
                <Text style={styles.bodyWord}>Ulo</Text>
                <Text style={styles.bodyTranslation}>Head</Text>
                <Text style={styles.bodyPronunciation}>OO-loh</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons name="happy" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.bodyWord}>Nawong</Text>
                <Text style={styles.bodyTranslation}>Face</Text>
                <Text style={styles.bodyPronunciation}>nah-WOHNG</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons name="eye" size={40} color={colors.orange[300]} />
                </View>
                <Text style={styles.bodyWord}>Mata</Text>
                <Text style={styles.bodyTranslation}>Eye / Eyes</Text>
                <Text style={styles.bodyPronunciation}>mah-TAH</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons name="ear" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.bodyWord}>Dalunggan</Text>
                <Text style={styles.bodyTranslation}>Ear</Text>
                <Text style={styles.bodyPronunciation}>dah-loong-GAHN</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons name="snow" size={40} color={colors.orange[300]} />
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
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.bodyWord}>Baba</Text>
                <Text style={styles.bodyTranslation}>Mouth</Text>
                <Text style={styles.bodyPronunciation}>bah-BAH</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons name="grid" size={40} color={colors.orange[300]} />
                </View>
                <Text style={styles.bodyWord}>Ngipon</Text>
                <Text style={styles.bodyTranslation}>Tooth / Teeth</Text>
                <Text style={styles.bodyPronunciation}>ngee-POHN</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons name="water" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.bodyWord}>Dila</Text>
                <Text style={styles.bodyTranslation}>Tongue</Text>
                <Text style={styles.bodyPronunciation}>dee-LAH</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons
                    name="fitness"
                    size={40}
                    color={colors.orange[300]}
                  />
                </View>
                <Text style={styles.bodyWord}>Apapangig</Text>
                <Text style={styles.bodyTranslation}>Cheek</Text>
                <Text style={styles.bodyPronunciation}>ah-pah-pah-NGEEG</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons
                    name="remove"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.bodyWord}>Ngabil</Text>
                <Text style={styles.bodyTranslation}>Lip / Lips</Text>
                <Text style={styles.bodyPronunciation}>ngah-BEEL</Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>At the doctor&apos;s office</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Doctor:</Text>
                <Text style={styles.bisayaText}>Asa man ang sakit?</Text>
                <Text style={styles.englishText}>(Where does it hurt?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>
                  Ang akong ulo ug dalunggan.
                </Text>
                <Text style={styles.englishText}>(My head and ear.)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Doctor:</Text>
                <Text style={styles.bisayaText}>Pila na ka adlaw?</Text>
                <Text style={styles.englishText}>(How many days?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>Tulo na ka adlaw, dok.</Text>
                <Text style={styles.englishText}>(Three days, doc.)</Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Hair & Skin</Text>
            <Text style={styles.sectionSubtitle}>Covering your body</Text>

            <View style={styles.bodyGrid}>
              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons name="cut" size={40} color={colors.orange[300]} />
                </View>
                <Text style={styles.bodyWord}>Buhok</Text>
                <Text style={styles.bodyTranslation}>Hair</Text>
                <Text style={styles.bodyPronunciation}>BOO-hohk</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons name="body" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.bodyWord}>Panit</Text>
                <Text style={styles.bodyTranslation}>Skin</Text>
                <Text style={styles.bodyPronunciation}>pah-NEET</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons name="eye" size={40} color={colors.orange[300]} />
                </View>
                <Text style={styles.bodyWord}>Kilay</Text>
                <Text style={styles.bodyTranslation}>Eyebrow</Text>
                <Text style={styles.bodyPronunciation}>kee-LYE</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons name="man" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.bodyWord}>Bungot</Text>
                <Text style={styles.bodyTranslation}>Beard / Mustache</Text>
                <Text style={styles.bodyPronunciation}>boo-NGOHT</Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Upper Body</Text>
            <Text style={styles.sectionSubtitle}>Arms, chest, and torso</Text>

            <View style={styles.bodyGrid}>
              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons
                    name="fitness"
                    size={40}
                    color={colors.orange[300]}
                  />
                </View>
                <Text style={styles.bodyWord}>Liog</Text>
                <Text style={styles.bodyTranslation}>Neck</Text>
                <Text style={styles.bodyPronunciation}>lee-OHG</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons name="body" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.bodyWord}>Abaga</Text>
                <Text style={styles.bodyTranslation}>Shoulder</Text>
                <Text style={styles.bodyPronunciation}>ah-bah-GAH</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons
                    name="hand-left"
                    size={40}
                    color={colors.orange[300]}
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
                    color={colors.orange[500]}
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
                    color={colors.orange[300]}
                  />
                </View>
                <Text style={styles.bodyWord}>Tudlo</Text>
                <Text style={styles.bodyTranslation}>Finger</Text>
                <Text style={styles.bodyPronunciation}>TOOD-loh</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons
                    name="square"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.bodyWord}>Kumagko</Text>
                <Text style={styles.bodyTranslation}>Fist</Text>
                <Text style={styles.bodyPronunciation}>koo-mahg-KOH</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons name="body" size={40} color={colors.orange[300]} />
                </View>
                <Text style={styles.bodyWord}>Dughan</Text>
                <Text style={styles.bodyTranslation}>Chest</Text>
                <Text style={styles.bodyPronunciation}>doog-HAHN</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons name="body" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.bodyWord}>Tiyan</Text>
                <Text style={styles.bodyTranslation}>Stomach / Belly</Text>
                <Text style={styles.bodyPronunciation}>tee-YAHN</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons name="disc" size={40} color={colors.orange[300]} />
                </View>
                <Text style={styles.bodyWord}>Imbot</Text>
                <Text style={styles.bodyTranslation}>Navel / Belly button</Text>
                <Text style={styles.bodyPronunciation}>eem-BOHT</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons
                    name="fitness"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.bodyWord}>Likod</Text>
                <Text style={styles.bodyTranslation}>Back</Text>
                <Text style={styles.bodyPronunciation}>lee-KOHD</Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Getting a massage</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Masseuse:</Text>
                <Text style={styles.bisayaText}>
                  Asa gyud ang sakit sa imong lawas?
                </Text>
                <Text style={styles.englishText}>
                  (Where exactly does your body hurt?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>Sa akong abaga ug likod.</Text>
                <Text style={styles.englishText}>(My shoulders and back.)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Masseuse:</Text>
                <Text style={styles.bisayaText}>
                  Sige, dili na kaayo sakit sunod.
                </Text>
                <Text style={styles.englishText}>
                  (Okay, it won&apos;t hurt as much next time.)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Lower Body</Text>
            <Text style={styles.sectionSubtitle}>
              Legs, feet, and everything below
            </Text>

            <View style={styles.bodyGrid}>
              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons name="body" size={40} color={colors.orange[300]} />
                </View>
                <Text style={styles.bodyWord}>Bat-ang</Text>
                <Text style={styles.bodyTranslation}>Hip / Waist</Text>
                <Text style={styles.bodyPronunciation}>baht-AHNG</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons name="walk" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.bodyWord}>Paa</Text>
                <Text style={styles.bodyTranslation}>Leg / Foot</Text>
                <Text style={styles.bodyPronunciation}>pah-AH</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons name="disc" size={40} color={colors.orange[300]} />
                </View>
                <Text style={styles.bodyWord}>Tuhod</Text>
                <Text style={styles.bodyTranslation}>Knee</Text>
                <Text style={styles.bodyPronunciation}>too-HOHD</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons
                    name="fitness"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.bodyWord}>Bukon-bukon</Text>
                <Text style={styles.bodyTranslation}>Ankle</Text>
                <Text style={styles.bodyPronunciation}>boo-KOHN boo-KOHN</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons
                    name="footsteps"
                    size={40}
                    color={colors.orange[300]}
                  />
                </View>
                <Text style={styles.bodyWord}>Tiil</Text>
                <Text style={styles.bodyTranslation}>Foot (lower part)</Text>
                <Text style={styles.bodyPronunciation}>tee-EEL</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons
                    name="finger-print"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.bodyWord}>Tudlo sa tiil</Text>
                <Text style={styles.bodyTranslation}>Toe</Text>
                <Text style={styles.bodyPronunciation}>
                  TOOD-loh sah tee-EEL
                </Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons
                    name="footsteps"
                    size={40}
                    color={colors.orange[300]}
                  />
                </View>
                <Text style={styles.bodyWord}>Tikod</Text>
                <Text style={styles.bodyTranslation}>Heel</Text>
                <Text style={styles.bodyPronunciation}>tee-KOHD</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons name="body" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.bodyWord}>Lubot</Text>
                <Text style={styles.bodyTranslation}>Buttocks</Text>
                <Text style={styles.bodyPronunciation}>loo-BOHT</Text>
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
              <Text style={styles.patternTitle}>Paa - Two Meanings!</Text>
              <Text style={styles.patternText}>
                &ldquo;Paa&rdquo; can mean the entire leg OR just the foot,
                depending on context.
              </Text>
              <View style={styles.highlightBox}>
                <Text style={styles.highlightText}>
                  Tiil = specifically the foot (lower part){"\n"}
                  Paa = leg/foot (general term)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Internal Body Parts</Text>
            <Text style={styles.sectionSubtitle}>
              Organs and what&apos;s inside
            </Text>

            <View style={styles.bodyGrid}>
              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons name="heart" size={40} color={colors.orange[300]} />
                </View>
                <Text style={styles.bodyWord}>Kasingkasing</Text>
                <Text style={styles.bodyTranslation}>Heart</Text>
                <Text style={styles.bodyPronunciation}>
                  kah-seeng-kah-SEENG
                </Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons
                    name="fitness"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.bodyWord}>Atay</Text>
                <Text style={styles.bodyTranslation}>Liver</Text>
                <Text style={styles.bodyPronunciation}>ah-TYE</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons name="water" size={40} color={colors.orange[300]} />
                </View>
                <Text style={styles.bodyWord}>Baga</Text>
                <Text style={styles.bodyTranslation}>Lungs</Text>
                <Text style={styles.bodyPronunciation}>bah-GAH</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons
                    name="nutrition"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.bodyWord}>Tinai</Text>
                <Text style={styles.bodyTranslation}>Intestines</Text>
                <Text style={styles.bodyPronunciation}>tee-NYE</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons name="body" size={40} color={colors.orange[300]} />
                </View>
                <Text style={styles.bodyWord}>Bukog</Text>
                <Text style={styles.bodyTranslation}>Bone</Text>
                <Text style={styles.bodyPronunciation}>boo-KOHG</Text>
              </View>

              <View style={styles.bodyCard}>
                <View style={styles.bodyIcon}>
                  <Ionicons name="water" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.bodyWord}>Dugo</Text>
                <Text style={styles.bodyTranslation}>Blood</Text>
                <Text style={styles.bodyPronunciation}>doo-GOH</Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Health & Pain Expressions</Text>
            <Text style={styles.sectionSubtitle}>Describing how you feel</Text>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Asking where it hurts</Text>
              <Text style={styles.bisayaText}>Asa man ang sakit?</Text>
              <Text style={styles.englishText}>Where does it hurt?</Text>
              <Text style={styles.pronunciationText}>
                ah-SAH mahn ahng sah-KEET
              </Text>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Saying something hurts</Text>
              <Text style={styles.bisayaText}>
                Sakit ang akong [body part].
              </Text>
              <Text style={styles.englishText}>My [body part] hurts.</Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Examples:{"\n"}
                  Sakit ang akong ulo. = My head hurts.{"\n"}
                  Sakit ang akong tiyan. = My stomach hurts.
                </Text>
              </View>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>General pain</Text>
              <Text style={styles.bisayaText}>Sakit kaayo!</Text>
              <Text style={styles.englishText}>It hurts a lot!</Text>
              <Text style={styles.pronunciationText}>sah-KEET kah-AH-yoh</Text>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Feeling sick</Text>
              <Text style={styles.bisayaText}>Dili ko maayo.</Text>
              <Text style={styles.englishText}>I don&apos;t feel well.</Text>
              <Text style={styles.pronunciationText}>
                dee-LEE koh mah-AH-yoh
              </Text>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Having a fever</Text>
              <Text style={styles.bisayaText}>Naa koy hilanat.</Text>
              <Text style={styles.englishText}>I have a fever.</Text>
              <Text style={styles.pronunciationText}>
                nah-AH koy hee-lah-NAHT
              </Text>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Having a cold</Text>
              <Text style={styles.bisayaText}>Sip-on ko.</Text>
              <Text style={styles.englishText}>I have a cold.</Text>
              <Text style={styles.pronunciationText}>seep-OHN koh</Text>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Having a cough</Text>
              <Text style={styles.bisayaText}>Ubo ko.</Text>
              <Text style={styles.englishText}>I have a cough.</Text>
              <Text style={styles.pronunciationText}>OO-boh koh</Text>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Being dizzy</Text>
              <Text style={styles.bisayaText}>Naglibog ang akong ulo.</Text>
              <Text style={styles.englishText}>
                I&apos;m dizzy. (My head is spinning.)
              </Text>
              <Text style={styles.pronunciationText}>
                nahg-lee-BOHG ahng AH-kong OO-loh
              </Text>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>At the clinic</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Nurse:</Text>
                <Text style={styles.bisayaText}>Unsa imong gibati?</Text>
                <Text style={styles.englishText}>(What do you feel?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>
                  Sakit ang akong ulo ug tiyan. Ug naa pud koy hilanat.
                </Text>
                <Text style={styles.englishText}>
                  (My head and stomach hurt. And I also have a fever.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Nurse:</Text>
                <Text style={styles.bisayaText}>Pila na ka adlaw?</Text>
                <Text style={styles.englishText}>(How many days?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>
                  Duha na ka adlaw. Dili gyud ko maayo.
                </Text>
                <Text style={styles.englishText}>
                  (Two days already. I really don&apos;t feel well.)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Actions with Body Parts</Text>
            <Text style={styles.sectionSubtitle}>
              Common verbs related to the body
            </Text>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>To wash</Text>
              <Text style={styles.bisayaText}>Hugasi ang imong kamot.</Text>
              <Text style={styles.englishText}>Wash your hands.</Text>
              <Text style={styles.pronunciationText}>
                hoo-GAH-see ahng ee-MOHNG kah-MOHT
              </Text>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>To brush (teeth)</Text>
              <Text style={styles.bisayaText}>Siplisi ang imong ngipon.</Text>
              <Text style={styles.englishText}>Brush your teeth.</Text>
              <Text style={styles.pronunciationText}>
                seep-LEE-see ahng ee-MOHNG ngee-POHN
              </Text>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>To comb (hair)</Text>
              <Text style={styles.bisayaText}>Suklayi ang imong buhok.</Text>
              <Text style={styles.englishText}>Comb your hair.</Text>
              <Text style={styles.pronunciationText}>
                sook-LYE-ee ahng ee-MOHNG BOO-hohk
              </Text>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>To cut (hair/nails)</Text>
              <Text style={styles.bisayaText}>Guntingi ang imong buhok.</Text>
              <Text style={styles.englishText}>Cut your hair.</Text>
              <Text style={styles.pronunciationText}>
                goon-teeng-EE ahng ee-MOHNG BOO-hohk
              </Text>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>To scratch</Text>
              <Text style={styles.bisayaText}>Kagyat ang akong likod.</Text>
              <Text style={styles.englishText}>My back is itchy.</Text>
              <Text style={styles.pronunciationText}>
                kahg-YAHT ahng AH-kong lee-KOHD
              </Text>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>To raise your hand</Text>
              <Text style={styles.bisayaText}>Alsa ang imong kamot.</Text>
              <Text style={styles.englishText}>Raise your hand.</Text>
              <Text style={styles.pronunciationText}>
                AHL-sah ahng ee-MOHNG kah-MOHT
              </Text>
            </View>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons name="fitness" size={24} color={colors.orange[600]} />
              </View>
              <Text style={styles.patternTitle}>
                Body Language in Filipino Culture
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Mano po</Text> - Touching
                  elder&apos;s hand to your forehead as a sign of respect
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Lips pointing</Text> -
                  Pointing with lips instead of fingers (common gesture)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Eyebrow raising</Text> -
                  Quick eyebrow raise means &ldquo;yes&rdquo; or acknowledgment
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Chin pointing</Text> -
                  Lifting chin slightly to indicate direction
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Hissing sound</Text> -
                  &ldquo;Psst&rdquo; to get someone&apos;s attention (not rude!)
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Teaching a child</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Parent:</Text>
                <Text style={styles.bisayaText}>Asa man ang imong mata?</Text>
                <Text style={styles.englishText}>(Where are your eyes?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Child:</Text>
                <Text style={styles.bisayaText}>(points) Ania!</Text>
                <Text style={styles.englishText}>(Here!)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Parent:</Text>
                <Text style={styles.bisayaText}>
                  Maayo! Ug asa man ang imong ilong?
                </Text>
                <Text style={styles.englishText}>
                  (Good! And where&apos;s your nose?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Child:</Text>
                <Text style={styles.bisayaText}>(points) Ania pud!</Text>
                <Text style={styles.englishText}>(Here too!)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Parent:</Text>
                <Text style={styles.bisayaText}>
                  Maayo kaayo ka! Hugasi na ang imong kamot.
                </Text>
                <Text style={styles.englishText}>
                  (Very good! Now wash your hands.)
                </Text>
              </View>
            </View>

            <View style={styles.summaryBox}>
              <View style={styles.iconRow}>
                <Ionicons
                  name="checkmark-circle"
                  size={28}
                  color={colors.orange[300]}
                />
              </View>
              <Text style={styles.patternTitle}>Maayo! You Did It!</Text>
              <Text style={styles.patternText}>
                You just learned Bisaya body parts! Now you can:
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Name all major body parts from head to toe
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Describe pain and health issues to doctors
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Talk about symptoms like fever, cold, and cough
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Use verbs for hygiene and body care activities
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Understand Filipino body language and gestures
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Identify internal organs and body systems
                </Text>
              </View>
              <Text style={[styles.patternText, { marginTop: 16 }]}>
                Stay healthy and practice describing your lawas in Bisaya!
              </Text>
            </View>
          </ScrollView>
        </Animated.View>
      </View>
    </View>
  );
}
