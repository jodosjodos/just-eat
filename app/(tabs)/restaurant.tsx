import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Restaurant = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Restaurants</Text>
      </ScrollView>
    </SafeAreaView>
  );  
};

export default Restaurant;
