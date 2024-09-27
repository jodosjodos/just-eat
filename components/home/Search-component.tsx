import { View, Text, TextInput } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { styles } from "@/constants/styles";

const SearchComponent = () => {
  return (
    <View className="flex flex-row items-center px-5">
      <FontAwesome
        name="search"
        size={23}
        color="#222"
        style={{ position: "absolute", zIndex: 9, left: 25 }}
      />
      <TextInput
        className="flex-1 p-3 rounded-2xl text-xl font-lekton text-black  bg-secondary border-none pl-12"
        placeholder="Restaurants, Foods Or Drinks..."
        keyboardType="email-address"
        autoComplete="email"
      />
    </View>
  );
};

export default SearchComponent;
