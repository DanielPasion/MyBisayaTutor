import { Colors } from "@/constants/Colors";
import { useState } from "react";

const useThemeColors = () => {
  const [colorScheme, setColorScheme] = useState<"light" | "dark">("light");
  const colors = Colors[colorScheme];

  return { colors, colorScheme, setColorScheme };
};

export default useThemeColors;
