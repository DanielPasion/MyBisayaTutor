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

export default function Lesson13() {
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
    weatherGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 12,
      marginBottom: 20,
    },
    weatherCard: {
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
    weatherIcon: {
      marginBottom: 12,
    },
    weatherWord: {
      fontSize: 22,
      fontWeight: "800",
      color: colors.text[100],
      marginBottom: 6,
      textAlign: "center",
    },
    weatherTranslation: {
      fontSize: 14,
      color: colors.text[200],
      textAlign: "center",
      marginBottom: 6,
    },
    weatherPronunciation: {
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
              <Text style={styles.lessonNumber}>Lesson 13</Text>
              <Text style={styles.headerTitle}>Weather & Nature</Text>
              <Text style={styles.headerDescription}>
                Learn to talk about the panahon (weather) and kinaiyahan
                (nature)!
              </Text>
            </View>

            <Text style={styles.sectionTitle}>Weather Conditions</Text>
            <Text style={styles.sectionSubtitle}>
              Describing the weather - panahon
            </Text>

            <View style={styles.weatherGrid}>
              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons name="sunny" size={40} color={colors.orange[700]} />
                </View>
                <Text style={styles.weatherWord}>Init</Text>
                <Text style={styles.weatherTranslation}>Hot / Sunny</Text>
                <Text style={styles.weatherPronunciation}>ee-NEET</Text>
              </View>

              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons name="snow" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.weatherWord}>Bugnaw</Text>
                <Text style={styles.weatherTranslation}>Cold</Text>
                <Text style={styles.weatherPronunciation}>boong-NOW</Text>
              </View>

              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons name="rainy" size={40} color={colors.orange[700]} />
                </View>
                <Text style={styles.weatherWord}>Ulan</Text>
                <Text style={styles.weatherTranslation}>Rain</Text>
                <Text style={styles.weatherPronunciation}>oo-LAHN</Text>
              </View>

              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons
                    name="cloudy"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.weatherWord}>Dag-om</Text>
                <Text style={styles.weatherTranslation}>Cloudy</Text>
                <Text style={styles.weatherPronunciation}>dahg-OHM</Text>
              </View>

              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons
                    name="thunderstorm"
                    size={40}
                    color={colors.orange[700]}
                  />
                </View>
                <Text style={styles.weatherWord}>Unos</Text>
                <Text style={styles.weatherTranslation}>Storm</Text>
                <Text style={styles.weatherPronunciation}>oo-NOHS</Text>
              </View>

              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons name="flash" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.weatherWord}>Kilat</Text>
                <Text style={styles.weatherTranslation}>Lightning</Text>
                <Text style={styles.weatherPronunciation}>kee-LAHT</Text>
              </View>

              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons
                    name="volume-high"
                    size={40}
                    color={colors.orange[700]}
                  />
                </View>
                <Text style={styles.weatherWord}>Dalugdog</Text>
                <Text style={styles.weatherTranslation}>Thunder</Text>
                <Text style={styles.weatherPronunciation}>dah-loog-DOHG</Text>
              </View>

              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons name="leaf" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.weatherWord}>Hangin</Text>
                <Text style={styles.weatherTranslation}>Wind</Text>
                <Text style={styles.weatherPronunciation}>hah-NGEEN</Text>
              </View>

              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons name="water" size={40} color={colors.orange[700]} />
                </View>
                <Text style={styles.weatherWord}>Baha</Text>
                <Text style={styles.weatherTranslation}>Flood</Text>
                <Text style={styles.weatherPronunciation}>bah-HAH</Text>
              </View>

              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons
                    name="partly-sunny"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.weatherWord}>Maayo</Text>
                <Text style={styles.weatherTranslation}>Good weather</Text>
                <Text style={styles.weatherPronunciation}>mah-AH-yoh</Text>
              </View>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>
                Asking about the weather
              </Text>
              <Text style={styles.bisayaText}>Unsaon ang panahon?</Text>
              <Text style={styles.englishText}>How&apos;s the weather?</Text>
              <Text style={styles.pronunciationText}>
                oon-sah-OHN ahng pah-nah-HOHN
              </Text>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Weather conversation</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Friend 1:</Text>
                <Text style={styles.bisayaText}>Unsaon ang panahon karon?</Text>
                <Text style={styles.englishText}>
                  (How&apos;s the weather today?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Friend 2:</Text>
                <Text style={styles.bisayaText}>
                  Init kaayo! Mainit ang adlaw.
                </Text>
                <Text style={styles.englishText}>
                  (Very hot! The sun is warm.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Friend 1:</Text>
                <Text style={styles.bisayaText}>Moulan kaha ugma?</Text>
                <Text style={styles.englishText}>(Will it rain tomorrow?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Friend 2:</Text>
                <Text style={styles.bisayaText}>
                  Tingali. Dag-om man ang langit.
                </Text>
                <Text style={styles.englishText}>
                  (Maybe. The sky is cloudy.)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Seasons & Climate</Text>
            <Text style={styles.sectionSubtitle}>
              The Philippine climate - klima sa Pilipinas
            </Text>

            <View style={styles.weatherGrid}>
              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons name="sunny" size={40} color={colors.orange[700]} />
                </View>
                <Text style={styles.weatherWord}>Tag-init</Text>
                <Text style={styles.weatherTranslation}>
                  Summer / Dry season
                </Text>
                <Text style={styles.weatherPronunciation}>tahg-ee-NEET</Text>
              </View>

              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons name="rainy" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.weatherWord}>Tag-ulan</Text>
                <Text style={styles.weatherTranslation}>Rainy season</Text>
                <Text style={styles.weatherPronunciation}>tahg-oo-LAHN</Text>
              </View>

              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons name="leaf" size={40} color={colors.orange[700]} />
                </View>
                <Text style={styles.weatherWord}>Tugnaw</Text>
                <Text style={styles.weatherTranslation}>Cool season</Text>
                <Text style={styles.weatherPronunciation}>toog-NOW</Text>
              </View>

              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons name="earth" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.weatherWord}>Klima</Text>
                <Text style={styles.weatherTranslation}>Climate</Text>
                <Text style={styles.weatherPronunciation}>KLEE-mah</Text>
              </View>

              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons
                    name="thermometer"
                    size={40}
                    color={colors.orange[700]}
                  />
                </View>
                <Text style={styles.weatherWord}>Temperatura</Text>
                <Text style={styles.weatherTranslation}>Temperature</Text>
                <Text style={styles.weatherPronunciation}>
                  tehm-peh-rah-TOO-rah
                </Text>
              </View>

              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons name="water" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.weatherWord}>Kaumog</Text>
                <Text style={styles.weatherTranslation}>Humidity</Text>
                <Text style={styles.weatherPronunciation}>kah-oo-MOHG</Text>
              </View>
            </View>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons name="sunny" size={24} color={colors.orange[700]} />
              </View>
              <Text style={styles.patternTitle}>Philippine Seasons</Text>
              <Text style={styles.patternText}>
                The Philippines has two main seasons:
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Tag-init (Summer)</Text> -
                  March to May, hot and dry
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Tag-ulan (Rainy)</Text> -
                  June to November, monsoon rains
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Cool months</Text> -
                  December to February, slightly cooler
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Typhoons (bagyo) are common during rainy season
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Planning around weather</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Tourist:</Text>
                <Text style={styles.bisayaText}>
                  Kanus-a ang tag-init dinhi?
                </Text>
                <Text style={styles.englishText}>(When is summer here?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Local:</Text>
                <Text style={styles.bisayaText}>
                  Marso hangtod Mayo. Init kaayo niana.
                </Text>
                <Text style={styles.englishText}>
                  (March to May. Very hot during that time.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Tourist:</Text>
                <Text style={styles.bisayaText}>
                  Ug ang tag-ulan? Daghan ba ug ulan?
                </Text>
                <Text style={styles.englishText}>
                  (And the rainy season? Is there a lot of rain?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Local:</Text>
                <Text style={styles.bisayaText}>
                  Oo, Hunyo hangtod Nobyembre. Naa puy mga bagyo.
                </Text>
                <Text style={styles.englishText}>
                  (Yes, June to November. There are also typhoons.)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Natural Features</Text>
            <Text style={styles.sectionSubtitle}>
              Elements of nature - mga elemento sa kinaiyahan
            </Text>

            <View style={styles.weatherGrid}>
              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons name="sunny" size={40} color={colors.orange[700]} />
                </View>
                <Text style={styles.weatherWord}>Adlaw</Text>
                <Text style={styles.weatherTranslation}>Sun</Text>
                <Text style={styles.weatherPronunciation}>ahd-LOW</Text>
              </View>

              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons name="moon" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.weatherWord}>Bulan</Text>
                <Text style={styles.weatherTranslation}>Moon</Text>
                <Text style={styles.weatherPronunciation}>boo-LAHN</Text>
              </View>

              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons name="star" size={40} color={colors.orange[700]} />
                </View>
                <Text style={styles.weatherWord}>Bituon</Text>
                <Text style={styles.weatherTranslation}>Star</Text>
                <Text style={styles.weatherPronunciation}>bee-too-OHN</Text>
              </View>

              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons name="cloud" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.weatherWord}>Panganod</Text>
                <Text style={styles.weatherTranslation}>Cloud</Text>
                <Text style={styles.weatherPronunciation}>pah-ngah-NOHD</Text>
              </View>

              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons
                    name="color-palette"
                    size={40}
                    color={colors.orange[700]}
                  />
                </View>
                <Text style={styles.weatherWord}>Balangaw</Text>
                <Text style={styles.weatherTranslation}>Rainbow</Text>
                <Text style={styles.weatherPronunciation}>bah-lah-NGOW</Text>
              </View>

              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons
                    name="planet"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.weatherWord}>Langit</Text>
                <Text style={styles.weatherTranslation}>Sky / Heaven</Text>
                <Text style={styles.weatherPronunciation}>lah-NGEET</Text>
              </View>

              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons name="earth" size={40} color={colors.orange[700]} />
                </View>
                <Text style={styles.weatherWord}>Yuta</Text>
                <Text style={styles.weatherTranslation}>
                  Earth / Ground / Soil
                </Text>
                <Text style={styles.weatherPronunciation}>yoo-TAH</Text>
              </View>

              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons
                    name="bonfire"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.weatherWord}>Kalayo</Text>
                <Text style={styles.weatherTranslation}>Fire</Text>
                <Text style={styles.weatherPronunciation}>kah-lah-YOH</Text>
              </View>

              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons name="water" size={40} color={colors.orange[700]} />
                </View>
                <Text style={styles.weatherWord}>Tubig</Text>
                <Text style={styles.weatherTranslation}>Water</Text>
                <Text style={styles.weatherPronunciation}>too-BEEG</Text>
              </View>

              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons name="leaf" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.weatherWord}>Hangin</Text>
                <Text style={styles.weatherTranslation}>Air / Wind</Text>
                <Text style={styles.weatherPronunciation}>hah-NGEEN</Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Plants & Trees</Text>
            <Text style={styles.sectionSubtitle}>Flora - mga tanom</Text>

            <View style={styles.weatherGrid}>
              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons name="leaf" size={40} color={colors.orange[700]} />
                </View>
                <Text style={styles.weatherWord}>Tanom</Text>
                <Text style={styles.weatherTranslation}>Plant</Text>
                <Text style={styles.weatherPronunciation}>tah-NOHM</Text>
              </View>

              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons name="leaf" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.weatherWord}>Kahoy</Text>
                <Text style={styles.weatherTranslation}>Tree / Wood</Text>
                <Text style={styles.weatherPronunciation}>kah-HOY</Text>
              </View>

              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons
                    name="flower"
                    size={40}
                    color={colors.orange[700]}
                  />
                </View>
                <Text style={styles.weatherWord}>Bulak</Text>
                <Text style={styles.weatherTranslation}>Flower</Text>
                <Text style={styles.weatherPronunciation}>boo-LAHK</Text>
              </View>

              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons name="leaf" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.weatherWord}>Dahon</Text>
                <Text style={styles.weatherTranslation}>Leaf</Text>
                <Text style={styles.weatherPronunciation}>dah-HOHN</Text>
              </View>

              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons name="leaf" size={40} color={colors.orange[700]} />
                </View>
                <Text style={styles.weatherWord}>Sanga</Text>
                <Text style={styles.weatherTranslation}>Branch</Text>
                <Text style={styles.weatherPronunciation}>sah-NGAH</Text>
              </View>

              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons
                    name="git-network"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.weatherWord}>Gamut</Text>
                <Text style={styles.weatherTranslation}>Root</Text>
                <Text style={styles.weatherPronunciation}>gah-MOOT</Text>
              </View>

              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons name="leaf" size={40} color={colors.orange[700]} />
                </View>
                <Text style={styles.weatherWord}>Hilamon</Text>
                <Text style={styles.weatherTranslation}>Grass</Text>
                <Text style={styles.weatherPronunciation}>hee-lah-MOHN</Text>
              </View>

              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons
                    name="nutrition"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.weatherWord}>Prutas</Text>
                <Text style={styles.weatherTranslation}>Fruit</Text>
                <Text style={styles.weatherPronunciation}>PROO-tahs</Text>
              </View>

              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons name="leaf" size={40} color={colors.orange[700]} />
                </View>
                <Text style={styles.weatherWord}>Liso</Text>
                <Text style={styles.weatherTranslation}>Seed</Text>
                <Text style={styles.weatherPronunciation}>lee-SOH</Text>
              </View>

              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons name="leaf" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.weatherWord}>Lasang</Text>
                <Text style={styles.weatherTranslation}>Forest / Woods</Text>
                <Text style={styles.weatherPronunciation}>lah-SAHNG</Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>In the garden</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Child:</Text>
                <Text style={styles.bisayaText}>Unsa ning tanom, Mama?</Text>
                <Text style={styles.englishText}>
                  (What&apos;s this plant, Mom?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Mother:</Text>
                <Text style={styles.bisayaText}>
                  Kana rosas. Nindot ang bulak no?
                </Text>
                <Text style={styles.englishText}>
                  (That&apos;s a rose. The flower is beautiful, right?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Child:</Text>
                <Text style={styles.bisayaText}>
                  Oo! Nganong nahulog ang dahon?
                </Text>
                <Text style={styles.englishText}>
                  (Yes! Why did the leaf fall?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Mother:</Text>
                <Text style={styles.bisayaText}>
                  Kay tag-init na. Init kaayo ang panahon.
                </Text>
                <Text style={styles.englishText}>
                  (Because it&apos;s summer now. The weather is very hot.)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Animals & Wildlife</Text>
            <Text style={styles.sectionSubtitle}>Creatures - mga mananap</Text>

            <View style={styles.weatherGrid}>
              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons name="paw" size={40} color={colors.orange[700]} />
                </View>
                <Text style={styles.weatherWord}>Mananap</Text>
                <Text style={styles.weatherTranslation}>Animal</Text>
                <Text style={styles.weatherPronunciation}>mah-nah-NAHP</Text>
              </View>

              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons name="fish" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.weatherWord}>Isda</Text>
                <Text style={styles.weatherTranslation}>Fish</Text>
                <Text style={styles.weatherPronunciation}>ees-DAH</Text>
              </View>

              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons name="fish" size={40} color={colors.orange[700]} />
                </View>
                <Text style={styles.weatherWord}>Langgam</Text>
                <Text style={styles.weatherTranslation}>Bird</Text>
                <Text style={styles.weatherPronunciation}>lahng-GAHM</Text>
              </View>

              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons name="bug" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.weatherWord}>Insekto</Text>
                <Text style={styles.weatherTranslation}>Insect</Text>
                <Text style={styles.weatherPronunciation}>een-SEHK-toh</Text>
              </View>

              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons name="paw" size={40} color={colors.orange[700]} />
                </View>
                <Text style={styles.weatherWord}>Iro</Text>
                <Text style={styles.weatherTranslation}>Dog</Text>
                <Text style={styles.weatherPronunciation}>ee-ROH</Text>
              </View>

              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons name="paw" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.weatherWord}>Iring</Text>
                <Text style={styles.weatherTranslation}>Cat</Text>
                <Text style={styles.weatherPronunciation}>ee-REENG</Text>
              </View>

              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons name="fish" size={40} color={colors.orange[700]} />
                </View>
                <Text style={styles.weatherWord}>Manok</Text>
                <Text style={styles.weatherTranslation}>Chicken</Text>
                <Text style={styles.weatherPronunciation}>mah-NOHK</Text>
              </View>

              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons name="paw" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.weatherWord}>Baboy</Text>
                <Text style={styles.weatherTranslation}>Pig</Text>
                <Text style={styles.weatherPronunciation}>bah-BOY</Text>
              </View>

              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons name="bug" size={40} color={colors.orange[700]} />
                </View>
                <Text style={styles.weatherWord}>Bitin</Text>
                <Text style={styles.weatherTranslation}>Snake</Text>
                <Text style={styles.weatherPronunciation}>bee-TEEN</Text>
              </View>

              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons name="bug" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.weatherWord}>Alibangbang</Text>
                <Text style={styles.weatherTranslation}>Butterfly</Text>
                <Text style={styles.weatherPronunciation}>
                  ah-lee-bahng-BAHNG
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Natural Disasters</Text>
            <Text style={styles.sectionSubtitle}>
              Important safety vocabulary
            </Text>

            <View style={styles.weatherGrid}>
              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons
                    name="thunderstorm"
                    size={40}
                    color={colors.orange[700]}
                  />
                </View>
                <Text style={styles.weatherWord}>Bagyo</Text>
                <Text style={styles.weatherTranslation}>Typhoon</Text>
                <Text style={styles.weatherPronunciation}>bahg-YOH</Text>
              </View>

              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons name="flame" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.weatherWord}>Linog</Text>
                <Text style={styles.weatherTranslation}>Earthquake</Text>
                <Text style={styles.weatherPronunciation}>lee-NOHG</Text>
              </View>

              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons name="water" size={40} color={colors.orange[700]} />
                </View>
                <Text style={styles.weatherWord}>Baha</Text>
                <Text style={styles.weatherTranslation}>Flood</Text>
                <Text style={styles.weatherPronunciation}>bah-HAH</Text>
              </View>

              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons
                    name="trending-down"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.weatherWord}>Pagdulhog</Text>
                <Text style={styles.weatherTranslation}>Landslide</Text>
                <Text style={styles.weatherPronunciation}>pahg-dool-HOHG</Text>
              </View>

              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons
                    name="bonfire"
                    size={40}
                    color={colors.orange[700]}
                  />
                </View>
                <Text style={styles.weatherWord}>Sunog</Text>
                <Text style={styles.weatherTranslation}>Fire (disaster)</Text>
                <Text style={styles.weatherPronunciation}>soo-NOHG</Text>
              </View>

              <View style={styles.weatherCard}>
                <View style={styles.weatherIcon}>
                  <Ionicons name="alert" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.weatherWord}>Peligro</Text>
                <Text style={styles.weatherTranslation}>Danger</Text>
                <Text style={styles.weatherPronunciation}>peh-LEEG-roh</Text>
              </View>
            </View>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons name="warning" size={24} color={colors.orange[700]} />
              </View>
              <Text style={styles.patternTitle}>Weather Safety</Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Typhoon season</Text> -
                  Peak from July to September
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Signal warnings</Text> -
                  Signal #1 (weakest) to Signal #5 (strongest)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Stay informed</Text> -
                  Monitor PAGASA (weather bureau) updates
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Filipinos are resilient and experienced with natural disasters
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Typhoon warning</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Neighbor:</Text>
                <Text style={styles.bisayaText}>Naa bay bagyo nga moabot?</Text>
                <Text style={styles.englishText}>
                  (Is there a typhoon coming?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>
                  Oo, signal number tulo. Kusog ang hangin ug daghan ang ulan.
                </Text>
                <Text style={styles.englishText}>
                  (Yes, signal number three. Strong wind and heavy rain.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Neighbor:</Text>
                <Text style={styles.bisayaText}>
                  Peligro ba kaayo? Kinahanglan ta mag-evacuate?
                </Text>
                <Text style={styles.englishText}>
                  (Is it very dangerous? Do we need to evacuate?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>
                  Tingali. Pamati sa balita ug mag-andam.
                </Text>
                <Text style={styles.englishText}>
                  (Maybe. Listen to the news and be prepared.)
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
                You just learned Bisaya weather and nature vocabulary! Now you
                can:
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Describe weather conditions (init, bugnaw, ulan, dag-om, unos)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Talk about Philippine seasons (tag-init, tag-ulan, tugnaw)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Name natural features (adlaw, bulan, bituon, langit, yuta)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Identify plants and trees (tanom, kahoy, bulak, dahon, sanga)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Talk about animals and wildlife (mananap, isda, langgam,
                  insekto)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Understand natural disaster vocabulary (bagyo, linog, baha,
                  peligro)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Stay safe during Philippine weather events
                </Text>
              </View>
              <Text style={[styles.patternText, { marginTop: 16 }]}>
                Practice describing the weather every day in Bisaya!
              </Text>
            </View>
          </ScrollView>
        </Animated.View>
      </View>
    </View>
  );
}
