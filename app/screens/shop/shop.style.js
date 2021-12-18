import { StyleSheet } from "react-native";

export const shopStyle = StyleSheet.create({
    body: {
        backgroundColor: '#000'
    },
    text: {
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    searchBarView: {
        flexDirection: 'row',
        paddingLeft: '5%',
        marginTop: '4%',
        marginBottom: '6%',
    },
    searchBarInput: {
        color: '#fff',
        borderBottomWidth: 0.3,
        borderColor: '#fff',
        paddingTop: 12,
        width: '80%'
    },
    searchBarIcon: {
        marginRight: '5%',
        paddingTop: 12
    },
    cardContainer: {
        alignContent: 'center',
        width: '90%',
        alignSelf: 'center'
    },
    cardHorizontal:{
        flexDirection: 'row',
        marginBottom: '5%'
    },
    cardLeft: {
        width: '40%',
        height: 160,
        flex: 1,
        marginRight: '5%',
        borderRadius: 12,
        borderWidth: 0.3,
        borderColor: '#fff'
    },
    cardRight: {
        width: '40%',
        height: 160,
        flex: 1,
        borderRadius: 12,
        borderWidth: 0.3,
        borderColor: '#fff'
    },
    cardTitleText: {
        color: '#fff',
        margin: 12,
        fontSize: 18
    },
    cardDescriptionText: {
        color: '#fff',
        margin: 12,
        fontSize: 12    
    },
})