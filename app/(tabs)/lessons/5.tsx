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

export default function Lesson5() {
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
      borderColor: colors.green[700] + "40",
      shadowColor: colors.green[700],
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.15,
      shadowRadius: 12,
      elevation: 6,
      alignItems: "center",
    },
    lessonNumber: {
      fontSize: 13,
      fontWeight: "800",
      color: colors.green[700],
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
      borderColor: colors.green[700] + "30",
      shadowColor: colors.green[700],
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
      color: colors.green[700],
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
      backgroundColor: colors.green[700] + "20",
      padding: 20,
      borderRadius: 16,
      marginVertical: 16,
      borderWidth: 2,
      borderColor: colors.green[700] + "40",
      width: "100%",
    },
    highlightText: {
      fontSize: 18,
      fontWeight: "700",
      color: colors.green[700],
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
      borderColor: colors.green[700] + "30",
      shadowColor: colors.green[700],
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
      color: colors.green[700],
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
      borderColor: colors.green[700] + "30",
      shadowColor: colors.green[700],
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
      backgroundColor: colors.green[700] + "20",
      padding: 28,
      borderRadius: 24,
      marginTop: 20,
      marginBottom: 20,
      borderWidth: 2,
      borderColor: colors.green[700] + "40",
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
              <Text style={styles.lessonNumber}>Lesson 5</Text>
              <Text style={styles.headerTitle}>Food & Drinks</Text>
              <Text style={styles.headerDescription}>
                Learn essential vocabulary for eating, drinking, and enjoying
                Filipino cuisine!
              </Text>
            </View>

            <Text style={styles.sectionTitle}>Staple Foods</Text>
            <Text style={styles.sectionSubtitle}>
              The basics - rice, bread, and everyday foods
            </Text>

            <View style={styles.foodGrid}>
              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons
                    name="nutrition"
                    size={40}
                    color={colors.green[700]}
                  />
                </View>
                <Text style={styles.foodWord}>Kan-on</Text>
                <Text style={styles.foodTranslation}>Rice (cooked)</Text>
                <Text style={styles.foodPronunciation}>kahn-OHN</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons name="leaf" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.foodWord}>Bugas</Text>
                <Text style={styles.foodTranslation}>Rice (uncooked)</Text>
                <Text style={styles.foodPronunciation}>boo-GAHS</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons
                    name="restaurant"
                    size={40}
                    color={colors.green[600]}
                  />
                </View>
                <Text style={styles.foodWord}>Pan</Text>
                <Text style={styles.foodTranslation}>Bread</Text>
                <Text style={styles.foodPronunciation}>PAHN</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons
                    name="fast-food"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.foodWord}>Pandesal</Text>
                <Text style={styles.foodTranslation}>Filipino bread roll</Text>
                <Text style={styles.foodPronunciation}>pahn-deh-SAHL</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons name="egg" size={40} color={colors.green[700]} />
                </View>
                <Text style={styles.foodWord}>Itlog</Text>
                <Text style={styles.foodTranslation}>Egg</Text>
                <Text style={styles.foodPronunciation}>eet-LOHG</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons name="moon" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.foodWord}>Mantika</Text>
                <Text style={styles.foodTranslation}>Cooking oil</Text>
                <Text style={styles.foodPronunciation}>mahn-tee-KAH</Text>
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
              <Text style={styles.patternTitle}>Rice is Life!</Text>
              <Text style={styles.patternText}>
                In Filipino culture, rice (kan-on) is the center of every meal.
                The question &ldquo;Nakaon ka na?&rdquo; (Have you eaten?)
                literally means &ldquo;Have you eaten rice?&rdquo;
              </Text>
              <View style={styles.highlightBox}>
                <Text style={styles.highlightText}>
                  No rice = not a complete meal!
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Breakfast time</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Mama:</Text>
                <Text style={styles.bisayaText}>
                  Kaon na! Naa nay kan-on ug itlog.
                </Text>
                <Text style={styles.englishText}>
                  (Come eat! There&apos;s rice and eggs.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>
                  Salamat, Ma. Naa pay pandesal?
                </Text>
                <Text style={styles.englishText}>
                  (Thanks, Mom. Is there pandesal?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Mama:</Text>
                <Text style={styles.bisayaText}>Oo, bag-o pa. Mainit pa!</Text>
                <Text style={styles.englishText}>
                  (Yes, fresh. Still warm!)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Meat & Protein</Text>
            <Text style={styles.sectionSubtitle}>
              Different types of meat and protein sources
            </Text>

            <View style={styles.foodGrid}>
              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons name="fish" size={40} color={colors.green[700]} />
                </View>
                <Text style={styles.foodWord}>Isda</Text>
                <Text style={styles.foodTranslation}>Fish</Text>
                <Text style={styles.foodPronunciation}>ees-DAH</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons
                    name="fast-food"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.foodWord}>Karne</Text>
                <Text style={styles.foodTranslation}>Meat (general)</Text>
                <Text style={styles.foodPronunciation}>KAHR-neh</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons
                    name="restaurant"
                    size={40}
                    color={colors.green[600]}
                  />
                </View>
                <Text style={styles.foodWord}>Manok</Text>
                <Text style={styles.foodTranslation}>Chicken</Text>
                <Text style={styles.foodPronunciation}>mah-NOHK</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons
                    name="nutrition"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.foodWord}>Baboy</Text>
                <Text style={styles.foodTranslation}>Pork</Text>
                <Text style={styles.foodPronunciation}>bah-BOY</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons
                    name="football"
                    size={40}
                    color={colors.green[700]}
                  />
                </View>
                <Text style={styles.foodWord}>Baka</Text>
                <Text style={styles.foodTranslation}>Beef / Cow</Text>
                <Text style={styles.foodPronunciation}>bah-KAH</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons name="fish" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.foodWord}>Hipon</Text>
                <Text style={styles.foodTranslation}>Shrimp</Text>
                <Text style={styles.foodPronunciation}>hee-POHN</Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>At the market</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>Naa kay isda?</Text>
                <Text style={styles.englishText}>(Do you have fish?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Vendor:</Text>
                <Text style={styles.bisayaText}>
                  Oo, presko! Bag-o lang gikan sa dagat.
                </Text>
                <Text style={styles.englishText}>
                  (Yes, fresh! Just came from the sea.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>Pila ang usa ka kilo?</Text>
                <Text style={styles.englishText}>(How much per kilo?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Vendor:</Text>
                <Text style={styles.bisayaText}>
                  Dos siyentos singkwenta ang kilo.
                </Text>
                <Text style={styles.englishText}>
                  (Two hundred fifty per kilo.)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Fruits & Vegetables</Text>
            <Text style={styles.sectionSubtitle}>
              Fresh produce - prutas ug utanon
            </Text>

            <View style={styles.foodGrid}>
              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons name="leaf" size={40} color={colors.green[700]} />
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

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons name="moon" size={40} color={colors.green[600]} />
                </View>
                <Text style={styles.foodWord}>Saging</Text>
                <Text style={styles.foodTranslation}>Banana</Text>
                <Text style={styles.foodPronunciation}>sah-GEENG</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons name="sunny" size={40} color={colors.orange[600]} />
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
                    color={colors.green[700]}
                  />
                </View>
                <Text style={styles.foodWord}>Kamatis</Text>
                <Text style={styles.foodTranslation}>Tomato</Text>
                <Text style={styles.foodPronunciation}>kah-mah-TEES</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons name="leaf" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.foodWord}>Sibuyas</Text>
                <Text style={styles.foodTranslation}>Onion</Text>
                <Text style={styles.foodPronunciation}>see-BOO-yahs</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons name="water" size={40} color={colors.green[600]} />
                </View>
                <Text style={styles.foodWord}>Patatas</Text>
                <Text style={styles.foodTranslation}>Potato</Text>
                <Text style={styles.foodPronunciation}>pah-TAH-tahs</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons name="water" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.foodWord}>Balatong</Text>
                <Text style={styles.foodTranslation}>Mung bean</Text>
                <Text style={styles.foodPronunciation}>bah-lah-TOHNG</Text>
              </View>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Popular Filipino Fruits</Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Lansones (lahn-SOH-nehs) - Small sweet fruit{"\n"}
                  Santol (sahn-TOHL) - Cotton fruit{"\n"}
                  Durian (doo-ree-AHN) - King of fruits (smelly!){"\n"}
                  Rambutan (rahm-boo-TAHN) - Hairy lychee-like fruit{"\n"}
                  Lanzones (lahn-ZOH-nehs) - Sweet seasonal fruit
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Drinks</Text>
            <Text style={styles.sectionSubtitle}>
              Beverages hot and cold - mga ilimnon
            </Text>

            <View style={styles.foodGrid}>
              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons name="water" size={40} color={colors.green[700]} />
                </View>
                <Text style={styles.foodWord}>Tubig</Text>
                <Text style={styles.foodTranslation}>Water</Text>
                <Text style={styles.foodPronunciation}>TOO-beeg</Text>
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
                  <Ionicons name="leaf" size={40} color={colors.green[600]} />
                </View>
                <Text style={styles.foodWord}>Tsa</Text>
                <Text style={styles.foodTranslation}>Tea</Text>
                <Text style={styles.foodPronunciation}>TSAH</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons name="snow" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.foodWord}>Gatas</Text>
                <Text style={styles.foodTranslation}>Milk</Text>
                <Text style={styles.foodPronunciation}>gah-TAHS</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons
                    name="nutrition"
                    size={40}
                    color={colors.green[700]}
                  />
                </View>
                <Text style={styles.foodWord}>Juice</Text>
                <Text style={styles.foodTranslation}>Juice</Text>
                <Text style={styles.foodPronunciation}>JOOS</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons name="beer" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.foodWord}>Softdrinks</Text>
                <Text style={styles.foodTranslation}>Soda</Text>
                <Text style={styles.foodPronunciation}>SOFT-dreengks</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons name="beer" size={40} color={colors.green[600]} />
                </View>
                <Text style={styles.foodWord}>Beer</Text>
                <Text style={styles.foodTranslation}>Beer</Text>
                <Text style={styles.foodPronunciation}>BEER</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons name="water" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.foodWord}>Buko juice</Text>
                <Text style={styles.foodTranslation}>Coconut water</Text>
                <Text style={styles.foodPronunciation}>BOO-koh JOOS</Text>
              </View>
            </View>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons name="water" size={24} color={colors.orange[600]} />
              </View>
              <Text style={styles.patternTitle}>Filipino Refreshments</Text>
              <Text style={styles.patternText}>
                Filipinos love sweet, cold drinks especially in hot weather!
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Halo-halo</Text> - Mixed
                  shaved ice dessert with various toppings
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Calamansi juice</Text> -
                  Filipino lime juice, very refreshing
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Sago&apos;t gulaman</Text>{" "}
                  - Tapioca pearls and jelly drink
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Ordering drinks</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Waiter:</Text>
                <Text style={styles.bisayaText}>Unsa imong ilimnon?</Text>
                <Text style={styles.englishText}>(What will you drink?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>
                  Tubig lang sa. Ug usa ka baso sa juice.
                </Text>
                <Text style={styles.englishText}>
                  (Just water. And one glass of juice.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Waiter:</Text>
                <Text style={styles.bisayaText}>
                  Unsa nga juice? Naa mi mangga, saging, ug melon.
                </Text>
                <Text style={styles.englishText}>
                  (What juice? We have mango, banana, and melon.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>Mangga juice palihog.</Text>
                <Text style={styles.englishText}>(Mango juice please.)</Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Dining Phrases</Text>
            <Text style={styles.sectionSubtitle}>
              Essential expressions for meals and restaurants
            </Text>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Inviting someone to eat</Text>
              <Text style={styles.bisayaText}>Kaon ta!</Text>
              <Text style={styles.englishText}>Let&apos;s eat!</Text>
              <Text style={styles.pronunciationText}>kah-OHN tah</Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  This is a polite invitation, even to strangers nearby when
                  you&apos;re eating!
                </Text>
              </View>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>
                Asking if someone has eaten
              </Text>
              <Text style={styles.bisayaText}>Nakaon ka na?</Text>
              <Text style={styles.englishText}>Have you eaten?</Text>
              <Text style={styles.pronunciationText}>nah-kah-OHN kah nah</Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  This is like saying &ldquo;How are you?&rdquo; - a common
                  greeting!
                </Text>
              </View>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>
                Saying you&apos;re hungry
              </Text>
              <Text style={styles.bisayaText}>Gigutom ko.</Text>
              <Text style={styles.englishText}>I&apos;m hungry.</Text>
              <Text style={styles.pronunciationText}>gee-GOO-tohm koh</Text>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>
                Saying you&apos;re thirsty
              </Text>
              <Text style={styles.bisayaText}>Giuhaw ko.</Text>
              <Text style={styles.englishText}>I&apos;m thirsty.</Text>
              <Text style={styles.pronunciationText}>gee-OO-how koh</Text>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Saying you&apos;re full</Text>
              <Text style={styles.bisayaText}>Busog na ko.</Text>
              <Text style={styles.englishText}>I&apos;m full.</Text>
              <Text style={styles.pronunciationText}>boo-SOHG nah koh</Text>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>
                Saying it&apos;s delicious
              </Text>
              <Text style={styles.bisayaText}>Lami kaayo!</Text>
              <Text style={styles.englishText}>Very delicious!</Text>
              <Text style={styles.pronunciationText}>lah-MEE kah-AH-yoh</Text>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Asking for the bill</Text>
              <Text style={styles.bisayaText}>Kuha sa ang bill.</Text>
              <Text style={styles.englishText}>Get the bill please.</Text>
              <Text style={styles.pronunciationText}>
                KOO-hah sah ahng BEEL
              </Text>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Ordering food</Text>
              <Text style={styles.bisayaText}>Kuhaon nako kini.</Text>
              <Text style={styles.englishText}>I&apos;ll take this.</Text>
              <Text style={styles.pronunciationText}>
                koo-HAH-ohn NAH-koh kee-NEE
              </Text>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>At a restaurant</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Waiter:</Text>
                <Text style={styles.bisayaText}>
                  Maayong gabii! Unsa inyong order?
                </Text>
                <Text style={styles.englishText}>
                  (Good evening! What&apos;s your order?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>
                  Kuhaon nako ang sinugbang isda ug kan-on.
                </Text>
                <Text style={styles.englishText}>
                  (I&apos;ll take the grilled fish and rice.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Friend:</Text>
                <Text style={styles.bisayaText}>
                  Para nako, adobong manok ug tubig.
                </Text>
                <Text style={styles.englishText}>
                  (For me, chicken adobo and water.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Waiter:</Text>
                <Text style={styles.bisayaText}>Sige, dayon na ninyo.</Text>
                <Text style={styles.englishText}>(Okay, coming right up.)</Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Popular Filipino Dishes</Text>
            <Text style={styles.sectionSubtitle}>
              Must-know traditional foods
            </Text>

            <View style={styles.foodGrid}>
              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons
                    name="restaurant"
                    size={40}
                    color={colors.green[700]}
                  />
                </View>
                <Text style={styles.foodWord}>Adobo</Text>
                <Text style={styles.foodTranslation}>Vinegar-soy stew</Text>
                <Text style={styles.foodPronunciation}>ah-DOH-boh</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons name="flame" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.foodWord}>Sinigang</Text>
                <Text style={styles.foodTranslation}>Sour tamarind soup</Text>
                <Text style={styles.foodPronunciation}>see-nee-GAHNG</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons
                    name="nutrition"
                    size={40}
                    color={colors.green[600]}
                  />
                </View>
                <Text style={styles.foodWord}>Lechon</Text>
                <Text style={styles.foodTranslation}>Roasted pig</Text>
                <Text style={styles.foodPronunciation}>leh-CHOHN</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons name="cafe" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.foodWord}>Pancit</Text>
                <Text style={styles.foodTranslation}>Noodles</Text>
                <Text style={styles.foodPronunciation}>pahn-SEET</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons name="fish" size={40} color={colors.green[700]} />
                </View>
                <Text style={styles.foodWord}>Kinilaw</Text>
                <Text style={styles.foodTranslation}>Raw fish in vinegar</Text>
                <Text style={styles.foodPronunciation}>kee-nee-LOW</Text>
              </View>

              <View style={styles.foodCard}>
                <View style={styles.foodIcon}>
                  <Ionicons name="snow" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.foodWord}>Lumpia</Text>
                <Text style={styles.foodTranslation}>Spring rolls</Text>
                <Text style={styles.foodPronunciation}>loom-pee-AH</Text>
              </View>
            </View>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons name="heart" size={24} color={colors.orange[600]} />
              </View>
              <Text style={styles.patternTitle}>Filipino Food Culture</Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Family-style eating</Text>{" "}
                  - All dishes shared in the center
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>
                    Always invite others
                  </Text>{" "}
                  - Say &ldquo;Kaon ta!&rdquo; even to strangers nearby
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>
                    Rice with everything
                  </Text>{" "}
                  - Even spaghetti is eaten with rice!
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>
                    Eat with hands (kamayan)
                  </Text>{" "}
                  - Traditional way to eat, especially at celebrations
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Merienda</Text> - Snack
                  time between meals (mid-morning or mid-afternoon)
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Complete meal conversation</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Host:</Text>
                <Text style={styles.bisayaText}>
                  Kaon ta! Luto nako ug adobo.
                </Text>
                <Text style={styles.englishText}>
                  (Let&apos;s eat! I cooked adobo.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Guest:</Text>
                <Text style={styles.bisayaText}>
                  Salamat! Lami kaayo tan-awon.
                </Text>
                <Text style={styles.englishText}>
                  (Thank you! It looks very delicious.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Host:</Text>
                <Text style={styles.bisayaText}>
                  Naa pay kan-on diha. Kuhaa.
                </Text>
                <Text style={styles.englishText}>
                  (There&apos;s more rice there. Get some.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Guest (after eating):</Text>
                <Text style={styles.bisayaText}>
                  Busog na kaayo ko! Lami gyud ang adobo!
                </Text>
                <Text style={styles.englishText}>
                  (I&apos;m so full! The adobo was really delicious!)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Host:</Text>
                <Text style={styles.bisayaText}>
                  Salamat! Dala-a ang sobra pauli.
                </Text>
                <Text style={styles.englishText}>
                  (Thank you! Take the leftovers home.)
                </Text>
              </View>
            </View>

            <View style={styles.summaryBox}>
              <View style={styles.iconRow}>
                <Ionicons
                  name="checkmark-circle"
                  size={28}
                  color={colors.green[700]}
                />
              </View>
              <Text style={styles.patternTitle}>Maayo! You Did It!</Text>
              <Text style={styles.patternText}>
                You just learned essential food vocabulary! Now you can:
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Name staple foods, meats, fruits, and vegetables
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Order drinks and beverages at restaurants
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Express hunger, thirst, fullness, and taste
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Use essential dining phrases and restaurant vocabulary
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Understand Filipino food culture and dining customs
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Recognize popular traditional Filipino dishes
                </Text>
              </View>
              <Text style={[styles.patternText, { marginTop: 16 }]}>
                Practice by ordering in Bisaya next time - Kaon ta!
              </Text>
            </View>
          </ScrollView>
        </Animated.View>
      </View>
    </View>
  );
}
