import { Stack } from 'expo-router';
import React from "react";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Hide headers for all screens by default
      }}
    >
      {/* Tabs Stack */}
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false, // Hide header for tab screens
        }}
      />
    </Stack>
  );
}