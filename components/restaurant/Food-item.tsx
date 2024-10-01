import { View, Text, Image } from "react-native";
import React from "react";
import { FoodItem } from "@/types";
interface FoodITemProp {
  foodItem: FoodItem;
}

const FoodDetails: React.FC<FoodITemProp> = ({ foodItem }) => {
  return (
    <View
      className="flex flex-col  hover:cursor-pointer"
      onStartShouldSetResponder={(e) => true}
      onResponderStart={() => {}}
    >
      <Image
        className="rounded-lg h-[140px] w-[170px]"
        source={foodItem.smallImage}
      />
      <Text className=" font-kadwa-bold">{foodItem.name}</Text>
      <Text className="font-lekton-bold text-primary text-xl">
        ${foodItem.price}
      </Text>
      <View className="flex flex-row justify-between items-center space-x-4">
        <Text className="font-adamina bg-primary text-white py-1 px-3 rounded-lg">
          {foodItem.rating}
        </Text>
        <Text className="font-kadwa-bold">
          {foodItem.rating} - {foodItem.deliveryPrice}
        </Text>
      </View>
    </View>
  );
};

export default FoodDetails;
