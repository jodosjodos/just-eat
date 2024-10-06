import {
  View,
  Text,
  ScrollView,
  Pressable,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "@/constants/styles";
import { images } from "@/constants";
import { useToast } from "react-native-toast-notifications";
import { useOrderStatusSelector } from "@/store";
const PaymentPage = () => {
  const navigation = useNavigation();
  const toast = useToast();
  const orderStatus = useOrderStatusSelector.use.orderStatus();
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [expireDate, setExpireDate] = useState<string>("");
  const [cardHolder, setCardHolder] = useState<string>("");
  const [securityCode, setSecurityCode] = useState<string>("");

  const { totalPrice, subTotalPrice, deliveryPrice } = useLocalSearchParams();
  useEffect(() => {
    navigation.setOptions({
      headerBackVisible:false,
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
            Payment Type
          </Text>
        </View>
      ),
    });
  }, []);
  const handlePayment = () => {
    if (
      (!cardNumber || !expireDate || !cardHolder || !securityCode) &&
      paymentMethod === "online"
    ) {
      toast.show("all fields are required", {
        type: "danger",
      });
      //TODO: add return here
    }
    toast.show(" successfully ordered", {
      type: "success",
    });
    router.push(`/(tabs)/restaurants/order-status/${orderStatus}`)
  };
  return (
    <SafeAreaView className="bg-white">
      <ScrollView className=" w-full h-full flex flex-col space-y-5">
        <View className="flex flex-col space-y-3">
          <View className="flex flex-row items-center px-3">
            <Image
              source={
                paymentMethod === "cash" ? images.checked : images.unChecked
              }
              className={` absolute z-50  ${
                paymentMethod === "cash" ? "top-2" : "top3"
              } left-5 w-8 h-8`}
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
              className={` absolute z-50  ${
                paymentMethod === "online" ? "top-2" : "top3"
              } left-5 w-8 h-8`}
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
        </View>

        <View className="flex flex-col space-y-2 px-12">
          <View className="flex flex-row justify-between mt-3">
            <Text className="font-kadwa text-xl">Sub Total</Text>
            <Text className="font-kadwa-bold text-primary text-xl ">
              ${subTotalPrice}
            </Text>
          </View>
          <View className="flex flex-row justify-between mt-3">
            <Text className="font-kadwa text-xl">Delivery</Text>
            <Text className="font-kadwa-bold text-primary text-xl ">
              ${deliveryPrice}
            </Text>
          </View>
          <View className="flex flex-row justify-between mt-3">
            <Text className="font-kadwa text-xl">Total</Text>
            <Text className="font-kadwa-bold text-primary text-xl ">
              ${totalPrice}
            </Text>
          </View>
        </View>
        {paymentMethod === "online" && (
          <View className="flex flex-col gap-y-3 px-5">
            <View>
              <TextInput
                className="flex-1 p-3 rounded-md text-xl font-lekton text-black  bg-secondary"
                placeholder="Card number"
                style={styles.shadowCustom}
                keyboardType="number-pad"
                value={cardNumber}
                onChangeText={setCardNumber}
              />
            </View>
            <View className="relative">
              <TextInput
                className="flex-1 p-3 rounded-md text-xl font-lekton text-black  bg-secondary"
                placeholder="Expiry date"
                style={styles.shadowCustom}
                keyboardType="number-pad"
                value={expireDate}
                onChangeText={setExpireDate}
              />
              <Text className="absolute bottom-0 right-0 font-lekton text-lg mr-2">
                MM/YY
              </Text>
            </View>
            <View className="relative">
              <TextInput
                className="flex-1 p-3 rounded-md text-xl font-lekton text-black  bg-secondary"
                placeholder="Card holder"
                style={styles.shadowCustom}
                keyboardType="name-phone-pad"
                value={cardHolder}
                onChangeText={setCardHolder}
              />
            </View>
            <View className="relative">
              <TextInput
                className="flex-1 p-3 rounded-md text-xl font-lekton text-black  bg-secondary"
                placeholder="Security code"
                style={styles.shadowCustom}
                keyboardType="number-pad"
                value={securityCode}
                onChangeText={setSecurityCode}
              />
              <Text className="absolute bottom-0 right-0 font-lekton text-lg mr-2">
                CVC/CCV
              </Text>
            </View>
          </View>
        )}
        <TouchableOpacity
          className="bg-primary  rounded-full items-center  py-4 px-5 mx-3 mb-8"
          onPress={handlePayment}
        >
          <Text className="text-white font-adamina text-2xl ">DONE</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentPage;
