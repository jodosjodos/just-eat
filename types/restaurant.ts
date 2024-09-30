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
  distance:string
}
