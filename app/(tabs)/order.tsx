import { View, Text, Pressable, FlatList } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useNavigation } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { reduxFoodData } from "@/constants/data";
import FoodDetailsCart from "@/components/restaurant/Food-item-cart";
import FoodDetailsOrder from "@/components/restaurant/Food-item-order";

const Order = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      title: "",
      headerStyle: {
        backgroundColor: "#D6FFD9",
      },
      headerTitle: () => (
        <View className="flex flex-row items-center space-x-3">
          <Pressable onPress={() => router.push("/(tabs)/home")}>
            <Ionicons
              name="arrow-back-circle-sharp"
              size={28}
              color="#024220"
            />
          </Pressable>
          <Text className="text-primary font-lekton-bold text-2xl mt-2">
            Order
          </Text>
        </View>
      ),
    });
  }, [navigation]);
  return (
    <SafeAreaView className="bg-white">
      <View className="h-full w-full flex flex-col px-4">
        <FlatList
          data={reduxFoodData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <FoodDetailsOrder foodItem={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Order;
