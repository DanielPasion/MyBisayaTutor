import { Colors } from "@/constants/Colors";
import { useColorScheme } from "react-native";

const useThemeColors = () => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return { colors };
};

export default useThemeColors;
