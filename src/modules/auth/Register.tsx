import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, Alert, Image, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import Fonts from '../../themes/Fonts';
import ImagePicker from 'react-native-image-crop-picker';
import { ACTION_TYPES, createUser, setStatus } from './AuthActions';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Register = ({ navigation }: any) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [ImgUrl, setImgUrl] = useState('');
    const [password, setPassword] = useState('');

    const registerUser = () => {
        if (ImgUrl == '') {
            let basicUrl = 'https://i.pinimg.com/236x/dd/1b/af/dd1baff67c1cdaf53b151468aab1516c.jpg'
            dispatch(createUser(name, password, email, basicUrl))
        }
        else {
            dispatch(createUser(name, password, email, ImgUrl))
        }

    }
    const status = useSelector((store: any) => store.AuthReducer.status)
    useEffect(() => {
        if (status == "CREATE_SUCCESS") {
            Alert.alert('Thông báo', status, [{
                text: "OK", onPress: () => {
                    navigation.navigate('Login')
                    dispatch({ type: ACTION_TYPES.SET_STATUS, payload: { status: '' } })
                }
            }])
        }

    }, [status])
    const takeFromLib = () => {
        ImagePicker.openPicker({
            compressImageMaxHeight: 1024,
            compressImageMaxWidth: 1024

        }).then(image => {
            // MultipleImage(image)
        });
    }


    return (
        <View style={styles.container}>

            <Text>{status}</Text>
            <View style={styles.textInputView}>
                <Ionicons name="person" size={22} color="#0B3B39" />
                <TextInput
                    placeholder="Nhập Tên của bạn"
                    style={styles.TextInput}
                    placeholderTextColor="gray"
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
                    placeholderTextColor="gray"
                    onChangeText={text => setEmail(text)}
                />
            </View>
            <View style={styles.textInputView}>
                <Ionicons name="lock-closed" size={22} color="#7401DF" />
                <TextInput
                    placeholder="Nhập mật khẩu"
                    style={styles.TextInput}
                    value={password}
                    secureTextEntry={false}
                    placeholderTextColor="gray"
                    onChangeText={text => setPassword(text)}
                />
            </View>
            <View style={styles.textInputView}>
                <Ionicons name="image" size={22} color="#2E2EFE" />
                <TextInput
                    placeholder="Nhập image url của ban"
                    // onFocus={takeFromLib}
                    placeholderTextColor="gray"
                    style={styles.TextInput}
                    value={ImgUrl}
                    onChangeText={text => setImgUrl(text)}
                />
            </View>

            <TouchableOpacity style={[styles.btn, { backgroundColor: '#2884FF' }]} onPress={() => registerUser()}>
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
