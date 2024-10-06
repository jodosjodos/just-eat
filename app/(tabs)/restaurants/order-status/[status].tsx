import { View, Text, Pressable, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { router, useNavigation } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import StepIndicator from "react-native-step-indicator";
import { Image } from "react-native";
import { images } from "@/constants";
const labels = [
  "Your order is accepted",
  "Preparing your order",
  "Your order is ready",
  "The driver is on the way",
  "Delivered",
];
const customStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 35,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 6,
  stepStrokeCurrentColor: "#024220",
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: "#024220",
  separatorUnFinishedColor: "#D6FFD9",
  separatorFinishedColor: "#024220",
  stepIndicatorFinishedColor: "#024220",
  stepIndicatorUnFinishedColor: "#D6FFD9",
  stepIndicatorCurrentColor: "#024220",
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 18,
  stepIndicatorLabelCurrentColor: "#fff",
  stepIndicatorLabelFinishedColor: "#fff",
  stepIndicatorLabelUnFinishedColor: "#000",
  labelColor: "#000",
  labelSize: 20,
  currentStepLabelColor: "#024220",
};
const renderStepIndicator = ({
  position,
  stepStatus,
}: {
  position: number;
  stepStatus: string;
}) => {
  switch (stepStatus) {
    case "current":
      return <Ionicons name="ellipse" size={24} color="#024220" />;
    case "finished":
      return <Ionicons name="checkmark" size={24} color="white" />;
    case "unfinished":
      return <Ionicons name="ellipse" size={24} color="#D6FFD9" />;
    default:
      return <Ionicons name="ellipse" size={24} color="#B0BEC5" />;
  }
};

const OrderStatusPage = () => {
  const navigation = useNavigation();
  const [currentStep, setCurrentStep] = useState<number>(0);
  console.log(currentStep);

  useEffect(() => {
    navigation.setOptions({
      headerBackVisible: false,
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
            Status
          </Text>
        </View>
      ),
    });
  }, []);
  const handleStepPress = () => {
    setCurrentStep((prevStep) => prevStep + 1);
    if (currentStep === labels.length - 1) {
      console.log("order completed");
    }
  };
  return (
    <SafeAreaView className="bg-white">
      <View className="h-full w-full flex flex-col px-12 space-y-12">
        {currentStep == 1 && (
          <View className="w-full">
            <Image source={images.prepareOrder} resizeMode="contain" />
          </View>
        )}
        {currentStep === 3 && (
          <View className="">
            <Image source={images.OrderDriver} resizeMode="contain" />
          </View>
        )}
        <View className="h-[50%]">
          <StepIndicator
            customStyles={customStyles}
            labels={labels}
            currentPosition={currentStep}
            direction="vertical"
            stepCount={labels.length}
            onPress={handleStepPress}
            renderStepIndicator={renderStepIndicator} // Attach the custom function
          />
        </View>
        {currentStep === 0 && (
          <View className="flex flex-row justify-center">
            <Image source={images.driver} resizeMode="contain" />
          </View>
        )}
        {currentStep === 2 && (
          <View>
            <Image source={images.readyOrder} />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default OrderStatusPage;
