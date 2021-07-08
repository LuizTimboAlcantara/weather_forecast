import { KEYGOOGLEMAPS } from "@env";

import React, { createContext, useState, useEffect } from "react";
import { Alert } from "react-native";

import Geolocation from "react-native-geolocation-service";
import Geocoder from "react-native-geocoding";

Geocoder.init(KEYGOOGLEMAPS);

interface PositionProps {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

interface LocationContextProps {
  adress?: string;
  city?: string;
  state?: string;
  position?: PositionProps;
}
const LocationContext = createContext<LocationContextProps>({});

export const LocationProvider: React.FC = ({ children }) => {
  const [adress, setAdress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");

  const [position, setPosition] = useState<PositionProps>({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          ...position,
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      },
      (error) => {
        Alert.alert("Houve um erro ao pegar a latitude e longitude.");
      }
    );

    Geocoder.from(position.latitude, position.longitude)
      .then((json) => {
        let addressComponent = json.results[0].formatted_address || "";
        let addressStateComponent = json.results[9].formatted_address || "";

        let result = addressComponent.split(",");
        setAdress(result[1] + " -" + result[2] + " - " + result[4]);

        setCity(result[2].split("-")[0].trim());
        let t = addressStateComponent.split(",")[0];

        setState(t.substr(9).trim());
      })
      .catch((error) => Alert.alert("Houve um erro na obtenção do endereço."));
  }, [adress]);

  return <LocationContext.Provider value={{ position, adress, city, state }}>{children}</LocationContext.Provider>;
};

export default LocationContext;
