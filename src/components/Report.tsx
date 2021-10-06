import React from 'react'
import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { BottomSheet } from 'react-native-elements'
import Colors from '../themes/Colors'
import Fonts from '../themes/Fonts'

interface ReportButton {
    isVisible: boolean,
    button1?: string,
    button2?: string,
    button3?: string,
    cancelLabel?: string,
    fourButton?: boolean,
    setVisible: (isVisible: boolean) => void,
}

const Report = ({ isVisible, button1, button2, button3, fourButton, cancelLabel, setVisible }: ReportButton) => {
    console.log(button2);


    return (
        <BottomSheet

            isVisible={isVisible}
            modalProps={{ animationType: 'none', }}
            containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}
        >
            <TouchableOpacity onPress={() => setVisible(false)} style={{ flex: 1 }}>
                <TouchableOpacity style={styles.reportButton}>
                    <Text style={styles.reportLabel}>{button1}</Text>
                </TouchableOpacity>
                {
                    button2 !== undefined ? (
                        <TouchableOpacity style={[styles.reportButton, fourButton == false ? { backgroundColor: '#FF68A3' } : null]}>
                            <Text style={styles.reportLabel}>{button2}</Text>
                        </TouchableOpacity>
                    ) : null
                }
                {
                    button3 !== undefined ? (
                        <TouchableOpacity style={[styles.reportButton]}>
                            <Text style={styles.reportLabel}>{button3}</Text>
                        </TouchableOpacity>
                    ) : null
                }
                <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={() => setVisible(false)}
                >
                    <Text style={styles.cancelLabel}>{cancelLabel}</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        </BottomSheet>
    )
}

export default Report

const styles = StyleSheet.create({

    reportButton: {
        marginHorizontal: 20,
        borderRadius: 10,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8726FE',
        marginBottom: 10,
    },
    reportLabel: {
        fontFamily: Fonts.bold,
        fontSize: 16,
        color: Colors.white
    },
    cancelButton: {
        marginHorizontal: 20,
        borderRadius: 10,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: 20
    },
    cancelLabel: {
        fontSize: 16,
        color: Colors.black1,
        fontFamily: Fonts.medium
    }
})
