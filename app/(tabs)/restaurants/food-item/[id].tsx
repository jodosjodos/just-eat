import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { restaurantFoods } from "@/constants/data";
import { FoodItem } from "@/types";
const FoodItemPage = () => {
  const [foodItem, setFoodItem] = useState<FoodItem | undefined>();
  const { id } = useLocalSearchParams();
  useEffect(() => {
    const fetchedFoodItem = restaurantFoods.find(
      (food) => food.id === Number(id)
    );
    setFoodItem(fetchedFoodItem);
  });
  return (
    <SafeAreaView className="bg-white">
      <View className="h-full w-full">
        <Text>{id}</Text>
      </View>
    </SafeAreaView>
  );
};

export default FoodItemPage;
