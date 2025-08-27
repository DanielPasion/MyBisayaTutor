// components/Loader.tsx
import useThemeColors from "@/hooks/useThemeColor";
import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

type LoaderProps = {
  size?: "small" | "large" | number;
  fullscreen?: boolean;
};

export default function Loader({
  size = "large",
  fullscreen = false,
}: LoaderProps) {
  const { colors } = useThemeColors();

  return (
    <View style={[styles.base, fullscreen && styles.fullscreen]}>
      <ActivityIndicator
        size={size}
        color={colors.green["500"]}
        accessibilityLabel="Loading"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },
  fullscreen: {
    flex: 1,
  },
});
