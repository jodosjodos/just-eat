import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { Stack } from "expo-router";
import {
  Kreon_300Light,
  Kreon_400Regular,
  Kreon_500Medium,
  Kreon_700Bold,
  useFonts,
} from "@expo-google-fonts/kreon";
import { Kadwa_400Regular, Kadwa_700Bold } from "@expo-google-fonts/kadwa";
import {
  Lekton_400Regular,
  Lekton_400Regular_Italic,
  Lekton_700Bold,
} from "@expo-google-fonts/lekton";
import { Adamina_400Regular } from "@expo-google-fonts/adamina";
import * as SplashScreen from "expo-splash-screen";
// Prevent the splash screen from hiding automatically
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // Load Kreon fonts
  const [loaded, error] = useFonts({
    Kreon_300Light,
    Kreon_400Regular,
    Kreon_500Medium,
    Kreon_700Bold,
    Kadwa_400Regular,
    Kadwa_700Bold,
    Lekton_400Regular,
    Lekton_400Regular_Italic,
    Lekton_700Bold,
    Adamina_400Regular,
  });

  // Handle splash screen visibility based on font loading status
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync(); // Hide splash screen once fonts are loaded or there's an error
    }
  }, [loaded, error]);

  // Return a loading state while the font is loading
  if (!loaded && !error) {
    return null; // Optionally, you can return a loading indicator here
  }

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(auth)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
