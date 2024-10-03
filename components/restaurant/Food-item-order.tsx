import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { FoodItem } from "@/types";
import { Link } from "expo-router";
import { foodItemOrder } from "@/types/restaurant";
interface FoodITemProp {
  foodItem: foodItemOrder;
}
//TODO:handle way to move food from cart to order page
const FoodDetailsOrder: React.FC<FoodITemProp> = ({ foodItem }) => {
  const [showCounter, setShowCounter] = useState<boolean>(false);
  const [numberOfFood, setNumberOfFood] = useState<number>(1);
  const handleIncrement = () => {
    setShowCounter(true);
  };
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
          <Text className="  text-xl font-lekton">${foodItem.totalPrice}</Text>
          <Text className="text-xl font-lekton">.{foodItem.totalDeliveryPrice}</Text>
        </View>
        <View className=" w-full flex flex-row items-center  justify-around">
          <Text className="font-adamina bg-primary text-white py-1 px-2 rounded-lg w-10">
            {foodItem.totalPrice}
          </Text>
          {showCounter ? (
             <View className="flex flex-row items-center space-x-3">
             <TouchableOpacity
               className="py-2 px-4 bg-secondary border-2 border-primary rounded-full"
               onPress={() =>
                 setNumberOfFood((prev) => (prev > 1 ? prev - 1 : prev))
               }
             >
               <Text className="text-center">-</Text>
             </TouchableOpacity>
             <Text className="font-adamina text-lg">{numberOfFood}</Text>
             <TouchableOpacity
               className="py-2 px-3 bg-secondary border-2 border-primary rounded-full"
               onPress={() => setNumberOfFood((prev) => prev + 1)}
             >
               <Text className="text-center">+</Text>
             </TouchableOpacity>
           </View>
          ) : (
            <TouchableOpacity
              className="bg-secondary px-5 py-1 rounded-md  flex items-center justify-center"
              onPress={handleIncrement}
            >
              <Text className="font- text-xl">Add</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default FoodDetailsOrder;
