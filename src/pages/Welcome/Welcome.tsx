import React, { FC, useState } from "react";

import { ActivityIndicator } from "react-native";
import weatherImg from "../../assets/fundo.png";

import { ButtonNext } from "../../components/ButtonNext";

import { Container, Title, Img, SubTitle, Input } from "./styles";
interface WelcomeProps {
  handleStart: (name: string) => void;
  loading: boolean;
}

export const Welcome: FC<WelcomeProps> = ({ handleStart, loading }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>("");

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChage(value: string) {
    setIsFilled(!!value);
    setName(value);
  }

  return (
    <Container>
      <Title>Como está{"\n"} o tempo?</Title>
      <Img source={weatherImg} resizeMode="contain" />
      <SubTitle>Não deixe o clima atrapalhar seus planos, nós te informamos como está o clima na sua região.</SubTitle>
      <Input
        style={(isFocused || isFilled) && { borderColor: "#32B768" }}
        placeholder="Ex: luiztimboalcantara"
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        onChangeText={handleInputChage}
      />
      <SubTitle>Informe seu username do GitHub para melhorar sua experiência com o app.</SubTitle>
      {loading && <ActivityIndicator />}
      <ButtonNext title="&gt;" onPress={() => handleStart(name)} />
    </Container>
  );
};

export default Welcome;
