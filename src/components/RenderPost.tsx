import React, { useState } from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Post, UserProfile } from '../shared/models/Profile';
import Fonts from '../themes/Fonts';
import styles from '../modules/profile/Profile.styles'
import Report from './Report'
import { useNavigation } from '@react-navigation/native';
import TagAge from './TagAge';
interface Props {
    typeReport?: string,
    item: Post,
}
const RenderPost = ({ item, typeReport }: Props) => {
    const [showReport, setShowReport] = useState(false)
    const [showComment, setShowComment] = useState(false)
    const [like, setLike] = useState(false)
    const navigation: any = useNavigation()


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
                <View style={[styles.flexrowAndAlign]}>
                    {
                        typeReport !== "news" ? null : (<TouchableOpacity >
                            <Image source={item?.userImage} style={styles.userImage} />
                        </TouchableOpacity>)
                    }
                    <View style={{ marginLeft: 10 }}>
                        {typeReport !== "news" ? null : (<View style={{ flexDirection: 'row', }}>
                            <Text>{item?.userName}</Text>
                            <TagAge sex={item?.sex}
                                age={item?.age} />
                        </View>)
                        }
                        <Text
                            style={styles.createUpText}
                        >
                            {item.createUp}
                        </Text>
                    </View>
                </View>
                {/* <Text
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
                </TouchableOpacity> */}

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
                    <TouchableOpacity onPress={() => setLike(!like)}>
                        <Ionicons
                            name="heart"
                            size={24}
                            color={like ? 'red' : '#DFDFDF'}
                        />
                    </TouchableOpacity>
                    <Text style={{ marginLeft: 6 }}>{item.like}</Text>
                </View>

                <View style={[styles.flexrowAndAlign, { marginLeft: 24 }]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Comment', { DataComment: item })} >
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

            {/* <Comment isVisible={showComment} onCloseComment={onCloseComment} data={item} dataUser={dataUser} /> */}
        </View>
    );
};

export default RenderPost


