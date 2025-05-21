import React from 'react';
import {navigationName} from './navigationName';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {Dashboard, Setting} from '../page';
import {View} from 'react-native';

const MainStack = createStackNavigator();
const MainStackScreen = () => {
  return (
    <MainStack.Navigator
      initialRouteName={navigationName.dashboardScreen}
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <MainStack.Screen
        name={navigationName.dashboardScreen}
        component={Dashboard}
      />
      <MainStack.Screen
        name={navigationName.settingScreen}
        component={Setting}
      />
    </MainStack.Navigator>
  );
};

/** App navigator */
export default function AppNavigator() {
  return (
    <View style={{flex: 1}}>
      <MainStackScreen />
    </View>
  );
}
