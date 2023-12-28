import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons,AntDesign} from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { MainStackNavigator} from "./StackNavigator";
import ProfileScreen from "../screens/ProfileScreen";
import ShopingCart from "../screens/ShopingCart";


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false
      }}>
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        tabBarIcon: ({ color, size }) => (
   
          <AntDesign name="user" color={color} size={size}/>
        ),
      }}/>
      <Tab.Screen name="Chat" component={MainStackNavigator}   options={{
        tabBarIcon: ({ color, size }) => (    
          <Ionicons name="chatbox" color={color} size={size}  />
        ),
      }}/>
    
      <Tab.Screen name="ShopingCart" component={ShopingCart} options={{
        tabBarIcon: ({ color, size }) => (
       
          <Entypo name="shopping-bag" color={color} size={size}/>
        ),
      }}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;