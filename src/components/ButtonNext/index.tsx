import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Title } from "./styles";
interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function ButtonNext({ title, ...rest }: ButtonProps) {
  return (
    <Container activeOpacity={0.7} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
