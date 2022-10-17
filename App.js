import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import { NavigationAction, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Onboarding from './components/Onboarding';
import DangNhap from './screens/DangNhap';
import DangKy from './screens/DangKy';
import QuenMatKhau from './screens/QuenMatKhau';
import ResetMatKHau from './screens/ResetMatKhau';
import NhapMaOTP from './screens/NhapMaOTP'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={Onboarding}></Stack.Screen>
        <Stack.Screen name='DangNhap' component={DangNhap}></Stack.Screen>
        <Stack.Screen name='DangKy' component={DangKy}></Stack.Screen>
        <Stack.Screen name='QuenMatKhau' component={QuenMatKhau}></Stack.Screen>
        <Stack.Screen name='ResetMatKhau' component={ResetMatKHau}></Stack.Screen>
        <Stack.Screen name='NhapMaOTP' component={NhapMaOTP}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
