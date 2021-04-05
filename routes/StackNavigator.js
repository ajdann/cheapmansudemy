import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../screens/HomeScreen';
import Courses from '../screens/Courses';


const Stack = createStackNavigator();
const MainStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={Courses} />
      </Stack.Navigator>
    );
}
const CourseStackNavigator = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Courses" component={Courses} />
    </Stack.Navigator>
  );
};

export {MainStackNavigator, CourseStackNavigator }