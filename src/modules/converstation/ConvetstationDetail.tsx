import React, { useEffect, useLayoutEffect, useState } from 'react'
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Metrics from '../../themes/Metrics';
import { useHeaderHeight } from '@react-navigation/elements';
const ConvetstationDetail = ({ navigation, route }: any) => {
    const { Id_Room } = route.params
    const [visibleSend, setVisibleSend] = useState(false)
    const [message, setMessage] = useState('')
    const headerHeight = useHeaderHeight();
    useLayoutEffect(() => {
        navigation.setOptions({
            title: `${Id_Room.userName}`,
            headerLeft: () => (
                <TouchableOpacity
                    style={{
                        width: Metrics.navigationButtonSize,
                        height: Metrics.navigationButtonSize,
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingRight: 20,
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name="arrow-back-outline" size={22} color="black" />
                </TouchableOpacity>
            ),
            headerRight: () => <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{
                        width: Metrics.navigationButtonSize,
                        height: Metrics.navigationButtonSize,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Ionicons
                        name="call-outline"
                        size={22}
                        color="black"
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        width: Metrics.navigationButtonSize,
                        height: Metrics.navigationButtonSize,
                        alignItems: 'center',
                        marginLeft: 6,
                        justifyContent: 'center',
                    }}
                >
                    <Ionicons
                        name="ellipsis-horizontal"
                        size={22}
                        color="black"
                    />
                </TouchableOpacity>

            </View>
        });
    }, [navigation]);
    const onStartEdit = () => {
        setVisibleSend(true)
    }
    useEffect(() => {
        if (message == '') {
            setVisibleSend(false)
        }
    }, [message])
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.boxChat}>
                <Text>alo</Text>
            </View>
            <KeyboardAvoidingView
                style={styles.textInputView}
                behavior={Platform.OS === 'ios' ? 'padding' : "height"}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
            >

                <TouchableOpacity style={styles.iconButton}>
                    <Ionicons name="mic-outline" size={24} />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>

                    <TextInput style={styles.inputStyles} value={message} onChangeText={(text) => setMessage(text)} onChange={() => onStartEdit()} placeholder="Nhập tin nhắn" placeholderTextColor="gray" />
                    {
                        visibleSend == true ? <TouchableOpacity style={styles.iconSend}>
                            <Ionicons name="send" size={20} />
                        </TouchableOpacity> : null
                    }
                </View>
                <TouchableOpacity style={styles.iconButton}>
                    <Ionicons name="alarm-outline" size={24} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Ionicons name="image-outline" size={24} />
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default ConvetstationDetail

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    boxChat: {
        flex: 0.92,

    },
    textInputView: {
        flex: 0.09,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white'

    },
    inputStyles: {
        borderRadius: 20,
        width: Metrics.windowWidth * 0.6,
        backgroundColor: '#E6E6E6',
        height: 40,
        paddingHorizontal: 16
    },
    iconButton: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconSend: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 6,
    }
})
