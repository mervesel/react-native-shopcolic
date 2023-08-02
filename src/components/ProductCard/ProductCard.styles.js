import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#D8D9DA',
        borderWidth: 1,
        borderColor: '#eee',
        margin: 10,
        flexDirection: 'row',
        padding: 10,

    },
    
    image: {
        width: 100,
        minHeight: 100,
        backgroundColor: '#fff',
        resizeMode: 'contain'
    },

    innerContainer: {
        flex: 1,
        padding: 5,
        justifyContent: 'space-between',
    },

    titleText: {
        fontWeight: 'bold',
        fontSize: 18,
    },

    priceText: {
        textAlign: 'right',
        fontStyle: 'italic',
        fontSize: 15

    }
    
})