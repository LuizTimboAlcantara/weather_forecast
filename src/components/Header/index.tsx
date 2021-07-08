import React, { useContext } from "react";
import { View } from "react-native";

import avatarImage from "../../assets/user.png";

import UserContext from "../../contexts/user";

import { Container, TitleHello, TitleUsername, ImageAvatar } from "./styles";

export function Header() {
  const { avatarUrl, name } = useContext(UserContext);

  return (
    <Container>
      <View>
        <TitleHello>Olá,</TitleHello>
        {name ? <TitleUsername>{name}</TitleUsername> : <TitleUsername>Usuário</TitleUsername>}
      </View>
      {avatarUrl ? <ImageAvatar source={{ uri: avatarUrl }} resizeMode="contain" /> : <ImageAvatar source={avatarImage} resizeMode="contain" />}
    </Container>
  );
}
