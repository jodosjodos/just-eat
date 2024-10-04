import { View, Text, Image, TouchableOpacity } from "react-native";
import { FoodItem, Order } from "@/types";
import { Link } from "expo-router";
import { useStoreSelectors } from "@/store/store";
import { useToast } from "react-native-toast-notifications";
interface FoodITemProp {
  foodItem: FoodItem;
  quantity: number;
}
const FoodDetailsCart: React.FC<FoodITemProp> = ({ foodItem, quantity }) => {
  const removeFromCart = useStoreSelectors.use.removeFromCart();
  const toast = useToast();
  const placeOrder = useStoreSelectors.use.placeOrder();
  const orderFood = () => {
    const deliveryPrice =
      foodItem.deliveryPrice === "Free"
        ? 0
        : parseFloat(foodItem.deliveryPrice);
    const orderDetails: Order = {
      id: foodItem.id,
      name: foodItem.name,
      typeOfCuisine: foodItem.category,
      timeOrdered: quantity.toString(),
      totalPrice: (foodItem.price * quantity).toString(),
      totalDeliveryPrice: deliveryPrice.toString(),
      smallImage: foodItem.smallImage,
    };
    placeOrder(orderDetails);
    removeFromCart(foodItem.id);
    toast.show("order have been placed successfully", {
      type: "success",
    });
  };
  const removeFoodFromCart = () => {
    removeFromCart(foodItem.id);
    toast.show("food item removed from cart successfully", {
      type: "success",
    });
  };
  return (
    <View className="flex flex-row  hover:cursor-pointer px-6 space-x-2 py-3 border-b border-secondary w-full">
      <Image
        className="rounded-xl w-1/4 h-[90%]  bg-blue-400"
        source={foodItem.smallImage}
        resizeMode="cover"
      />
      <View className=" flex flex-col space-y-2">
        <Link
          href={`/(tabs)/restaurants/food-item/${foodItem.id}`}
          className=" font-kadwa-bold text-primary underline text-lg"
        >
          {foodItem.name}
        </Link>
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row  items-center space-x-4">
            <Text className="  text-xl font-lekton">${foodItem.price}</Text>
            <Text className="text-xl font-lekton ">
              .{foodItem.deliveryPrice}
            </Text>
          </View>
          <Text className="font-lekton-bold text-xl text-primary">
            x{quantity}{" "}
          </Text>
        </View>
        <View className="flex flex-row items-center  space-x-12 w-full ">
          <Text className="font-adamina bg-primary text-white py-1 px-2 rounded-lg w-10">
            {foodItem.rating}
          </Text>
          <TouchableOpacity
            // className="bg-secondary px-5 py-1 rounded-md  flex items-center justify-center"
            className=""
            onPress={removeFoodFromCart}
          >
            <Text className="font-lekton text-end text-xl text-red-400 underline">
              remove
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={orderFood}>
            <Text className="font-lekton-bold text-end text-xl text-primary underline">
              Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FoodDetailsCart;
