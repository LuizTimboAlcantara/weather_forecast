import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  background-color: #f0f0f0;
  margin: ${RFValue(5)}px 0;
  padding: ${RFValue(30)}px ${RFValue(20)}px;
  border-radius: ${RFValue(50)}px;
  box-shadow: 10px 5px 5px black;
`;

export const Info = styled.Text`
  margin-bottom: ${RFValue(5)}px;
`;

export const ImageWeather = styled.Image`
  margin-top: ${RFValue(5)}px;
  margin-left: 70%;
  position: absolute;
  height: ${RFValue(80)}px;
  border-radius: ${RFValue(50)}px;
`;
