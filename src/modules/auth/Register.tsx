import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, Alert, Image, ImageBackground } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth'
import firebase from '@react-native-firebase/app'
import firestore from '@react-native-firebase/firestore'
import Icon from '../../assets'
import Fonts from '../../themes/Fonts';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Register = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [ImgUrl, setImgUrl] = useState('');
    const [password, setPassword] = useState('');
    const registerBtn = () => {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
                //Signed In
                firestore().collection('users').add({
                    id: auth().currentUser?.uid,
                    displayName: name,
                    ImgUrl: ImgUrl
                        ? ImgUrl
                        : 'https://i.pinimg.com/236x/30/e3/d6/30e3d6ca4641b6bda5ee69cda07b89a5.jpg',
                });
                var user = userCredential.user;
                user
                    .updateProfile({
                        displayName: name,
                        photoURL: ImgUrl
                            ? ImgUrl
                            : 'https://i.pinimg.com/236x/30/e3/d6/30e3d6ca4641b6bda5ee69cda07b89a5.jpg',
                    })
                    .then(function () {
                        // Update successful.
                    })
                    .catch(function (error) {
                        // An error happened.
                    });
            })
            .catch(err => {
                var errorMessage = err.message;
                Alert.alert(errorMessage);
            });
    };
    return (
        <View style={styles.container}>

            <View style={styles.logoView}>
                <Image
                    source={Icon.logo}
                    style={styles.logoImage}
                    resizeMode="contain"
                />
            </View>
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

            <TouchableOpacity style={[styles.btn, { backgroundColor: '#2884FF' }]} onPress={() => registerBtn()}>
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
        backgroundColor: 'white'

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
