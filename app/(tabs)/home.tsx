import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import UserProfile from "@/components/User-profile";
import SearchComponent from "@/components/home/Search-component";
import { restaurants, user } from "@/constants/data";
import { images } from "@/constants";
import FavoriteFood from "@/components/home/Fav-food";
import { Link } from "expo-router";
import RestaurantOverview from "@/components/restaurant/RestaurantOverView";
const Home = () => {
  return (
    <SafeAreaView className="bg-white">
      <View className="flex flex-col gap-2 w-full h-full">
        <UserProfile name={user.name} profile={user.profile} />
        <SearchComponent />
        <View className="w-full p-3">
          <Image
            source={images.promo}
            resizeMode="stretch"
            className="w-full"
          />
        </View>
        <View>
          <FavoriteFood />
        </View>
        <View className="flex flex-row justify-between px-3 items-center">
          <Text className="font-kadwa-bold text-2xl">Featured Restaurants</Text>
          <Link
            href="/(tabs)/restaurants"
            className="text-primary font-kadwa-bold   text-lg underline"
          >
            See all
          </Link>
        </View>
        <ScrollView>
          <View className="flex flex-row  justify-between px-3 items-center">
            <RestaurantOverview restaurant={restaurants[0]} />
            <RestaurantOverview restaurant={restaurants[1]} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
