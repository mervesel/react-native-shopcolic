import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    inner_container: {
        padding: 10,
        margin: 5,

    },

    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 3,
        resizeMode: 'contain',
        backgroundColor: '#fff'

    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,

    },
    desc: {
        color: 'black',
        fontStyle: 'italic'

    },
    price: {
        textAlign: 'right',
        fontSize: 22,
        fontWeight: 'bold',
        color: 'gray'
    
        
    }
    
})