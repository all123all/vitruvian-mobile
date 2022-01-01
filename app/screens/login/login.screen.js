import React from "react";
import {View, Text, TextInput, Image, SafeAreaView, TouchableOpacity} from "react-native";
import { loginStyle } from "./login.style";

const LoginScreen =({navigation}) => {
    return(
        <SafeAreaView style={loginStyle.safeAreaView}>
            <View style={loginStyle.bodyView}>
                <View style={loginStyle.titleTextView}>
                    <Text style={loginStyle.titleText}>Welcome to Vitruvian</Text>
                </View>
                <View style={loginStyle.formView}>
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor={'#696969'}
                        style={loginStyle.formLoginEmail}
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor={'#696969'}
                        style={loginStyle.formLoginPassword}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity
                        style={loginStyle.buttonLogin}
                        onPress={() => navigation.navigate('AppNavigator')}>
                        <Text style={loginStyle.buttonLoginText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={loginStyle.buttonRegister}
                        onPress={() => navigation.navigate('Register')}>
                        <Text style={loginStyle.buttonRegisterText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
export default LoginScreen;