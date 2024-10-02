import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "@/constants/styles";
import { useRouter } from "expo-router";
const AuthLanding = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="bg-white ">
      <View className="flex flex-col px-5  h-full  justify-between">
        <View className="flex flex-col gap-y-9">
          <View className="flex flex-row items-center gap-9">
            <Image source={images.logo} className="self-start" />
            <Text className="font-korean-medium text-primary text-3xl">
              Just EAT
            </Text>
          </View>

          <Text className="font-kadwa text-3xl mt-1 p-3  ">
            Satisfy Your Cravings {"\n"} with a Click
          </Text>
          <View className="flex flex-col gap-5">
            <View className="flex flex-row items-center">
              <Entypo
                style={{ position: "absolute", zIndex: 9, left: 9 }}
                name="location"
                size={23}
                color="#222"
              />
              <TextInput
                className="flex-1 p-3 rounded-lg text-xl font-lekton text-black  bg-secondary border-none pl-12"
                placeholder="Enter location"
                style={styles.shadowCustom}
              />
            </View>
            <View className="flex flex-row items-center ">
              <Ionicons
                style={{ position: "absolute", zIndex: 9, left: 9 }}
                name="alarm"
                size={23}
                color="#222"
              />
              <TextInput
                className="flex-1 p-3 rounded-lg text-xl font-lekton text-black  bg-secondary border-none pl-12"
                placeholder="Deliver Now"
                style={styles.shadowCustom}
              />
            </View>
          </View>
        </View>

        <View className="self-start flex flex-row  w-full items-center justify-center gap-x-5  p-12">
          <TouchableOpacity
            className=" bg-secondary  rounded-full items-center  py-5 px-8 flex flex-row gap-x-3"
            onPress={() => router.push("/sign-in")}
          >
            <FontAwesome name="user" size={15} color="#" />
            <Text className="text-primary font-adamina text-2xl ">LogIn</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-primary  rounded-full items-center  py-5 px-8"
            onPress={() => router.push("/sign-up")}
          >
            <Text className="text-white font-adamina text-2xl ">SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AuthLanding;
