import { ImageSourcePropType } from "react-native";

export interface Restaurant {
  rs: number;
  name: string;
  rating: number;
  deliveryTime: string;
  logo: ImageSourcePropType;
  typeOfCuisine: string;
  deliveryPrice: number;
  location: string;
  openTime: string;
}
