import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Link, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { restaurantFoods } from "@/constants/data";
import { FoodItem } from "@/types";
import { Image } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
const FoodItemPage = () => {
  const [foodItem, setFoodItem] = useState<FoodItem | undefined>();
  const [numberOfFood, setNumberOfFood] = useState<number>(1);
  const { id } = useLocalSearchParams();
  useEffect(() => {
    const fetchedFoodItem = restaurantFoods.find(
      (food) => food.id === Number(id)
    );
    setFoodItem(fetchedFoodItem);
  });
  return (
    <SafeAreaView className="bg-white h-full w-full" edges={["top", "bottom"]}>
      <View className="w-full h-full flex flex-col space-y-3 relative">
        <Image
          className=" h-[50%] w-[100%] rounded-3xl"
          resizeMode="cover"
          source={foodItem?.coverImage}
          // style={{ width: "100%", height: "30%", aspectRatio: 1 ,backgroundColor:"blue" }} // Set to 100% width and 30% height
        />

        <TouchableOpacity className="absolute top-0 left-2" onPress={() => {}}>
          <AntDesign name="closecircleo" size={28} color="#024220" />
        </TouchableOpacity>

        <View className="flex flex-col ml-6 ">
          <Text className="font-kadwa-bold   text-3xl leading-none  pt-2">
            {foodItem?.name}
          </Text>
          <Text className="font-lekton text-2xl leading-none">
            .{foodItem?.category}
          </Text>
        </View>
        <View className="flex flex-row space-x-2 px-5">
          <FontAwesome5 name="dollar-sign" size={24} color="#273B4A" />
          <Text className="font-kadwa text-lg underline ml-8">
            {foodItem?.price}
          </Text>
          <Text className="font-kreon-regular self-end text-md ml-8">
            {/* {foodItem?.rating} */}
            price
          </Text>
        </View>
        <View className="flex flex-row items-center justify-between px-6">
          <View className="flex flex-row items-center space-x-1">
            <Text className="bg-secondary p-1 rounded-full">
              <FontAwesome5 name="dollar-sign" size={28} color="#273B4A" />
            </Text>
            <Text className="font-kreon-bold text-xl">
              {foodItem?.deliveryPrice}
            </Text>
            <Text className="font-kreon text-md self-end">
              {"delivery price"}
            </Text>
          </View>
          <View className="flex flex-row items-center space-x-1">
            <Text className="bg-secondary p-1 rounded-full">
              <AntDesign name="star" size={28} color="#273B4A" />
            </Text>
            <Text className="font-kreon-bold text-xl">{foodItem?.rating}</Text>
            <Text className="font-kreon text-md self-end">rating</Text>
          </View>
        </View>
        <View className="flex flex-row items-center justify-center space-x-6 border-y-8 py-3 border-secondary">
          <TouchableOpacity className="bg-primary  rounded-full items-center py-3 px-8">
            <Text className="text-white font-adamina text-lg  text-center">
              Add to Cart
            </Text>
          </TouchableOpacity>
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
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FoodItemPage;
