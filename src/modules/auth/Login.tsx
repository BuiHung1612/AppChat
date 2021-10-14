

import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import Icon from '../../assets'
import Fonts from '../../themes/Fonts';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Login = ({ navigation }: any) => {
    const [email, setEmail] = useState('hung@gmail.com');
    const [password, setPassword] = useState('123456');

    return (
        <KeyboardAvoidingView style={styles.container}>

            <View style={styles.textInputView}>
                <Ionicons name="mail-outline" size={22} color="#000" />
                <TextInput
                    placeholder="Nhập email"
                    keyboardType="email-address"
                    style={styles.TextInput}
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
            </View>
            <View style={styles.textInputView}>
                <Ionicons name="lock-closed-outline" size={22} color="#000" />
                <TextInput
                    placeholder="Nhập mật khẩu"
                    keyboardType="numeric"
                    style={styles.TextInput}
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                />
            </View>
            <View style={styles.viewBtn}>
                <TouchableOpacity style={[styles.btn, { backgroundColor: email !== '' && password !== '' ? '#2884FF' : '#bdbdbd' }]}
                    onPress={() => navigation.navigate('MainButtonTabs')}
                >
                    <Text style={{ color: email !== '' && password !== '' ? 'white' : 'black', fontFamily: Fonts.bold }}>Tiếp tục</Text>
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
        </KeyboardAvoidingView>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    header: {
        flex: 0.08,
        flexDirection: 'row',
        backgroundColor: 'red',
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
        justifyContent: 'flex-end'

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