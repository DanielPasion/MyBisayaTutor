import { Colors } from "@/constants/Colors";
import { Platform, useColorScheme } from "react-native";

const useThemeColors = () => {
  const colorScheme = useColorScheme();
  let colors = Colors[colorScheme ?? "light"];
  if (Platform.OS === "web") {
    colors = Colors["light"];
  }

  return { colors };
};

export default useThemeColors;
