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

export default function Lesson15() {
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
    transportGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 12,
      marginBottom: 20,
    },
    transportCard: {
      width: "47%",
      minWidth: 140,
      backgroundColor: isDarkMode
        ? colors.cream[100] + "F5"
        : colors.white[100] + "F5",
      borderRadius: 16,
      padding: 18,
      alignItems: "center",
      borderWidth: 2,
      borderColor: colors.orange[800] + "30",
      shadowColor: colors.orange[800],
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    transportIcon: {
      marginBottom: 12,
    },
    transportWord: {
      fontSize: 22,
      fontWeight: "800",
      color: colors.text[100],
      marginBottom: 6,
      textAlign: "center",
    },
    transportTranslation: {
      fontSize: 14,
      color: colors.text[200],
      textAlign: "center",
      marginBottom: 6,
    },
    transportPronunciation: {
      fontSize: 12,
      color: colors.orange[800],
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
      borderColor: colors.orange[800] + "30",
      shadowColor: colors.orange[800],
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
              <Text style={styles.lessonNumber}>Lesson 15</Text>
              <Text style={styles.headerTitle}>Transportation</Text>
              <Text style={styles.headerDescription}>
                Learn about sakay (vehicles) and how to get around!
              </Text>
            </View>

            <Text style={styles.sectionTitle}>Vehicles & Transport</Text>
            <Text style={styles.sectionSubtitle}>
              Types of sakyanan (vehicles)
            </Text>

            <View style={styles.transportGrid}>
              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Ionicons name="car" size={40} color={colors.orange[800]} />
                </View>
                <Text style={styles.transportWord}>Awto</Text>
                <Text style={styles.transportTranslation}>Car</Text>
                <Text style={styles.transportPronunciation}>ow-TOH</Text>
              </View>

              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Ionicons name="bus" size={40} color={colors.orange[700]} />
                </View>
                <Text style={styles.transportWord}>Bus</Text>
                <Text style={styles.transportTranslation}>Bus</Text>
                <Text style={styles.transportPronunciation}>BOOS</Text>
              </View>

              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Ionicons name="bus" size={40} color={colors.orange[800]} />
                </View>
                <Text style={styles.transportWord}>Jeep</Text>
                <Text style={styles.transportTranslation}>Jeepney</Text>
                <Text style={styles.transportPronunciation}>JEEP</Text>
              </View>

              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Ionicons
                    name="bicycle"
                    size={40}
                    color={colors.orange[700]}
                  />
                </View>
                <Text style={styles.transportWord}>Traysikel</Text>
                <Text style={styles.transportTranslation}>Tricycle</Text>
                <Text style={styles.transportPronunciation}>trye-SEE-kehl</Text>
              </View>

              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Ionicons
                    name="bicycle"
                    size={40}
                    color={colors.orange[800]}
                  />
                </View>
                <Text style={styles.transportWord}>Motorsiklo</Text>
                <Text style={styles.transportTranslation}>Motorcycle</Text>
                <Text style={styles.transportPronunciation}>
                  moh-tohr-SEEK-loh
                </Text>
              </View>

              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Ionicons
                    name="bicycle"
                    size={40}
                    color={colors.orange[700]}
                  />
                </View>
                <Text style={styles.transportWord}>Bisikleta</Text>
                <Text style={styles.transportTranslation}>Bicycle</Text>
                <Text style={styles.transportPronunciation}>
                  bee-seek-LEH-tah
                </Text>
              </View>

              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Ionicons name="boat" size={40} color={colors.orange[800]} />
                </View>
                <Text style={styles.transportWord}>Barko</Text>
                <Text style={styles.transportTranslation}>Ship / Boat</Text>
                <Text style={styles.transportPronunciation}>BAHR-koh</Text>
              </View>

              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Ionicons
                    name="airplane"
                    size={40}
                    color={colors.orange[700]}
                  />
                </View>
                <Text style={styles.transportWord}>Eroplano</Text>
                <Text style={styles.transportTranslation}>Airplane</Text>
                <Text style={styles.transportPronunciation}>
                  eh-roh-PLAH-noh
                </Text>
              </View>

              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Ionicons
                    name="subway"
                    size={40}
                    color={colors.orange[800]}
                  />
                </View>
                <Text style={styles.transportWord}>Tren</Text>
                <Text style={styles.transportTranslation}>Train</Text>
                <Text style={styles.transportPronunciation}>TREHN</Text>
              </View>

              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Ionicons name="car" size={40} color={colors.orange[700]} />
                </View>
                <Text style={styles.transportWord}>Taxi</Text>
                <Text style={styles.transportTranslation}>Taxi</Text>
                <Text style={styles.transportPronunciation}>TAHK-see</Text>
              </View>
            </View>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons name="bus" size={24} color={colors.orange[800]} />
              </View>
              <Text style={styles.patternTitle}>The Jeepney</Text>
              <Text style={styles.patternText}>
                The iconic Filipino vehicle - colorful and essential!
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>History</Text> - Modified
                  from US military jeeps after WWII
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>How to ride</Text> - Tell
                  driver your destination, pass fare forward
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Routes</Text> - Fixed
                  routes, look for destination signs
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Say &quot;Para!&quot; or tap coins when you want to get off
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Taking a jeepney</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Passenger:</Text>
                <Text style={styles.bisayaText}>Moagi ba mo sa SM?</Text>
                <Text style={styles.englishText}>(Do you pass by SM?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Driver:</Text>
                <Text style={styles.bisayaText}>Oo, sakay!</Text>
                <Text style={styles.englishText}>(Yes, get in!)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Passenger:</Text>
                <Text style={styles.bisayaText}>
                  Pila ang pleti paingon sa SM?
                </Text>
                <Text style={styles.englishText}>
                  (How much is the fare to SM?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Driver:</Text>
                <Text style={styles.bisayaText}>Dose pesos lang.</Text>
                <Text style={styles.englishText}>(Just twelve pesos.)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Passenger (later):</Text>
                <Text style={styles.bisayaText}>Para sa SM!</Text>
                <Text style={styles.englishText}>(Stop at SM!)</Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Transportation Actions</Text>
            <Text style={styles.sectionSubtitle}>Verbs for getting around</Text>

            <View style={styles.transportGrid}>
              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Ionicons name="enter" size={40} color={colors.orange[800]} />
                </View>
                <Text style={styles.transportWord}>Sakay</Text>
                <Text style={styles.transportTranslation}>
                  To ride / Get on
                </Text>
                <Text style={styles.transportPronunciation}>sah-KYE</Text>
              </View>

              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Ionicons name="exit" size={40} color={colors.orange[700]} />
                </View>
                <Text style={styles.transportWord}>Kanaog</Text>
                <Text style={styles.transportTranslation}>
                  To get off / Descend
                </Text>
                <Text style={styles.transportPronunciation}>kah-nah-OHG</Text>
              </View>

              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Ionicons
                    name="car-sport"
                    size={40}
                    color={colors.orange[800]}
                  />
                </View>
                <Text style={styles.transportWord}>Maneho</Text>
                <Text style={styles.transportTranslation}>To drive</Text>
                <Text style={styles.transportPronunciation}>mah-neh-HOH</Text>
              </View>

              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Ionicons
                    name="stop-circle"
                    size={40}
                    color={colors.orange[700]}
                  />
                </View>
                <Text style={styles.transportWord}>Para</Text>
                <Text style={styles.transportTranslation}>Stop!</Text>
                <Text style={styles.transportPronunciation}>pah-RAH</Text>
              </View>

              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Ionicons name="time" size={40} color={colors.orange[800]} />
                </View>
                <Text style={styles.transportWord}>Paghulat</Text>
                <Text style={styles.transportTranslation}>To wait</Text>
                <Text style={styles.transportPronunciation}>pahg-hoo-LAHT</Text>
              </View>

              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Ionicons name="walk" size={40} color={colors.orange[700]} />
                </View>
                <Text style={styles.transportWord}>Lakaw</Text>
                <Text style={styles.transportTranslation}>To walk</Text>
                <Text style={styles.transportPronunciation}>lah-KOW</Text>
              </View>

              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Ionicons
                    name="speedometer"
                    size={40}
                    color={colors.orange[800]}
                  />
                </View>
                <Text style={styles.transportWord}>Dagan</Text>
                <Text style={styles.transportTranslation}>To run</Text>
                <Text style={styles.transportPronunciation}>dah-GAHN</Text>
              </View>

              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Ionicons
                    name="location"
                    size={40}
                    color={colors.orange[700]}
                  />
                </View>
                <Text style={styles.transportWord}>Adto</Text>
                <Text style={styles.transportTranslation}>To go</Text>
                <Text style={styles.transportPronunciation}>ahd-TOH</Text>
              </View>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>
                Asking if transport goes somewhere
              </Text>
              <Text style={styles.bisayaText}>Moagi ba mo sa [place]?</Text>
              <Text style={styles.englishText}>Do you pass by [place]?</Text>
              <Text style={styles.pronunciationText}>
                moh-ah-GEE bah moh sah [place]
              </Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Essential question before getting on any public transport!
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Travel & Journey</Text>
            <Text style={styles.sectionSubtitle}>
              Words about travel - pagbiyahe
            </Text>

            <View style={styles.transportGrid}>
              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Ionicons
                    name="location"
                    size={40}
                    color={colors.orange[800]}
                  />
                </View>
                <Text style={styles.transportWord}>Biyahe</Text>
                <Text style={styles.transportTranslation}>Trip / Journey</Text>
                <Text style={styles.transportPronunciation}>bee-YAH-heh</Text>
              </View>

              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Ionicons name="cash" size={40} color={colors.orange[700]} />
                </View>
                <Text style={styles.transportWord}>Pleti</Text>
                <Text style={styles.transportTranslation}>Fare</Text>
                <Text style={styles.transportPronunciation}>PLEH-tee</Text>
              </View>

              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Ionicons
                    name="document"
                    size={40}
                    color={colors.orange[800]}
                  />
                </View>
                <Text style={styles.transportWord}>Tiket</Text>
                <Text style={styles.transportTranslation}>Ticket</Text>
                <Text style={styles.transportPronunciation}>TEE-keht</Text>
              </View>

              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Ionicons
                    name="business"
                    size={40}
                    color={colors.orange[700]}
                  />
                </View>
                <Text style={styles.transportWord}>Terminal</Text>
                <Text style={styles.transportTranslation}>Terminal</Text>
                <Text style={styles.transportPronunciation}>tehr-mee-NAHL</Text>
              </View>

              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Ionicons name="stop" size={40} color={colors.orange[800]} />
                </View>
                <Text style={styles.transportWord}>Paradahan</Text>
                <Text style={styles.transportTranslation}>Stop / Station</Text>
                <Text style={styles.transportPronunciation}>
                  pah-rah-dah-HAHN
                </Text>
              </View>

              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Ionicons name="map" size={40} color={colors.orange[700]} />
                </View>
                <Text style={styles.transportWord}>Ruta</Text>
                <Text style={styles.transportTranslation}>Route</Text>
                <Text style={styles.transportPronunciation}>ROO-tah</Text>
              </View>

              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Ionicons
                    name="navigate"
                    size={40}
                    color={colors.orange[800]}
                  />
                </View>
                <Text style={styles.transportWord}>Direksyon</Text>
                <Text style={styles.transportTranslation}>Direction</Text>
                <Text style={styles.transportPronunciation}>
                  dee-rehk-SYOHN
                </Text>
              </View>

              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Ionicons
                    name="trail-sign"
                    size={40}
                    color={colors.orange[700]}
                  />
                </View>
                <Text style={styles.transportWord}>Dalan</Text>
                <Text style={styles.transportTranslation}>
                  Road / Street / Path
                </Text>
                <Text style={styles.transportPronunciation}>dah-LAHN</Text>
              </View>

              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Ionicons
                    name="navigate-circle"
                    size={40}
                    color={colors.orange[800]}
                  />
                </View>
                <Text style={styles.transportWord}>Lantaw</Text>
                <Text style={styles.transportTranslation}>Bridge</Text>
                <Text style={styles.transportPronunciation}>lahn-TOW</Text>
              </View>

              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Ionicons name="timer" size={40} color={colors.orange[700]} />
                </View>
                <Text style={styles.transportWord}>Trapiko</Text>
                <Text style={styles.transportTranslation}>Traffic</Text>
                <Text style={styles.transportPronunciation}>trah-PEE-koh</Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>At the bus terminal</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Passenger:</Text>
                <Text style={styles.bisayaText}>
                  Naa bay bus paingon sa Dumaguete?
                </Text>
                <Text style={styles.englishText}>
                  (Is there a bus going to Dumaguete?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Staff:</Text>
                <Text style={styles.bisayaText}>Naa. Mobiya alas tres.</Text>
                <Text style={styles.englishText}>
                  (Yes. It leaves at 3 o&apos;clock.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Passenger:</Text>
                <Text style={styles.bisayaText}>Pila ang tiket?</Text>
                <Text style={styles.englishText}>
                  (How much is the ticket?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Staff:</Text>
                <Text style={styles.bisayaText}>
                  Tres siyentos singkwenta. Dugay ba ang biyahe?
                </Text>
                <Text style={styles.englishText}>
                  (Three hundred fifty. Is the trip long?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Staff:</Text>
                <Text style={styles.bisayaText}>
                  Mga upat ka oras kon walay trapiko.
                </Text>
                <Text style={styles.englishText}>
                  (About four hours if there&apos;s no traffic.)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Giving Directions</Text>
            <Text style={styles.sectionSubtitle}>
              Essential direction vocabulary
            </Text>

            <View style={styles.transportGrid}>
              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Ionicons
                    name="arrow-forward"
                    size={40}
                    color={colors.orange[800]}
                  />
                </View>
                <Text style={styles.transportWord}>Tuo</Text>
                <Text style={styles.transportTranslation}>Right</Text>
                <Text style={styles.transportPronunciation}>too-OH</Text>
              </View>

              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Ionicons
                    name="arrow-back"
                    size={40}
                    color={colors.orange[700]}
                  />
                </View>
                <Text style={styles.transportWord}>Wala</Text>
                <Text style={styles.transportTranslation}>Left</Text>
                <Text style={styles.transportPronunciation}>wah-LAH</Text>
              </View>

              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Ionicons
                    name="arrow-up"
                    size={40}
                    color={colors.orange[800]}
                  />
                </View>
                <Text style={styles.transportWord}>Diretso</Text>
                <Text style={styles.transportTranslation}>Straight</Text>
                <Text style={styles.transportPronunciation}>dee-REHT-soh</Text>
              </View>

              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Ionicons
                    name="return-up-back"
                    size={40}
                    color={colors.orange[700]}
                  />
                </View>
                <Text style={styles.transportWord}>Balik</Text>
                <Text style={styles.transportTranslation}>
                  Go back / Return
                </Text>
                <Text style={styles.transportPronunciation}>bah-LEEK</Text>
              </View>

              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Ionicons
                    name="navigate"
                    size={40}
                    color={colors.orange[800]}
                  />
                </View>
                <Text style={styles.transportWord}>Duol</Text>
                <Text style={styles.transportTranslation}>Near</Text>
                <Text style={styles.transportPronunciation}>doo-OHL</Text>
              </View>

              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Ionicons
                    name="navigate-outline"
                    size={40}
                    color={colors.orange[700]}
                  />
                </View>
                <Text style={styles.transportWord}>Layo</Text>
                <Text style={styles.transportTranslation}>Far</Text>
                <Text style={styles.transportPronunciation}>lah-YOH</Text>
              </View>

              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Ionicons
                    name="arrow-up"
                    size={40}
                    color={colors.orange[800]}
                  />
                </View>
                <Text style={styles.transportWord}>Taas</Text>
                <Text style={styles.transportTranslation}>Up / Above</Text>
                <Text style={styles.transportPronunciation}>tah-AHS</Text>
              </View>

              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Ionicons
                    name="arrow-down"
                    size={40}
                    color={colors.orange[700]}
                  />
                </View>
                <Text style={styles.transportWord}>Ubos</Text>
                <Text style={styles.transportTranslation}>Down / Below</Text>
                <Text style={styles.transportPronunciation}>oo-BOHS</Text>
              </View>

              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Ionicons
                    name="arrow-forward"
                    size={40}
                    color={colors.orange[800]}
                  />
                </View>
                <Text style={styles.transportWord}>Atubangan</Text>
                <Text style={styles.transportTranslation}>In front</Text>
                <Text style={styles.transportPronunciation}>
                  ah-too-bahng-AHN
                </Text>
              </View>

              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Ionicons
                    name="arrow-back"
                    size={40}
                    color={colors.orange[700]}
                  />
                </View>
                <Text style={styles.transportWord}>Luyo</Text>
                <Text style={styles.transportTranslation}>Behind</Text>
                <Text style={styles.transportPronunciation}>loo-YOH</Text>
              </View>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Asking for directions</Text>
              <Text style={styles.bisayaText}>Asa ang [place]?</Text>
              <Text style={styles.englishText}>Where is [place]?</Text>
              <Text style={styles.pronunciationText}>ah-SAH ahng [place]</Text>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>
                Asking how to get somewhere
              </Text>
              <Text style={styles.bisayaText}>Unsaon pag-adto sa [place]?</Text>
              <Text style={styles.englishText}>How do I get to [place]?</Text>
              <Text style={styles.pronunciationText}>
                oon-sah-OHN pahg-ahd-TOH sah [place]
              </Text>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Asking for directions</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Tourist:</Text>
                <Text style={styles.bisayaText}>
                  Pasensya, asa ang Ayala Mall?
                </Text>
                <Text style={styles.englishText}>
                  (Excuse me, where is Ayala Mall?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Local:</Text>
                <Text style={styles.bisayaText}>
                  Diretso lang, dayon liko sa tuo. Duol ra.
                </Text>
                <Text style={styles.englishText}>
                  (Just straight, then turn right. It&apos;s near.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Tourist:</Text>
                <Text style={styles.bisayaText}>
                  Makalakaw ba ko o kinahanglan ko ug sakay?
                </Text>
                <Text style={styles.englishText}>
                  (Can I walk or do I need to ride?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Local:</Text>
                <Text style={styles.bisayaText}>
                  Pwede ra makalakaw. Lima ka minutos lang.
                </Text>
                <Text style={styles.englishText}>
                  (You can walk. Just five minutes.)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>
              Ride-Hailing & Modern Transport
            </Text>
            <Text style={styles.sectionSubtitle}>
              Modern ways to get around
            </Text>

            <View style={styles.transportGrid}>
              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Ionicons
                    name="phone-portrait"
                    size={40}
                    color={colors.orange[800]}
                  />
                </View>
                <Text style={styles.transportWord}>Grab</Text>
                <Text style={styles.transportTranslation}>Grab (ride app)</Text>
                <Text style={styles.transportPronunciation}>GRAHB</Text>
              </View>

              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Ionicons
                    name="bicycle"
                    size={40}
                    color={colors.orange[700]}
                  />
                </View>
                <Text style={styles.transportWord}>Habal-habal</Text>
                <Text style={styles.transportTranslation}>Motorcycle taxi</Text>
                <Text style={styles.transportPronunciation}>
                  hah-BAHL-hah-BAHL
                </Text>
              </View>

              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Ionicons name="car" size={40} color={colors.orange[800]} />
                </View>
                <Text style={styles.transportWord}>V-hire</Text>
                <Text style={styles.transportTranslation}>Van for hire</Text>
                <Text style={styles.transportPronunciation}>VEE-hire</Text>
              </View>

              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Ionicons
                    name="bicycle"
                    size={40}
                    color={colors.orange[700]}
                  />
                </View>
                <Text style={styles.transportWord}>Angkas</Text>
                <Text style={styles.transportTranslation}>
                  Motorcycle ride app
                </Text>
                <Text style={styles.transportPronunciation}>ahng-KAHS</Text>
              </View>

              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Ionicons name="car" size={40} color={colors.orange[800]} />
                </View>
                <Text style={styles.transportWord}>Pedicab</Text>
                <Text style={styles.transportTranslation}>
                  Bicycle rickshaw
                </Text>
                <Text style={styles.transportPronunciation}>PEH-dee-kahb</Text>
              </View>

              <View style={styles.transportCard}>
                <View style={styles.transportIcon}>
                  <Ionicons name="boat" size={40} color={colors.orange[700]} />
                </View>
                <Text style={styles.transportWord}>Bangka</Text>
                <Text style={styles.transportTranslation}>Outrigger boat</Text>
                <Text style={styles.transportPronunciation}>bahng-KAH</Text>
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
              <Text style={styles.patternTitle}>Transportation Tips</Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Always ask first</Text> -
                  Confirm the vehicle goes to your destination
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Have small bills</Text> -
                  Drivers often don&apos;t have change
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Traffic is real</Text> -
                  Allow extra time during rush hours
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Grab is popular</Text> -
                  Safer and more comfortable than street hails
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Taking a tricycle</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Passenger:</Text>
                <Text style={styles.bisayaText}>
                  Kuya, libre ka? Adto ko sa Carbon Market.
                </Text>
                <Text style={styles.englishText}>
                  (Brother, are you available? I&apos;m going to Carbon Market.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Driver:</Text>
                <Text style={styles.bisayaText}>
                  Oo, sakay. Pila man ang imong i-offer?
                </Text>
                <Text style={styles.englishText}>
                  (Yes, get in. How much will you offer?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Passenger:</Text>
                <Text style={styles.bisayaText}>Singkwenta pesos okay na?</Text>
                <Text style={styles.englishText}>(Is fifty pesos okay?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Driver:</Text>
                <Text style={styles.bisayaText}>
                  Sige, pero trapiko karon. Dugay siguro.
                </Text>
                <Text style={styles.englishText}>
                  (Okay, but there&apos;s traffic now. It might take a while.)
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
              <Text style={styles.patternTitle}>Maayo Kaayo! You Did It!</Text>
              <Text style={styles.patternText}>
                You just learned Bisaya transportation vocabulary! Now you can:
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Name different vehicles (jeep, traysikel, bus, awto, barko)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Use transportation verbs (sakay, kanaog, maneho, para)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Talk about trips and journeys (biyahe, pleti, tiket, terminal)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Give and understand directions (tuo, wala, diretso, duol,
                  layo)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Navigate Filipino public transportation
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Understand jeepney culture and etiquette
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Use modern ride-hailing services in Bisaya
                </Text>
              </View>
              <Text style={[styles.patternText, { marginTop: 16 }]}>
                Safe travels! Practice your transportation Bisaya on every trip!
              </Text>
            </View>
          </ScrollView>
        </Animated.View>
      </View>
    </View>
  );
}
