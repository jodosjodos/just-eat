import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const FoodItem = () => {
  const { id } = useLocalSearchParams();
  console.log("there");

  return (
    <View>
      <Text>FoodItem</Text>
    </View>
  );
};

export default FoodItem;
