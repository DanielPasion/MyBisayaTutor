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

export default function Lesson17() {
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
    linkerCard: {
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
    linkerHeader: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 16,
    },
    linkerTitle: {
      fontSize: 28,
      fontWeight: "800",
      color: colors.text[100],
      marginLeft: 12,
    },
    linkerDescription: {
      fontSize: 15,
      color: colors.text[200],
      lineHeight: 22,
      marginBottom: 16,
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
    exampleBox: {
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
    exampleTitle: {
      fontSize: 18,
      fontWeight: "800",
      color: colors.text[100],
      marginBottom: 16,
      textAlign: "center",
    },
    examplePair: {
      marginBottom: 16,
      paddingBottom: 16,
      borderBottomWidth: 1,
      borderBottomColor: colors.orange[800] + "20",
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
    comparisonBox: {
      backgroundColor: isDarkMode
        ? colors.cream[100] + "F5"
        : colors.white[100] + "F5",
      borderRadius: 20,
      padding: 24,
      marginBottom: 20,
      borderWidth: 2,
      borderColor: colors.orange[800] + "30",
    },
    comparisonTitle: {
      fontSize: 18,
      fontWeight: "800",
      color: colors.text[100],
      marginBottom: 16,
      textAlign: "center",
    },
    comparisonRow: {
      marginBottom: 14,
    },
    wrongText: {
      fontSize: 16,
      color: colors.orange[900],
      marginBottom: 4,
      textDecorationLine: "line-through",
    },
    correctText: {
      fontSize: 16,
      fontWeight: "700",
      color: colors.text[100],
    },
    labelText: {
      fontSize: 12,
      fontWeight: "700",
      color: colors.orange[700],
      marginBottom: 4,
      textTransform: "uppercase",
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
    ruleBox: {
      backgroundColor: isDarkMode
        ? colors.cream[100] + "F5"
        : colors.white[100] + "F5",
      borderRadius: 20,
      padding: 24,
      marginBottom: 20,
      borderWidth: 2,
      borderColor: colors.orange[800] + "30",
    },
    ruleNumber: {
      fontSize: 16,
      fontWeight: "800",
      color: colors.orange[800],
      marginBottom: 12,
      textAlign: "center",
    },
    ruleText: {
      fontSize: 15,
      color: colors.text[100],
      lineHeight: 22,
      marginBottom: 12,
      textAlign: "center",
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
              <Text style={styles.lessonNumber}>Lesson 17</Text>
              <Text style={styles.headerTitle}>Linkers</Text>
              <Text style={styles.headerDescription}>
                Master nga and ug - the glue that connects Bisaya sentences
              </Text>
            </View>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons name="link" size={24} color={colors.orange[800]} />
              </View>
              <Text style={styles.patternTitle}>What Are Linkers?</Text>
              <Text style={styles.patternText}>
                Linkers are small words that connect parts of a sentence.
                They&apos;re essential in Bisaya and appear much more frequently
                than in English!
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Nga</Text> - that, which,
                  who (attributive linker)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Ug</Text> - and, to, that
                  (conjunction linker)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  These linkers make Bisaya flow naturally and correctly
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>
              Nga - The Attributive Linker
            </Text>
            <Text style={styles.sectionSubtitle}>
              Connecting descriptions to nouns
            </Text>

            <View style={styles.linkerCard}>
              <View style={styles.linkerHeader}>
                <Ionicons name="link" size={32} color={colors.orange[800]} />
                <Text style={styles.linkerTitle}>Nga</Text>
              </View>
              <Text style={styles.linkerDescription}>
                Used to link adjectives, descriptions, and relative clauses to
                nouns. Think of it as &quot;that&quot;, &quot;which&quot;, or
                &quot;who&quot; in English.
              </Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Pronunciation: &quot;nga&quot; (like &quot;ng-ah&quot; with a
                  very soft &quot;a&quot;)
                </Text>
              </View>
            </View>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>
                Nga with Adjectives (Describing Words)
              </Text>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Gwapa nga babaye</Text>
                <Text style={styles.englishText}>Beautiful woman</Text>
                <Text style={styles.pronunciationText}>
                  gwah-PAH ngah bah-BAH-yeh
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Dako nga balay</Text>
                <Text style={styles.englishText}>Big house</Text>
                <Text style={styles.pronunciationText}>
                  dah-KOH ngah bah-LYE
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Lami nga pagkaon</Text>
                <Text style={styles.englishText}>Delicious food</Text>
                <Text style={styles.pronunciationText}>
                  lah-MEE ngah pahg-kah-OHN
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Maayo nga estudyante</Text>
                <Text style={styles.englishText}>Good student</Text>
                <Text style={styles.pronunciationText}>
                  mah-AH-yoh ngah ehs-tood-YAHN-teh
                </Text>
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
              <Text style={styles.patternTitle}>Nga Pattern Rule</Text>
              <Text style={styles.patternText}>
                Structure: Adjective + nga + Noun
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  The adjective comes BEFORE the noun (unlike some languages)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Nga connects them together smoothly
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Without nga, the sentence sounds incomplete or wrong
                </Text>
              </View>
            </View>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>
                Nga with Verbs (Action Descriptions)
              </Text>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Tawo nga naglakaw</Text>
                <Text style={styles.englishText}>Person who is walking</Text>
                <Text style={styles.pronunciationText}>
                  tah-WOH ngah nahg-lah-KOW
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Bata nga nagdula</Text>
                <Text style={styles.englishText}>Child who is playing</Text>
                <Text style={styles.pronunciationText}>
                  bah-TAH ngah nahg-DOO-lah
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Libro nga gibasa niya</Text>
                <Text style={styles.englishText}>Book that he/she read</Text>
                <Text style={styles.pronunciationText}>
                  LEEB-roh ngah gee-BAH-sah nee-YAH
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Kaon nga niluto ni Nanay</Text>
                <Text style={styles.englishText}>Food that Mom cooked</Text>
                <Text style={styles.pronunciationText}>
                  kah-OHN ngah nee-LOO-toh nee nah-NYE
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Using nga in conversation</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Ana:</Text>
                <Text style={styles.bisayaText}>
                  Nakita nimo ang gwapa nga babaye?
                </Text>
                <Text style={styles.englishText}>
                  (Did you see the beautiful woman?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Pedro:</Text>
                <Text style={styles.bisayaText}>
                  Hain? Ang taas nga babaye nga nag-ilis sa yellow?
                </Text>
                <Text style={styles.englishText}>
                  (Where? The tall woman who&apos;s wearing yellow?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Ana:</Text>
                <Text style={styles.bisayaText}>
                  Dili. Ang mubo nga babaye nga nalingkod.
                </Text>
                <Text style={styles.englishText}>
                  (No. The short woman who&apos;s sitting.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Pedro:</Text>
                <Text style={styles.bisayaText}>
                  Aa, kadto! Ang babaye nga nagbasa ug libro?
                </Text>
                <Text style={styles.englishText}>
                  (Oh, that one! The woman who&apos;s reading a book?)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Ug - The Conjunction Linker</Text>
            <Text style={styles.sectionSubtitle}>
              Connecting actions and objects
            </Text>

            <View style={styles.linkerCard}>
              <View style={styles.linkerHeader}>
                <Ionicons
                  name="add-circle"
                  size={32}
                  color={colors.orange[700]}
                />
                <Text style={styles.linkerTitle}>Ug</Text>
              </View>
              <Text style={styles.linkerDescription}>
                Used to connect verbs with their objects, link actions, and join
                nouns. Similar to &quot;and&quot; or &quot;to&quot; in English,
                but with broader uses.
              </Text>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Pronunciation: &quot;oog&quot; (short and quick)
                </Text>
              </View>
            </View>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>
                Ug Connecting Verbs and Objects
              </Text>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Mokaon ko ug tinapay</Text>
                <Text style={styles.englishText}>I will eat bread</Text>
                <Text style={styles.pronunciationText}>
                  moh-kah-OHN koh oog tee-NAH-pye
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Nagbasa siya ug libro</Text>
                <Text style={styles.englishText}>He/She is reading a book</Text>
                <Text style={styles.pronunciationText}>
                  nahg-BAH-sah see-yah oog LEEB-roh
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Moinom ko ug tubig</Text>
                <Text style={styles.englishText}>I will drink water</Text>
                <Text style={styles.pronunciationText}>
                  moh-ee-NOHM koh oog TOO-big
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Nagtan-aw mi ug sine</Text>
                <Text style={styles.englishText}>We are watching a movie</Text>
                <Text style={styles.pronunciationText}>
                  nahg-tahn-OW mee oog SEE-neh
                </Text>
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
              <Text style={styles.patternTitle}>Ug Pattern Rule</Text>
              <Text style={styles.patternText}>
                Structure: Verb + ug + Object
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Ug links the action to what&apos;s being acted upon
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Think of ug as meaning &quot;of&quot; or &quot;some&quot; in
                  this context
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Very common with verbs of consumption, creation, and
                  perception
                </Text>
              </View>
            </View>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>
                Ug Meaning &quot;And&quot;
              </Text>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Ako ug ikaw</Text>
                <Text style={styles.englishText}>Me and you</Text>
                <Text style={styles.pronunciationText}>ah-KOH oog ee-KOW</Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Tinapay ug kape</Text>
                <Text style={styles.englishText}>Bread and coffee</Text>
                <Text style={styles.pronunciationText}>
                  tee-NAH-pye oog kah-PEH
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Bata ug hamtong</Text>
                <Text style={styles.englishText}>Child and adult</Text>
                <Text style={styles.pronunciationText}>
                  bah-TAH oog hahm-TOHNG
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>Adlaw ug gabii</Text>
                <Text style={styles.englishText}>Day and night</Text>
                <Text style={styles.pronunciationText}>
                  ahd-LOW oog gah-BEE-ee
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Using ug in conversation</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Maria:</Text>
                <Text style={styles.bisayaText}>
                  Unsa may imong gikaon ug gidilhig karon?
                </Text>
                <Text style={styles.englishText}>
                  (What did you eat and cook today?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Juan:</Text>
                <Text style={styles.bisayaText}>
                  Nikaon ko ug pansit ug niinom ug juice.
                </Text>
                <Text style={styles.englishText}>
                  (I ate pansit and drank juice.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Maria:</Text>
                <Text style={styles.bisayaText}>
                  Moluto ka ba ug dinner? Gusto ko ug adobo ug kang-kong.
                </Text>
                <Text style={styles.englishText}>
                  (Will you cook dinner? I want adobo and kang-kong.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Juan:</Text>
                <Text style={styles.bisayaText}>
                  Sige, moluto ko ug karne ug vegetables para nimo.
                </Text>
                <Text style={styles.englishText}>
                  (Okay, I&apos;ll cook meat and vegetables for you.)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Nga vs Ug</Text>
            <Text style={styles.sectionSubtitle}>
              Understanding when to use which
            </Text>

            <View style={styles.comparisonBox}>
              <Text style={styles.comparisonTitle}>Key Differences</Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Nga</Text> links
                  descriptions to nouns (gwapa nga babaye)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Ug</Text> links verbs to
                  objects (mokaon ug tinapay)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Nga</Text> = &quot;that,
                  which, who&quot; for descriptions
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Ug</Text> = &quot;and, to,
                  of&quot; for connections
                </Text>
              </View>
            </View>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>Side-by-Side Comparison</Text>
              <View style={styles.examplePair}>
                <Text style={styles.labelText}>Using Nga</Text>
                <Text style={styles.bisayaText}>Puti nga iro nga nagdagan</Text>
                <Text style={styles.englishText}>
                  White dog that is running
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.labelText}>Using Ug</Text>
                <Text style={styles.bisayaText}>Nagdagan ug kusog ang iro</Text>
                <Text style={styles.englishText}>The dog is running fast</Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.labelText}>Using Nga</Text>
                <Text style={styles.bisayaText}>Taas nga tawo nga maestro</Text>
                <Text style={styles.englishText}>
                  Tall person who is a teacher
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.labelText}>Using Ug</Text>
                <Text style={styles.bisayaText}>
                  Nagtudlo siya ug matematika ug siyensya
                </Text>
                <Text style={styles.englishText}>
                  He/She teaches math and science
                </Text>
              </View>
            </View>

            <View style={styles.highlightBox}>
              <Text style={styles.highlightText}>
                💡 Quick Test: If it describes WHAT something is like, use nga.
                If it shows WHAT someone is doing to something, use ug!
              </Text>
            </View>

            <View style={styles.comparisonBox}>
              <Text style={styles.comparisonTitle}>Common Mistakes</Text>
              <View style={styles.comparisonRow}>
                <Text style={styles.labelText}>❌ Wrong</Text>
                <Text style={styles.wrongText}>Gwapa ug babaye</Text>
                <Text style={styles.labelText}>✓ Correct</Text>
                <Text style={styles.correctText}>Gwapa nga babaye</Text>
                <Text style={styles.englishText}>Beautiful woman</Text>
              </View>
              <View style={styles.comparisonRow}>
                <Text style={styles.labelText}>❌ Wrong</Text>
                <Text style={styles.wrongText}>Mokaon ko nga tinapay</Text>
                <Text style={styles.labelText}>✓ Correct</Text>
                <Text style={styles.correctText}>Mokaon ko ug tinapay</Text>
                <Text style={styles.englishText}>I will eat bread</Text>
              </View>
              <View style={styles.comparisonRow}>
                <Text style={styles.labelText}>❌ Wrong</Text>
                <Text style={styles.wrongText}>
                  Basa ug libro nga interesting
                </Text>
                <Text style={styles.labelText}>✓ Correct</Text>
                <Text style={styles.correctText}>
                  Basa ug interesting nga libro
                </Text>
                <Text style={styles.englishText}>Read an interesting book</Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Complex Sentences</Text>
            <Text style={styles.sectionSubtitle}>
              Using both linkers together
            </Text>

            <View style={styles.exampleBox}>
              <Text style={styles.exampleTitle}>
                Sentences with Both Nga and Ug
              </Text>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>
                  Ang bata nga naglakaw nagdala ug dako nga bag
                </Text>
                <Text style={styles.englishText}>
                  The child who is walking is carrying a big bag
                </Text>
                <Text style={styles.pronunciationText}>
                  ahng bah-TAH ngah nahg-lah-KOW nahg-DAH-lah oog dah-KOH ngah
                  bahg
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>
                  Moluto ko ug lami nga sud-an para sa pista
                </Text>
                <Text style={styles.englishText}>
                  I will cook delicious viand for the party
                </Text>
                <Text style={styles.pronunciationText}>
                  moh-LOO-toh koh oog lah-MEE ngah sood-AHN pah-rah sah PEES-tah
                </Text>
              </View>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>
                  Nakita nako ang gwapa nga babaye nga nagbaligya ug bugas
                </Text>
                <Text style={styles.englishText}>
                  I saw the beautiful woman who is selling rice
                </Text>
                <Text style={styles.pronunciationText}>
                  nah-KEE-tah nah-KOH ahng gwah-PAH ngah bah-BAH-yeh ngah
                  nahg-bah-LEEG-yah oog BOO-gahs
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>Restaurant scene</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Customer:</Text>
                <Text style={styles.bisayaText}>
                  Naa ba kamoy lami nga adobo ug prito nga isda?
                </Text>
                <Text style={styles.englishText}>
                  (Do you have delicious adobo and fried fish?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Server:</Text>
                <Text style={styles.bisayaText}>
                  Naa. Gusto ba nimo ang bag-o nga luto nga adobo?
                </Text>
                <Text style={styles.englishText}>
                  (Yes. Do you want the freshly cooked adobo?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Customer:</Text>
                <Text style={styles.bisayaText}>
                  Oo. Ihatag nimo kanako ang dako nga plato nga may adobo ug
                  isda.
                </Text>
                <Text style={styles.englishText}>
                  (Yes. Give me the big plate that has adobo and fish.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Server:</Text>
                <Text style={styles.bisayaText}>
                  Sige. Gusto ba nimo ug mainit nga kan-on ug lamig nga tubig?
                </Text>
                <Text style={styles.englishText}>
                  (Okay. Do you want hot rice and cold water?)
                </Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Special Linker Rules</Text>
            <Text style={styles.sectionSubtitle}>
              Important patterns to know
            </Text>

            <View style={styles.ruleBox}>
              <Text style={styles.ruleNumber}>Rule 1: Nga Variations</Text>
              <Text style={styles.ruleText}>
                After words ending in vowels, nga can sound like &quot;ng&quot;
                only
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Maayo nga = Maayong (good)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Gwapa nga = Gwapang (beautiful)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  This is common in casual speech
                </Text>
              </View>
            </View>

            <View style={styles.ruleBox}>
              <Text style={styles.ruleNumber}>Rule 2: Multiple Nga</Text>
              <Text style={styles.ruleText}>
                You can use multiple nga in one sentence for clarity
              </Text>
              <View style={styles.examplePair}>
                <Text style={styles.bisayaText}>
                  Ang bata nga gwapa nga nagkanta
                </Text>
                <Text style={styles.englishText}>
                  The child who is beautiful who is singing
                </Text>
              </View>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  Each nga connects a different description to the noun
                </Text>
              </View>
            </View>

            <View style={styles.ruleBox}>
              <Text style={styles.ruleNumber}>Rule 3: Ug with Numbers</Text>
              <Text style={styles.ruleText}>
                Ug is used when counting or measuring things
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Usa ka kilo ug bugas (One kilo of rice)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Tulo ka botilya ug tubig (Three bottles of water)
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Dose ug mansanas (Twelve apples)
                </Text>
              </View>
            </View>

            <View style={styles.ruleBox}>
              <Text style={styles.ruleNumber}>Rule 4: Omitting Linkers</Text>
              <Text style={styles.ruleText}>
                In some cases, especially with very common phrases, linkers can
                be dropped in casual speech
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Formal: Mokaon ko ug tinapay
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Casual: Mokaon ko tinapay
                </Text>
              </View>
              <View style={styles.contextNote}>
                <Text style={styles.contextNoteText}>
                  BUT: It&apos;s always better to include linkers as a learner!
                </Text>
              </View>
            </View>

            <View style={styles.dialogueBox}>
              <Text style={styles.sceneLabel}>At the market</Text>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Customer:</Text>
                <Text style={styles.bisayaText}>
                  Naa bay presko nga isda ug utanon?
                </Text>
                <Text style={styles.englishText}>
                  (Do you have fresh fish and vegetables?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Vendor:</Text>
                <Text style={styles.bisayaText}>
                  Naa! Kini nga dako nga bangus ug mga presko nga kamatis.
                </Text>
                <Text style={styles.englishText}>
                  (Yes! This big milkfish and these fresh tomatoes.)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Customer:</Text>
                <Text style={styles.bisayaText}>
                  Pila ang usa ka kilo ug bangus ug gamay nga bag ug kamatis?
                </Text>
                <Text style={styles.englishText}>
                  (How much for one kilo of milkfish and a small bag of
                  tomatoes?)
                </Text>
              </View>
              <View style={styles.dialogueLine}>
                <Text style={styles.speakerName}>Vendor:</Text>
                <Text style={styles.bisayaText}>
                  Ang bag-o nga presyo: tulo-gatos ug singkwenta.
                </Text>
                <Text style={styles.englishText}>
                  (The new price: three hundred fifty.)
                </Text>
              </View>
            </View>

            <View style={styles.patternBox}>
              <View style={styles.iconRow}>
                <Ionicons name="school" size={24} color={colors.orange[800]} />
              </View>
              <Text style={styles.patternTitle}>Practice Tips</Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Start by consciously using nga and ug in every sentence
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Listen for these linkers when native speakers talk
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  If unsure, nga for descriptions, ug for actions/objects
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Read Bisaya texts and highlight every linker you find
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Practice building longer sentences with multiple linkers
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
              <Text style={styles.patternTitle}>
                Maayo Kaayo! Linkers Mastered!
              </Text>
              <Text style={styles.patternText}>
                You now understand the essential Bisaya linkers:
              </Text>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Nga</Text> links
                  adjectives and descriptions to nouns
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  <Text style={{ fontWeight: "700" }}>Ug</Text> connects verbs
                  to objects and means &quot;and&quot;
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  When to use each linker in different contexts
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  How to combine both linkers in complex sentences
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Common mistakes to avoid with linkers
                </Text>
              </View>
              <View style={styles.exampleRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.exampleText}>
                  Special rules and variations in casual speech
                </Text>
              </View>
              <Text style={[styles.patternText, { marginTop: 16 }]}>
                Master these linkers and your Bisaya will sound natural and
                fluent!
              </Text>
            </View>
          </ScrollView>
        </Animated.View>
      </View>
    </View>
  );
}
