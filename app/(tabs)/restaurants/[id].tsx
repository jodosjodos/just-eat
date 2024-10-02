import { View, Text, Image, TouchableOpacity, FlatList, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Link, useLocalSearchParams, useNavigation } from "expo-router";
import { restaurantFoods, restaurants } from "@/constants/data";
import { SafeAreaView } from "react-native-safe-area-context";
import { FoodItem, Restaurant } from "@/types";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FoodDetails from "@/components/restaurant/Food-item";
const REstaurantDetails = () => {
  const [restaurant, setRestaurant] = useState<Restaurant | undefined>(); // Handle undefined case
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>("All Menu");
  const [filters, setFilters] = useState<string[]>(["All Menu"]); // Initialize filters with "All Menu"

  // Handle filter click
  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);

    // Filter the food items based on the selected filter
    const filteredFoodItems = restaurantFoods.filter(
      (food) =>
        food.restaurant_id === restaurant?.id &&
        (filter === "All Menu" || food.category === filter) // Only apply the filter if not "All Menu"
    );
    setFoodItems(filteredFoodItems);
  };

  // Fetch restaurant and food items when component mounts or id changes
  const { id } = useLocalSearchParams();
  useEffect(() => {
    const foundRestaurant = restaurants.find((res) => res.id === Number(id));
    setRestaurant(foundRestaurant);

    if (foundRestaurant) {
      // Fetch food items for the restaurant
      const filteredFoodItems = restaurantFoods.filter(
        (food) => food.restaurant_id === foundRestaurant.id
      );
      setFoodItems(filteredFoodItems);

      // Extract unique categories from the food items and create dynamic filters
      const uniqueCategories = [
        ...new Set(filteredFoodItems.map((food) => food.category)),
      ];

      // Add "All Menu" as the first option and set the filters
      setFilters(["All Menu", ...uniqueCategories]);
    } else {
      // Reset if no restaurant found
      setFoodItems([]);
      setFilters(["All Menu"]); // Reset filters
    }
  }, [restaurants, id]);
  return (
    <SafeAreaView className="bg-white h-full w-full" edges={["top", "bottom"]}>

      <View className="w-full h-full flex flex-col space-y-3">
        <Image source={restaurant?.coverImage} />
        <View className="flex flex-row ml-6 space-x-1">
          <Text className="font-kadwa-bold   text-3xl leading-none  pt-2">
            {restaurant?.name}
          </Text>
          <Text className="font-lekton text-xl leading-none self-end underline">
            {restaurant?.typeOfCuisine}
          </Text>
        </View>
        <Text className="font-kadwa text-md underline ml-6">
          {restaurant?.location}
        </Text>
        <View className="flex flex-row items-center  px-6 space-x-2">
          <Text className="font-kadwa underline">
            Tap for hours, info and more{" "}
          </Text>
          <Link href="/" className=" text-3xl">
            {/* <FontAwesome5 name="leftarrow" size={24} color="black" /> */}
            {">"}
          </Link>
        </View>
        <View className="flex flex-row items-center justify-between px-6">
          <View className="flex flex-row items-center space-x-1">
            <Text className="bg-secondary p-1 rounded-full">
              <FontAwesome5 name="dollar-sign" size={28} color="#273B4A" />
            </Text>
            <Text className="font-kreon-bold text-xl">{restaurant?.price}</Text>
          </View>
          <View className="flex flex-row items-center space-x-1">
            <Text className="bg-secondary p-1 rounded-full">
              <EvilIcons name="location" size={28} color="#273B4A" />
            </Text>
            <Text className="font-kreon-bold text-xl">
              {restaurant?.distance}
            </Text>
          </View>
          <View className="flex flex-row items-center space-x-1">
            <Text className="bg-secondary p-1 rounded-full">
              <AntDesign name="star" size={28} color="#273B4A" />
            </Text>
            <Text className="font-kreon-bold text-xl">
              {restaurant?.rating}
            </Text>
          </View>
        </View>
        <View className="flex flex-row items-center justify-center space-x-6 border-y-8 py-4 border-secondary">
          <TouchableOpacity className="bg-primary  rounded-full items-center py-3 px-5">
            <Text className="text-white font-adamina text-lg ">
              See Similar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-primary  rounded-full items-center  px-5 py-3">
            <Text className="text-white font-adamina text-lg ">
              Most popular
            </Text>
          </TouchableOpacity>
        </View>

        {/* <View> */}
          <FlatList
            data={foodItems}
            keyExtractor={(foodItem) => foodItem.id.toString()}
            renderItem={({ item }) => <FoodDetails foodItem={item} />}
            ListHeaderComponent={
              <View className="flex flex-row items-center justify-around">
                {filters.map((filter) => (
                  <TouchableOpacity
                    key={filter}
                    onPress={() => handleFilterClick(filter)}
                  >
                    <Text
                      className={`text-lg cursor-pointer ${
                        selectedFilter === filter
                          ? "text-primary font-kadwa-bold underline"
                          : "text-black font-kadwa"
                      }`}
                    >
                      {filter}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            }
          />
        {/* </View> */}
      </View>
    </SafeAreaView>
  );
};

export default REstaurantDetails;
