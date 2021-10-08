import React, { useEffect, useState } from 'react';
import {
    FlatList,
    Text,
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
import { getProfile } from './ProfileAction';

const Profile = ({ navigation, route }: any) => {

    const [open, setOpen] = useState(false);

    const [isVisible, setIsVisible] = useState(false);
    const dispatch = useDispatch()
    const ProfileData = useSelector((store: any) => store.ProfileReducer.dataProfile)
    // console.log('dataProfile', ProfileData);


    const onHandleClose = () => {
        setIsVisible(false)
    }
    useEffect(() => {
        dispatch(getProfile())
    }, [])

    const RenderHeader = () => {
        return <ListHeader data={ProfileData[0]} />

    }

    // cần định nghĩa lại type của item
    const RenderItemPost = ({ item }: any) => {
        return <RenderPost item={item} typeReport={'Profile'} />
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
                <FlatList
                    data={ListUser[0].posts}
                    renderItem={RenderItemPost}
                    ListHeaderComponent={RenderHeader}
                    showsVerticalScrollIndicator={false}
                />
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
                    onPress={() => console.log('Add Something')}
                />
                <SpeedDial.Action
                    icon={{ name: 'delete', color: '#fff' }}
                    title="Delete"
                    onPress={() => console.log('Delete Something')}
                />
            </SpeedDial>

        </SafeAreaView>
    );
};

export default Profile;

