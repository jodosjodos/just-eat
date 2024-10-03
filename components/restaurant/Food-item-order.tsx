import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { FoodItem } from "@/types";
import { Link } from "expo-router";
import { foodItemOrder } from "@/types/restaurant";
interface FoodITemProp {
  foodItem: foodItemOrder;
}
const FoodDetailsOrder: React.FC<FoodITemProp> = ({ foodItem }) => {
  return (
    <View className="flex flex-row justify-between   py-3 border-b border-secondary">
      <Image
        className="rounded-xl w-2/6 max-h-20"
        source={foodItem.smallImage}
        resizeMode="cover"
      />
      <View>
        <Text className=" font-kadwa-bold text-primary  text-lg">
          {foodItem.name}
        </Text>
        <View className="flex flex-row  items-center space-x-4">
          <Text className="  text-xl font-lekton">
            .{foodItem.typeOfCuisine}
          </Text>
        </View>
      </View>
      <View className="flex flex-col space-y-0">
        <Text className=" font-kadwa-bold text-primary  text-md">
          ${foodItem.totalPrice}
        </Text>
        <Text className=" font-kadwa text-md">x{foodItem.timeOrdered}</Text>
      </View>
    </View>
  );
};

export default FoodDetailsOrder;
