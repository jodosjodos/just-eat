import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import Location from "@expo/vector-icons/Entypo";
const AuthLanding = () => {
  return (
    <SafeAreaView>
      <View className="flex flex-col  p-5">
        <View className="flex flex-row items-center">
          <Image source={images.logo} />
          <Text>Just EAT</Text>
        </View>
        <Text>Satisfy Your Cravings {"\n"} with a Click</Text>
        <View>
          <View className="flex flex-row items-center bg-green-400 rounded">
            <Location
              name="location"
              className="ml-3"
              size={24}
              color="black"
            />

            <TextInput
              className="flex-1 p-3 rounded-lg border "
              placeholder="Enter location"
            />
          </View>

          <TextInput className="bg-red-500" />
        </View>
        <View>
          <TouchableOpacity>
            <Text>LogIn</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AuthLanding;
