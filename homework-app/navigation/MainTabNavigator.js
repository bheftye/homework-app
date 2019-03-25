import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeworkScreen from '../screens/HomeworkScreen';
import CreateHomeworkScreen from '../screens/CreateHomeworkScreen';
import CoursesScreen from '../screens/CoursesScreen';

const HomeworkStack = createStackNavigator({
  Homework: HomeworkScreen,
});

HomeworkStack.navigationOptions = {
  tabBarLabel: 'Homework',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-checkmark-circle${focused ? '' : '-outline'}`
          : 'md-checkmark-circle'
      }
    />
  ),
};

const CreateStack = createStackNavigator({
  CreateHomework: CreateHomeworkScreen,
});

CreateStack.navigationOptions = {
  tabBarLabel: 'Create',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-add-circle${focused ? '' : '-outline'}`
          : 'md-add-circle'
      }
    />
  ),
};

const CoursesStack = createStackNavigator({
  Courses: CoursesScreen,
});

CoursesStack.navigationOptions = {
  tabBarLabel: 'Courses',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-folder' : 'md-folder'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeworkStack,
  CreateStack,
  CoursesStack,
});
