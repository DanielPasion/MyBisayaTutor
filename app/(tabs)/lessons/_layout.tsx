import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { display: "none" },
      }}
    >
      <Tabs.Screen name="index" />

      {Array.from({ length: 20 }, (_, i) => (
        <Tabs.Screen key={i + 1} name={`${i + 1}`} />
      ))}
    </Tabs>
  );
}
