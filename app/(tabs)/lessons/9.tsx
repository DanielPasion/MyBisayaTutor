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

export default function Lesson9() {
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
    placeGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 12,
      marginBottom: 20,
    },
    placeCard: {
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
    placeIcon: {
      marginBottom: 12,
    },
    placeWord: {
      fontSize: 22,
      fontWeight: "800",
      color: colors.text[100],
      marginBottom: 6,
      textAlign: "center",
    },
    placeTranslation: {
      fontSize: 14,
      color: colors.text[200],
      textAlign: "center",
      marginBottom: 6,
    },
    placePronunciation: {
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
              <Text style={styles.lessonNumber}>Lesson 9</Text>
              <Text style={styles.headerTitle}>Places & Locations</Text>
              <Text style={styles.headerDescription}>
                Learn to talk about different lugares (places) in your
                community!
              </Text>
            </View>

            <Text style={styles.sectionTitle}>Common Places in Town</Text>
            <Text style={styles.sectionSubtitle}>
              Essential locations - mga importante nga lugar
            </Text>

            <View style={styles.placeGrid}>
              <View style={styles.placeCard}>
                <View style={styles.placeIcon}>
                  <Ionicons name="home" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.placeWord}>Balay</Text>
                <Text style={styles.placeTranslation}>House / Home</Text>
                <Text style={styles.placePronunciation}>bah-LYE</Text>
              </View>

              <View style={styles.placeCard}>
                <View style={styles.placeIcon}>
                  <Ionicons
                    name="school"
                    size={40}
                    color={colors.orange[400]}
                  />
                </View>
                <Text style={styles.placeWord}>Eskwelahan</Text>
                <Text style={styles.placeTranslation}>School</Text>
                <Text style={styles.placePronunciation}>ehs-kweh-LAH-hahn</Text>
              </View>

              <View style={styles.placeCard}>
                <View style={styles.placeIcon}>
                  <Ionicons
                    name="medkit"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.placeWord}>Ospital</Text>
                <Text style={styles.placeTranslation}>Hospital</Text>
                <Text style={styles.placePronunciation}>ohs-pee-TAHL</Text>
              </View>

              <View style={styles.placeCard}>
                <View style={styles.placeIcon}>
                  <Ionicons name="cart" size={40} color={colors.orange[400]} />
                </View>
                <Text style={styles.placeWord}>Merkado</Text>
                <Text style={styles.placeTranslation}>Market</Text>
                <Text style={styles.placePronunciation}>mehr-KAH-doh</Text>
              </View>

              <View style={styles.placeCard}>
                <View style={styles.placeIcon}>
                  <Ionicons
                    name="storefront"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.placeWord}>Tindahan</Text>
                <Text style={styles.placeTranslation}>Store / Shop</Text>
                <Text style={styles.placePronunciation}>teen-dah-HAHN</Text>
              </View>

              <View style={styles.placeCard}>
                <View style={styles.placeIcon}>
                  <Ionicons
                    name="restaurant"
                    size={40}
                    color={colors.orange[400]}
                  />
                </View>
                <Text style={styles.placeWord}>Restawran</Text>
                <Text style={styles.placeTranslation}>Restaurant</Text>
                <Text style={styles.placePronunciation}>rehs-tow-RAHN</Text>
              </View>

              <View style={styles.placeCard}>
                <View style={styles.placeIcon}>
                  <Ionicons
                    name="business"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.placeWord}>Opisina</Text>
                <Text style={styles.placeTranslation}>Office</Text>
                <Text style={styles.placePronunciation}>oh-pee-SEE-nah</Text>
              </View>

              <View style={styles.placeCard}>
                <View style={styles.placeIcon}>
                  <Ionicons name="car" size={40} color={colors.orange[400]} />
                </View>
                <Text style={styles.placeWord}>Gasolinahan</Text>
                <Text style={styles.placeTranslation}>Gas station</Text>
                <Text style={styles.placePronunciation}>
                  gah-soh-lee-NAH-hahn
                </Text>
              </View>

              <View style={styles.placeCard}>
                <View style={styles.placeIcon}>
                  <Ionicons
                    name="business"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.placeWord}>Bangko</Text>
                <Text style={styles.placeTranslation}>Bank</Text>
                <Text style={styles.placePronunciation}>bahng-KOH</Text>
              </View>

              <View style={styles.placeCard}>
                <View style={styles.placeIcon}>
                  <Ionicons name="mail" size={40} color={colors.orange[400]} />
                </View>
                <Text style={styles.placeWord}>Post office</Text>
                <Text style={styles.placeTranslation}>Post office</Text>
                <Text style={styles.placePronunciation}>POHST oh-fees</Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Asking for directions</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>Asa ang merkado?</Text>
                <Text style={styles.englishText}>(Where is the market?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Local:</Text>
                <Text style={styles.bisayaText}>
                  Tul-id lang, dapit sa bangko.
                </Text>
                <Text style={styles.englishText}>
                  (Just straight ahead, near the bank.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>Layo ba?</Text>
                <Text style={styles.englishText}>(Is it far?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Local:</Text>
                <Text style={styles.bisayaText}>
                  Dili, duol ra. Lima ka minuto lang sa lakaw.
                </Text>
                <Text style={styles.englishText}>
                  (No, it&apos;s close. Just five minutes walking.)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Public & Religious Places</Text>
            <Text style={styles.sectionSubtitle}>
              Community gathering spaces
            </Text>

            <View style={styles.placeGrid}>
              <View style={styles.placeCard}>
                <View style={styles.placeIcon}>
                  <Ionicons
                    name="people"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.placeWord}>Simbahan</Text>
                <Text style={styles.placeTranslation}>Church</Text>
                <Text style={styles.placePronunciation}>seem-bah-HAHN</Text>
              </View>

              <View style={styles.placeCard}>
                <View style={styles.placeIcon}>
                  <Ionicons name="moon" size={40} color={colors.orange[400]} />
                </View>
                <Text style={styles.placeWord}>Moske</Text>
                <Text style={styles.placeTranslation}>Mosque</Text>
                <Text style={styles.placePronunciation}>mohs-KEH</Text>
              </View>

              <View style={styles.placeCard}>
                <View style={styles.placeIcon}>
                  <Ionicons
                    name="fitness"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.placeWord}>Templo</Text>
                <Text style={styles.placeTranslation}>Temple</Text>
                <Text style={styles.placePronunciation}>tehm-PLOH</Text>
              </View>

              <View style={styles.placeCard}>
                <View style={styles.placeIcon}>
                  <Ionicons
                    name="library"
                    size={40}
                    color={colors.orange[400]}
                  />
                </View>
                <Text style={styles.placeWord}>Library</Text>
                <Text style={styles.placeTranslation}>Library</Text>
                <Text style={styles.placePronunciation}>LYE-brah-ree</Text>
              </View>

              <View style={styles.placeCard}>
                <View style={styles.placeIcon}>
                  <Ionicons
                    name="fitness"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.placeWord}>Gym</Text>
                <Text style={styles.placeTranslation}>Gym</Text>
                <Text style={styles.placePronunciation}>JEEM</Text>
              </View>

              <View style={styles.placeCard}>
                <View style={styles.placeIcon}>
                  <Ionicons
                    name="football"
                    size={40}
                    color={colors.orange[400]}
                  />
                </View>
                <Text style={styles.placeWord}>Parke</Text>
                <Text style={styles.placeTranslation}>Park</Text>
                <Text style={styles.placePronunciation}>PAHR-keh</Text>
              </View>

              <View style={styles.placeCard}>
                <View style={styles.placeIcon}>
                  <Ionicons name="film" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.placeWord}>Sinehan</Text>
                <Text style={styles.placeTranslation}>Movie theater</Text>
                <Text style={styles.placePronunciation}>see-neh-HAHN</Text>
              </View>

              <View style={styles.placeCard}>
                <View style={styles.placeIcon}>
                  <Ionicons name="bag" size={40} color={colors.orange[400]} />
                </View>
                <Text style={styles.placeWord}>Mall</Text>
                <Text style={styles.placeTranslation}>Shopping mall</Text>
                <Text style={styles.placePronunciation}>MAHL</Text>
              </View>
            </View>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons name="people" size={24} color={colors.orange[600]} />
              </View>
              <Text style={styles.patternTitle}>
                Filipino Community Centers
              </Text>
              <Text style={styles.patternText}>
                Filipino communities often gather at specific places:
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Barangay hall</Text> -
                  Local government center, community meetings
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Basketball court</Text> -
                  Community sports and social hub
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Sari-sari store</Text> -
                  Small neighborhood convenience store
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Parts of a House</Text>
            <Text style={styles.sectionSubtitle}>
              Rooms and areas - mga bahin sa balay
            </Text>

            <View style={styles.placeGrid}>
              <View style={styles.placeCard}>
                <View style={styles.placeIcon}>
                  <Ionicons name="bed" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.placeWord}>Kwarto</Text>
                <Text style={styles.placeTranslation}>Room / Bedroom</Text>
                <Text style={styles.placePronunciation}>KWAHR-toh</Text>
              </View>

              <View style={styles.placeCard}>
                <View style={styles.placeIcon}>
                  <Ionicons name="tv" size={40} color={colors.orange[400]} />
                </View>
                <Text style={styles.placeWord}>Sala</Text>
                <Text style={styles.placeTranslation}>Living room</Text>
                <Text style={styles.placePronunciation}>sah-LAH</Text>
              </View>

              <View style={styles.placeCard}>
                <View style={styles.placeIcon}>
                  <Ionicons
                    name="restaurant"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.placeWord}>Kusina</Text>
                <Text style={styles.placeTranslation}>Kitchen</Text>
                <Text style={styles.placePronunciation}>koo-SEE-nah</Text>
              </View>

              <View style={styles.placeCard}>
                <View style={styles.placeIcon}>
                  <Ionicons name="water" size={40} color={colors.orange[400]} />
                </View>
                <Text style={styles.placeWord}>Banyo</Text>
                <Text style={styles.placeTranslation}>Bathroom</Text>
                <Text style={styles.placePronunciation}>bahn-YOH</Text>
              </View>

              <View style={styles.placeCard}>
                <View style={styles.placeIcon}>
                  <Ionicons
                    name="restaurant"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.placeWord}>Kaldero</Text>
                <Text style={styles.placeTranslation}>Dining room</Text>
                <Text style={styles.placePronunciation}>kahl-DEH-roh</Text>
              </View>

              <View style={styles.placeCard}>
                <View style={styles.placeIcon}>
                  <Ionicons name="leaf" size={40} color={colors.orange[400]} />
                </View>
                <Text style={styles.placeWord}>Tanaman</Text>
                <Text style={styles.placeTranslation}>Garden / Yard</Text>
                <Text style={styles.placePronunciation}>tah-nah-MAHN</Text>
              </View>

              <View style={styles.placeCard}>
                <View style={styles.placeIcon}>
                  <Ionicons name="exit" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.placeWord}>Pultahan</Text>
                <Text style={styles.placeTranslation}>Door</Text>
                <Text style={styles.placePronunciation}>pool-tah-HAHN</Text>
              </View>

              <View style={styles.placeCard}>
                <View style={styles.placeIcon}>
                  <Ionicons
                    name="square"
                    size={40}
                    color={colors.orange[400]}
                  />
                </View>
                <Text style={styles.placeWord}>Bintana</Text>
                <Text style={styles.placeTranslation}>Window</Text>
                <Text style={styles.placePronunciation}>been-tah-NAH</Text>
              </View>

              <View style={styles.placeCard}>
                <View style={styles.placeIcon}>
                  <Ionicons name="home" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.placeWord}>Atop</Text>
                <Text style={styles.placeTranslation}>Roof</Text>
                <Text style={styles.placePronunciation}>ah-TOHP</Text>
              </View>

              <View style={styles.placeCard}>
                <View style={styles.placeIcon}>
                  <Ionicons
                    name="arrow-up"
                    size={40}
                    color={colors.orange[400]}
                  />
                </View>
                <Text style={styles.placeWord}>Hagdanan</Text>
                <Text style={styles.placeTranslation}>Stairs</Text>
                <Text style={styles.placePronunciation}>hahg-dah-NAHN</Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>House tour</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Host:</Text>
                <Text style={styles.bisayaText}>
                  Kini ang sala. Diri mi mag-estorya.
                </Text>
                <Text style={styles.englishText}>
                  (This is the living room. We chat here.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Guest:</Text>
                <Text style={styles.bisayaText}>
                  Nindot! Asa man ang kusina?
                </Text>
                <Text style={styles.englishText}>
                  (Nice! Where is the kitchen?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Host:</Text>
                <Text style={styles.bisayaText}>
                  Diha sa likod. Tara, tan-awon nimo.
                </Text>
                <Text style={styles.englishText}>
                  (Over there in the back. Come, I&apos;ll show you.)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Geographic Features</Text>
            <Text style={styles.sectionSubtitle}>
              Natural places - natural nga mga lugar
            </Text>

            <View style={styles.placeGrid}>
              <View style={styles.placeCard}>
                <View style={styles.placeIcon}>
                  <Ionicons name="water" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.placeWord}>Dagat</Text>
                <Text style={styles.placeTranslation}>Sea / Ocean</Text>
                <Text style={styles.placePronunciation}>dah-GAHT</Text>
              </View>

              <View style={styles.placeCard}>
                <View style={styles.placeIcon}>
                  <Ionicons
                    name="water-outline"
                    size={40}
                    color={colors.orange[400]}
                  />
                </View>
                <Text style={styles.placeWord}>Baybayon</Text>
                <Text style={styles.placeTranslation}>Beach / Seashore</Text>
                <Text style={styles.placePronunciation}>bye-bye-OHN</Text>
              </View>

              <View style={styles.placeCard}>
                <View style={styles.placeIcon}>
                  <Ionicons
                    name="triangle"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.placeWord}>Bukid</Text>
                <Text style={styles.placeTranslation}>Mountain</Text>
                <Text style={styles.placePronunciation}>boo-KEED</Text>
              </View>

              <View style={styles.placeCard}>
                <View style={styles.placeIcon}>
                  <Ionicons name="water" size={40} color={colors.orange[400]} />
                </View>
                <Text style={styles.placeWord}>Suba</Text>
                <Text style={styles.placeTranslation}>River</Text>
                <Text style={styles.placePronunciation}>soo-BAH</Text>
              </View>

              <View style={styles.placeCard}>
                <View style={styles.placeIcon}>
                  <Ionicons name="leaf" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.placeWord}>Lasang</Text>
                <Text style={styles.placeTranslation}>Forest</Text>
                <Text style={styles.placePronunciation}>lah-SAHNG</Text>
              </View>

              <View style={styles.placeCard}>
                <View style={styles.placeIcon}>
                  <Ionicons name="water" size={40} color={colors.orange[400]} />
                </View>
                <Text style={styles.placeWord}>Danaw</Text>
                <Text style={styles.placeTranslation}>Lake</Text>
                <Text style={styles.placePronunciation}>dah-NOW</Text>
              </View>

              <View style={styles.placeCard}>
                <View style={styles.placeIcon}>
                  <Ionicons name="leaf" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.placeWord}>Uma</Text>
                <Text style={styles.placeTranslation}>Farm / Field</Text>
                <Text style={styles.placePronunciation}>OO-mah</Text>
              </View>

              <View style={styles.placeCard}>
                <View style={styles.placeIcon}>
                  <Ionicons name="water" size={40} color={colors.orange[400]} />
                </View>
                <Text style={styles.placeWord}>Tubod</Text>
                <Text style={styles.placeTranslation}>
                  Spring / Water source
                </Text>
                <Text style={styles.placePronunciation}>too-BOHD</Text>
              </View>

              <View style={styles.placeCard}>
                <View style={styles.placeIcon}>
                  <Ionicons name="boat" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.placeWord}>Isla</Text>
                <Text style={styles.placeTranslation}>Island</Text>
                <Text style={styles.placePronunciation}>ees-LAH</Text>
              </View>

              <View style={styles.placeCard}>
                <View style={styles.placeIcon}>
                  <Ionicons name="sunny" size={40} color={colors.orange[400]} />
                </View>
                <Text style={styles.placeWord}>Nataran</Text>
                <Text style={styles.placeTranslation}>Open field / Plains</Text>
                <Text style={styles.placePronunciation}>nah-tah-RAHN</Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Planning a trip</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Friend:</Text>
                <Text style={styles.bisayaText}>
                  Moadto ta sa baybayon ugma?
                </Text>
                <Text style={styles.englishText}>
                  (Shall we go to the beach tomorrow?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>Oo! Layo ba ang dagat?</Text>
                <Text style={styles.englishText}>(Yes! Is the sea far?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Friend:</Text>
                <Text style={styles.bisayaText}>
                  Dili kaayo. Usa ka oras lang sa sakay.
                </Text>
                <Text style={styles.englishText}>
                  (Not too much. Just one hour by ride.)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Direction & Location Words</Text>
            <Text style={styles.sectionSubtitle}>
              Describing where things are
            </Text>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Basic directions</Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  <Text style={{ fontWeight: "700" }}>Tuo</Text> = Right{"\n"}
                  <Text style={{ fontWeight: "700" }}>Wala</Text> = Left{"\n"}
                  <Text style={{ fontWeight: "700" }}>Tul-id</Text> = Straight
                  {"\n"}
                  <Text style={{ fontWeight: "700" }}>Balik</Text> = Back /
                  Return
                </Text>
              </View>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Position words</Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  <Text style={{ fontWeight: "700" }}>Ania / Dinhi</Text> = Here
                  {"\n"}
                  <Text style={{ fontWeight: "700" }}>Diha</Text> = There{"\n"}
                  <Text style={{ fontWeight: "700" }}>Taas</Text> = Above / Up
                  {"\n"}
                  <Text style={{ fontWeight: "700" }}>Ubos</Text> = Below / Down
                  {"\n"}
                  <Text style={{ fontWeight: "700" }}>Sulod</Text> = Inside
                  {"\n"}
                  <Text style={{ fontWeight: "700" }}>Gawas</Text> = Outside
                  {"\n"}
                  <Text style={{ fontWeight: "700" }}>Atubangan</Text> = In
                  front{"\n"}
                  <Text style={{ fontWeight: "700" }}>Likod</Text> = Behind
                </Text>
              </View>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Distance words</Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  <Text style={{ fontWeight: "700" }}>Duol</Text> = Near / Close
                  {"\n"}
                  <Text style={{ fontWeight: "700" }}>Layo</Text> = Far{"\n"}
                  <Text style={{ fontWeight: "700" }}>Dapit</Text> = Near /
                  Around{"\n"}
                  <Text style={{ fontWeight: "700" }}>Tabok</Text> = Across
                </Text>
              </View>
            </View>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons name="compass" size={24} color={colors.orange[600]} />
              </View>
              <Text style={styles.patternTitle}>
                Asking &ldquo;Where?&rdquo;
              </Text>
              <View style={styles.highlightBox}>
                <Text style={styles.highlightText}>
                  Asa + ang + [place/thing]?
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Asa ang banyo? = Where is the bathroom?
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Asa ang merkado? = Where is the market?
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>Asa ka? = Where are you?</Text>
              </View>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Giving directions</Text>
              <Text style={styles.bisayaText}>
                Liko sa tuo, dayon tul-id lang.
              </Text>
              <Text style={styles.englishText}>
                Turn right, then just go straight.
              </Text>
              <Text style={styles.pronunciationText}>
                LEE-koh sah too-OH, dah-YOHN tool-EED lahng
              </Text>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Describing location</Text>
              <Text style={styles.bisayaText}>Dapit sa simbahan.</Text>
              <Text style={styles.englishText}>Near the church.</Text>
              <Text style={styles.pronunciationText}>
                dah-PEET sah seem-bah-HAHN
              </Text>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>
                Asking if something is far
              </Text>
              <Text style={styles.bisayaText}>Layo ba?</Text>
              <Text style={styles.englishText}>Is it far?</Text>
              <Text style={styles.pronunciationText}>lah-YOH bah</Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Response: &ldquo;Layo&rdquo; (Far) or &ldquo;Duol ra&rdquo;
                  (Just close)
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Getting directions</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Tourist:</Text>
                <Text style={styles.bisayaText}>
                  Pasensya na, asa ang hotel?
                </Text>
                <Text style={styles.englishText}>
                  (Excuse me, where is the hotel?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Local:</Text>
                <Text style={styles.bisayaText}>
                  Ah, tul-id lang kini, dayon liko sa wala.
                </Text>
                <Text style={styles.englishText}>
                  (Ah, just go straight here, then turn left.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Tourist:</Text>
                <Text style={styles.bisayaText}>Layo pa ba?</Text>
                <Text style={styles.englishText}>(Is it still far?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Local:</Text>
                <Text style={styles.bisayaText}>
                  Dili, duol ra. Makita nimo ang dako nga building.
                </Text>
                <Text style={styles.englishText}>
                  (No, it&apos;s close. You&apos;ll see the big building.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Tourist:</Text>
                <Text style={styles.bisayaText}>Salamat kaayo!</Text>
                <Text style={styles.englishText}>(Thank you very much!)</Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Transportation Places</Text>
            <Text style={styles.sectionSubtitle}>
              Getting around - mga sakyananan
            </Text>

            <View style={styles.placeGrid}>
              <View style={styles.placeCard}>
                <View style={styles.placeIcon}>
                  <Ionicons name="bus" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.placeWord}>Terminal</Text>
                <Text style={styles.placeTranslation}>Bus/Jeep terminal</Text>
                <Text style={styles.placePronunciation}>tehr-mee-NAHL</Text>
              </View>

              <View style={styles.placeCard}>
                <View style={styles.placeIcon}>
                  <Ionicons
                    name="airplane"
                    size={40}
                    color={colors.orange[400]}
                  />
                </View>
                <Text style={styles.placeWord}>Airport</Text>
                <Text style={styles.placeTranslation}>Airport</Text>
                <Text style={styles.placePronunciation}>EHR-pohrt</Text>
              </View>

              <View style={styles.placeCard}>
                <View style={styles.placeIcon}>
                  <Ionicons name="boat" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.placeWord}>Pantalan</Text>
                <Text style={styles.placeTranslation}>Port / Dock</Text>
                <Text style={styles.placePronunciation}>pahn-tah-LAHN</Text>
              </View>

              <View style={styles.placeCard}>
                <View style={styles.placeIcon}>
                  <Ionicons
                    name="trail-sign"
                    size={40}
                    color={colors.orange[400]}
                  />
                </View>
                <Text style={styles.placeWord}>Dalan</Text>
                <Text style={styles.placeTranslation}>Road / Street</Text>
                <Text style={styles.placePronunciation}>dah-LAHN</Text>
              </View>

              <View style={styles.placeCard}>
                <View style={styles.placeIcon}>
                  <Ionicons
                    name="remove"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.placeWord}>Tulay</Text>
                <Text style={styles.placeTranslation}>Bridge</Text>
                <Text style={styles.placePronunciation}>too-LYE</Text>
              </View>

              <View style={styles.placeCard}>
                <View style={styles.placeIcon}>
                  <Ionicons name="bed" size={40} color={colors.orange[400]} />
                </View>
                <Text style={styles.placeWord}>Hotel</Text>
                <Text style={styles.placeTranslation}>Hotel</Text>
                <Text style={styles.placePronunciation}>hoh-TEHL</Text>
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
              <Text style={styles.patternTitle}>Philippine Addresses</Text>
              <Text style={styles.patternText}>
                Address format in the Philippines:
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  House number + Street name
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Barangay (smallest administrative division)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>City/Municipality</Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>Province</Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>
                Complete location conversation
              </Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Driver:</Text>
                <Text style={styles.bisayaText}>Asa man ka paingon?</Text>
                <Text style={styles.englishText}>(Where are you going?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>
                  Sa mall palihog. Duol sa simbahan.
                </Text>
                <Text style={styles.englishText}>
                  (To the mall please. Near the church.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Driver:</Text>
                <Text style={styles.bisayaText}>
                  Ah oo, kahibalo ko. Layo pa diay imong adtoan?
                </Text>
                <Text style={styles.englishText}>
                  (Ah yes, I know. Is your destination still far?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>
                  Dili, diha lang. Pagkahuman sa mall, mobalik ko sa balay.
                </Text>
                <Text style={styles.englishText}>
                  (No, just there. After the mall, I&apos;ll go back home.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Driver:</Text>
                <Text style={styles.bisayaText}>Sige, paras ka sa mall!</Text>
                <Text style={styles.englishText}>
                  (Okay, I&apos;ll drop you at the mall!)
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
                You just learned Bisaya places and locations! Now you can:
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Name common places in town (stores, schools, hospitals, etc.)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Talk about public and religious places
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Describe parts of a house (rooms, doors, windows)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Identify geographic features (sea, mountain, river, forest)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Give and understand directions (left, right, straight, near,
                  far)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Ask &ldquo;where&rdquo; questions and describe locations
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Navigate transportation places and understand Philippine
                  addresses
                </Text>
              </View>
              <Text style={[styles.patternText, { marginTop: 16 }]}>
                Practice asking for and giving directions in Bisaya!
              </Text>
            </View>
          </ScrollView>
        </Animated.View>
      </View>
    </View>
  );
}
