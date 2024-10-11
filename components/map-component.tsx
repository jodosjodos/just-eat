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
  const [markerCoords, setMarkerCoords] = useState<{ latitude: number; longitude: number } | null>(null);

  const INITIAL_REGION: Region = {
    latitude: -1.957875,
    longitude: 30.112735,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  useEffect(() => {
    if (location?.latitude && location?.longitude) {
      const newRegion = {
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };
      setRegion(newRegion);
      setMarkerCoords({ latitude: location.latitude, longitude: location.longitude });
    }
  }, [location]);

  return (
    <View style={styles.container}>
      {region ? (
        <MapView style={styles.map} region={region}>
          {markerCoords && <Marker coordinate={markerCoords} title={location?.address} />}
        </MapView>
      ) : (
        <Text>Loading map...</Text>
      )}
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "40%",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
