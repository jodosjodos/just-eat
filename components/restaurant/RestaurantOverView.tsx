import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { Restaurant } from "@/types";
import { router } from "expo-router";
interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantOverview: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  return (
    <View className="flex flex-col  hover:cursor-pointer">
      <Pressable
        onPress={() => router.replace(`/(tabs)/restaurants/${restaurant.id}`)}
      >
        <Image
          className="rounded-lg h-[140px] w-[170px]"
          source={restaurant.logo}
        />
      </Pressable>

      <Text className=" font-kadwa-bold">{restaurant.name}</Text>
      <Text className="font-lekton-bold text-primary text-xl">
        ${restaurant.price}
      </Text>
      <View className="flex flex-row justify-between items-center space-x-4">
        <Text className="font-adamina bg-primary text-white py-1 px-3 rounded-lg">
          {restaurant.rating}
        </Text>
        <Text className="font-kadwa-bold">
          {restaurant.deliveryTime} - {restaurant.deliveryPrice}
        </Text>
      </View>
    </View>
  );
};

export default RestaurantOverview;
