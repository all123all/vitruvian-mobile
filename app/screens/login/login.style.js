import { StyleSheet } from "react-native";

export const loginStyle = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bodyView: {
        width: '100%',
    },
    titleTextView: {

    },
    titleText: {
        color: '#fff',
        alignSelf: 'center',
        marginBottom: '20%',
        fontSize: 55
    },
    formView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    formLoginEmail: {
        color: '#fff',
        borderColor: '#fff',
        borderBottomWidth: 0.3,
        borderRadius: 5,
        width: '75%',
        height: 40,
        paddingLeft: 8,
        marginBottom: '1%'
    },
    formLoginPassword: {
        color: '#fff',
        borderColor: '#fff',
        borderBottomWidth: 0.3,
        borderRadius: 5,
        width: '75%',
        height: 40,
        paddingLeft: 8,
        marginBottom: '5%'
    },
    buttonLogin: {
        backgroundColor: '#ffffff',
        alignItems: 'center',
        width: '75%',
        borderColor: '#fff',
        borderRadius: 5,
        height: 40,
        justifyContent: 'center',
        marginBottom: '2%'
    },
    buttonLoginText: {
        color: '#000000',
        fontSize: 16,
    },
    buttonRegister: {
        backgroundColor: '#181818',
        alignItems: 'center',
        width: '75%',
        borderRadius: 5,
        borderColor: '#383838',
        height: 40,
        justifyContent: 'center'
    },
    buttonRegisterText: {
        color: '#fff',
        fontSize: 16
    },
})