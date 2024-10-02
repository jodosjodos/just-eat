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
          <Text className="font-lekton text-xl leading-none">
            .{foodItem?.category}
          </Text>
        </View>
        <View className="flex flex-row items-center justify-between px-6">
          <View className="flex flex-row items-center space-x-1">
            <Text className="bg-secondary p-1 rounded-full">
              <FontAwesome5 name="dollar-sign" size={28} color="#273B4A" />
            </Text>
            <Text className="font-kreon-bold text-xl">{foodItem?.price}</Text>
          </View>
          <View className="flex flex-row items-center space-x-1">
            <Text className="bg-secondary p-1 rounded-full">
              <EvilIcons name="location" size={28} color="#273B4A" />
            </Text>
            <Text className="font-kreon-bold text-xl">
              {foodItem?.deliveryPrice}
            </Text>
          </View>
          <View className="flex flex-row items-center space-x-1">
            <Text className="bg-secondary p-1 rounded-full">
              <AntDesign name="star" size={28} color="#273B4A" />
            </Text>
            <Text className="font-kreon-bold text-xl">{foodItem?.rating}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FoodItemPage;
