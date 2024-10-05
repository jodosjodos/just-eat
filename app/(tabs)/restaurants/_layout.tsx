import { View, Text, Image, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import { Link, router, Stack, useLocalSearchParams } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

const RestaurantLayout = () => {
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
      <Stack.Screen
        name="food-item"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="payment"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default RestaurantLayout;
