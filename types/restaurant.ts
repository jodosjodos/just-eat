import { ImageSourcePropType } from "react-native";

export interface Restaurant {
  id: number;
  price: number;
  name: string;
  rating: number;
  deliveryTime: string;
  logo: ImageSourcePropType;
  typeOfCuisine: string;
  deliveryPrice: number;
  location: string;
  openTime: string;
  coverImage: ImageSourcePropType;
  distance: string;
}
export interface FoodItem {
  id: number;
  name: string;
  smallImage: ImageSourcePropType;
  coverImage: ImageSourcePropType;
  deliveryPrice: string;
  rating: number;
  price: number;
  restaurant_id: number;
  category: string;
}
