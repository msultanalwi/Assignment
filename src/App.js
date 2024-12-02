import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "./screen/Home"
import Login from "./screen/Login"

const Stack = createNativeStackNavigator()



const App = () => {
return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" 
    screenOptions={{headerShown : false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  </NavigationContainer>
)
}

export default App