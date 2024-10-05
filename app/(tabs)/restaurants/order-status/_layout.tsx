import { Stack } from "expo-router";

const OrderLayoutPage = () => {
  return (
    <Stack>
      <Stack.Screen
        name="[status]"
        options={{
        //   headerShown: false,
        }}
      />
    </Stack>
  );
};

export default OrderLayoutPage;
