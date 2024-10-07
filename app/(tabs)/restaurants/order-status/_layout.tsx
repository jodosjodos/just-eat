import { Stack } from "expo-router";

const OrderLayoutPage = () => {
  return (
    <Stack>
      <Stack.Screen
        name="status"
        options={{
        //   headerShown: false,
        }}
      />
      <Stack.Screen
        name="real-time-order"
        options={{
        //   headerShown: false,
        }}
      />
    </Stack>
  );
};

export default OrderLayoutPage;
