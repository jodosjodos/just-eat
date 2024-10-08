import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import UserProfile from "@/components/User-profile";
import SearchComponent from "@/components/home/Search-component";
import { restaurants, user } from "@/constants/data";
import { images } from "@/constants";
import FavoriteFood from "@/components/home/Fav-food";
import { Link } from "expo-router";
import RestaurantOverview from "@/components/restaurant/RestaurantOverView";
import { FIREBASE_AUTH } from "@/firebaseConfig";
const Home = () => {
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  return (
    <SafeAreaView className="bg-white">
      <View className="flex flex-col gap-2 w-full h-full">
        <Pressable onPress={toggleDropdown}>
          <UserProfile name={user.name} profile={user.profile} />
        </Pressable>
        <SearchComponent />
        {dropdownVisible && (
          <View className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
            <TouchableOpacity
              className="px-4 py-2 hover:bg-gray-200"
              onPress={() => {
                console.log("Account Settings clicked");
                setDropdownVisible(false); // Hide dropdown after selection
              }}
            >
              <Text className="text-gray-800">Account Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="px-4 py-2 hover:bg-gray-200"
              onPress={() => {
                FIREBASE_AUTH.signOut();
                setDropdownVisible(false);
              }}
            >
              <Text className="text-red-500">Logout</Text>
            </TouchableOpacity>
          </View>
        )}
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
