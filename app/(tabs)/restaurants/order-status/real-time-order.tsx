import { View, Text, Pressable, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { router, useNavigation } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "react-native";
import { images } from "@/constants";
import Feather from "@expo/vector-icons/Feather";

const RealTimeOrder = () => {
  const [remainingTime, setRemainingTime] = useState(10); // Start from 10
  const [deliverySuccess, setDeliverySuccess] = useState(false); // Track delivery status
  const navigation = useNavigation();

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
  }, []);

  useEffect(() => {
    // Start a timer to countdown
    const timer = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 1) {
          clearInterval(timer); // Clear interval when reaching 0
          setDeliverySuccess(true); // Set delivery success
          return 0;
        }
        return prev - 1; // Decrease remaining time
      });
    }, 1000); // Update every second

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  useEffect(() => {
    if (deliverySuccess) {
      const timeout = setTimeout(() => {
        // Navigate to the next page after 5 seconds
        router.push('/(tabs)/restaurants/order-status/rating'); // Replace with your desired route
      }, 5000); // 5 seconds

      return () => clearTimeout(timeout); // Cleanup on unmount
    }
  }, [deliverySuccess]);

  return (
    <SafeAreaView className="bg-white">
      <View className="h-full w-full flex flex-col space-y-10">
        <View className="bg--400 w-full py-2">
          <Image
            source={images.map1}
            resizeMode="cover"
            style={{ width: "100%", height: 350 }}
          />
        </View>
        <View className="flex flex-col space-y-12">
          <View className="relative px-5">
            <Image source={images.driver} />
            <Text className="absolute bottom-0 right-12 text-primary font-kadwa-bold">
              {remainingTime} Min away
            </Text>
          </View>
          <View className="flex flex-col px-8 space-y-2">
            {remainingTime === 0 ? (
              <Text className="text-xl font-bold">Delivered Successfully</Text>
            ) : (
              <>
                <View className="flex flex-row items-center space-x-5 w-full">
                  <Feather name="paperclip" size={24} color="black" />
                  <Text className="font-kadwa text-xl flex-grow">
                    Meet me at door
                  </Text>
                </View>
                <View className="flex flex-row items-center space-x-5 w-full">
                  <Feather name="paperclip" size={24} color="black" />
                  <Text className="font-kadwa text-xl flex-grow">
                    Bring change with you
                  </Text>
                </View>
                <View className="flex flex-row items-center space-x-5 w-full">
                  <Feather name="paperclip" size={24} color="black" />
                  <Text className="font-kadwa text-xl flex-grow">
                    I’ll arrive soon
                  </Text>
                </View>
              </>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RealTimeOrder;
