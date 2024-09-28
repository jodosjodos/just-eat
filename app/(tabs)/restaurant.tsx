import { View, Text, ScrollView, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchComponent from "@/components/home/Search-component";
import UserProfile from "@/components/User-profile";
import { restaurants, user } from "@/constants/data";
import RestaurantOverview from "@/components/restaurant/RestaurantOverView";

const Restaurant = () => {
  return (
    <SafeAreaView className="bg-white h-[100%] w-[100%]">
      <View className="flex flex-col justify-center">
        <FlatList
          numColumns={2}
          data={restaurants}
          keyExtractor={(res) => res.id.toString()}
          renderItem={({ item }) => <RestaurantOverview restaurant={item} />}
          columnWrapperStyle={{ justifyContent: "space-evenly"  , paddingVertical:24}}
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

export default Restaurant;
