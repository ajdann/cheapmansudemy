// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./routes/DrawerNavigator";



function App() {
  return (
    <>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </>
  );
}

export default App;
