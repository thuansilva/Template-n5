import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Main from '-/pages/Main';
function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#7159c1'},
        headerTintColor: '#f1f1f1',
      }}>
      <Stack.Screen name="Olá" component={Main} />
    </Stack.Navigator>
  );
}

export default Routes;
