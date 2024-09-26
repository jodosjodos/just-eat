import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React, {  useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { images } from "@/constants";
import { styles } from "@/constants/styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

 

  const handleSubmit = () => {
    if (!email || !username || !password || !confirmPassword) {
      // slideIn()
      // Toast.show({
      //   type: "error", // can be 'success', 'error', or 'info'
      //   text1: "Hello",
      //   text2: "This is a success toast",
      // });
    }
  };
  return (
    <SafeAreaView className="bg-white" style={{ zIndex: 1 }}>
      <View className="flex flex-col px-5  h-full">
        <View className="flex flex-col gap-y-9">
          <View className="flex flex-row items-center gap-9">
            <Image source={images.logo} className="self-start z-10" />
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
            <View className="flex flex-row items-center">
              <FontAwesome
                name="user"
                size={23}
                color="#222"
                style={{ position: "absolute", zIndex: 9, left: 9 }}
              />
              <TextInput
                className="flex-1 p-3 rounded-lg text-xl font-lekton text-black  bg-secondary border-none pl-12"
                placeholder="User Name"
                style={styles.shadowCustom}
                value={username}
                onChangeText={setUsername}
                keyboardType="default"
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
                value={password}
                onChangeText={setPassword}
                keyboardType="default"
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
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                keyboardType="default"
              />
            </View>
          </View>
        </View>

        <View className="  px-12 py-5">
          <TouchableOpacity
            className="bg-primary  rounded-full items-center  py-5 px-8"
            onPress={handleSubmit}
          >
            <Text className="text-white font-adamina text-2xl ">
              SignUp Now
            </Text>
          </TouchableOpacity>
        </View>
        <Text className="font-kadwa text-2xl  p-3  text-center ">
          already have account
        </Text>
        <View className="   px-12 ">
          <TouchableOpacity
            className=" bg-secondary  rounded-full items-center  justify-center py-5 px-8 flex flex-row gap-x-3"
            onPress={() => router.push("/sign-in")}
          >
            <FontAwesome name="user" size={23} color="#" />
            <Text className="text-primary font-adamina text-2xl  text-center">
              LogIn
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row justify-center items-center mt-5 gap-x-5 ">
          <TouchableOpacity>
            <Image source={images.google} resizeMode="contain" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={images.facebook} resizeMode="contain" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
