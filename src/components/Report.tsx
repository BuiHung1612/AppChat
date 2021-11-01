import React from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { BottomSheet } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'
import { addFriend } from '../modules/converstation/ConverstationActions'
import { deletePost } from '../modules/profile/ProfileAction'
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
    userId?: string,
    canDelete?: boolean,
    itemToDelete?: any
}

const Report = ({ isVisible, button1, button2, button3, fourButton, cancelLabel, setVisible, userId, canDelete, itemToDelete }: ReportButton) => {
    const token = useSelector((store: any) => store.AuthReducer.token)

    const alertComming = (post_id?: any) => {
        if (canDelete == true) {
            Alert.alert("Thông báo", `Bạn có chắc muốn xoá bài viết này không?`, [
                { text: "Không" },
                { text: "Tôi chắc chắn", onPress: () => dispatch(deletePost(token, post_id)) }
            ])
        }
        else {
            Alert.alert("Thông báo", `Chức năng đang được phát triển. \nHãy chờ trong phiên bản cập nhật sắp tới!`, [
                { text: "Tôi đã hiểu" }
            ])
        }

    }
    const dispatch = useDispatch()

    const onPressAddFriend = () => {
        if (canDelete == true) {
            alertComming(itemToDelete.post_id)
            setVisible(false)
        }
        else {
            dispatch(addFriend(userId, token))
            setVisible(false)
        }
    }
    return (
        <BottomSheet

            isVisible={isVisible}
            modalProps={{ animationType: 'none', }}
            containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}
        >
            <TouchableOpacity onPress={() => setVisible(false)} style={{ flex: 1 }}>
                <TouchableOpacity style={styles.reportButton} onPress={() => alertComming()}>
                    <Text style={styles.reportLabel}>{button1}</Text>
                </TouchableOpacity>
                {
                    button2 !== undefined ? (
                        <TouchableOpacity onPress={() => onPressAddFriend()} style={[styles.reportButton, fourButton == false ? { backgroundColor: '#FF68A3' } : null]}>
                            <Text style={styles.reportLabel}>{button2}</Text>
                        </TouchableOpacity>
                    ) : null
                }
                {
                    button3 !== undefined ? (
                        <TouchableOpacity onPress={() => alertComming()} style={[styles.reportButton]}>
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
        backgroundColor: '#A867FF',
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
