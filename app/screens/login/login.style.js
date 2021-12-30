import { StyleSheet } from "react-native";

export const loginStyle = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: '#000',
    },
    bodyView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    textTest: {
        color: '#fff',
        alignSelf: 'center',
        textAlign: 'center',
    },
    buttonLogin: {
        width: '60%',
        backgroundColor: '#c2c2c2',
        justifyContent: 'center',
        height: 40,
    }
})