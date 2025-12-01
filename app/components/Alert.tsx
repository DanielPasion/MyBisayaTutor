import React from "react";
import { View, Text, useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import useThemeColors from "@/app/hooks/useThemeColor";

type Props = { text: string };

const Alert: React.FC<Props> = ({ text }) => {
  const { colors } = useThemeColors();
  const isDarkMode = useColorScheme() === "dark";

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 14,
        borderRadius: 18,
        padding: 16,
        borderWidth: 1.5,
        borderColor: isDarkMode
          ? colors.orange[400] + "50"
          : colors.orange[300] + "60",
        backgroundColor: isDarkMode
          ? colors.cream[100] + "F5"
          : colors.white[100] + "F5",
        shadowColor: isDarkMode ? colors.orange[600] : colors.orange[400],
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.12,
        shadowRadius: 6,
        elevation: 4,
      }}
    >
      <Ionicons
        name="bulb"
        size={24}
        color={isDarkMode ? colors.orange[500] : colors.orange[500]}
      />
      <Text
        style={{
          flex: 1,
          fontSize: 13,
          fontWeight: "500",
          color: colors.text[300],
          lineHeight: 18,
        }}
      >
        {text}
      </Text>
    </View>
  );
};

export default Alert;
