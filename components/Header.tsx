import { colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";

export default function Header() {
  return (
    <View
      style={{
        height: 100,
        backgroundColor: colors.orange["500"],
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Image
          source={require("@/assets/images/logo.png")}
          style={{
            width: 50,
            height: 50,
          }}
        />
        <Text
          style={{
            fontSize: 20,
            color: colors.cream["500"],
          }}
        >
          My Bisaya Tutor
        </Text>
      </View>
      <Ionicons name="settings" size={30} color={colors.cream["500"]} />
    </View>
  );
}
