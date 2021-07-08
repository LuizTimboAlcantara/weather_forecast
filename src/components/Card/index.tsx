import React, { FC } from "react";
import { Forecast } from "../../utils/types/global";

import { ConvertDate, ConvertHour } from "../../utils/Temp/convertDate";
import { kToC } from "../../utils/Temp/convertTemp";

import imgChuva from "../../assets/chuva.png";
import ImgNublado from "../../assets/nublado.png";
import ImgNuvens02 from "../../assets/nuvens02.png";
import ImgSol from "../../assets/sol.png";
import ImgNoiteLimpa from "../../assets/noitelimpa.png";

import { Container, Info, ImageWeather } from "./styles";
interface CardProps {
  data: Forecast;
}

const Card: FC<CardProps> = ({ data }) => {
  return (
    <Container>
      <Info>Data:{ConvertDate(data.dt_txt)}h</Info>
      <Info>Tempo: {data.weather[0].description}</Info>
      <Info>Temperatura: {kToC(data.main?.temp || 0)}ºC</Info>
      <Info>Humidade relativa do ar: {data.main?.humidity}%</Info>
      <Info>Valocidade do vento: {data.wind?.speed}Km/h</Info>
      {data.weather[0].description === "céu pouco nublado" && <ImageWeather source={ImgNublado} resizeMode="contain" />}
      {data.weather[0].description === "chuva fraca" && <ImageWeather source={imgChuva} resizeMode="contain" />}
      {data.weather[0].description === "nuvens quebradas" && <ImageWeather source={ImgNuvens02} resizeMode="contain" />}
      {data.weather[0].description === "nuvens dispersas" && <ImageWeather source={ImgNuvens02} resizeMode="contain" />}
      {data.weather[0].description === "nublado" && ConvertHour(data.dt_txt) < 18 && <ImageWeather source={ImgNuvens02} resizeMode="contain" />}
      {data.weather[0].description === "nublado" && ConvertHour(data.dt_txt) >= 18 && <ImageWeather source={ImgNoiteLimpa} resizeMode="contain" />}
      {data.weather[0].description === "chuva moderada" && <ImageWeather source={imgChuva} resizeMode="contain" />}
      {data.weather[0].description === "céu limpo" && ConvertHour(data.dt_txt) < 18 && ConvertHour(data.dt_txt) >= 6 && (
        <ImageWeather source={ImgSol} resizeMode="contain" />
      )}
      {data.weather[0].description === "céu limpo" && (ConvertHour(data.dt_txt) >= 18 || ConvertHour(data.dt_txt) <= 5) && (
        <ImageWeather source={ImgNoiteLimpa} resizeMode="contain" />
      )}
    </Container>
  );
};

export default Card;
