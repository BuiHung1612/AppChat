import { StyleSheet } from "react-native";
import Colors from "../../themes/Colors";
import Fonts from "../../themes/Fonts";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    iconView: {
        flex: 0.08,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    viewIconRight: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '40%',
        marginRight: 6
    },
    viewIconRightModel: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '20%',
        paddingRight: 20,
    },
    viewVIP: {
        flexDirection: 'row',
        height: 30,
        width: 74,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#FEFAEF'
    },
    textVIP: {
        color: '#F6D78A',
        fontSize: 14,
        fontFamily: Fonts.bold
    },
    userName: {
        fontFamily: Fonts.bold,
        lineHeight: 20,
        fontSize: 18,
        marginTop: 14
    },
    description: {
        width: '74%',
        fontFamily: Fonts.light,
        lineHeight: 20,
        fontSize: 13,
        marginTop: 14,
        textAlign: 'center'
    },
    chipView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 4
    },
    viewChip: {
        backgroundColor: '#F9F6FE',
        padding: 10,
        borderRadius: 30,
        marginHorizontal: 4,
        marginVertical: 2
    },
    textChip: {
        color: Colors.black1,
        fontFamily: Fonts.bold,
        fontSize: 12
    },
    followView: {
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 10
    },
    followNumber: {
        fontWeight: 'bold',
        fontSize: 12,
        lineHeight: 22
    },
    followTitle: {
        fontFamily: Fonts.medium,
        color: Colors.gray3,
        fontSize: 13,
        lineHeight: 20
    },
    flexrowAndAlign: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    imagePost: {
        height: 300,
        maxWidth: '60%',
        borderRadius: 6,
        resizeMode: 'contain'
    },
    createUpText: {
        color: '#DDDDDD',
        fontFamily: Fonts.bold,
        marginTop: 4

    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 30
    },

});

export default styles