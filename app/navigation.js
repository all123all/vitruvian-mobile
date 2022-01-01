import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/home/home.screen';
import DiscoverScreen from './screens/discover/discover.screen';
import SettingScreen from './screens/settings/settings.screen';
import ShopScreen from './screens/shop/shop.screen';
import LoginScreen from './screens/login/login.screen';
import RegisterScreen from './screens/register/register.screen';

const { Navigator, Screen } = createStackNavigator();
const Stack = createStackNavigator();
export default function StackScreen(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" headerMode="nome">
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="AppNavigator" component={AppNavigator}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const Tab = createBottomTabNavigator();
function AppNavigator(){
    return(
        <NavigationContainer independent={true}>
            <Tab.Navigator
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
