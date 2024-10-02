import { View, Text, StatusBar } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
const TabIcon = ({
  icon,
  name,
  focused,
  Type,
  color,
}: {
  icon: "home" | "restaurant" | "shopping-cart" | "tag";
  name: string;
  focused: boolean;
  color?: string;
  Type: React.ElementType;
}) => {
  return (
    <View className="flex items-center justify-center py-4 flex-col  ">
      <Type size={icon === "tag" ? 27 : 30} name={icon} color="#33363F" />

      <Text
        className={`${
          focused ? "font-kreon-bold" : "font-kreon-regular"
        } text-lg`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};
const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#001",
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 0,
          height: 65,
          paddingVertical: 5,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              color={color}
              icon="home"
              name="home"
              focused={focused}
              Type={Entypo}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="restaurants"
        options={{
          title: "restaurants",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              color={color}
              icon="restaurant"
              name="restaurants"
              focused={focused}
              Type={Ionicons}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="order"
        options={{
          title: "order",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              color={color}
              icon="tag"
              name="order"
              focused={focused}
              Type={FontAwesome5}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "cart",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              color={color}
              icon="shopping-cart"
              name="cart"
              focused={focused}
              Type={Feather}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
