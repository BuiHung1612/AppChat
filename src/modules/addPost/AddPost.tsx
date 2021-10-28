import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

const AddPost = ({ navigation }: any) => {
    const [postContent, setPostContent] = useState('')

    useLayoutEffect(() => {
        navigation.setOptions({

            headerRight: () => (

                <TouchableOpacity disabled={postContent !== '' ? false : true}
                    onPress={() => console.log('alo')}

                >
                    {
                        postContent !== '' ? <Text style={{ fontWeight: 'bold' }}>Đăng bài</Text> : null

                    }
                </TouchableOpacity>
            )


        });
    }, [navigation, postContent]);
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ borderWidth: 1, height: 200, marginHorizontal: 20 }}>
                <TextInput placeholder="Bạn đang nghĩ gì ?" value={postContent} onChangeText={(text) => setPostContent(text)} style={{ padding: 10, fontSize: 16, color: 'black', marginHorizontal: 10 }} />

            </View>
        </View>
    )
}

export default AddPost

const styles = StyleSheet.create({})
