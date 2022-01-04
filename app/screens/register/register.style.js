import {StyleSheet} from 'react-native';

export const registerStyle = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: 33,
    },
    bodyView: {
        width: '100%',
    },
    tittleTextView: {
        alignSelf: 'flex-start',
        marginLeft: '11.5%'
    },
    textTest: {
        marginLeft: '2%',
        marginBottom: '7%',
        color: '#fff',
        fontSize: 24,
    },
    imgView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2%',
        marginBottom: '5%',
    },
    image: {
        height: 80,
        width: 80
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
        height: 45,
        paddingLeft: 8,
        marginBottom: '1%'
    },
    formLoginPassword: {
        color: '#fff',
        borderColor: '#fff',
        borderBottomWidth: 0.3,
        borderRadius: 5,
        width: '75%',
        height: 45,
        paddingLeft: 8,
        marginBottom: '1%'
    },
    buttonDone: {
        backgroundColor: '#ffffff',
        alignItems: 'center',
        width: '75%',
        borderColor: '#fff',
        borderRadius: 5,
        height: 40,
        justifyContent: 'center',
        marginBottom: '2%',
        marginTop: '5%',
    },
    buttonLoginText: {
        color: '#000000',
        fontSize: 16,
    },
    buttonBack: {
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