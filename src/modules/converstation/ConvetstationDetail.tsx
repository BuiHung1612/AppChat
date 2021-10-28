import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import { Image, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Metrics from '../../themes/Metrics';
import { useHeaderHeight } from '@react-navigation/elements';
import { Bubble, GiftedChat, InputToolbar, Message, Send, SystemMessage } from 'react-native-gifted-chat'

export const renderSend = (props: any) => (
    <Send
        {...props}
        disabled={!props.text}
        containerStyle={{
            width: 44,
            height: 44,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'red',
            marginHorizontal: 4,
        }}
    >
        <Ionicons name="send" size={24} />
    </Send>
);

export const renderBubble = (props: any) => (
    <Bubble
        {...props}

        wrapperStyle={{
            left: { backgroundColor: '#F2F2F2', padding: 4 },
            right: { padding: 4 },
        }}


    />
);




const ConvetstationDetail = ({ navigation, route }: any) => {
    const { Id_Room } = route.params
    const [messages, setMessages] = useState<any>([]);
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

    const btnIcon = () => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',


                }}>
                <TouchableOpacity>
                    <Ionicons name="camera-outline" size={27} color="#000" style={{ paddingHorizontal: 10 }} />
                </TouchableOpacity>
                <TouchableOpacity >
                    <Ionicons name="image-outline" size={27} color="#000" />
                </TouchableOpacity>

            </View>
        );
    };


    const fakeData = Array(20).fill('').map((e, i) => ({


        _id: i != 1 ? i : 10,
        text: `xin chào ${i}`,
        createdAt: new Date(),
        user: {
            _id: i != 1 ? i : 10,
            name: 'hùng bùi',
            avatar: 'https://i.pinimg.com/236x/8d/e3/2e/8de32e91363eef57421625e183ce7c74.jpg',
        },


    }))


    useEffect(() => {

        setMessages(fakeData.map((e, i) => ({

            _id: i,
            text: `xin chào ${i}`,
            createdAt: new Date(),
            user: {
                _id: i,
                name: 'hùng bùi',
                avatar: 'https://i.pinimg.com/236x/8d/e3/2e/8de32e91363eef57421625e183ce7c74.jpg',
            },

        })))

    }, [])


    const onSend = useCallback((messages = []) => {
        setMessages((previousMessages: any) => GiftedChat.append(previousMessages, messages))
        console.log(messages);
    }, [])
    const renderInputToolbar = (props) => (
        <InputToolbar
            {...props}
            primaryStyle={{ alignItems: 'center', }}
        />
    );

    return (
        <View style={styles.container}>


            <GiftedChat
                messages={messages}
                isCustomViewBottom={true}
                renderSend={renderSend}
                renderBubble={renderBubble}
                renderActions={btnIcon}
                renderInputToolbar={renderInputToolbar}
                onSend={messages => onSend(messages)}

                user={{
                    _id: 100,
                }}
            />
        </View>
    )
}

export default ConvetstationDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
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
