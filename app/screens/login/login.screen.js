import React from "react";
import {View, Text, TextInput, Image, SafeAreaView, TouchableOpacity} from "react-native";
import { loginStyle } from "./login.style";

const LoginScreen =({navigation}) => {
    return(
        <SafeAreaView style={loginStyle.safeAreaView}>
            <View style={loginStyle.bodyView}>
                <Text style={loginStyle.textTest}>
                    This is the login Screen
                </Text>
                <TouchableOpacity
                style={loginStyle.buttonLogin}
                onPress={() => navigation.navigate('AppNavigator')}>
                    <Text style={loginStyle.textTest}>Press here to login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
export default LoginScreen;