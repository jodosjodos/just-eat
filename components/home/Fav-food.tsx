import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "@/constants";

const FavoriteFood = () => {
  return (
    <View className="flex flex-row w-full bg--500 justify-between px-2 py-5">
      <Image source={images.iceScream} className="w-[25%] rounded-xl"/>
      <Image source={images.gradients} className="w-[25%]"/>
      <Image source={images.pizza} className="w-[25%]"/>
      <Image source={images.sousage} className="w-[25%]"/>
    </View>
  );
};

export default FavoriteFood;
