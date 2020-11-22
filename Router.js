import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from './src/screens';

import constants from './src/utils/constants';
import DetailsScreen from './src/screens/DetailsScreen';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName={constants.SCREEN.HOME}
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "red",
                        textSize: "60px",
                    }
                }}
            >
                <Stack.Screen 
                    name={constants.SCREEN.HOME} 
                    component={HomeScreen} 
                    options = {{
                        title: 'Amiibos',
                        headerShown: false,
                    }}
                />
               
                <Stack.Screen 
                    name={constants.SCREEN.DETAILS} 
                    component={DetailsScreen} 
                    options = {{
                        title: 'Details',
                        headerShown: false,
                    }}
                />

                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;
