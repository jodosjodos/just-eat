import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Link, useNavigation } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import { images } from "@/constants";

const Rating: React.FC = () => {
  const [rating, setRating] = useState<number[]>([]);

  const handleStarPress = (index: number) => {
    if (rating.includes(index)) {
      setRating(rating.filter((item) => item !== index));
    } else {
      setRating([...rating, index]);
    }
  };

  return (
    <SafeAreaView className="bg-white">
      <View className="h-full w-full space-y-5">
        <Link href="/(tabs)/home" className="font-lekton text-xl  pl-8 pt-4">
          Skip
        </Link>
        <View className="flex  items-center justify-center border-b-2 border-secondary pb-6">
          <View className="flex flex-col  space-y-3">
            <Image source={images.userProfile2} />
            <View className="flex flex-row items-center justify-between space-x-3">
              <Text className="font-kadwa-bold self-center text-xl">JOHN</Text>
              <View className="flex flex-row items-center">
                {Array.from({ length: 4 }, (_, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleStarPress(index)}
                  >
                    <Ionicons
                      name={rating.includes(index) ? "star" : "star-outline"} // Filled or outlined star
                      size={30}
                      color={rating.includes(index) ? "black" : "gray"} // Black for filled stars, gray for outlined
                    />
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <TouchableOpacity className="bg-primary  rounded-full items-center  py-2  my-6">
              <Text className="text-white font-adamina text-xl ">Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex flex-col items-center justify-center space-y-4">
          <Image source={images.logoRating} />
          <Text className="font-korean-medium text-primary text-3xl">
            Just EAT
          </Text>
          <Text className="font-kadwa text-2xl">Thank you for your order</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Rating;
