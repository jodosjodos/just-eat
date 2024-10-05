import {
  View,
  Text,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useNavigation } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "@/constants/styles";
import { images } from "@/constants";

const PaymentPage = () => {
  const navigation = useNavigation();
  const [paymentMethod, setPaymentMethod] = useState("cash");
  useEffect(() => {
    navigation.setOptions({
      title: "",
      headerStyle: {
        backgroundColor: "#D6FFD9",
      },
      headerTitle: () => (
        <View className="flex flex-row items-center space-x-3">
          <Pressable onPress={() => router.back()}>
            <Ionicons
              name="arrow-back-circle-sharp"
              size={28}
              color="#024220"
            />
          </Pressable>
          <Text className="text-primary font-lekton-bold text-2xl mt-2">
            Payment Method
          </Text>
        </View>
      ),
    });
  }, []);
  return (
    <SafeAreaView className="bg-white">
      <ScrollView className="h-full w-full flex flex-col space-y-8">
        <View className="flex flex-row items-center px-3">
          <Image
            source={
              paymentMethod === "cash" ? images.checked : images.unChecked
            }
            className={` absolute z-50  ${paymentMethod==="cash" ?"top-2":"top3"} left-5 w-8 h-8`}
         
            resizeMode="cover"
          />
          <View
            className=" w-full py-4 rounded-lg   bg-secondary border-none pl-12"
            style={styles.shadowCustom}
          >
            <Pressable onPress={() => setPaymentMethod("cash")}>
              <Text className="font-lekton text-lg">Cash On delivery</Text>
            </Pressable>
          </View>
        </View>

        <View className="flex flex-row items-center px-3">
          <Image
            source={
              paymentMethod === "online" ? images.checked : images.unChecked
            }
            className={` absolute z-50  ${paymentMethod==="online" ?"top-2":"top3"} left-5 w-8 h-8`}
            resizeMode="cover"
          />
          <View
            className=" w-full py-4 rounded-lg   bg-secondary border-none pl-12"
            style={styles.shadowCustom}
          >
            <Pressable onPress={() => setPaymentMethod("online")}>
              <Text className="font-lekton text-lg">Online payment</Text>
            </Pressable>
          </View>
        </View>
        <Text>mee</Text>
        <Text>mee</Text>
        <Text>mee</Text>
        <Text>mee</Text>
        <Text>mee</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentPage;
