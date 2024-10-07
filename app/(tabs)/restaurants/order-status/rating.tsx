import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import { images } from "@/constants";

const Rating: React.FC = () => {
  const navigation = useNavigation();

  // State to track selected stars (using a number array)
  const [rating, setRating] = useState<number[]>([]);

  // Function to handle star press
  const handleStarPress = (index: number) => {
    if (rating.includes(index)) {
      // If the star is already selected, remove it
      setRating(rating.filter((item) => item !== index));
    } else {
      // Otherwise, add the star to the selected rating
      setRating([...rating, index]);
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <View style={{ height: "100%", width: "100%" }}>
        <Text>Skip</Text>
        <View>
          <View>
            <Image source={images.userProfile2} />
            <View>
              <Text>JOHN</Text>
              <View className="flex flex-row items-center">
                {Array.from({ length: 4 }, (_, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleStarPress(index)}
                  >
                    <Ionicons
                      name={rating.includes(index) ? "star" : "star-outline"} // Filled or outlined star
                      size={30}
                      color={rating.includes(index) ? "black" : "gray"} // Black for filled stars, gray for outlined
                    />
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Rating;
