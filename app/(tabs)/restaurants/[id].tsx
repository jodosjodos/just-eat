import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Link, router, useLocalSearchParams, useNavigation } from "expo-router";
import { restaurants } from "@/constants/data";
import { SafeAreaView } from "react-native-safe-area-context";
import { Restaurant } from "@/types";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
const REstaurantDetails = () => {
  const [restaurant, setRestaurant] = useState<Restaurant>();
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();
  useEffect(() => {
    const foundRestaurant = restaurants.find((res) => res.id === Number(id));
    setRestaurant(foundRestaurant);
  }, [navigation, restaurants, id]);
  return (
    <SafeAreaView className="bg-white h-full w-full" edges={["top", "bottom"]}>
      <View className="w-full h-full flex flex-col space-y-3">
        <Image source={restaurant?.coverImage} />
        <View className="flex flex-row ml-6 space-x-1">
          <Text className="font-kadwa-bold   text-3xl leading-none  pt-2">
            {restaurant?.name}
          </Text>
          <Text className="font-lekton text-xl leading-none self-end underline">
            {restaurant?.typeOfCuisine}
          </Text>
        </View>
        <Text className="font-kadwa text-md underline ml-6">
          {restaurant?.location}
        </Text>
        <View className="flex flex-row items-center  px-6 space-x-2">
          <Text className="font-kadwa underline">
            Tap for hours, info and more{" "}
          </Text>
          <Link href="/" className=" text-3xl">
            {/* <FontAwesome5 name="leftarrow" size={24} color="black" /> */}
            {">"}
          </Link>
        </View>
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row items-center space-x-1">
            <Text className="bg-secondary p-1 rounded-full">
              <FontAwesome5 name="dollar-sign" size={28} color="#273B4A" />
            </Text>
            <Text>{restaurant?.price}</Text>
          </View>
          <View className="flex flex-row items-center space-x-1">
            <Text className="bg-secondary p-1 rounded-full">
              <EvilIcons name="location" size={28} color="#273B4A" />
            </Text>
            <Text className="font-kreon-bold text-xl">
              {restaurant?.distance} 
            </Text>
          </View>
          <View className="flex flex-row items-center space-x-1">
            <Text className="bg-secondary p-1 rounded-full">
              <AntDesign name="star" size={28} color="#273B4A" />
            </Text>
            <Text>{restaurant?.rating}</Text>
          </View>
        </View>
        <View className="flex flex-row items-center justify-between">
          <TouchableOpacity className="bg-primary  rounded-full items-center  py-5 px-8">
            <Text className="text-white font-adamina text-2xl ">
              See Similar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-primary  rounded-full items-center  py-5 px-8">
            <Text className="text-white font-adamina text-2xl ">
              Most popular
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>All Menu</Text>
          <Text>Cakes</Text>
          <Text>Pastries</Text>
          <Text>Sandwich</Text>
          <Text>Drinks</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default REstaurantDetails;
