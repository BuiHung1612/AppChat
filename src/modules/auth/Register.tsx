import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, Alert, Image, ImageBackground } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

import firebase from '@react-native-firebase/app'

import Icon from '../../assets'
import Fonts from '../../themes/Fonts';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Register = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [ImgUrl, setImgUrl] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>


            <View style={styles.textInputView}>
                <Ionicons name="person" size={22} color="#0B3B39" />
                <TextInput
                    placeholder="Nhập Tên của bạn"
                    style={styles.TextInput}
                    placeholderTextColor="black"
                    value={name}
                    onChangeText={text => setName(text)}
                />
            </View>
            <View style={styles.textInputView}>
                <Ionicons name="mail" size={22} color="#DF7401" />
                <TextInput
                    placeholder="Nhập Email của bạn"
                    style={styles.TextInput}
                    value={email}
                    placeholderTextColor="black"
                    onChangeText={text => setEmail(text)}
                />
            </View>
            <View style={styles.textInputView}>
                <Ionicons name="lock-closed" size={22} color="#7401DF" />
                <TextInput
                    placeholder="Nhập mật khẩu"
                    style={styles.TextInput}
                    value={password}
                    placeholderTextColor="black"
                    onChangeText={text => setPassword(text)}
                />
            </View>
            <View style={styles.textInputView}>
                <Ionicons name="image" size={22} color="#2E2EFE" />
                <TextInput
                    placeholder="Nhập image url của ban"
                    placeholderTextColor="black"
                    style={styles.TextInput}
                    value={ImgUrl}
                    onChangeText={text => setImgUrl(text)}
                />
            </View>

            <TouchableOpacity style={[styles.btn, { backgroundColor: '#2884FF' }]}>
                <Text style={{ color: 'white', fontFamily: Fonts.bold }}>Tiếp tục</Text>
            </TouchableOpacity>
            {/* <Button title="Register" onPress={registerBtn} /> */}
        </View>
    );
};

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FAFAFA'

    },
    btnSignIn: {
        marginTop: 10,
    },
    textInputView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginVertical: 6,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#bdbdbd',
        paddingHorizontal: 16
    },
    TextInput: {
        width: windowWidth * 0.7,
        paddingRight: 40,
        fontSize: 17,
        paddingLeft: 15,
    },
    btn: {

        width: windowWidth * 0.85,
        paddingVertical: 14,
        borderRadius: 40,
        marginVertical: 30,

        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,

    },
    logoView: {

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d8d8d8',
        borderRadius: 80,
        padding: 16,
        marginVertical: 60,
        marginBottom: 40,

        borderColor: 'black',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
    logoImage: {
        height: 80,
        width: 80,
    },
});
