import React, { useState, useEffect, useContext, FC } from "react";
import { Alert } from "react-native";
import LocationContext from "../../contexts/location";

import WeatherTime from "./Weather";

import { fetchForecast } from "../../services/weatherApi";
import { Forecast } from "../../utils/types/global";

import { FormatDateWeek } from "../../utils/Temp/convertDate";

export const Weather: FC = () => {
  const { city, state } = useContext(LocationContext);

  const [firstDayOfWeek, setFirstDayOfWeek] = useState<string>("");
  const [latterDayOfWeek, setLatterDayOfWeek] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [response, setResponse] = useState<Forecast[]>([]);

  const fetchInitial = async () => {
    setIsLoading(true);
    try {
      const data = await fetchForecast(city!, state!);
      setResponse(data);
    } catch {
      Alert.alert("Erro ao buscar dados");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchInitial();
  }, []);

  useEffect(() => {
    const dates = FormatDateWeek();
    setFirstDayOfWeek(dates.firstDayOfWeek);
    setLatterDayOfWeek(dates.latterDayOfWeek);
  }, [firstDayOfWeek, latterDayOfWeek]);

  return (
    <WeatherTime
      firstDayOfWeek={firstDayOfWeek}
      latterDayOfWeek={latterDayOfWeek}
      isLoading={isLoading}
      response={response}
      fetchInitial={fetchInitial}
    />
  );
};
