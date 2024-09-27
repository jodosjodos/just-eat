import { View, Text, Image } from "react-native";
import React from "react";
import { Restaurant } from "@/types";
interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantOverview: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  return (
    <View className="flex flex-col">
      <Image
        className="rounded-lg h-[140px] w-[170px]"
        // style={{ width: "50%", height: "55%" }}
        source={restaurant.logo}
      />
      <Text className=" font-kadwa-bold text-">{restaurant.name}</Text>
      <Text>{restaurant.rs}</Text>
      <Text>{restaurant.rating}</Text>
      <Text>
        {restaurant.deliveryTime} - {restaurant.deliveryPrice}
      </Text>
    </View>
  );
};

export default RestaurantOverview;
