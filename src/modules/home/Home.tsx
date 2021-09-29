import React, { useLayoutEffect } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from '../../themes/Colors'
import Icon from '../../assets'
import styles from './Home.styles'
import Fonts from '../../themes/Fonts'
const Home = ({ navigation }: any) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity
                    onPress={() => console.log('alo')}
                    style={styles.headerButtonLeft}
                >
                    <Ionicons name="options-outline" size={30} style={{ marginLeft: 15 }} />
                </TouchableOpacity >
            ),
        });
    }, [navigation]);


    const HeaderBox = ({ color, image, title, subtitle }: any) => {
        return (
            <TouchableOpacity style={[styles.boxButton, { backgroundColor: color }]}>
                <Image source={Icon.Img_01} style={{ width: 100, height: 100 }} />
                <Text style={{ fontWeight: '800', fontFamily: Fonts.extraBold }}>{title}</Text>
                <Text style={{ color: '#424242' }}>{subtitle}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <HeaderBox color="#FEE6F3" image={undefined} title="Nhắn Tin" subtitle="23852 Trực tuyến" />
                <HeaderBox color="#FEE6F3" image={undefined} title="Gọi Điện" subtitle="Còn lại 10 lần" />
                <HeaderBox color="#FEE6F3" image={undefined} title="Phòng Chat" subtitle="Chat nhóm" />
            </View>

        </View>
    )
}

export default Home
