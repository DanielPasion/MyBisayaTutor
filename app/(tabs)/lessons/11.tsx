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

export default function Lesson11() {
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
      borderColor: colors.orange[600] + "40",
      shadowColor: colors.orange[600],
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.15,
      shadowRadius: 12,
      elevation: 6,
      alignItems: "center",
    },
    lessonNumber: {
      fontSize: 13,
      fontWeight: "800",
      color: colors.orange[600],
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
      borderColor: colors.orange[600] + "30",
      shadowColor: colors.orange[600],
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
      color: colors.orange[600],
      marginTop: 4,
      fontWeight: "600",
      textAlign: "center",
    },
    patternBox: {
      backgroundColor: colors.orange[600] + "18",
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
      color: colors.orange[600],
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
      backgroundColor: colors.orange[600] + "20",
      padding: 20,
      borderRadius: 16,
      marginVertical: 16,
      borderWidth: 2,
      borderColor: colors.orange[600] + "40",
      width: "100%",
    },
    highlightText: {
      fontSize: 18,
      fontWeight: "700",
      color: colors.orange[700],
      textAlign: "center",
      lineHeight: 26,
    },
    foodGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 12,
      marginBottom: 20,
    },
    foodCard: {
      width: "47%",
      minWidth: 140,
      backgroundColor: isDarkMode
        ? colors.cream[100] + "F5"
        : colors.white[100] + "F5",
      borderRadius: 16,
      padding: 18,
      alignItems: "center",
      borderWidth: 2,
      borderColor: colors.orange[600] + "30",
      shadowColor: colors.orange[600],
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    foodIcon: {
      marginBottom: 12,
    },
    foodWord: {
      fontSize: 22,
      fontWeight: "800",
      color: colors.text[100],
      marginBottom: 6,
      textAlign: "center",
    },
    foodTranslation: {
      fontSize: 14,
      color: colors.text[200],
      textAlign: "center",
      marginBottom: 6,
    },
    foodPronunciation: {
      fontSize: 12,
      color: colors.orange[600],
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
      borderColor: colors.orange[600] + "30",
      shadowColor: colors.orange[600],
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
      backgroundColor: colors.orange[600] + "15",
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
      backgroundColor: colors.orange[600] + "20",
      padding: 28,
      borderRadius: 24,
      marginTop: 20,
      marginBottom: 20,
      borderWidth: 2,
      borderColor: colors.orange[600] + "40",
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
              <Text style={styles.lessonNumber}>Lesson 11</Text>
              <Text style={styles.headerTitle}>Food & Eating</Text>
              <Text style={styles.headerDescription}>
                Learn about Filipino food vocabulary - kaon ta! (Let&apos;s
                eat!)
              </Text>
            </View>

            <Text style={styles.sectionTitle}>Basic Foods & Staples</Text>
            <Text style={styles.sectionSubtitle}>
              Essential food items - mga kinabang
            </Text>

            <View style={styles.foodGrid}>
              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons
                    name="nutrition"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.foodWord}>Kan-on</Text>
                <Text style={styles.foodTranslation}>Rice (cooked)</Text>
                <Text style={styles.foodPronunciation}>kahn-OHN</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons name="egg" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.foodWord}>Bugas</Text>
                <Text style={styles.foodTranslation}>Rice (uncooked)</Text>
                <Text style={styles.foodPronunciation}>boo-GAHS</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons
                    name="fast-food"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.foodWord}>Pan</Text>
                <Text style={styles.foodTranslation}>Bread</Text>
                <Text style={styles.foodPronunciation}>PAHN</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons
                    name="restaurant"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.foodWord}>Itlog</Text>
                <Text style={styles.foodTranslation}>Egg</Text>
                <Text style={styles.foodPronunciation}>eet-LOHG</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons name="fish" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.foodWord}>Isda</Text>
                <Text style={styles.foodTranslation}>Fish</Text>
                <Text style={styles.foodPronunciation}>ees-DAH</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons
                    name="restaurant"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.foodWord}>Karne</Text>
                <Text style={styles.foodTranslation}>Meat</Text>
                <Text style={styles.foodPronunciation}>kahr-NEH</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons
                    name="nutrition"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.foodWord}>Manok</Text>
                <Text style={styles.foodTranslation}>Chicken</Text>
                <Text style={styles.foodPronunciation}>mah-NOHK</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons
                    name="restaurant"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.foodWord}>Baboy</Text>
                <Text style={styles.foodTranslation}>Pork</Text>
                <Text style={styles.foodPronunciation}>bah-BOY</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons name="leaf" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.foodWord}>Utanon</Text>
                <Text style={styles.foodTranslation}>Vegetables</Text>
                <Text style={styles.foodPronunciation}>oo-tah-NOHN</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons
                    name="nutrition"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.foodWord}>Prutas</Text>
                <Text style={styles.foodTranslation}>Fruits</Text>
                <Text style={styles.foodPronunciation}>PROO-tahs</Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>At the market</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Vendor:</Text>
                <Text style={styles.bisayaText}>
                  Unsa imong paliton? Naa koy presko nga isda!
                </Text>
                <Text style={styles.englishText}>
                  (What will you buy? I have fresh fish!)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>
                  Pila ang isda? Ug naa kay manok?
                </Text>
                <Text style={styles.englishText}>
                  (How much is the fish? And do you have chicken?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Vendor:</Text>
                <Text style={styles.bisayaText}>
                  Dos baynte singko ang isda. Naa pud koy manok.
                </Text>
                <Text style={styles.englishText}>
                  (The fish is 225. I also have chicken.)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Filipino Dishes</Text>
            <Text style={styles.sectionSubtitle}>
              Popular Filipino food - lutong Pinoy
            </Text>

            <View style={styles.foodGrid}>
              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons
                    name="restaurant"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.foodWord}>Adobo</Text>
                <Text style={styles.foodTranslation}>
                  Adobo (meat in soy sauce)
                </Text>
                <Text style={styles.foodPronunciation}>ah-DOH-boh</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons
                    name="restaurant"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.foodWord}>Sinigang</Text>
                <Text style={styles.foodTranslation}>Sour soup</Text>
                <Text style={styles.foodPronunciation}>see-nee-GAHNG</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons
                    name="restaurant"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.foodWord}>Tinola</Text>
                <Text style={styles.foodTranslation}>Chicken ginger soup</Text>
                <Text style={styles.foodPronunciation}>tee-NOH-lah</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons
                    name="restaurant"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.foodWord}>Lechon</Text>
                <Text style={styles.foodTranslation}>Roasted pig</Text>
                <Text style={styles.foodPronunciation}>leh-CHOHN</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons
                    name="restaurant"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.foodWord}>Kinilaw</Text>
                <Text style={styles.foodTranslation}>Raw fish in vinegar</Text>
                <Text style={styles.foodPronunciation}>kee-nee-LOW</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons
                    name="restaurant"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.foodWord}>Pancit</Text>
                <Text style={styles.foodTranslation}>Noodles</Text>
                <Text style={styles.foodPronunciation}>pahn-SEET</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons
                    name="restaurant"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.foodWord}>Lumpia</Text>
                <Text style={styles.foodTranslation}>Spring rolls</Text>
                <Text style={styles.foodPronunciation}>loom-PYAH</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons
                    name="restaurant"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.foodWord}>Puso</Text>
                <Text style={styles.foodTranslation}>Hanging rice</Text>
                <Text style={styles.foodPronunciation}>poo-SOH</Text>
              </View>
            </View>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons name="heart" size={24} color={colors.orange[600]} />
              </View>
              <Text style={styles.patternTitle}>Cebuano Food Culture</Text>
              <Text style={styles.patternText}>
                Food is central to Filipino culture and hospitality:
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Puso</Text> - Hanging rice
                  wrapped in coconut leaves, perfect with BBQ
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Lechon</Text> - Star of
                  celebrations, Cebu&apos;s lechon is world-famous
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Kinilaw</Text> - Similar
                  to ceviche, fresh raw fish in vinegar
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>At a restaurant</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Waiter:</Text>
                <Text style={styles.bisayaText}>
                  Maayong hapon! Unsa imong order?
                </Text>
                <Text style={styles.englishText}>
                  (Good afternoon! What&apos;s your order?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>
                  Gusto nako ug adobo ug puso.
                </Text>
                <Text style={styles.englishText}>(I want adobo and puso.)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Waiter:</Text>
                <Text style={styles.bisayaText}>
                  Sige, ug unsa pa? Gusto ba nimo ug sabaw?
                </Text>
                <Text style={styles.englishText}>
                  (Okay, and what else? Do you want soup?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>Oo, sinigang palihog.</Text>
                <Text style={styles.englishText}>(Yes, sinigang please.)</Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Drinks & Beverages</Text>
            <Text style={styles.sectionSubtitle}>
              Things to drink - mga ilimnon
            </Text>

            <View style={styles.foodGrid}>
              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons name="water" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.foodWord}>Tubig</Text>
                <Text style={styles.foodTranslation}>Water</Text>
                <Text style={styles.foodPronunciation}>too-BEEG</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons name="cafe" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.foodWord}>Kape</Text>
                <Text style={styles.foodTranslation}>Coffee</Text>
                <Text style={styles.foodPronunciation}>kah-PEH</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons name="cafe" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.foodWord}>Tsa</Text>
                <Text style={styles.foodTranslation}>Tea</Text>
                <Text style={styles.foodPronunciation}>CHAH</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons
                    name="nutrition"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.foodWord}>Gatas</Text>
                <Text style={styles.foodTranslation}>Milk</Text>
                <Text style={styles.foodPronunciation}>gah-TAHS</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons name="wine" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.foodWord}>Juice</Text>
                <Text style={styles.foodTranslation}>Juice</Text>
                <Text style={styles.foodPronunciation}>JOOS</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons name="beer" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.foodWord}>Serbesa</Text>
                <Text style={styles.foodTranslation}>Beer</Text>
                <Text style={styles.foodPronunciation}>sehr-BEH-sah</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons name="water" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.foodWord}>Buko juice</Text>
                <Text style={styles.foodTranslation}>Coconut water</Text>
                <Text style={styles.foodPronunciation}>BOO-koh joos</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons
                    name="ice-cream"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.foodWord}>Softdrinks</Text>
                <Text style={styles.foodTranslation}>Soda / Soft drinks</Text>
                <Text style={styles.foodPronunciation}>SOHFT-dreengks</Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Ordering drinks</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Server:</Text>
                <Text style={styles.bisayaText}>
                  Unsa imong gusto nga ilimnon?
                </Text>
                <Text style={styles.englishText}>
                  (What drink do you want?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>
                  Tubig lang. Bugnaw palihog.
                </Text>
                <Text style={styles.englishText}>
                  (Just water. Cold please.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Friend:</Text>
                <Text style={styles.bisayaText}>
                  Ako, gusto ko ug buko juice.
                </Text>
                <Text style={styles.englishText}>
                  (Me, I want coconut water.)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Fruits & Vegetables</Text>
            <Text style={styles.sectionSubtitle}>
              Fresh produce - presko nga prutas ug utanon
            </Text>

            <View style={styles.foodGrid}>
              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons name="leaf" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.foodWord}>Saging</Text>
                <Text style={styles.foodTranslation}>Banana</Text>
                <Text style={styles.foodPronunciation}>sah-GEENG</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons
                    name="nutrition"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.foodWord}>Mangga</Text>
                <Text style={styles.foodTranslation}>Mango</Text>
                <Text style={styles.foodPronunciation}>mahng-GAH</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons
                    name="nutrition"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.foodWord}>Pinya</Text>
                <Text style={styles.foodTranslation}>Pineapple</Text>
                <Text style={styles.foodPronunciation}>peen-YAH</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons name="leaf" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.foodWord}>Pakwan</Text>
                <Text style={styles.foodTranslation}>Watermelon</Text>
                <Text style={styles.foodPronunciation}>pahk-WAHN</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons
                    name="nutrition"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.foodWord}>Papaya</Text>
                <Text style={styles.foodTranslation}>Papaya</Text>
                <Text style={styles.foodPronunciation}>pah-PAH-yah</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons name="leaf" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.foodWord}>Kamatis</Text>
                <Text style={styles.foodTranslation}>Tomato</Text>
                <Text style={styles.foodPronunciation}>kah-mah-TEES</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons name="leaf" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.foodWord}>Sibuyas</Text>
                <Text style={styles.foodTranslation}>Onion</Text>
                <Text style={styles.foodPronunciation}>see-BOO-yahs</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons
                    name="nutrition"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.foodWord}>Luy-a</Text>
                <Text style={styles.foodTranslation}>Ginger</Text>
                <Text style={styles.foodPronunciation}>loo-YAH</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons name="leaf" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.foodWord}>Patatas</Text>
                <Text style={styles.foodTranslation}>Potato</Text>
                <Text style={styles.foodPronunciation}>pah-tah-TAHS</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons
                    name="nutrition"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.foodWord}>Kalabasa</Text>
                <Text style={styles.foodTranslation}>Squash</Text>
                <Text style={styles.foodPronunciation}>kah-lah-BAH-sah</Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Snacks & Desserts</Text>
            <Text style={styles.sectionSubtitle}>
              Sweet treats - mga kaunon
            </Text>

            <View style={styles.foodGrid}>
              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons
                    name="ice-cream"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.foodWord}>Halo-halo</Text>
                <Text style={styles.foodTranslation}>
                  Mixed dessert with ice
                </Text>
                <Text style={styles.foodPronunciation}>hah-LOH-hah-LOH</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons
                    name="nutrition"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.foodWord}>Bibingka</Text>
                <Text style={styles.foodTranslation}>Rice cake</Text>
                <Text style={styles.foodPronunciation}>bee-beeng-KAH</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons
                    name="nutrition"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.foodWord}>Puto</Text>
                <Text style={styles.foodTranslation}>Steamed rice cake</Text>
                <Text style={styles.foodPronunciation}>poo-TOH</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons
                    name="ice-cream"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.foodWord}>Dulse</Text>
                <Text style={styles.foodTranslation}>Candy / Sweets</Text>
                <Text style={styles.foodPronunciation}>DOOL-seh</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons
                    name="fast-food"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.foodWord}>Biskwit</Text>
                <Text style={styles.foodTranslation}>Biscuit / Cookie</Text>
                <Text style={styles.foodPronunciation}>bees-KWEET</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons
                    name="nutrition"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.foodWord}>Budbod</Text>
                <Text style={styles.foodTranslation}>Sweet rice cake</Text>
                <Text style={styles.foodPronunciation}>bood-BOHD</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons
                    name="ice-cream"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.foodWord}>Ice cream</Text>
                <Text style={styles.foodTranslation}>Ice cream</Text>
                <Text style={styles.foodPronunciation}>ICE kreem</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons
                    name="nutrition"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.foodWord}>Mais</Text>
                <Text style={styles.foodTranslation}>Corn</Text>
                <Text style={styles.foodPronunciation}>mah-EESS</Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Eating Expressions</Text>
            <Text style={styles.sectionSubtitle}>
              Common phrases about food
            </Text>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Inviting someone to eat</Text>
              <Text style={styles.bisayaText}>Kaon ta!</Text>
              <Text style={styles.englishText}>Let&apos;s eat!</Text>
              <Text style={styles.pronunciationText}>kah-OHN tah</Text>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Asking if hungry</Text>
              <Text style={styles.bisayaText}>Gutom ka na ba?</Text>
              <Text style={styles.englishText}>Are you hungry already?</Text>
              <Text style={styles.pronunciationText}>goo-TOHM kah nah bah</Text>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>
                Saying you&apos;re hungry
              </Text>
              <Text style={styles.bisayaText}>Gutom na ko.</Text>
              <Text style={styles.englishText}>I&apos;m hungry now.</Text>
              <Text style={styles.pronunciationText}>goo-TOHM nah koh</Text>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>
                Saying you&apos;re thirsty
              </Text>
              <Text style={styles.bisayaText}>Uhaw ko.</Text>
              <Text style={styles.englishText}>I&apos;m thirsty.</Text>
              <Text style={styles.pronunciationText}>oo-HOW koh</Text>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Saying you&apos;re full</Text>
              <Text style={styles.bisayaText}>Busog na ko.</Text>
              <Text style={styles.englishText}>I&apos;m full now.</Text>
              <Text style={styles.pronunciationText}>boo-SOHG nah koh</Text>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>
                Saying it&apos;s delicious
              </Text>
              <Text style={styles.bisayaText}>Lami kaayo!</Text>
              <Text style={styles.englishText}>It&apos;s very delicious!</Text>
              <Text style={styles.pronunciationText}>lah-MEE kah-AH-yoh</Text>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>
                Asking what someone wants to eat
              </Text>
              <Text style={styles.bisayaText}>Unsa imong gusto nga kaon?</Text>
              <Text style={styles.englishText}>What do you want to eat?</Text>
              <Text style={styles.pronunciationText}>
                oon-SAH ee-MOHNG GOOS-toh ngah kah-OHN
              </Text>
            </View>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons
                  name="restaurant"
                  size={24}
                  color={colors.orange[600]}
                />
              </View>
              <Text style={styles.patternTitle}>Filipino Meal Culture</Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Merienda</Text> -
                  Afternoon snack, very important in Filipino culture
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Kamayan</Text> - Eating
                  with hands, traditional and common
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Kain tayo</Text> - Always
                  offered to guests, even if you just ate
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Rice is eaten at almost every meal, including breakfast
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Family dinner</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Mother:</Text>
                <Text style={styles.bisayaText}>
                  Kaon na! Anaa na ang pagkaon sa lamesa.
                </Text>
                <Text style={styles.englishText}>
                  (Let&apos;s eat! The food is already on the table.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Child:</Text>
                <Text style={styles.bisayaText}>Unsa ang sud-an?</Text>
                <Text style={styles.englishText}>
                  (What&apos;s the viand/dish?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Mother:</Text>
                <Text style={styles.bisayaText}>
                  Pritong isda ug tinola. Lami kaayo!
                </Text>
                <Text style={styles.englishText}>
                  (Fried fish and tinola. Very delicious!)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Child:</Text>
                <Text style={styles.bisayaText}>Nindot! Gutom kaayo ko!</Text>
                <Text style={styles.englishText}>
                  (Great! I&apos;m very hungry!)
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>After the meal</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Host:</Text>
                <Text style={styles.bisayaText}>Busog na ka?</Text>
                <Text style={styles.englishText}>(Are you full?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Guest:</Text>
                <Text style={styles.bisayaText}>
                  Oo, busog na kaayo ko. Salamat! Lami kaayo ang pagkaon.
                </Text>
                <Text style={styles.englishText}>
                  (Yes, I&apos;m very full. Thank you! The food was very
                  delicious.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Host:</Text>
                <Text style={styles.bisayaText}>
                  Salamat pud! Gusto pa ba nimo ug dulse?
                </Text>
                <Text style={styles.englishText}>
                  (Thank you too! Do you still want some sweets?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Guest:</Text>
                <Text style={styles.bisayaText}>
                  Dili na, busog na gyud ko. Pero salamat!
                </Text>
                <Text style={styles.englishText}>
                  (No more, I&apos;m really full. But thank you!)
                </Text>
              </View>
            </View>

            <View style={styles.summaryBox}>
              <View style={styles.iconRow}>
                <Ionicons
                  name="checkmark-circle"
                  size={28}
                  color={colors.orange[600]}
                />
              </View>
              <Text style={styles.patternTitle}>Maayo Kaayo! You Did It!</Text>
              <Text style={styles.patternText}>
                You just learned Bisaya food vocabulary! Now you can:
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Name basic foods and staples (rice, fish, meat, vegetables,
                  fruits)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Talk about popular Filipino dishes (adobo, sinigang, lechon,
                  puso)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Order drinks and beverages (water, coffee, juice, beer)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Identify fruits and vegetables (banana, mango, tomato, onion)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Talk about snacks and desserts (halo-halo, bibingka, ice
                  cream)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Use eating expressions (hungry, thirsty, full, delicious)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Understand Filipino meal culture and hospitality customs
                </Text>
              </View>
              <Text style={[styles.patternText, { marginTop: 16 }]}>
                Kaon ta! Practice your food vocabulary at every meal!
              </Text>
            </View>
          </ScrollView>
        </Animated.View>
      </View>
    </View>
  );
}
