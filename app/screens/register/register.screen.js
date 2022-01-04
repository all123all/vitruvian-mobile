import React from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import {registerStyle} from './register.style';
import imgVitru from '../../../assets/vitru-alpha.png';

const RegisterScreen =({navigation}) => {
    const doneRegister = () => {
        navigation.navigate('Login')
        Alert.alert(
            "Account created!",
            "You can now login using your Email and Password",
            [{
                text: "Ok!",
            }]
        );
    }
    return(
        <ScrollView style={registerStyle.safeAreaView}>
            <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding" : "height"} >
                <View style={registerStyle.bodyView}>
                    <View style={registerStyle.imgView}>
                        <Image
                            style={registerStyle.image}
                            source={imgVitru}
                        />
                    </View>
                    <View style={registerStyle.tittleTextView}>
                        <Text style={registerStyle.textTest}>Don't have an{'\n'}account yet?</Text>
                    </View>
                    
                    <View style={registerStyle.formView}>
                        <TextInput
                            placeholder="Full name"
                            placeholderTextColor={'#696969'}
                            style={registerStyle.formLoginEmail}
                            autoCapitalize="words"
                            textContentType='emailAddress'
                        />
                        <TextInput
                            placeholder="Username"
                            placeholderTextColor={'#696969'}
                            style={registerStyle.formLoginEmail}
                            autoCapitalize="none"
                        />
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor={'#696969'}
                            style={registerStyle.formLoginEmail}
                            autoCapitalize="none"
                            keyboardType="email-address"
                        />
                        <TextInput
                            placeholder="Password"
                            placeholderTextColor={'#696969'}
                            style={registerStyle.formLoginPassword}
                            secureTextEntry={true}
                        />
                        <TextInput
                            placeholder="Confirm password"
                            placeholderTextColor={'#696969'}
                            style={registerStyle.formLoginPassword}
                            secureTextEntry={true}
                        />
                        <TouchableOpacity
                            style={registerStyle.buttonDone}
                            onPress={() => doneRegister()}>
                            <Text style={registerStyle.buttonLoginText}>Done</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={registerStyle.buttonBack}
                            onPress={() => navigation.navigate('Login')}>
                            <Text style={registerStyle.buttonRegisterText}>Back</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
} 

export default RegisterScreen;