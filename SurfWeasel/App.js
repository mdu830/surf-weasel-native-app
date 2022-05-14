import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ReportPage from './screens/ReportPage';

const Stack = createNativeStackNavigator();

export default App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Results" component={ReportPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}