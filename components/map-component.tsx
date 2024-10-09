import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker, Region } from "react-native-maps";
import { LocationProp } from "@/types";

// Define the props type for the MapComponent
interface MapComponentProps {
  location: LocationProp | undefined;
}

export const MapComponent: React.FC<MapComponentProps> = ({ location }) => {
  const [region, setRegion] = useState<Region | null>(null);
  const [markerCoords, setMarkerCoords] = useState<{
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  } | null>(null);
  useEffect(() => {
    if (location?.latitude && location?.longitude) {
      const newRegion = {
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: location.latitudeDelta,
        longitudeDelta: location.longitudeDelta,
      };
      setRegion(newRegion);
      setMarkerCoords({
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: location.latitudeDelta,
        longitudeDelta: location.longitudeDelta,
      });
    }
  }, [location]);

  return (
    <View className="w-[100%] h-[40%]">
      {region ? (
        <MapView className="w-[100%] h-[100%]"  region={region}>
          {markerCoords && (
            <Marker coordinate={markerCoords} title={location?.address} />
          )}
        </MapView>
      ) : (
        <View className="flex flex-row items-center justify-center  h-full">
          <Text className="font-lekton-bold text-xl text-primary">Loading map...</Text>
        </View>
      )}
    </View>
  );
};


