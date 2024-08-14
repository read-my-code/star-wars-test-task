import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import PersonDetailsScreen from '../screens/PersonDetailsScreen';
import {RootStackParamList} from '../utils/types/navigation';
import ArrowLeftIcon from '../assests/icons/ArrowLeftIcon';

const Stack = createStackNavigator<RootStackParamList>();

const MainNavigation = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PersonDetails"
            component={PersonDetailsScreen}
            options={{
              headerBackImage: () => <ArrowLeftIcon width={30} height={30} />,
              headerBackTitle: '',
              headerTitle: '',
              headerTransparent: true,
              headerLeftContainerStyle: {paddingLeft: 10},
              headerBackTitleStyle: {color: '#000'},
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default MainNavigation;
