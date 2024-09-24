import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  shadowCustom: {
    shadowColor: "#000", // Color of the shadow (black)
    shadowOffset: {
      width: 5, // Horizontal shadow offset (5px)
      height: 26, // Vertical shadow offset (26px)
    },
    shadowOpacity: 0.5, // Adjusted opacity for stronger shadow (closer to CSS drop-shadow behavior)
    shadowRadius: 0, // Blur radius (10px) for soft edges
    elevation: 10, // Keep elevation for Android shadow (mimics the overall effect)
  },
});
