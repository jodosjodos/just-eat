import { View, Text, ScrollView, Pressable } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useNavigation } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const PaymentPage = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      title: "",
      headerStyle: {
        backgroundColor: "#D6FFD9",
      },
      headerTitle: () => (
        <View className="flex flex-row items-center space-x-3">
          <Pressable onPress={() => router.back()}>
            <Ionicons
              name="arrow-back-circle-sharp"
              size={28}
              color="#024220"
            />
          </Pressable>
          <Text className="text-primary font-lekton-bold text-2xl mt-2">
            Payment Method
          </Text>
        </View>
      ),
    });
  }, []);
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>PaymentPage</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentPage;
