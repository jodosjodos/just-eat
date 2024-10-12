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

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [user, setUser] = useState<User | null>(null);
  const [initializing, setInitializing] = useState<boolean>(true);
  const [isAppReady, setIsAppReady] = useState<boolean>(false);
  const segments = useSegments();
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

  useEffect(() => {
    if (fontsLoaded || fontsError) {
      SplashScreen.hideAsync();
      setIsAppReady(true);
      if (fontsError) {
        console.error("Font loading error:", fontsError);
      }
    }
  }, [fontsLoaded, fontsError]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
      if (initializing) setInitializing(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (initializing || !isAppReady) return;

    const inAuthGroup = segments[0] === "(tabs)";

    if (user && !inAuthGroup) {
      router.replace("/(tabs)/home");
    } else if (!user && inAuthGroup) {
      router.replace("/(auth)/");
    }
  }, [user, initializing, isAppReady, segments]);
  return (
    <>
      {!fontsLoaded && !fontsError ? (
        <View className="flex flex-row justify-center items-center">
          <ActivityIndicator size="large" color="#0000ff" />
          <Text className="font-lekton-bold text-xl text-primary">
            Loading...
          </Text>
        </View>
      ) : (
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
