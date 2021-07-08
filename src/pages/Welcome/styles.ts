import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.SafeAreaView`
  align-items: center;
  justify-content: space-around;
  padding: ${RFValue(5)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(32)}px;
  font-weight: bold;
  text-align: center;
  color: #52665a;
  margin-top: ${RFValue(10)}px;
  margin-bottom: ${RFValue(15)}px;
  line-height: ${RFValue(34)}px;
`;

export const SubTitle = styled.Text`
  text-align: center;
  font-size: ${RFValue(18)}px;
  padding: ${RFValue(40)}px;
  color: #52665a;
`;

export const Img = styled.Image`
  height: 30%;
  margin-top: ${RFValue(20)}px;
  border-radius: ${RFValue(10)}px;
`;

export const Input = styled.TextInput`
  border-bottom-width: ${RFValue(1)}px;
  text-align: center;
  align-items: center;
  padding-bottom: ${RFValue(1)}px;
  border-color: #cfcfcf;
  color: #52665a;
  width: ${RFValue(300)}px;
  font-size: ${RFValue(20)}px;
`;
