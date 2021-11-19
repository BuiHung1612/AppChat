import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    FlatList,
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SpeedDial } from 'react-native-elements';

import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './Profile.styles'
import ListHeader from '../../components/ListHeader';
import RenderPost from '../../components/RenderPost';
import ListUser from '../home/ListUserData'
import { useDispatch, useSelector } from 'react-redux';
import { getListPost } from './ProfileAction';
import { getProfileUser, onSignOut } from '../auth/AuthActions';
const Profile = ({ navigation, route }: any) => {

    const [open, setOpen] = useState(false);
    const [refresh, setRefresh] = useState(false)
    const dispatch = useDispatch()
    const ProfileData = useSelector((store: any) => store.AuthReducer.profile)
    const token = useSelector((store: any) => store.AuthReducer.token)
    const listPost = useSelector((store: any) => store.ProfileReducer.listPost)
    const [renderScreen, setRenderScreen] = useState(false)
    const reset = () => {
        dispatch(getListPost(token))
        dispatch(getProfileUser(token))
    }

    useEffect(() => {
        reset()
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            reset()

        }, 60000);
        return () => clearInterval(interval);
    }, [])
    useEffect(() => {
        if (renderScreen == true) {
            reset()
        }
        return () => {
            setRenderScreen(false)
        }
    }, [renderScreen, navigation])
    const onHandleRefresh = () => {
        reset()
    }
    // console.log('profileDAATA', ProfileData);


    const RenderHeader = () => {
        return <ListHeader data={ProfileData} />

    }
    const renderFatherScreen = () => {
        setRenderScreen(true)
    }

    // cần định nghĩa lại type của item
    const RenderItemPost = ({ item }: any) => {
        return <RenderPost item={item} typeReport={'Profile'} renderFatherScreen={renderFatherScreen} />
    }

    const LogOut = () => {
        dispatch(onSignOut())
        // navigation.navigate('Login')
    }


    return (
        <SafeAreaView style={styles.container} >

            {/* thanh icon trên cùng màn hình  */}
            <View style={styles.iconView}>
                <Ionicons
                    name="location"
                    size={20}
                    style={{ marginLeft: 14 }}
                    color="#0B3861"
                />
                <View style={styles.viewIconRight}>
                    <Ionicons name="gift-outline" size={20} color="#000000" />
                    <View style={styles.viewVIP}>
                        <Ionicons
                            name="duplicate-outline"
                            size={20}
                            color="#F6D78A"
                        />
                        <Text style={styles.textVIP}>VIP</Text>
                    </View>
                    <Ionicons name="settings-outline" size={20} color="#000000" />
                </View>
            </View>
            {/* ảnh nhân vật + tên */}
            <View style={{ flex: 0.9, paddingHorizontal: 20 }}>
                {
                    listPost != null ? (
                        <FlatList
                            data={listPost?.list_Post}
                            renderItem={RenderItemPost}
                            ListHeaderComponent={RenderHeader}
                            refreshing={refresh}
                            onRefresh={onHandleRefresh}
                            ListEmptyComponent={() => {
                                return (
                                    <View style={{ alignItems: 'center', height: 200, justifyContent: 'flex-end' }}>
                                        <Image style={{ width: 120, borderRadius: 140, height: 120 }} source={{ uri: 'https://i.pinimg.com/originals/4e/cf/3a/4ecf3abb847d31947125838e9a6f4fc7.png' }} />
                                        <Text style={{ fontSize: 14, color: '#6E6E6E' }}>Không tìm thấy kết quả</Text>
                                    </View>
                                )
                            }}
                            showsVerticalScrollIndicator={false}
                        />
                    ) : <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size={26} color="blue" />
                    </View>
                }
            </View>
            <SpeedDial
                isOpen={open}
                icon={{ name: 'edit', color: '#fff' }}
                openIcon={{ name: 'close', color: '#fff' }}
                onOpen={() => setOpen(!open)}
                onClose={() => setOpen(!open)}
            >
                <SpeedDial.Action
                    icon={{ name: 'add', color: '#fff' }}
                    title="Add"
                    onPress={() => {
                        navigation.navigate('addPost')
                        setTimeout(() => {
                            setOpen(false)
                        }, 200);
                    }}
                />
                <SpeedDial.Action
                    icon={{ name: 'log-out-outline', type: "ionicon", color: '#fff' }}
                    title="Đăng xuất"
                    onPress={() => LogOut()}
                />
            </SpeedDial>

        </SafeAreaView>
    );
};

export default Profile;

