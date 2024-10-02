import { View, Text, Image } from "react-native";
import React from "react";
import { FoodItem } from "@/types";
import { Link } from "expo-router";
interface FoodITemProp {
  foodItem: FoodItem;
}

const FoodDetails: React.FC<FoodITemProp> = ({ foodItem }) => {
  return (
    <View
      className="flex flex-row  hover:cursor-pointer px-6 space-x-2 py-3 border-b border-secondary"
    >
      <Image
        className="rounded-xl w-1/4 h-[90%]  bg-blue-400"
        source={foodItem.smallImage}
        resizeMode="cover"
      />
      <View>
        <Link
          href={`/(tabs)/restaurants/food-item/${foodItem.id}`}
          className=" font-kadwa-bold text-primary underline text-lg"
        >
          {foodItem.name}
        </Link>
        <View className="flex flex-row  items-center space-x-4">
          <Text className="  text-xl font-lekton">${foodItem.price}</Text>
          <Text className="text-xl font-lekton">.{foodItem.deliveryPrice}</Text>
        </View>
        <Text className="font-adamina bg-primary text-white py-1 px-2 rounded-lg w-10">
          {foodItem.rating}
        </Text>
      </View>
    </View>
  );
};

export default FoodDetails;
