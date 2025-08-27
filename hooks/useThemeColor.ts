import { Colors } from "@/constants/Colors";
import { useState } from "react";
import { Appearance } from "react-native";

const useThemeColors = () => {
  const [colorScheme, setColorScheme] = useState<"light" | "dark">(
    Appearance.getColorScheme() ?? "light"
  );
  const colors = Colors[colorScheme];

  return { colors, colorScheme, setColorScheme };
};

export default useThemeColors;
