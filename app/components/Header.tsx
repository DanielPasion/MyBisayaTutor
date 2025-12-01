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

export default function Header() {
  const colorScheme = useColorScheme();
  const { colors } = useThemeColors();
  const [settingsVisible, setSettingsVisible] = useState(false);
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
  legalSection: {
    marginTop: 20,
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
});
