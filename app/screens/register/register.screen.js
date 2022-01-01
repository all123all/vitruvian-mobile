import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import {registerStyle} from './register.style';

const RegisterScreen =({}) => {
    return (
        <SafeAreaView style={registerStyle.safeAreaView}>
            <View style={registerStyle.mainView}>
                <Text style={registerStyle.textTest}>Welcome to register screen</Text>
            </View>
        </SafeAreaView>
    );
} 

export default RegisterScreen;