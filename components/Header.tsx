import { colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Image, SafeAreaView, Text, View } from "react-native";

export default function Header() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.orange["500"],
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          paddingVertical: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Image
            source={require("@/assets/images/logo.png")}
            style={{ width: 50, height: 50, borderRadius: 10 }}
          />
          <Text style={{ fontSize: 20, color: colors.cream["500"] }}>
            My Bisaya Tutor
          </Text>
        </View>
        <Ionicons name="settings" size={30} color={colors.cream["500"]} />
      </View>
    </SafeAreaView>
  );
}
