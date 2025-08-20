import { colors } from "@/constants/Colors";
import { Image, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.cream["500"],
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <Image
        source={require("@/assets/images/logo-transparent.png")}
        style={{
          width: 200,
          height: 200,
          borderRadius: "30px",
        }}
      />
      <Text
        style={{
          fontSize: 40,
          color: colors.orange["500"],
          textAlign: "center",
        }}
      >
        My Bisaya Tutor
      </Text>
      <Text
        style={{
          fontSize: 20,
          color: colors.green["500"],
          textAlign: "center",
        }}
      >
        Your Personal, 24/7 Bisaya Tutor
      </Text>
    </View>
  );
}
