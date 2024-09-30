import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Link, useLocalSearchParams, useNavigation } from "expo-router";
import { restaurants } from "@/constants/data";
import { SafeAreaView } from "react-native-safe-area-context";
import { Restaurant } from "@/types";
import Ionicons from "@expo/vector-icons/Ionicons";

const REstaurantDetails = () => {
  const [restaurant, setRestaurant] = useState<Restaurant>();
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();
  useEffect(() => {
    const foundRestaurant = restaurants.find((res) => res.id === Number(id));
    setRestaurant(foundRestaurant);

    navigation.setOptions({
      title: "",
      headerStyle: {
        backgroundColor: "#D6FFD9",
      },
      headerTitle: () => (
        <View className="flex flex-row items-center space-x-3">
          <Ionicons name="arrow-back-circle-sharp" size={28} color="#024220" />
          <Text className="text-primary font-lekton-bold text-xl mt-2">
            {foundRestaurant?.name || "Restaurant Details"}{" "}
          </Text>
        </View>
      ),
    });
  }, [navigation, restaurants, id]);
  return (
    <SafeAreaView className="bg-white h-full w-full">
      <View>
        <Image source={restaurant?.coverImage} />
        <Text>{restaurant?.name}</Text>
        <Text>{restaurant?.typeOfCuisine}</Text>
        <Text>{restaurant?.location}</Text>
        <View className="flex flex-row justify-between">
          <Text>Tap for hours, info and more </Text>
          <Text>{">"}</Text>
        </View>
        <View>
          <Text>{restaurant?.price}</Text>
          <Text>{restaurant?.distance}</Text>
          <Text>{restaurant?.rating}</Text>
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
