import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: ${RFValue(20)}px;
  margin-top: ${RFValue(30)}px;
`;

export const TitleHello = styled.Text`
  font-size: ${RFValue(32)}px;
  color: #52665a;
`;

export const TitleUsername = styled.Text`
  font-size: ${RFValue(20)}px;
  color: #52665a;
  line-height: ${RFValue(40)}px;
`;

export const ImageAvatar = styled.Image`
  width: ${RFValue(100)}px;
  height: ${RFValue(100)}px;
  border-radius: ${RFValue(40)}px; ;
`;
