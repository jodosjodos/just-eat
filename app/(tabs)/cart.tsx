import { View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { user } from "@/constants/data";
import UserProfile from "@/components/User-profile";
import SearchComponent from "@/components/home/Search-component";
import FoodDetailsCart from "@/components/restaurant/Food-item-cart";
import { useStoreSelectors } from "@/store";
import EmptyCart from "@/components/Empty-cart";
//TODO: handle clear cart , handle empty cart , handle empty order  list
const Cart = () => {
  const cart = useStoreSelectors.use.cart();
  return (
    <SafeAreaView className="bg-white">
      <View className="h-full w-full flex flex-col">
        <FlatList
          data={cart}
          keyExtractor={(res) => res.item.id.toString()}
          renderItem={({ item }) => (
            <FoodDetailsCart foodItem={item.item} quantity={item.quantity} />
          )}
          ListHeaderComponent={
            <View className="py-5">
              <UserProfile name={user.name} profile={user.profile} />
              <SearchComponent />
            </View>
          }
          ListEmptyComponent={<EmptyCart />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Cart;
