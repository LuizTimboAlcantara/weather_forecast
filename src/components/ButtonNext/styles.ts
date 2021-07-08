import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity`
  background-color: #3d7199;
  justify-content: center;
  align-items: center;
  border-radius: ${RFValue(16)}px;
  margin-bottom: ${RFValue(10)}px;
  height: ${RFValue(70)}px;
  width: ${RFValue(70)}px;
  padding: ${RFValue(10)}px;
`;

export const Title = styled.Text`
  color: #ffffff;
  font-size: ${RFValue(24)}px;
`;
