import { View, Text, Image, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import { Link, router, Stack, useLocalSearchParams } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

const RestaurantLayout = () => {
  const params = useLocalSearchParams();
  const [count, setCount] = useState(0);
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default RestaurantLayout;
