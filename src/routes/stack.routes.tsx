import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeMain from "../pages/Welcome";

import TabRoutes from "./tab.routes";

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: "#FFFFFF",
      },
    }}
  >
    <stackRoutes.Screen name="Welcome" component={WelcomeMain} />
    <stackRoutes.Screen name="Weather" component={TabRoutes} />
    <stackRoutes.Screen name="Location" component={TabRoutes} />
  </stackRoutes.Navigator>
);

export default AppRoutes;
