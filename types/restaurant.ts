import { images } from "@/constants";
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
  location: LocationProp;
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

export interface foodItemOrder {
  id: number;
  name: string;
  typeOfCuisine: string;
  timeOrdered: string;
  totalPrice: string;
  totalDeliveryPrice: string;
  smallImage: images.veggie;
}
export interface LocationProp {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
  address:string
}
