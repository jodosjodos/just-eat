import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { restaurantFoods, user } from "@/constants/data";
import FoodDetails from "@/components/restaurant/Food-item";
import UserProfile from "@/components/User-profile";
import SearchComponent from "@/components/home/Search-component";
import FoodDetailsCart from "@/components/restaurant/Food-item-cart";

const History = () => {
  return (
    <SafeAreaView className="bg-white">
      <View className="h-full w-full flex flex-col">
        <FlatList
          data={restaurantFoods}
          keyExtractor={(res) => res.id.toString()}
          renderItem={({ item }) => <FoodDetailsCart foodItem={item} />}
          ListHeaderComponent={
            <View className="py-5">
              <UserProfile name={user.name} profile={user.profile} />
              <SearchComponent />
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default History;
