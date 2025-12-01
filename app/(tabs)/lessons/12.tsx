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

export default function Lesson12() {
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
    vocabGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 12,
      marginBottom: 20,
    },
    vocabCard: {
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
    vocabIcon: {
      marginBottom: 12,
    },
    vocabWord: {
      fontSize: 22,
      fontWeight: "800",
      color: colors.text[100],
      marginBottom: 6,
      textAlign: "center",
    },
    vocabTranslation: {
      fontSize: 14,
      color: colors.text[200],
      textAlign: "center",
      marginBottom: 6,
    },
    vocabPronunciation: {
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
              <Text style={styles.lessonNumber}>Lesson 12</Text>
              <Text style={styles.headerTitle}>Shopping & Money</Text>
              <Text style={styles.headerDescription}>
                Learn how to shop and handle money transactions in Bisaya!
              </Text>
            </View>

            <Text style={styles.sectionTitle}>Money Vocabulary</Text>
            <Text style={styles.sectionSubtitle}>
              Talking about kwarta (money)
            </Text>

            <View style={styles.vocabGrid}>
              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons name="cash" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.vocabWord}>Kwarta</Text>
                <Text style={styles.vocabTranslation}>Money</Text>
                <Text style={styles.vocabPronunciation}>KWAHR-tah</Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons
                    name="cash-outline"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.vocabWord}>Pesos</Text>
                <Text style={styles.vocabTranslation}>Pesos</Text>
                <Text style={styles.vocabPronunciation}>PEH-sohs</Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons name="card" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.vocabWord}>Sentimos</Text>
                <Text style={styles.vocabTranslation}>Centavos</Text>
                <Text style={styles.vocabPronunciation}>sehn-TEE-mohs</Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons name="card" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.vocabWord}>Bayad</Text>
                <Text style={styles.vocabTranslation}>Payment</Text>
                <Text style={styles.vocabPronunciation}>bah-YAHD</Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons
                    name="swap-horizontal"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.vocabWord}>Sukli</Text>
                <Text style={styles.vocabTranslation}>Change (money back)</Text>
                <Text style={styles.vocabPronunciation}>sook-LEE</Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons
                    name="pricetag"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.vocabWord}>Presyo</Text>
                <Text style={styles.vocabTranslation}>Price</Text>
                <Text style={styles.vocabPronunciation}>PREHS-yoh</Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons
                    name="wallet"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.vocabWord}>Pitaka</Text>
                <Text style={styles.vocabTranslation}>Wallet</Text>
                <Text style={styles.vocabPronunciation}>pee-tah-KAH</Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons name="card" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.vocabWord}>Kard</Text>
                <Text style={styles.vocabTranslation}>Card (credit/debit)</Text>
                <Text style={styles.vocabPronunciation}>KAHRD</Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons
                    name="trending-down"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.vocabWord}>Barato</Text>
                <Text style={styles.vocabTranslation}>Cheap</Text>
                <Text style={styles.vocabPronunciation}>bah-RAH-toh</Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons
                    name="trending-up"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.vocabWord}>Mahal</Text>
                <Text style={styles.vocabTranslation}>Expensive</Text>
                <Text style={styles.vocabPronunciation}>mah-HAHL</Text>
              </View>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>
                Asking &ldquo;How much?&rdquo;
              </Text>
              <Text style={styles.bisayaText}>Pila ni?</Text>
              <Text style={styles.englishText}>How much is this?</Text>
              <Text style={styles.pronunciationText}>pee-LAH nee</Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  The most important shopping phrase!
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Basic transaction</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Customer:</Text>
                <Text style={styles.bisayaText}>Pila ni?</Text>
                <Text style={styles.englishText}>(How much is this?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Vendor:</Text>
                <Text style={styles.bisayaText}>Singkwenta pesos.</Text>
                <Text style={styles.englishText}>(Fifty pesos.)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Customer:</Text>
                <Text style={styles.bisayaText}>Ania ang bayad. Gatus.</Text>
                <Text style={styles.englishText}>
                  (Here&apos;s the payment. One hundred.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Vendor:</Text>
                <Text style={styles.bisayaText}>
                  Sige, ania ang sukli. Singkwenta.
                </Text>
                <Text style={styles.englishText}>
                  (Okay, here&apos;s the change. Fifty.)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Shopping Verbs & Actions</Text>
            <Text style={styles.sectionSubtitle}>
              What you do when shopping
            </Text>

            <View style={styles.vocabGrid}>
              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons name="cart" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.vocabWord}>Palit</Text>
                <Text style={styles.vocabTranslation}>To buy</Text>
                <Text style={styles.vocabPronunciation}>pah-LEET</Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons
                    name="storefront"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.vocabWord}>Baligya</Text>
                <Text style={styles.vocabTranslation}>To sell</Text>
                <Text style={styles.vocabPronunciation}>bah-leeg-YAH</Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons name="eye" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.vocabWord}>Tan-aw</Text>
                <Text style={styles.vocabTranslation}>To look / Browse</Text>
                <Text style={styles.vocabPronunciation}>tahn-OW</Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons name="shirt" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.vocabWord}>Suway</Text>
                <Text style={styles.vocabTranslation}>To try on</Text>
                <Text style={styles.vocabPronunciation}>soo-WYE</Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons name="cash" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.vocabWord}>Bayad</Text>
                <Text style={styles.vocabTranslation}>To pay</Text>
                <Text style={styles.vocabPronunciation}>bah-YAHD</Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons
                    name="contract"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.vocabWord}>Tawad</Text>
                <Text style={styles.vocabTranslation}>To bargain / Haggle</Text>
                <Text style={styles.vocabPronunciation}>tah-WAHD</Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons
                    name="repeat"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.vocabWord}>Iuli</Text>
                <Text style={styles.vocabTranslation}>To return (item)</Text>
                <Text style={styles.vocabPronunciation}>ee-OO-lee</Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons
                    name="git-compare"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.vocabWord}>Ilis</Text>
                <Text style={styles.vocabTranslation}>To exchange</Text>
                <Text style={styles.vocabPronunciation}>ee-LEES</Text>
              </View>
            </View>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons
                  name="trending-down"
                  size={24}
                  color={colors.orange[600]}
                />
              </View>
              <Text style={styles.patternTitle}>Bargaining Culture</Text>
              <Text style={styles.patternText}>
                Bargaining (tawad) is common in markets but not in stores:
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Markets</Text> -
                  Bargaining expected, start at 70% of asking price
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Stores/Malls</Text> -
                  Fixed prices, no bargaining
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Be polite</Text> - Always
                  smile and be friendly when bargaining
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Bargaining at the market</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Customer:</Text>
                <Text style={styles.bisayaText}>Pila ni nga bag?</Text>
                <Text style={styles.englishText}>(How much is this bag?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Vendor:</Text>
                <Text style={styles.bisayaText}>Tres siyentos.</Text>
                <Text style={styles.englishText}>(Three hundred.)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Customer:</Text>
                <Text style={styles.bisayaText}>
                  Mahal kaayo! Pwede ba dos siyentos lang?
                </Text>
                <Text style={styles.englishText}>
                  (Too expensive! Can it be just two hundred?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Vendor:</Text>
                <Text style={styles.bisayaText}>
                  Dili pwede. Dos singkwenta na lang.
                </Text>
                <Text style={styles.englishText}>
                  (Can&apos;t do that. Just two fifty.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Customer:</Text>
                <Text style={styles.bisayaText}>
                  Sige, okay na. Paliton nako.
                </Text>
                <Text style={styles.englishText}>
                  (Okay, that&apos;s fine. I&apos;ll buy it.)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Shopping Phrases</Text>
            <Text style={styles.sectionSubtitle}>
              Essential expressions for shopping
            </Text>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Asking for something</Text>
              <Text style={styles.bisayaText}>Naa kay [item]?</Text>
              <Text style={styles.englishText}>Do you have [item]?</Text>
              <Text style={styles.pronunciationText}>nah-AH kye [item]</Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Example: Naa kay sapatos? = Do you have shoes?
                </Text>
              </View>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>
                Asking for a specific size/color
              </Text>
              <Text style={styles.bisayaText}>Naa kay lain nga kolor?</Text>
              <Text style={styles.englishText}>Do you have another color?</Text>
              <Text style={styles.pronunciationText}>
                nah-AH kye lah-EEN ngah koh-LOHR
              </Text>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>
                Saying it&apos;s too expensive
              </Text>
              <Text style={styles.bisayaText}>Mahal kaayo!</Text>
              <Text style={styles.englishText}>Too expensive!</Text>
              <Text style={styles.pronunciationText}>mah-HAHL kah-AH-yoh</Text>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Asking for a discount</Text>
              <Text style={styles.bisayaText}>Pwede ba og diskwento?</Text>
              <Text style={styles.englishText}>Can I get a discount?</Text>
              <Text style={styles.pronunciationText}>
                PWEH-deh bah ohg dees-KWEHN-toh
              </Text>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>
                Saying you&apos;ll buy it
              </Text>
              <Text style={styles.bisayaText}>Paliton nako ni.</Text>
              <Text style={styles.englishText}>I&apos;ll buy this.</Text>
              <Text style={styles.pronunciationText}>
                pah-lee-TOHN nah-KOH nee
              </Text>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>
                Saying you&apos;re just looking
              </Text>
              <Text style={styles.bisayaText}>Tan-aw lang ko.</Text>
              <Text style={styles.englishText}>I&apos;m just looking.</Text>
              <Text style={styles.pronunciationText}>tahn-OW lahng koh</Text>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>
                Asking where the fitting room is
              </Text>
              <Text style={styles.bisayaText}>Asa ang fitting room?</Text>
              <Text style={styles.englishText}>Where is the fitting room?</Text>
              <Text style={styles.pronunciationText}>
                ah-SAH ahng FEE-teeng room
              </Text>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Shopping for clothes</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Salesperson:</Text>
                <Text style={styles.bisayaText}>
                  Maayo nga buntag! Unsa akong matabang?
                </Text>
                <Text style={styles.englishText}>
                  (Good morning! How can I help?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Customer:</Text>
                <Text style={styles.bisayaText}>
                  Naa kay t-shirt? Para sa lalaki.
                </Text>
                <Text style={styles.englishText}>
                  (Do you have t-shirts? For men.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Salesperson:</Text>
                <Text style={styles.bisayaText}>Oo naa. Unsa imong size?</Text>
                <Text style={styles.englishText}>
                  (Yes, we have. What&apos;s your size?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Customer:</Text>
                <Text style={styles.bisayaText}>
                  Medium. Naa ba ninyoy lain nga kolor?
                </Text>
                <Text style={styles.englishText}>
                  (Medium. Do you have other colors?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Salesperson:</Text>
                <Text style={styles.bisayaText}>
                  Naa. Puti, itom, ug pula. Suwayi lang.
                </Text>
                <Text style={styles.englishText}>
                  (We have. White, black, and red. Just try it on.)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Items You Might Buy</Text>
            <Text style={styles.sectionSubtitle}>Common shopping items</Text>

            <View style={styles.vocabGrid}>
              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons name="shirt" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.vocabWord}>Sinina</Text>
                <Text style={styles.vocabTranslation}>Clothes / Dress</Text>
                <Text style={styles.vocabPronunciation}>see-NEE-nah</Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons name="man" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.vocabWord}>Sapatos</Text>
                <Text style={styles.vocabTranslation}>Shoes</Text>
                <Text style={styles.vocabPronunciation}>sah-pah-TOHS</Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons name="bag" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.vocabWord}>Bag</Text>
                <Text style={styles.vocabTranslation}>Bag</Text>
                <Text style={styles.vocabPronunciation}>BAHG</Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons name="watch" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.vocabWord}>Relo</Text>
                <Text style={styles.vocabTranslation}>Watch / Clock</Text>
                <Text style={styles.vocabPronunciation}>reh-LOH</Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons name="book" size={40} color={colors.orange[600]} />
                </View>
                <Text style={styles.vocabWord}>Libro</Text>
                <Text style={styles.vocabTranslation}>Book</Text>
                <Text style={styles.vocabPronunciation}>LEE-broh</Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons
                    name="phone-portrait"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.vocabWord}>Cellphone</Text>
                <Text style={styles.vocabTranslation}>Cellphone</Text>
                <Text style={styles.vocabPronunciation}>SEHL-fohn</Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons
                    name="glasses"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.vocabWord}>Salamin</Text>
                <Text style={styles.vocabTranslation}>Glasses / Mirror</Text>
                <Text style={styles.vocabPronunciation}>sah-lah-MEEN</Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons name="gift" size={40} color={colors.orange[500]} />
                </View>
                <Text style={styles.vocabWord}>Regalo</Text>
                <Text style={styles.vocabTranslation}>Gift</Text>
                <Text style={styles.vocabPronunciation}>reh-GAH-loh</Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons
                    name="newspaper"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.vocabWord}>Pahayagan</Text>
                <Text style={styles.vocabTranslation}>Newspaper</Text>
                <Text style={styles.vocabPronunciation}>pah-hah-yah-GAHN</Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons
                    name="help-circle"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.vocabWord}>Mga butang</Text>
                <Text style={styles.vocabTranslation}>Things / Items</Text>
                <Text style={styles.vocabPronunciation}>m-GAH boo-TAHNG</Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Colors & Sizes</Text>
            <Text style={styles.sectionSubtitle}>Describing what you want</Text>

            <View style={styles.vocabGrid}>
              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons
                    name="square"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.vocabWord}>Puti</Text>
                <Text style={styles.vocabTranslation}>White</Text>
                <Text style={styles.vocabPronunciation}>poo-TEE</Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons name="square" size={40} color="#000000" />
                </View>
                <Text style={styles.vocabWord}>Itom</Text>
                <Text style={styles.vocabTranslation}>Black</Text>
                <Text style={styles.vocabPronunciation}>ee-TOHM</Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons name="square" size={40} color="#FF0000" />
                </View>
                <Text style={styles.vocabWord}>Pula</Text>
                <Text style={styles.vocabTranslation}>Red</Text>
                <Text style={styles.vocabPronunciation}>poo-LAH</Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons name="square" size={40} color="#0000FF" />
                </View>
                <Text style={styles.vocabWord}>Asul</Text>
                <Text style={styles.vocabTranslation}>Blue</Text>
                <Text style={styles.vocabPronunciation}>ah-SOOL</Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons name="square" size={40} color="#00FF00" />
                </View>
                <Text style={styles.vocabWord}>Berde</Text>
                <Text style={styles.vocabTranslation}>Green</Text>
                <Text style={styles.vocabPronunciation}>BEHR-deh</Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons name="square" size={40} color="#FFFF00" />
                </View>
                <Text style={styles.vocabWord}>Dalag</Text>
                <Text style={styles.vocabTranslation}>Yellow</Text>
                <Text style={styles.vocabPronunciation}>dah-LAHG</Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons
                    name="expand"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.vocabWord}>Dako</Text>
                <Text style={styles.vocabTranslation}>Large / Big</Text>
                <Text style={styles.vocabPronunciation}>dah-KOH</Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons
                    name="remove"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.vocabWord}>Medyo</Text>
                <Text style={styles.vocabTranslation}>Medium</Text>
                <Text style={styles.vocabPronunciation}>mehd-YOH</Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons
                    name="contract"
                    size={40}
                    color={colors.orange[600]}
                  />
                </View>
                <Text style={styles.vocabWord}>Gamay</Text>
                <Text style={styles.vocabTranslation}>Small</Text>
                <Text style={styles.vocabPronunciation}>gah-MYE</Text>
              </View>

              <View style={styles.vocabCard}>
                <View style={styles.vocabIcon}>
                  <Ionicons
                    name="square"
                    size={40}
                    color={colors.orange[500]}
                  />
                </View>
                <Text style={styles.vocabWord}>Kolor</Text>
                <Text style={styles.vocabTranslation}>Color</Text>
                <Text style={styles.vocabPronunciation}>koh-LOHR</Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>
                Asking about colors and sizes
              </Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Customer:</Text>
                <Text style={styles.bisayaText}>
                  Naa ba ninyoy pula nga bag?
                </Text>
                <Text style={styles.englishText}>(Do you have a red bag?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Vendor:</Text>
                <Text style={styles.bisayaText}>
                  Naa, pero gamay ra. Gusto ba nimo?
                </Text>
                <Text style={styles.englishText}>
                  (We have, but only small. Do you want it?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Customer:</Text>
                <Text style={styles.bisayaText}>
                  Gusto nako ug mas dako. Naa ba?
                </Text>
                <Text style={styles.englishText}>
                  (I want a bigger one. Do you have?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Vendor:</Text>
                <Text style={styles.bisayaText}>
                  Naa koy itom nga dako. Tan-awa lang.
                </Text>
                <Text style={styles.englishText}>
                  (I have a big black one. Just look at it.)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Payment Methods</Text>
            <Text style={styles.sectionSubtitle}>Different ways to pay</Text>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Paying with cash</Text>
              <Text style={styles.bisayaText}>Mobayad ko ug cash.</Text>
              <Text style={styles.englishText}>I&apos;ll pay with cash.</Text>
              <Text style={styles.pronunciationText}>
                moh-bah-YAHD koh oog KASH
              </Text>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Paying with card</Text>
              <Text style={styles.bisayaText}>Pwede ba og kard?</Text>
              <Text style={styles.englishText}>Can I use a card?</Text>
              <Text style={styles.pronunciationText}>
                PWEH-deh bah ohg KAHRD
              </Text>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>
                Asking if they accept cards
              </Text>
              <Text style={styles.bisayaText}>Modawat ba mo ug kard?</Text>
              <Text style={styles.englishText}>Do you accept cards?</Text>
              <Text style={styles.pronunciationText}>
                moh-dah-WAHT bah moh oog KAHRD
              </Text>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Asking for a receipt</Text>
              <Text style={styles.bisayaText}>Pwede ba og resibo?</Text>
              <Text style={styles.englishText}>Can I get a receipt?</Text>
              <Text style={styles.pronunciationText}>
                PWEH-deh bah ohg reh-SEE-boh
              </Text>
            </View>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons name="card" size={24} color={colors.orange[600]} />
              </View>
              <Text style={styles.patternTitle}>
                Payment in the Philippines
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Cash is king</Text> - Many
                  small vendors only accept cash
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>GCash & PayMaya</Text> -
                  Popular digital payment apps
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Malls</Text> - Usually
                  accept cards and digital payments
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Small bills</Text> -
                  Always carry small bills; vendors may not have change
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>
                Complete shopping transaction
              </Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Cashier:</Text>
                <Text style={styles.bisayaText}>
                  Tanan mil dos siyentos pesos.
                </Text>
                <Text style={styles.englishText}>
                  (The total is one thousand two hundred pesos.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Customer:</Text>
                <Text style={styles.bisayaText}>Pwede ba og kard?</Text>
                <Text style={styles.englishText}>(Can I pay by card?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Cashier:</Text>
                <Text style={styles.bisayaText}>
                  Oo, pwede. I-swipe lang diri.
                </Text>
                <Text style={styles.englishText}>
                  (Yes, you can. Just swipe here.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Customer:</Text>
                <Text style={styles.bisayaText}>Sige. Pwede ba og resibo?</Text>
                <Text style={styles.englishText}>
                  (Okay. Can I get a receipt?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Cashier:</Text>
                <Text style={styles.bisayaText}>
                  Oo, ania. Salamat sa pagpalit!
                </Text>
                <Text style={styles.englishText}>
                  (Yes, here you are. Thanks for shopping!)
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
                You just learned Bisaya shopping and money vocabulary! Now you
                can:
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Talk about money (kwarta, pesos, bayad, sukli, presyo)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Use shopping verbs (palit, baligya, tan-aw, suway, tawad)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Ask essential questions (Pila ni? Naa kay...? Pwede ba og...)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Bargain politely in markets
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Describe colors and sizes
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Handle payments with cash or card
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Understand Filipino shopping and payment culture
                </Text>
              </View>
              <Text style={[styles.patternText, { marginTop: 16 }]}>
                Practice your shopping Bisaya at the market or mall!
              </Text>
            </View>
          </ScrollView>
        </Animated.View>
      </View>
    </View>
  );
}
