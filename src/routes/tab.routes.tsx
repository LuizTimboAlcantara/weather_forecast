import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import { RFValue } from "react-native-responsive-fontsize";

import { Weather } from "../pages/Weather";
import { Location } from "../pages/Location";

const AppTab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <AppTab.Navigator
      tabBarOptions={{
        activeTintColor: "#007fff",
        inactiveTintColor: "#52665A",
        style: {
          height: RFValue(100),
        },
      }}
    >
      <AppTab.Screen
        name="Clima"
        component={Weather}
        options={{
          tabBarIcon: ({ size, color }) => <Icon name="cloud" size={size} color={color} />,
        }}
      />

      <AppTab.Screen
        name="Localização"
        component={Location}
        options={{
          tabBarIcon: ({ size, color }) => <Icon name="room" size={size} color={color} />,
        }}
      />
    </AppTab.Navigator>
  );
};

export default TabRoutes;
