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
import { ToastProvider } from "react-native-toast-notifications";
import { CustomToast } from "@/components/Custom-Toast";
// SplashScreen.preventAutoHideAsync();

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
    <ToastProvider
      placement="top"
      successColor="green"
      dangerColor="red"
      duration={4000}
      animationType="slide-in"
      renderToast={(toastOptions) => (
        <CustomToast
          message={toastOptions.message}
          id={toastOptions.id}
          type={toastOptions.type as "success" | "danger" | "warning"}
        />
      )}
    >
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
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </ToastProvider>
  );
}
