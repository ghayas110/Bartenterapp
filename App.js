
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigator";
import AuthStackNavigator from './navigation/AuthStackNavigator';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  return (
    <NavigationContainer>
    {isLoggedIn ? (
      
      <DrawerNavigator />
    ) : (
      <AuthStackNavigator />
    )}
   
    </NavigationContainer>
  );
};
export default App;




