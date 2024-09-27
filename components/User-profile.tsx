import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { userProps } from "@/types";

const UserProfile: React.FC<userProps> = (user) => {
  return (
    <View className="flex flex-row items-center justify-between p-4">
      <View>
        <Text className="font-lekton text-xl">Deliver to </Text>
        <Text className="font-kadwa-bold text-xl">{user.name}</Text>
        <TouchableOpacity></TouchableOpacity>
      </View>
      <View>
        <Image source={user.profile} />
      </View>
    </View>
  );
};

export default UserProfile;
