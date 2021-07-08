import React, { useContext, FC } from "react";
import { FlatList, ActivityIndicator, Button } from "react-native";
import LocationContext from "../../contexts/location";

import { Forecast } from "../../utils/types/global";

import { Header } from "../../components/Header";
import Card from "../../components/Card";

import { Forecasts, Container, ContainerHeader, Title, SubTitle, Week, Location } from "./styles";

interface WeatherProps {
  firstDayOfWeek: string;
  latterDayOfWeek: string;
  isLoading: boolean;
  response: Forecast[];
  fetchInitial: () => void;
}

export const WeatherTime: FC<WeatherProps> = ({ firstDayOfWeek, latterDayOfWeek, isLoading, response, fetchInitial }) => {
  const { adress } = useContext(LocationContext);

  return (
    <Container>
      <ContainerHeader>
        <Header />
        <Title>Previsão do tempo</Title>
        <SubTitle>para os próximos dias!</SubTitle>
        <Week>
          Semana do dia {firstDayOfWeek} ao dia {latterDayOfWeek}
        </Week>
        <Location>{adress}</Location>
        <Button title="Atualizar Previsão" onPress={fetchInitial} />
      </ContainerHeader>
      <Forecasts>
        {isLoading ? (
          <ActivityIndicator size={50} color="#007fff" style={{ marginTop: "30%" }} />
        ) : (
          <FlatList
            keyExtractor={(item) => String(item.dt_txt)}
            data={response}
            renderItem={({ item }) => <Card data={item} />}
            showsVerticalScrollIndicator={false}
          />
        )}
      </Forecasts>
    </Container>
  );
};

export default WeatherTime;
