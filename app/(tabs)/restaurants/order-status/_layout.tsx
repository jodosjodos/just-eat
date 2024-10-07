import { Stack } from "expo-router";

const OrderLayoutPage = () => {
  return (
    <Stack>
      <Stack.Screen name="status" options={{}} />
      <Stack.Screen name="real-time-order" options={{}} />
      <Stack.Screen
        name="rating"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default OrderLayoutPage;
