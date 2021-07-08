import { useNavigation } from "@react-navigation/core";
import React, { FC, useContext, useState } from "react";

import { Alert } from "react-native";
import userContext from "../../contexts/user";

import Hello from "./Welcome";

const WelcomeMain: FC = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const { getUserName, clearUser } = useContext(userContext);

  async function handleStart(name: string) {
    if (getUserName && !!name) {
      try {
        setLoading(true);
        await getUserName(name);
        navigation.navigate("Weather");
      } catch {
        Alert.alert(`Usuário ${name} não encontrado`);
      } finally {
        setLoading(false);
      }
    } else {
      clearUser && clearUser();
      navigation.navigate("Weather");
    }
  }

  return <Hello loading={loading} handleStart={(name) => handleStart(name)} />;
};

export default WelcomeMain;
