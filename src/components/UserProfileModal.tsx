import React, { useState } from 'react';
import {
    ActivityIndicator,
    FlatList,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fonts from '../themes/Fonts';
import Icon from '../assets';
import { SpeedDial, Image, BottomSheet, ListItem } from 'react-native-elements';
import { Post } from '../shared/models/Profile';
import Report from '../components/Report';
import styles from '../modules/profile/Profile.styles'
import RenderPost from './RenderPost';
import ListHeader from './ListHeader';
import ListUser from '../modules/home/ListUserData'
interface UserProfile {
    title?: string;
    showModal?: boolean,
    onCloseModel: (isClose: boolean) => void,
    data: UserProfile
}

const ModalProfile = ({ showModal, onCloseModel, data }: UserProfile) => {
    console.log('data user', data);


    const [isVisible, setIsVisible] = useState(false);

    const onHandleClose = () => {
        setIsVisible(false)
    }
    const RenderHeader = () => {
        return <ListHeader data={data} />
    }
    const onPressBack = () => {
        onCloseModel(true)
    }
    // cần định nghĩa lại type của item
    const RenderItemPost = ({ item }: any) => {
        return <RenderPost item={item} />
    }

    return (
        <Modal style={styles.container} visible={showModal} animationType="slide" >
            {/* thanh icon trên cùng màn hình  */}
            <View style={styles.iconView}>
                <TouchableOpacity onPress={() => onPressBack()} style={{ marginLeft: 15, width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}>
                    <Ionicons
                        name="arrow-back-outline"
                        size={20}

                        color="#000000"
                    />
                </TouchableOpacity>
                <View style={styles.viewIconRightModel}>
                    <Ionicons name="gift-outline" size={24} color="#000000" />
                    <TouchableOpacity onPress={() => setIsVisible(true)}>
                        <Ionicons name="ellipsis-horizontal" size={20} color="#000000" />
                    </TouchableOpacity>
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
            <Report isVisible={isVisible} button1="Chỉnh sửa biệt danh" button2="Chặn" button3="Báo Cáo" cancelLabel="Huỷ" fourButton={true} setVisible={onHandleClose} />

        </Modal>
    );
};

export default ModalProfile;

