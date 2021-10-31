

import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Keyboard,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Fonts from '../../themes/Fonts';
import { onSignIn } from './AuthActions';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Login = ({ navigation }: any) => {
    const [userName, setUserName] = useState('admin');
    const [password, setPassword] = useState('admin');
    const dispatch = useDispatch()
    const errorMessage = useSelector(store => store.AuthReducer.errorMessage)
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true);
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false);
            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);
    const SignIn = () => {
        dispatch(onSignIn(userName, password))
    }

    return (
        <View style={styles.container}  >

            <View style={styles.textInputView}>
                <Ionicons name="mail-outline" size={22} color="#000" />
                <TextInput
                    placeholder="Nhập email"
                    keyboardType="email-address"
                    placeholderTextColor="gray"
                    style={styles.TextInput}
                    value={userName}
                    onChangeText={text => setUserName(text)}
                />
            </View>
            <View style={styles.textInputView}>
                <Ionicons name="lock-closed-outline" size={22} color="#000" />
                <TextInput
                    placeholder="Nhập mật khẩu"
                    keyboardType="numeric"
                    style={styles.TextInput}
                    placeholderTextColor="gray"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                />
            </View>
            {
                errorMessage !== null ? <Text style={{ color: 'red' }}>*{errorMessage}</Text> : null
            }
            <View style={styles.viewBtn}>
                <TouchableOpacity style={[styles.btn, { backgroundColor: userName !== '' && password !== '' ? '#2884FF' : '#bdbdbd' }]}
                    onPress={() => SignIn()}
                >
                    <Text style={{ color: userName !== '' && password !== '' ? 'white' : 'black', fontFamily: Fonts.bold }}>Tiếp tục</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginWithPassWord} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.textLogin}>Chưa có tài khoản ?</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.viewBtn1}>
                <View style={styles.viewDivider}>
                    <View style={styles.divider} />
                    <Text style={{ color: '#A4A4A4' }}>HOẶC </Text>
                    <View style={styles.divider} />
                </View>

                <TouchableOpacity style={styles.btn2}>
                    <Image
                        source={{
                            uri:
                                'https://freepngimg.com/thumb/google/66912-logo-now-google-plus-search-free-transparent-image-hd.png',
                        }}
                        style={styles.btnLogo}
                    />
                    <Text style={styles.textBtn}>Tiếp tục với Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn2}>
                    <Image
                        source={{
                            uri:
                                'https://www.eipm.org/wp-content/uploads/2018/03/facebook-round-white.png',
                        }}
                        style={styles.btnLogo}
                    />
                    <Text style={styles.textBtn}>Tiếp tục với Facebook</Text>
                </TouchableOpacity>
            </View>
            {
                isKeyboardVisible === true ? null : (
                    <View style={styles.footer}>
                        <Text style={styles.textFooter}>
                            Chúng tôi không sử dụng thông tin của bạn với bất kỳ mục đích nào.
                        </Text>
                        <Text style={styles.textFooter}>
                            Bằng cách đăng nhập hoặc đăng ký bạn đồng ý với{' '}
                            <Text style={styles.termsOfService}>
                                Chính sách quy định của STRANGE
                            </Text>
                        </Text>
                    </View>
                )
            }

        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
        alignItems: 'center',
        justifyContent: 'center'
    },

    textInputView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginVertical: 6,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#bdbdbd',
        paddingHorizontal: 16,
        marginHorizontal: 30,
    },
    TextInput: {
        width: windowWidth * 0.7,
        paddingRight: 40,
        fontSize: 17,
        paddingLeft: 15,
        color: 'black'
    },
    viewBtn: {
        alignItems: 'center',
    },
    viewBtn1: {
        alignItems: 'center',

    },
    btn: {
        marginTop: 15,
        width: windowWidth * 0.85,
        borderRadius: 40,
        height: windowHeight * 0.06,
        backgroundColor: '#E6E9EE',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginWithPassWord: {
        marginTop: 8,
        height: 25,
        width: windowWidth * 0.91,
    },
    textLogin: {
        color: '#3383EF',
        width: '100%',
        fontSize: 15,
        textAlign: 'right',
    },
    viewDivider: {
        marginTop: 25,
        height: 25,
        width: windowWidth * 0.91,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    divider: {
        height: 0.3,
        backgroundColor: '#E6E6E6',
        width: '40%',
    },
    btn2: {
        flexDirection: 'row',
        marginTop: 15,
        width: windowWidth * 0.85,
        borderRadius: 40,
        height: windowHeight * 0.06,
        backgroundColor: '#2884FF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBtn: {
        fontWeight: 'bold',
        color: '#fff',
    },
    btnLogo: {
        width: 30,
        height: 30,
        borderRadius: 20,
        position: 'absolute',
        left: 10

    },
    footer: {
        paddingHorizontal: 40,
        paddingVertical: 20,
        marginVertical: 50,
        position: 'absolute',
        bottom: 10


    },
    textFooter: {
        fontSize: 11,
        color: '#A4A4A4',
        textAlign: 'center',
    },
    termsOfService: {
        color: '#3589F8',
        textDecorationLine: 'underline',
    },
});