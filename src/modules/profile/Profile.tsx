import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    FlatList,
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
import { onSignOut } from '../auth/AuthActions';
const Profile = ({ navigation, route }: any) => {

    const [open, setOpen] = useState(false);
    const [refresh, setRefresh] = useState(false)
    const dispatch = useDispatch()
    const ProfileData = useSelector((store: any) => store.AuthReducer.profile)
    const token = useSelector((store: any) => store.AuthReducer.token)
    const listPost = useSelector((store: any) => store.ProfileReducer.listPost)
    console.log('list post:', listPost);


    useEffect(() => {
        // const interval = setInterval(() => {
        dispatch(getListPost(token))
        // }, 3000);
        // return () => clearInterval(interval);

    }, [])
    const onHandleRefresh = () => {
        dispatch(getListPost(token))
    }

    const RenderHeader = () => {
        return <ListHeader data={ProfileData} />

    }

    // cần định nghĩa lại type của item
    const RenderItemPost = ({ item }: any) => {
        return <RenderPost item={item} typeReport={'Profile'} />
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
                                    <View>
                                        <Text>empty</Text>
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

