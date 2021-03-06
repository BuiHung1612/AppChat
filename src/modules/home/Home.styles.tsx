import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../themes/Colors';
import Fonts from '../../themes/Fonts';
import Metrics from '../../themes/Metrics';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,

    },
    headerView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 12,
    },
    imageLogo: {
        width: 100,
        height: 50
    },
    boxHeader: {
        flex: 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    headerButtonLeft: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxButton: {
        width: Metrics.windowWidth * 0.28,
        height: 130,
        borderRadius: 16,
        alignItems: 'center',
        marginVertical: 16
    },
    itemView: {
        height: 74,
        width: Metrics.windowWidth,
        alignItems: 'center',
        flexDirection: 'row'
    },
    userImage: {
        width: 56,
        height: 56,
        borderRadius: 50
    },
    itemView2: {
        width: '76%',
        height: 70,
        justifyContent: 'center'
    },
    userName: {
        fontSize: 15,
        fontFamily: Fonts.bold,
        lineHeight: 20
    },
    description: {
        fontSize: 12,
        fontFamily: Fonts.medium,
        color: Colors.gray3,
        lineHeight: 20
    },
    headerBoxTitle: {
        fontFamily: Fonts.bold,
        lineHeight: 20,
        marginTop: 10
    },
    headerBoxSubtitle: {
        color: Colors.grayText,
        fontSize: 12,
        lineHeight: 20
    },
    headerBoxImage: {
        width: 60,
        height: 60
    }
});

export default styles;
