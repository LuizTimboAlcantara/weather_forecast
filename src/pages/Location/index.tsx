import React, { useContext } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import LocationContext from "../../contexts/location";

export function Location() {
  const { position, adress } = useContext(LocationContext);

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        initialRegion={{
          latitude: position!.latitude,
          longitude: position!.longitude,
          latitudeDelta: position!.latitudeDelta,
          longitudeDelta: position!.longitudeDelta,
        }}
        style={styles.map}
        showsMyLocationButton
      >
        <Marker coordinate={{ latitude: position!.latitude, longitude: position!.longitude }} title="Onde estou?" description={adress} />
      </MapView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  map: {
    minWidth: "150%",
    minHeight: "100%",
    position: "relative",
  },
});
