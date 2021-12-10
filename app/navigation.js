import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/home/home.screen';
import DiscoverScreen from './screens/discover/discover.screen';
import SettingScreen from './screens/settings/settings.screen';
import ShopScreen from './screens/shop/shop.screen';

const { Navigator, Screen } = createStackNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppNavigator(){
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName="Home"
            headerMode="none"
            tabBarOptions={{
                activeBackgroundColor: '#0c0c0c',
                inactiveBackgroundColor: '#000',
            }}>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Discover" component={DiscoverScreen} />
                <Tab.Screen name="Shop" component={ShopScreen} />
                <Tab.Screen name="Settings" component={SettingScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}