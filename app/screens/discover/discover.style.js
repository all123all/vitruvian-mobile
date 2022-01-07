import { StyleSheet } from "react-native";

export const discoverStyle = StyleSheet.create({
    body: {
        paddingTop: 28,
        backgroundColor: '#000',
        flex: 1,
        color: 'white'
    },
    searchBarView: {
        flexDirection: 'row',
        paddingLeft: '5%',
        marginTop: '4%',
        marginBottom: '6%',
        
    },
    searchBarIcon: {
        marginRight: '5%',
        paddingTop: 12
    },
    searchBarInput: {
        color: '#fff',
        borderBottomWidth: 0.3,
        borderColor: '#fff',
        paddingTop: 12,
        width: '80%'
    },
    flatListView: {
        width: '90%',
        height: 150,
        borderColor: '#fff',
        borderWidth: 0.3,
        borderRadius: 8,
        alignSelf: 'center',
        padding: '3%',
        marginBottom: '3%'
    },
    flatListNest: {
        marginBottom: '10%',
        // justifyContent: 'center'
    },
    flatListText: {
        color: '#fff',
        fontSize: 24
    },
    flatListView: {
        height: 100,
        backgroundColor: '#696969',
        marginBottom: 15,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        alignSelf: 'center'
    },
    flatListImage: {

    }
})