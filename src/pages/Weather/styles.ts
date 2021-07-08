import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const ContainerHeader = styled.View`
  padding-right: ${RFValue(10)}px;
  padding-left: ${RFValue(10)}px;
`;

export const Forecasts = styled.View`
  padding: ${RFValue(15)}px;
  padding-right: ${RFValue(32)}px;
  width: ${RFValue(450)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  color: #52665a;
  line-height: ${RFValue(20)}px;
  margin-top: ${RFValue(2)}px;
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  line-height: ${RFValue(20)}px;
  color: #52665a;
`;

export const Week = styled.Text`
  font-size: ${RFValue(15)}px;
  color: #52665a;
  line-height: ${RFValue(20)}px;
  margin-top: ${RFValue(2)}px;
`;

export const Location = styled.Text`
  font-size: ${RFValue(15)}px;
  color: #52665a;
  line-height: ${RFValue(20)}px;
  margin-top: ${RFValue(2)}px;
`;
