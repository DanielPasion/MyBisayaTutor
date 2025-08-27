import useThemeColors from "@/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

export default function TabLayout() {
  const { colors } = useThemeColors();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.orange["500"],
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: { backgroundColor: colors.white["500"] },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Tutor",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="listening"
        options={{
          title: "Listening",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="headset-outline" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="vocab"
        options={{
          title: "Vocab",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="layers-outline" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="translator"
        options={{
          title: "Translator",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book-outline" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
