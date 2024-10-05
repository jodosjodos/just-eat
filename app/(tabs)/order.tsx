import {
  View,
  Text,
  Pressable,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useNavigation } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import FoodDetailsOrder from "@/components/restaurant/Food-item-order";
import { useStoreSelectors } from "@/store/store";
import EmptyOrder from "@/components/Empty-order";

const Order = () => {
  const orders = useStoreSelectors.use.orders();
  const [totalPrice, setTotalPrice] = useState<string>("0");
  const [deliveryPrice, setDeliveryPrice] = useState<string>("0");
  const [subTotalPrice, setSubTotalPrice] = useState<string>("0");
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      title: "",
      headerStyle: {
        backgroundColor: "#D6FFD9",
      },
      headerTitle: () => (
        <View className="flex flex-row items-center space-x-3">
          <Pressable onPress={() => router.push("/(tabs)/home")}>
            <Ionicons
              name="arrow-back-circle-sharp"
              size={28}
              color="#024220"
            />
          </Pressable>
          <Text className="text-primary font-lekton-bold text-2xl mt-2">
            Order
          </Text>
        </View>
      ),
    });
    let subTotal = 0;
    orders.forEach((food) => (subTotal += parseFloat(food.totalPrice)));
    setSubTotalPrice(subTotal.toString());

    let deliveryTotal = 0;
    orders.forEach(
      (food) => (deliveryTotal += parseFloat(food.totalDeliveryPrice))
    );
    setDeliveryPrice(deliveryTotal.toString());
    setTotalPrice((deliveryTotal + subTotal).toString());
  }, [navigation, orders]);
  return (
    <SafeAreaView className="bg-white">
      <View className="h-full w-full flex flex-col px-4">
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <FoodDetailsOrder foodItem={item} />}
          ListEmptyComponent={<EmptyOrder />}
          ListFooterComponent={
            orders.length == 0 ? (
              <View></View>
            ) : (
              <View>
                <View className="flex flex-col space-y-2">
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
                <View className="">
                  {/* Add More Items */}
                  <Pressable
                    className="flex flex-row justify-between items-center py-3 border-b border-gray-200"
                    onPress={() => router.push("/(tabs)/restaurants")}
                  >
                    <Text className="text-lg text-green-700 font-semibold">
                      Add More Items
                    </Text>
                    <Ionicons name="chevron-forward" size={24} color="green" />
                  </Pressable>

                  {/* Promo Code */}
                  <Pressable className="flex flex-row justify-between items-center py-3 border-b border-gray-200">
                    <Text className="text-lg text-green-700 font-semibold">
                      Promo Code
                    </Text>
                    <Ionicons name="chevron-forward" size={24} color="green" />
                  </Pressable>

                  {/* Payment Method */}
                  <Pressable className="flex flex-row justify-between items-center py-3">
                    <Text className="text-lg text-green-700 font-semibold">
                      Payment Method
                    </Text>
                    <Ionicons name="chevron-forward" size={24} color="green" />
                  </Pressable>
                </View>
                <TouchableOpacity
                  className="bg-primary  rounded-full items-center  py-5 px-8 my-6"
                  onPress={() => router.push({pathname:"/(tabs)/restaurants/payment/",params:{subTotalPrice,totalPrice,deliveryPrice}})}
                >
                  <Text className="text-white font-adamina text-2xl ">
                    CHECK OUT
                  </Text>
                </TouchableOpacity>
              </View>
            )
          }
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default Order;
