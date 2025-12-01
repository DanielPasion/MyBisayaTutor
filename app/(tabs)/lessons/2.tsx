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

export default function Lesson2() {
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
      borderColor: colors.green[400] + "40",
      shadowColor: colors.green[500],
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.15,
      shadowRadius: 12,
      elevation: 6,
      alignItems: "center",
    },
    lessonNumber: {
      fontSize: 13,
      fontWeight: "800",
      color: colors.green[500],
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
      borderColor: colors.green[400] + "30",
      shadowColor: colors.green[400],
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
      color: colors.green[600],
      marginTop: 4,
      fontWeight: "600",
      textAlign: "center",
    },
    patternBox: {
      backgroundColor: colors.orange[400] + "18",
      padding: 24,
      borderRadius: 20,
      marginBottom: 20,
      borderWidth: 2,
      borderColor: colors.orange[500],
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
      backgroundColor: colors.green[500] + "20",
      padding: 20,
      borderRadius: 16,
      marginVertical: 16,
      borderWidth: 2,
      borderColor: colors.green[500] + "40",
      width: "100%",
    },
    highlightText: {
      fontSize: 18,
      fontWeight: "700",
      color: colors.green[700],
      textAlign: "center",
      lineHeight: 26,
    },
    numberGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 12,
      marginBottom: 20,
    },
    numberCard: {
      width: "30%",
      minWidth: 100,
      backgroundColor: isDarkMode
        ? colors.cream[100] + "F5"
        : colors.white[100] + "F5",
      padding: 18,
      borderRadius: 16,
      borderWidth: 2,
      borderColor: colors.green[400] + "30",
      alignItems: "center",
      shadowColor: colors.green[400],
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    numberDigit: {
      fontSize: 36,
      fontWeight: "800",
      color: colors.orange[600],
      marginBottom: 8,
    },
    numberWord: {
      fontSize: 18,
      fontWeight: "700",
      color: colors.text[100],
      marginBottom: 4,
      textAlign: "center",
    },
    breakdownBox: {
      backgroundColor: isDarkMode
        ? colors.cream[100] + "F5"
        : colors.white[100] + "F5",
      padding: 24,
      borderRadius: 20,
      marginBottom: 16,
      borderWidth: 2,
      borderColor: colors.green[400] + "40",
      shadowColor: colors.green[400],
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.1,
      shadowRadius: 6,
      elevation: 3,
      alignItems: "center",
    },
    breakdownTitle: {
      fontSize: 24,
      fontWeight: "800",
      color: colors.text[100],
      marginBottom: 8,
      textAlign: "center",
    },
    contextNote: {
      backgroundColor: colors.green[400] + "20",
      padding: 16,
      borderRadius: 14,
      marginTop: 16,
      borderWidth: 1.5,
      borderColor: colors.green[400] + "40",
      width: "100%",
    },
    contextNoteText: {
      fontSize: 14,
      color: colors.text[100],
      lineHeight: 21,
      textAlign: "center",
      fontWeight: "500",
    },
    summaryBox: {
      backgroundColor: colors.green[500] + "20",
      padding: 28,
      borderRadius: 20,
      marginTop: 24,
      marginBottom: 16,
      borderWidth: 2,
      borderColor: colors.green[500] + "40",
      alignItems: "center",
      shadowColor: colors.green[500],
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 5,
    },
    iconRow: {
      marginBottom: 16,
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor="transparent"
        translucent
      />
      <Header />

      <View style={styles.contentContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Ionicons name="arrow-back" size={24} color={colors.orange[500]} />
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>

        <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            bounces={false}
          >
            <View style={styles.headerSection}>
              <Text style={styles.lessonNumber}>Lesson 2</Text>
              <Text style={styles.headerTitle}>Numbers</Text>
              <Text style={styles.headerDescription}>
                Count from 1-20 and beyond
              </Text>
            </View>

            <Text style={styles.sectionTitle}>Numbers 1-10</Text>
            <Text style={styles.sectionSubtitle}>
              The native Bisaya counting system
            </Text>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons
                  name="finger-print"
                  size={24}
                  color={colors.orange[600]}
                />
              </View>
              <Text style={styles.patternTitle}>Native vs. Spanish</Text>
              <Text style={styles.patternText}>
                Bisaya uses native numbers for 1-10, then switches to
                Spanish-derived numbers for 11+. Just like how English speakers
                might say &ldquo;dozen&rdquo; but then use regular numbers!
              </Text>
            </View>

            <View style={styles.numberGrid}>
              <View style={styles.numberCard}>
                <Text style={styles.numberDigit}>1</Text>
                <Text style={styles.numberWord}>usa</Text>
                <Text style={styles.pronunciationText}>OO-sah</Text>
              </View>
              <View style={styles.numberCard}>
                <Text style={styles.numberDigit}>2</Text>
                <Text style={styles.numberWord}>duha</Text>
                <Text style={styles.pronunciationText}>DOO-hah</Text>
              </View>
              <View style={styles.numberCard}>
                <Text style={styles.numberDigit}>3</Text>
                <Text style={styles.numberWord}>tulo</Text>
                <Text style={styles.pronunciationText}>TOO-loh</Text>
              </View>
              <View style={styles.numberCard}>
                <Text style={styles.numberDigit}>4</Text>
                <Text style={styles.numberWord}>upat</Text>
                <Text style={styles.pronunciationText}>OO-paht</Text>
              </View>
              <View style={styles.numberCard}>
                <Text style={styles.numberDigit}>5</Text>
                <Text style={styles.numberWord}>lima</Text>
                <Text style={styles.pronunciationText}>LEE-mah</Text>
              </View>
              <View style={styles.numberCard}>
                <Text style={styles.numberDigit}>6</Text>
                <Text style={styles.numberWord}>unom</Text>
                <Text style={styles.pronunciationText}>OO-nohm</Text>
              </View>
              <View style={styles.numberCard}>
                <Text style={styles.numberDigit}>7</Text>
                <Text style={styles.numberWord}>pito</Text>
                <Text style={styles.pronunciationText}>PEE-toh</Text>
              </View>
              <View style={styles.numberCard}>
                <Text style={styles.numberDigit}>8</Text>
                <Text style={styles.numberWord}>walo</Text>
                <Text style={styles.pronunciationText}>WAH-loh</Text>
              </View>
              <View style={styles.numberCard}>
                <Text style={styles.numberDigit}>9</Text>
                <Text style={styles.numberWord}>siyam</Text>
                <Text style={styles.pronunciationText}>SEE-yahm</Text>
              </View>
              <View style={styles.numberCard}>
                <Text style={styles.numberDigit}>10</Text>
                <Text style={styles.numberWord}>napulo</Text>
                <Text style={styles.pronunciationText}>nah-POO-loh</Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>At a fruit stand</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Vendor:</Text>
                <Text style={styles.bisayaText}>Pila ka buok ang gusto?</Text>
                <Text style={styles.englishText}>
                  (How many pieces do you want?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>Lima ka buok, palihug.</Text>
                <Text style={styles.englishText}>(Five pieces, please.)</Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Numbers 11-20</Text>
            <Text style={styles.sectionSubtitle}>
              Switching to Spanish-derived numbers
            </Text>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Important Note</Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  From 11 onwards, Bisaya uses Spanish-derived numbers. This is
                  completely normal and what locals use every day!
                </Text>
              </View>
            </View>

            <View style={styles.numberGrid}>
              <View style={styles.numberCard}>
                <Text style={styles.numberDigit}>11</Text>
                <Text style={styles.numberWord}>onse</Text>
                <Text style={styles.pronunciationText}>OHN-seh</Text>
              </View>
              <View style={styles.numberCard}>
                <Text style={styles.numberDigit}>12</Text>
                <Text style={styles.numberWord}>dose</Text>
                <Text style={styles.pronunciationText}>DOH-seh</Text>
              </View>
              <View style={styles.numberCard}>
                <Text style={styles.numberDigit}>13</Text>
                <Text style={styles.numberWord}>trese</Text>
                <Text style={styles.pronunciationText}>TREH-seh</Text>
              </View>
              <View style={styles.numberCard}>
                <Text style={styles.numberDigit}>14</Text>
                <Text style={styles.numberWord}>katorse</Text>
                <Text style={styles.pronunciationText}>kah-TOR-seh</Text>
              </View>
              <View style={styles.numberCard}>
                <Text style={styles.numberDigit}>15</Text>
                <Text style={styles.numberWord}>kinse</Text>
                <Text style={styles.pronunciationText}>KEEN-seh</Text>
              </View>
              <View style={styles.numberCard}>
                <Text style={styles.numberDigit}>16</Text>
                <Text style={styles.numberWord}>disisays</Text>
                <Text style={styles.pronunciationText}>dee-see-SAYS</Text>
              </View>
              <View style={styles.numberCard}>
                <Text style={styles.numberDigit}>17</Text>
                <Text style={styles.numberWord}>disisiete</Text>
                <Text style={styles.pronunciationText}>dee-see-SYEH-teh</Text>
              </View>
              <View style={styles.numberCard}>
                <Text style={styles.numberDigit}>18</Text>
                <Text style={styles.numberWord}>disisotso</Text>
                <Text style={styles.pronunciationText}>dee-see-OHT-soh</Text>
              </View>
              <View style={styles.numberCard}>
                <Text style={styles.numberDigit}>19</Text>
                <Text style={styles.numberWord}>disinuybe</Text>
                <Text style={styles.pronunciationText}>dee-see-NOOY-beh</Text>
              </View>
              <View style={styles.numberCard}>
                <Text style={styles.numberDigit}>20</Text>
                <Text style={styles.numberWord}>baynte</Text>
                <Text style={styles.pronunciationText}>BINE-teh</Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Asking about age</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Friend:</Text>
                <Text style={styles.bisayaText}>Pila na imong edad?</Text>
                <Text style={styles.englishText}>(How old are you?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>Disisiete.</Text>
                <Text style={styles.englishText}>(Seventeen.)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Friend:</Text>
                <Text style={styles.bisayaText}>Ah, batan-on pa!</Text>
                <Text style={styles.englishText}>(Ah, still young!)</Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Counting Beyond 20</Text>
            <Text style={styles.sectionSubtitle}>
              The pattern is simple - just combine!
            </Text>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Key Numbers</Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  20 = baynte{"\n"}
                  30 = traynta{"\n"}
                  40 = kwarenta{"\n"}
                  50 = singkwenta{"\n"}
                  60 = sisenta{"\n"}
                  70 = setenta{"\n"}
                  80 = otsenta{"\n"}
                  90 = nobenta{"\n"}
                  100 = syen / usa ka gatos
                </Text>
              </View>
            </View>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons name="rocket" size={24} color={colors.orange[600]} />
              </View>
              <Text style={styles.patternTitle}>The Combination Pattern</Text>
              <Text style={styles.patternText}>
                For 21-29, 31-39, etc., just combine:
              </Text>
              <View style={styles.highlightBox}>
                <Text style={styles.highlightText}>[tens] + y + [ones]</Text>
              </View>
              <Text style={styles.patternText}>Example: baynte y uno = 21</Text>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Example: 25</Text>
              <Text style={styles.numberWord}>baynte y singko</Text>
              <Text style={styles.pronunciationText}>BINE-teh ee SING-koh</Text>
              <Text style={[styles.patternText, { marginTop: 12 }]}>
                20 (baynte) + and (y) + 5 (singko)
              </Text>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Example: 37</Text>
              <Text style={styles.numberWord}>traynta y syete</Text>
              <Text style={styles.pronunciationText}>
                TRINE-tah ee SYEH-teh
              </Text>
              <Text style={[styles.patternText, { marginTop: 12 }]}>
                30 (traynta) + and (y) + 7 (syete)
              </Text>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Example: 99</Text>
              <Text style={styles.numberWord}>nobenta y nuybe</Text>
              <Text style={styles.pronunciationText}>
                noh-BEN-tah ee NOOY-beh
              </Text>
              <Text style={[styles.patternText, { marginTop: 12 }]}>
                90 (nobenta) + and (y) + 9 (nuybe)
              </Text>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Shopping - prices!</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>Pila ni?</Text>
                <Text style={styles.englishText}>(How much is this?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Vendor:</Text>
                <Text style={styles.bisayaText}>Baynte y singko pesos.</Text>
                <Text style={styles.englishText}>(Twenty-five pesos.)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>Sige, kuhaon nako.</Text>
                <Text style={styles.englishText}>
                  (Okay, I&apos;ll take it.)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Practical Phrases</Text>
            <Text style={styles.sectionSubtitle}>
              Essential questions using numbers
            </Text>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>
                Asking &ldquo;How many?&rdquo;
              </Text>
              <Text style={styles.bisayaText}>Pila ka buok?</Text>
              <Text style={styles.englishText}>How many pieces?</Text>
              <Text style={styles.pronunciationText}>pee-LAH kah boo-OHK</Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Use when counting items (fruits, bottles, etc.)
                </Text>
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
                  Use when asking about prices
                </Text>
              </View>
            </View>

            <View style={styles.breakdownBox}>
              <Text style={styles.breakdownTitle}>Asking age</Text>
              <Text style={styles.bisayaText}>Pila na imong edad?</Text>
              <Text style={styles.englishText}>How old are you?</Text>
              <Text style={styles.pronunciationText}>
                pee-LAH nah ee-MOHNG eh-DAHD
              </Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Common question when meeting people
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>
                Complete market conversation
              </Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Vendor:</Text>
                <Text style={styles.bisayaText}>Unsa imong gusto?</Text>
                <Text style={styles.englishText}>(What do you want?)</Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>Mga saging. Pila ni?</Text>
                <Text style={styles.englishText}>
                  (Some bananas. How much?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Vendor:</Text>
                <Text style={styles.bisayaText}>
                  Singkwenta pesos ang usa ka buntos.
                </Text>
                <Text style={styles.englishText}>
                  (Fifty pesos for one bunch.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>Sige, kuhaon ko duha.</Text>
                <Text style={styles.englishText}>
                  (Okay, I&apos;ll take two.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Vendor:</Text>
                <Text style={styles.bisayaText}>Syen pesos tanan.</Text>
                <Text style={styles.englishText}>
                  (One hundred pesos total.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>You:</Text>
                <Text style={styles.bisayaText}>Salamat!</Text>
                <Text style={styles.englishText}>(Thank you!)</Text>
              </View>
            </View>

            <View style={styles.summaryBox}>
              <View style={styles.iconRow}>
                <Ionicons
                  name="checkmark-circle"
                  size={28}
                  color={colors.green[600]}
                />
              </View>
              <Text style={styles.patternTitle}>You Did It!</Text>
              <Text style={styles.patternText}>
                You just learned the Bisaya number system! Now you can:
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Count from 1-10 using native Bisaya numbers
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Use Spanish-derived numbers for 11-99 (like locals do!)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Combine numbers using the &ldquo;y&rdquo; pattern
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Ask about prices, quantities, and ages confidently
                </Text>
              </View>
              <Text style={[styles.patternText, { marginTop: 16 }]}>
                Practice at the market - count your change in Bisaya!
              </Text>
            </View>
          </ScrollView>
        </Animated.View>
      </View>
    </View>
  );
}
