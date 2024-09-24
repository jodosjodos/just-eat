import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { images } from "@/constants";
import { styles } from "@/constants/styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
const SignUp = () => {
  return (
    <SafeAreaView className="bg-white ">
      <View className="flex flex-col px-5  h-full">
        <View className="flex flex-col gap-y-9">
          <View className="flex flex-row items-center gap-9">
            <Image source={images.logo} className="self-start" />
            <Text className="font-korean-medium text-text-primary text-3xl">
              Just EAT
            </Text>
          </View>
          <View className="flex flex-col gap-5">
            <View className="flex flex-row items-center">
              <FontAwesome
                name="envelope"
                size={23}
                color="#222"
                style={{ position: "absolute", zIndex: 9, left: 9 }}
              />
              <TextInput
                className="flex-1 p-3 rounded-lg text-xl font-lekton text-black  bg-secondary border-none pl-12"
                placeholder="Enter Email Address"
                style={styles.shadowCustom}
              />
            </View>
            <View className="flex flex-row items-center">
              <FontAwesome
                name="envelope"
                size={23}
                color="#222"
                style={{ position: "absolute", zIndex: 9, left: 9 }}
              />
              <TextInput
                className="flex-1 p-3 rounded-lg text-xl font-lekton text-black  bg-secondary border-none pl-12"
                placeholder="User Name"
                style={styles.shadowCustom}
              />
            </View>
            <View className="flex flex-row items-center ">
              <AntDesign
                style={{ position: "absolute", zIndex: 9, left: 9 }}
                name="lock"
                size={25}
                color="#222"
              />
              <TextInput
                className="flex-1 p-3 rounded-lg text-xl font-lekton text-black  bg-secondary border-none pl-12"
                placeholder="Enter password"
                style={styles.shadowCustom}
              />
            </View>
            <View className="flex flex-row items-center ">
              <AntDesign
                style={{ position: "absolute", zIndex: 9, left: 9 }}
                name="lock"
                size={25}
                color="#222"
              />
              <TextInput
                className="flex-1 p-3 rounded-lg text-xl font-lekton text-black  bg-secondary border-none pl-12"
                placeholder="Reenter Password"
                style={styles.shadowCustom}
              />
            </View>
            <Text className="text-primary font-lekton text-xl underline">
              Forgot Password
            </Text>
          </View>
        </View>

        <View className="self-start flex flex-row  w-full items-center justify-center gap-x-5  p-12">
          <TouchableOpacity className=" bg-secondary  rounded-full items-center  py-5 px-8 flex flex-row gap-x-3">
            <FontAwesome name="user" size={19} color="#" />
            <Text className="text-primary font-adamina text-2xl ">LogIn</Text>
          </TouchableOpacity>
        </View>
        <Text className="font-kadwa text-3xl mt-1 p-3 heigh ">
          new user for Just EAT
        </Text>
        <TouchableOpacity
          className="bg-primary  rounded-full items-center  py-5 px-8"
          onPress={() => router.push("/sign-up")}
        >
          <Text className="text-white font-adamina text-2xl ">SignUp Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
