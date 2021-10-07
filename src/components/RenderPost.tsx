import React, { useState } from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Post, UserProfile } from '../shared/models/Profile';
import Fonts from '../themes/Fonts';
import styles from '../modules/profile/Profile.styles'
import Report from './Report'
interface Props {
    typeReport?: string,
    item: Post
}
const RenderPost = ({ item, typeReport }: Props) => {
    const [showReport, setShowReport] = useState(false)
    const onCancelReport = () => {
        setShowReport(false)
    }
    return (
        <View style={{ maxWidth: '100%', marginTop: 10 }}>
            <View
                style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <Text
                    style={{
                        color: '#DDDDDD',
                        fontFamily: Fonts.bold,
                        paddingVertical: 10
                    }}
                >
                    {item.createUp}
                </Text>
                <TouchableOpacity onPress={() => setShowReport(true)} >
                    <Ionicons name="ellipsis-horizontal" size={20} />
                </TouchableOpacity>
            </View>
            <Text style={{ paddingVertical: 10 }}>{item.subtitle}</Text>
            {item.image !== null ? (
                <Image
                    source={{ uri: item.image }}
                    style={styles.imagePost}
                />
            ) : null}
            <View
                style={[
                    styles.flexrowAndAlign,
                    { marginTop: 26, marginBottom: 10 }
                ]}
            >
                <View style={styles.flexrowAndAlign}>
                    <TouchableOpacity>
                        <Ionicons
                            name="heart"
                            size={24}
                            color={'#DFDFDF'}
                        />
                    </TouchableOpacity>
                    <Text style={{ marginLeft: 6 }}>{item.like}</Text>
                </View>

                <View style={[styles.flexrowAndAlign, { marginLeft: 24 }]}>
                    <TouchableOpacity>
                        <Ionicons
                            name="chatbubble"
                            size={24}
                            color={'#DFDFDF'}
                        />
                    </TouchableOpacity>
                    <Text style={{ marginLeft: 8 }}>{item.disLike}</Text>
                </View>
            </View>
            {
                typeReport == "Profile" ? (
                    <Report isVisible={showReport}
                        button1="Ghim vào hồ sơ của bạn"
                        button2="Xoá"
                        fourButton={false}
                        cancelLabel="Huỷ"
                        setVisible={onCancelReport} />)
                    : (
                        <Report button1="Báo cáo"
                            cancelLabel="Hủy"
                            isVisible={showReport}
                            setVisible={onCancelReport} />)

            }
        </View>
    );
};

export default RenderPost


