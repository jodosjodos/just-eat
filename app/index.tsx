import { images } from "@/constants";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function IndexPage() {
  const router = useRouter();
  const onSubmit = () => {
    router.push("/(auth)");
  };
  return (
    <SafeAreaView className="bg-white flex items-center  justify-center">
      <View className="h-full flex flex-col justify-center  items-center gap-8">
        <Image source={images.logoX} />
        <Text className="text-primary  text-3xl font-kreon-bold">
          Free Delivery Offers
        </Text>
        <Text className=" text-primary text-center font-kreon text-lg">
          Free delivery for new customers via {"\n"}credit card and other
          payment {"\n"} method
        </Text>
        <TouchableOpacity
          className="bg-primary py-5 px-9 rounded-xl w-72  items-center"
          onPress={onSubmit}
        >
          <Text className="font-kreon-bold text-white text-3xl">
            GET STARTED
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
