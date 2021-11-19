import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Post, UserProfile } from '../shared/models/Profile';
import Fonts from '../themes/Fonts';
import styles from '../modules/profile/Profile.styles'
import Report from './Report'
import { useNavigation } from '@react-navigation/native';
import TagAge from './TagAge';
import { img_url } from '../shared/Constants';
import { convertToTimeAgo, TIME_FORMATS } from '../utils/TimeUtil';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { likePostAction } from './UserProfileActions';
interface Props {
    typeReport?: string,
    item: any,
    renderFatherScreen: (isVisible: boolean) => void,
}
const RenderPost = ({ item, typeReport, renderFatherScreen }: Props) => {
    const [showReport, setShowReport] = useState(false)
    const [showComment, setShowComment] = useState(false)
    const [like, setLike] = useState(false)
    const navigation = useNavigation()
    const token = useSelector((store: any) => store.AuthReducer.token)

    const dispatch = useDispatch()
    const onCancelReport = () => {
        setShowReport(false)
    }

    // useEffect(() => {
    //     if (like == true) {
    //         dispatch(likePostAction(token, item.post_id, true))
    //     }
    //     else {
    //         dispatch(likePostAction(token, item.post_id, false))
    //     }
    //     renderFatherScreen(true)

    //     return () => {
    //         renderFatherScreen(false)
    //     }
    // }, [like])

    const onPressLike = () => {

        dispatch(likePostAction(token, item.post_id))
        renderFatherScreen(true)


    }
    console.log('item :', item);


    return (
        <View style={{ maxWidth: '100%', marginTop: 10, }}>
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
                        typeReport !== "news" ? null : (<TouchableOpacity onPress={() => navigation.navigate('UserProfile', { data: item })} >
                            <Image source={{ uri: item?.user_image }} style={styles.userImage} />
                        </TouchableOpacity>)
                    }
                    <View style={{ marginLeft: 10 }}>
                        {typeReport !== "news" ? null : (<View style={{ flexDirection: 'row', }}>
                            <Text>{item?.user_name}</Text>
                            <TagAge sex={item?.sex}
                                age={item?.age} />
                        </View>)
                        }
                        <Text
                            style={styles.createUpText}
                        >
                            {moment(item.create_up).format(TIME_FORMATS.DateTime)}
                        </Text>
                    </View>
                </View>

                <TouchableOpacity onPress={() => setShowReport(true)} >
                    <Ionicons name="ellipsis-horizontal" size={20} />
                </TouchableOpacity>

            </View>
            <Text style={{ paddingVertical: 10 }}>{item.post_content}</Text>
            {item.image !== null ? (
                <Image
                    source={{ uri: item.post_image ?? img_url }}
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
                    <TouchableOpacity onPress={() => onPressLike()}>
                        <Ionicons
                            name="heart"
                            size={24}
                            color={item.isLiked ? 'red' : '#DFDFDF'}
                        />
                    </TouchableOpacity>
                    <Text style={{ marginLeft: 6 }}>{item.like_number}</Text>
                </View>

                <View style={[styles.flexrowAndAlign, { marginLeft: 24 }]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Comment', { DataComment: item, userImage: img_url })} >
                        <Ionicons
                            name="chatbubble"
                            size={24}
                            color={'#DFDFDF'}
                        />
                    </TouchableOpacity>
                    <Text style={{ marginLeft: 8 }}>0</Text>
                </View>
            </View>

            {
                typeReport == "Profile" ? (
                    <Report isVisible={showReport}
                        button1="Ghim vào hồ sơ của bạn"
                        button2="Xoá"
                        fourButton={false}
                        cancelLabel="Huỷ"
                        setVisible={onCancelReport}
                        canDelete={true}
                        itemToDelete={item}
                    />)
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


