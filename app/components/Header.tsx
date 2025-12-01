import useThemeColors from "@/app/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";
import {
  Appearance,
  Image,
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Animated,
  StyleSheet,
  Modal,
  ScrollView,
  Switch,
  Alert,
  Linking,
} from "react-native";
import { useState, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Header() {
  const colorScheme = useColorScheme();
  const { colors } = useThemeColors();
  const [settingsVisible, setSettingsVisible] = useState(false);
  const [resetModalVisible, setResetModalVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(300)).current;

  const toggleSettings = () => {
    if (settingsVisible) {
      Animated.timing(slideAnim, {
        toValue: 300,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setSettingsVisible(false));
    } else {
      setSettingsVisible(true);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  const toggleTheme = () => {
    if (Platform.OS === "ios") {
      Appearance.setColorScheme(colorScheme === "dark" ? "light" : "dark");
    }
  };

  const openLink = async (url: string) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert("Error", `Cannot open URL: ${url}`);
      }
    } catch (error) {
      console.error("Error opening link:", error);
      Alert.alert("Error", "Failed to open link");
    }
  };

  const handleResetAll = async () => {
    try {
      await AsyncStorage.clear();
      setResetModalVisible(false);
      Alert.alert(
        "Success",
        "All progress has been reset. Please restart the app.",
        [{ text: "OK", onPress: () => toggleSettings() }]
      );
    } catch (error) {
      console.error("Error clearing storage:", error);
      Alert.alert("Error", "Failed to reset progress. Please try again.");
    }
  };

  return (
    <>
      <SafeAreaView style={{ backgroundColor: colors.orange["500"] }}>
        <View style={styles.headerContainer}>
          {/* Logo + Title */}
          <View style={styles.logoContainer}>
            <View style={styles.logoWrapper}>
              <Image
                source={require("../assets/images/logo.png")}
                style={styles.logoImage}
                resizeMode="contain"
              />
            </View>
            <View>
              <Text style={styles.titleText}>My Bisaya Tutor</Text>
            </View>
          </View>

          {/* Settings Icon */}
          <TouchableOpacity
            onPress={toggleSettings}
            style={styles.settingsButton}
          >
            <Ionicons
              name="settings-sharp"
              size={26}
              color={colors.cream["100"]}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {/* Settings Panel */}
      <Modal
        visible={settingsVisible}
        transparent={true}
        animationType="none"
        onRequestClose={toggleSettings}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPressOut={toggleSettings}
        >
          <Animated.View
            style={[
              styles.settingsPanel,
              {
                transform: [{ translateX: slideAnim }],
                backgroundColor: colors.cream["100"],
              },
            ]}
          >
            <View style={styles.panelHandle} />

            <ScrollView style={styles.settingsContent}>
              <Text
                style={[styles.settingsTitle, { color: colors.orange["700"] }]}
              >
                Settings
              </Text>

              {/* Theme Toggle */}
              {Platform.OS !== "web" && (
                <View style={styles.settingItem}>
                  <View style={styles.settingInfo}>
                    <Ionicons
                      name={colorScheme === "dark" ? "moon" : "sunny"}
                      size={22}
                      color={colors.orange["500"]}
                    />
                    <Text
                      style={[
                        styles.settingText,
                        { color: colors.green["700"] },
                      ]}
                    >
                      Dark Mode
                    </Text>
                  </View>
                  <Switch
                    value={colorScheme === "dark"}
                    onValueChange={toggleTheme}
                    thumbColor={colors.orange["500"]}
                    trackColor={{
                      false: colors.cream["300"],
                      true: colors.orange["200"],
                    }}
                  />
                </View>
              )}

              {/* Reset All Progress */}
              <View style={styles.dangerSection}>
                <Text
                  style={[styles.sectionTitle, { color: colors.orange["600"] }]}
                >
                  Danger Zone
                </Text>
                <TouchableOpacity
                  style={[
                    styles.resetButton,
                    { backgroundColor: colors.orange["500"] },
                  ]}
                  onPress={() => setResetModalVisible(true)}
                >
                  <Ionicons
                    name="trash-outline"
                    size={20}
                    color={colors.white["100"]}
                  />
                  <Text
                    style={[
                      styles.resetButtonText,
                      { color: colors.white["100"] },
                    ]}
                  >
                    Reset All Progress
                  </Text>
                </TouchableOpacity>
                <Text
                  style={[styles.warningText, { color: colors.text["300"] }]}
                >
                  This will delete all your listening stats, vocabulary
                  progress, and grammar lessons. This cannot be undone.
                </Text>
              </View>

              {/* Legal Links */}
              <View style={styles.legalSection}>
                <TouchableOpacity
                  style={styles.legalLink}
                  onPress={() => openLink("https://mybisayatutor.com/terms")}
                >
                  <Ionicons
                    name="document-text-outline"
                    size={20}
                    color={colors.orange["500"]}
                  />
                  <Text
                    style={[styles.legalText, { color: colors.green["700"] }]}
                  >
                    Terms of Service
                  </Text>
                  <Ionicons
                    name="chevron-forward"
                    size={20}
                    color={colors.green["500"]}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.legalLink}
                  onPress={() => openLink("https://mybisayatutor.com/privacy")}
                >
                  <Ionicons
                    name="shield-checkmark-outline"
                    size={20}
                    color={colors.orange["500"]}
                  />
                  <Text
                    style={[styles.legalText, { color: colors.green["700"] }]}
                  >
                    Privacy Policy
                  </Text>
                  <Ionicons
                    name="chevron-forward"
                    size={20}
                    color={colors.green["500"]}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.versionContainer}>
                <Text
                  style={[styles.versionText, { color: colors.green["500"] }]}
                >
                  Version 1.0.0
                </Text>
              </View>
            </ScrollView>
          </Animated.View>
        </TouchableOpacity>
      </Modal>

      {/* Reset Confirmation Modal */}
      <Modal
        visible={resetModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setResetModalVisible(false)}
      >
        <View style={styles.confirmModalOverlay}>
          <View
            style={[
              styles.confirmModal,
              { backgroundColor: colors.white["100"] },
            ]}
          >
            <Ionicons name="warning" size={60} color={colors.orange["500"]} />
            <Text style={[styles.modalTitle, { color: colors.text["400"] }]}>
              Reset All Progress?
            </Text>
            <Text style={[styles.modalText, { color: colors.text["300"] }]}>
              This will permanently delete all your listening stats, vocabulary
              progress, and grammar lessons. This action cannot be undone.
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[
                  styles.modalButton,
                  { backgroundColor: colors.cream["300"] },
                ]}
                onPress={() => setResetModalVisible(false)}
              >
                <Text
                  style={[
                    styles.modalButtonText,
                    { color: colors.text["400"] },
                  ]}
                >
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.modalButton,
                  { backgroundColor: colors.orange["500"] },
                ]}
                onPress={handleResetAll}
              >
                <Text
                  style={[
                    styles.modalButtonText,
                    { color: colors.white["100"] },
                  ]}
                >
                  Reset
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  logoWrapper: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  logoImage: {
    width: 44,
    height: 44,
    borderRadius: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
    letterSpacing: 0.5,
  },
  settingsButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  settingsPanel: {
    width: "85%",
    height: "100%",
    position: "absolute",
    right: 0,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    paddingTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
  },
  panelHandle: {
    width: 40,
    height: 5,
    backgroundColor: "#ccc",
    borderRadius: 3,
    alignSelf: "center",
    marginBottom: 20,
  },
  settingsContent: {
    flex: 1,
    paddingHorizontal: 24,
  },
  settingsTitle: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  settingInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1,
  },
  settingText: {
    fontSize: 16,
    fontWeight: "500",
  },
  dangerSection: {
    marginTop: 30,
    paddingTop: 20,
    borderTopWidth: 2,
    borderTopColor: "#f0f0f0",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 12,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  resetButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  resetButtonText: {
    fontSize: 16,
    fontWeight: "700",
  },
  warningText: {
    fontSize: 13,
    marginTop: 10,
    lineHeight: 18,
    textAlign: "center",
    opacity: 0.8,
  },
  legalSection: {
    marginTop: 30,
    gap: 8,
  },
  legalLink: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: "rgba(0, 0, 0, 0.02)",
    borderRadius: 10,
  },
  legalText: {
    flex: 1,
    fontSize: 15,
    fontWeight: "500",
  },
  versionContainer: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 40,
  },
  versionText: {
    fontSize: 14,
    fontWeight: "500",
    opacity: 0.7,
  },
  confirmModalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  confirmModal: {
    width: "85%",
    maxWidth: 400,
    borderRadius: 20,
    padding: 28,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 12,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "800",
    marginTop: 16,
    marginBottom: 12,
    textAlign: "center",
  },
  modalText: {
    fontSize: 15,
    lineHeight: 22,
    textAlign: "center",
    marginBottom: 24,
  },
  modalButtons: {
    flexDirection: "row",
    gap: 12,
    width: "100%",
  },
  modalButton: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: "700",
  },
});
