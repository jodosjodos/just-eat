import { View, Text, Pressable, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

const OrderStatusPage = () => {
  const navigation = useNavigation();
  const { status } = useLocalSearchParams();
  useEffect(() => {
    navigation.setOptions({
      headerBackVisible: false,
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
            Status
          </Text>
        </View>
      ),
    });
  }, [navigation]);
  return (
    <SafeAreaView className="bg-white">
      <ScrollView className="h-full w-full">
        
        <Text>{status}</Text>
        <Text>OrderStatusPage</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderStatusPage;
