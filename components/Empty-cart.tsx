import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { images } from "@/constants";
import { router } from "expo-router";

const EmptyCart = () => {
  return (
    <View className="flex flex-col">
      <View>
        <Image source={images.cart} />
      </View>
      <View className="flex flex-col  items-center px-2">
        <Text className="font-lekton-bold text-3xl text-primary">Your Cart is Empty</Text>
        <Text className="font-lekton text-center text-primary">Looks like you haven't {"\n"} added any food to your cart yet</Text>
        <TouchableOpacity
          className="bg-secondary  rounded-full items-center  py-4 w-full "
          onPress={()=>router.push("/(tabs)/restaurants/")}
        >
          <Text className="text-primary font-kadwa-bold">Add Food To Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EmptyCart;
