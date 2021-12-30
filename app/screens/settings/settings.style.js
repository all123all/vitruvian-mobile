import { StyleSheet } from "react-native";

export const settingStyle = StyleSheet.create({
    scrollView: {
        backgroundColor: '#000',
        flex: 1,
    },
    body: {
        backgroundColor: '#000',
        alignItems: 'center',
    },
    header: {
        alignItems: 'center',
        padding: '3%',
        width: '90%',
        borderWidth: 0.2,
        borderBottomColor: '#fff',
        paddingTop: 33
    },
    headerImgContainer: {
    },
    headerImg: {
        width: 80,
        height: 80,
        borderRadius: 50    
    },
    headerText: {
        alignItems: 'center'
    },
    headerTextName: {
        color: '#fff',
        fontSize: 21
    },
    headerTextDesc: {
        color: '#c2c2c2',
        fontSize: 12
    },
    optionsBody: {
        width: '100%',
    },
    optionsNest:{
        alignItems: 'center',
        margin: '2%'
    },
    optionBtn: {
        width: '95%',
        flexDirection: 'row',
        borderBottomColor: '#fff',
        borderRightColor: '#fff',
        borderWidth: 0.3,
        alignItems: 'center',
        marginTop: '3%'
    },
    optionBtnText: {
        color: '#fff',
        fontSize: 16,
        margin: '2%'
    },
})