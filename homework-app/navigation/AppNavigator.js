import React from 'react';
import { createAppContainer, createSwitchNavigator, StackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import CourseCreateScreen from '../screens/CourseCreateScreen'


export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  CreateCourse: { screen: CourseCreateScreen },
}));