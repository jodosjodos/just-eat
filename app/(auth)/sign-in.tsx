import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { images } from "@/constants";
import { styles } from "@/constants/styles";
import Feather from "@expo/vector-icons/Feather";
import { router } from "expo-router";
import { useToast } from "react-native-toast-notifications";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = () => {
    if (!email || !password) {
      toast.show(" all fields  are required!", {
        type: "danger",
      });
      // return
    }
    console.log("all provided ");
    router.replace("/(tabs)/home");

    //TODO: call api for submit
  };
  return (
    <SafeAreaView className="bg-white ">
      <View className="flex flex-col px-5  h-full">
        <View className="flex flex-col gap-y-9">
          <View className="flex flex-row items-center gap-9">
            <Image source={images.logo} className="self-start" />
            <Text className="font-korean-medium text-primary text-3xl">
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
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoComplete="email"
              />
            </View>
            <View className="flex flex-row items-center ">
              <Feather
                style={{ position: "absolute", zIndex: 9, left: 9 }}
                name="lock"
                size={25}
                color="#222"
              />
              <TextInput
                className="flex-1 p-3 rounded-lg text-xl font-lekton text-black  bg-secondary border-none pl-12"
                placeholder="Password"
                style={styles.shadowCustom}
                value={password}
                onChangeText={setPassword}
                keyboardType="default"
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                className="absolute right-5"
              >
                <Feather
                  name={!showPassword ? "eye" : "eye-off"}
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
            <Text className="text-primary font-lekton text-xl underline">
              Forgot Password
            </Text>
          </View>
        </View>

        <TouchableOpacity
          className="bg-secondary  rounded-full items-center  py-5 px-8 w-full  flex flex-row justify-center gap-x-2  my-8"
          onPress={handleSubmit}
          style={styles.shadowCustom}
        >
          <FontAwesome name="user" size={19} color="#" />
          <Text className="text-primary font-adamina text-2xl ">LogIn</Text>
        </TouchableOpacity>
        <Text className="font-kadwa text-3xl mt-1 p-3  ">
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

export default SignIn;
