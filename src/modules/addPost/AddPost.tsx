import React, { useLayoutEffect, useState } from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from './AddPostActions';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';


const AddPost = ({ navigation }: any) => {
    const [postContent, setPostContent] = useState('')
    const token = useSelector((store: any) => store.AuthReducer.token)
    const dispatch = useDispatch()

    const [picture, setPicture] = useState('')
    const [loadingPost, setLoadingPost] = useState(false)
    const MultipleImage = async (image: any) => {

        setLoadingPost(true)
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

                setLoadingPost(false)



            }
            )
            .catch(error => {
                console.log('error', error);
            });

    };


    const onCreatePost = () => {
        dispatch(createPost(token, postContent, picture))
        setTimeout(() => {
            navigation.goBack()
        }, 400);
    }


    const takeFromLib = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            MultipleImage(image)
        });
    }

    useLayoutEffect(() => {
        navigation.setOptions({

            headerRight: () => (

                <TouchableOpacity disabled={picture !== '' || postContent !== '' ? false : true}
                    onPress={() => onCreatePost()}

                >
                    {
                        loadingPost == false ? <Text style={{ fontWeight: 'bold' }}>Đăng bài</Text> : <ActivityIndicator size={26} color="blue" />

                    }
                </TouchableOpacity>
            )


        });
    }, [navigation, postContent, loadingPost]);
    return (
        <View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 20 }}>
            <View style={{ borderWidth: 1, height: 200 }}>
                <TextInput placeholder="Bạn đang nghĩ gì ?" value={postContent} onChangeText={(text) => setPostContent(text)} style={{ padding: 10, fontSize: 16, color: 'black', marginHorizontal: 10 }} />

            </View>
            <View>
                <TouchableOpacity onPress={() => takeFromLib()} style={styles.button}>
                    <Ionicons name="image" size={30} color={"green"} />
                    <Text style={{ fontSize: 16, paddingHorizontal: 20 }}>Chọn ảnh</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => takeFromLib()} style={styles.button}>
                    <Ionicons name="pricetag" size={30} color="blue" />
                    <Text style={{ fontSize: 16, paddingHorizontal: 20 }}>Gắn thẻ người khác</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => takeFromLib()} style={styles.button}>
                    <Ionicons name="happy-outline" size={30} />
                    <Text style={{ fontSize: 16, paddingHorizontal: 20 }}>Cảm xúc/Hoạt động</Text>
                </TouchableOpacity>
            </View>
            <Image source={{ uri: picture }} style={{ width: 100, height: 120, marginVertical: 20 }} />

        </View>
    )
}

export default AddPost

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        paddingVertical: 10,
        marginTop: 16,
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        paddingHorizontal: 20
    }
})
