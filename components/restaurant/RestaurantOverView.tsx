import { View, Text, Image } from "react-native";
import React from "react";
import { Restaurant } from "@/types";
interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantOverview: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  return (
    <View>
      <Image
        style={{ width: "50%", height: "55%" }}
        source={{ uri: restaurant.logo }}
      />
      <Text>{restaurant.name}</Text>
      <Text>{restaurant.name}</Text>
    </View>
  );
};

export default RestaurantOverview;
