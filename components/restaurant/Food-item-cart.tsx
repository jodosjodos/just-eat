import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FoodItem } from "@/types";
import { Link } from "expo-router";
interface FoodITemProp {
  foodItem: FoodItem;
}

const FoodDetailsCart: React.FC<FoodITemProp> = ({ foodItem }) => {
  return (
    <View className="flex flex-row  hover:cursor-pointer px-6 space-x-2 py-3 border-b border-secondary w-full">
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
        <View className=" w-full flex flex-row items-center  justify-around">
          <Text className="font-adamina bg-primary text-white py-1 px-2 rounded-lg w-10">
            {foodItem.rating}
          </Text>
          <TouchableOpacity className="bg-secondary px-5 py-1 rounded-md  flex items-center justify-center">
            <Text className="font- text-xl">Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FoodDetailsCart;
