// ./navigation/DrawerNavigator.js

import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ContactStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";
import BottomTabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{
        headerShown: false
        }}>
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;