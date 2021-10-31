import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import { ActivityIndicator, Image, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Metrics from '../../themes/Metrics';
import { Bubble, Composer, GiftedChat, InputToolbar, Message, Send, SystemMessage } from 'react-native-gifted-chat'
import { useDispatch, useSelector } from 'react-redux';
import { getMessage, sendMessage } from './ConverstationActions';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';



const ConvetstationDetail = ({ navigation, route }: any) => {
    const { Room } = route.params

    const dispatch = useDispatch()
    const [messages, setMessages] = useState<any>([]);
    const ProfileData = useSelector((store: any) => store.AuthReducer.profile)
    const token = useSelector((store: any) => store.AuthReducer.token)
    const listMessage = useSelector((store: any) => store.ConverstationReducer.messages)

    useLayoutEffect(() => {
        navigation.setOptions({
            title: `${ProfileData.user_id == Room.user_id_0 ? Room.user_name_1 : Room.user_name_0}`,
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


    const [picture, setPicture] = useState('')
    const [loadingImage, setLoadingImage] = useState(false)

    const MultipleImage = async (image: any) => {
        setLoadingImage(true)

        const formData = new FormData();
        formData.append('image', {
            uri: image.path,
            type: 'image/jpeg',
            name: 'lasda.jpg',
        });
        axios({
            method: 'post',
            url: 'https://api.imgur.com/3/upload',
            data: formData,
            headers: {
                Accept: 'application/x-www-form-urlencode',
                Authorization: 'Client-ID 49581f490d5908f',
            },
        })
            .then(data => {

                setPicture(data?.data?.data?.link)
                setText(' ')
                setLoadingImage(false)
            }
            )
            .catch(error => {
                console.log('error', error);
            });

    };


    const takeAPicture = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
        }).then(image => {
            MultipleImage(image);

        });
    }

    const btnIcon = () => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    width: 120


                }}>
                <TouchableOpacity>
                    <Ionicons name="camera-outline" size={30} color="#000" style={{ paddingRight: 16 }} onPress={() => takeAPicture()} />
                </TouchableOpacity>
                <TouchableOpacity >
                    <Ionicons name="image-outline" size={30} color="#000" />
                </TouchableOpacity>

            </View>
        );
    };
    const renderSend = (props: any) => (
        <Send
            {...props}

            containerStyle={{
                width: 44,
                height: 44,
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: 4,
            }}
        >
            <Ionicons name="send" size={24} />

        </Send>
    );

    const renderBubble = (props: any) => (
        <Bubble
            {...props}

            wrapperStyle={{
                left: { backgroundColor: '#F2F2F2', padding: 4 },
                right: { padding: 4 },
            }}


        />
    );

    useEffect(() => {
        dispatch(getMessage(Room?.roomChat_id, token))

    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(getMessage(Room?.roomChat_id, token))
        }, 3000);
        return () => clearInterval(interval);

    }, [])



    useEffect(() => {

        setMessages(listMessage?.map((e: any) => ({

            _id: e.id_messages,
            text: e.text,
            createdAt: e.createAt,
            user: {
                _id: e.user_id,
                name: e.user_name,
                avatar: e.avatar,
            },
            image: e?.image

        })))


    }, [listMessage])
    useEffect(() => {
        if (picture != '') {
            setTimeout(() => {
                setPicture('')
            }, 5000);
        }
    }, [picture])


    const onSend = useCallback((messages = [], picture) => {
        setMessages((previousMessages: any) => GiftedChat.append(previousMessages, messages))
        const { _id, createdAt, text, user, image } = messages[0];



        dispatch(sendMessage(_id, createdAt, text, user, token, Room?.roomChat_id, picture))
        setPicture('')
    }, [])
    const renderInputToolbar = (props: any) => (
        <InputToolbar
            {...props}
            primaryStyle={{ alignItems: 'center', }}

        />
    );
    const renderComposer = (props: any) => (
        <Composer
            {...props}
            textInputStyle={{
                color: '#222B45',

            }}
        />
    );
    const [text, setText] = useState('')

    return (
        <View style={styles.container}>


            <GiftedChat
                messages={messages}
                text={text}
                onInputTextChanged={(text) => setText(text)}
                isCustomViewBottom={true}
                renderSend={renderSend}
                renderBubble={renderBubble}
                renderActions={btnIcon}
                renderComposer={renderComposer}
                renderInputToolbar={renderInputToolbar}
                onSend={messages => onSend(messages, picture)}
                alwaysShowSend={picture != '' ? true : false}
                inverted={true}
                user={{
                    _id: ProfileData.user_id,
                    name: ProfileData.user_name,
                    avatar: ProfileData.user_image,

                }}
            />
            {picture != '' || loadingImage == false ? <Image source={{ uri: picture }} style={styles.cacheImage} /> : <ActivityIndicator size={26} color="blue" style={styles.imageLoading} />}
        </View>
    )
}

export default ConvetstationDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',

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
    },
    cacheImage: {
        width: 70,
        height: 100,
        position: 'absolute',
        bottom: 50,
        right: 20
    },
    imageLoading: {
        position: 'absolute',
        bottom: 10,
        right: 18
    }
})
