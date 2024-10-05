import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { images } from "@/constants";
const EmptyOrder = () => {
  return (
    <View className="flex flex-col justify-center items-center space-y-2">
      <View>
        <Image source={images.noOrder} />
      </View>
      <View className="flex flex-col  items-center px-2">
        <Text className="font-lekton-bold text-2xl text-center text-primary">
          you haven't placed any orders yet
        </Text>
        <Text className="font-lekton text-center text-primary text-lg">
          When you do , they will appear here
        </Text>
      </View>
    </View>
  );
};

export default EmptyOrder;
