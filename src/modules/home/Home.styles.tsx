import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../themes/Colors'
import Metrics from '../../themes/Metrics'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: 15
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
        justifyContent: 'center',

    },
    boxButton: {
        width: 114,
        height: 160,
        borderRadius: 16,
        alignItems: 'center',
        marginVertical: 16
    }
})

export default styles
