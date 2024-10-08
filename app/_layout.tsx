import React, { useEffect, useState } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { router, Stack, useSegments } from "expo-router";
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
import { onAuthStateChanged, User } from "firebase/auth";
import { FIREBASE_AUTH } from "@/firebaseConfig";

// Prevent the splash screen from auto-hiding until the fonts are loaded
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [user, setUser] = useState<User | null>(null);
  const [initializing, setInitializing] = useState<boolean>(true);
  const [isAppReady, setIsAppReady] = useState<boolean>(false); // Ensure the app is mounted and ready
  const segments = useSegments();

  // Load Kreon fonts along with other fonts
  const [fontsLoaded, fontsError] = useFonts({
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
    if (fontsLoaded || fontsError) {
      SplashScreen.hideAsync(); // Hide splash screen once fonts are loaded or if there's an error
      setIsAppReady(true); // Set the app as ready when fonts are loaded
      if (fontsError) {
        console.error("Font loading error:", fontsError);
      }
    }
  }, [fontsLoaded, fontsError]);

  // Firebase authentication state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
      if (initializing) setInitializing(false); // Set initializing to false when auth is determined
    });
    return () => unsubscribe(); // Clean up the subscription on unmount
  }, []);

  // Ensure that routing only happens after initialization and fonts are loaded
  useEffect(() => {
    if (initializing || !isAppReady) return; // Ensure that no routing happens during initialization or before fonts are loaded

    const inAuthGroup = segments[0] === "(tabs)";

    if (user && !inAuthGroup) {
      // If authenticated and not in the auth group, navigate to home
      router.replace("/(tabs)/home");
    } else if (!user && inAuthGroup) {
      // If not authenticated and in the auth group, redirect to login
      router.replace("/(auth)/");
    }
  }, [user, initializing, isAppReady, segments]);

  // Always return a consistent component structure
  return (
    <>
      {!fontsLoaded && !fontsError ? (
        // Show loading indicator if fonts are still loading
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>Loading...</Text>
        </View>
      ) : (
        // Render the app when fonts are loaded or there's an error
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
      )}
    </>
  );
}
