import { View, Text, Image } from "react-native";
import React from "react";
import { Restaurant } from "@/types";
interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantOverview: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  return (
    <View className="flex flex-col ">
      <Image
        className="rounded-lg h-[140px] w-[170px]"
        // style={{ width: "50%", height: "55%" }}
        source={restaurant.logo}
      />
      <Text className=" font-kadwa-bold text-">{restaurant.name}</Text>
      <Text className="font-lekton text-xl">Rs {restaurant.rs}</Text>
      <View className="flex flex-row justify-between items-center gap-4">
        <Text className="font-adamina bg-primary text-white py-1 px-2 rounded-lg">{restaurant.rating}</Text>
        <Text className="font-kadwa-bold">
          {restaurant.deliveryTime} - {restaurant.deliveryPrice}
        </Text>
      </View>
    </View>
  );
};

export default RestaurantOverview;
