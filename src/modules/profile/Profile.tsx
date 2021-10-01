import React, { useState } from 'react';
import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../themes/Colors';
import Fonts from '../../themes/Fonts';
import Icon from '../../assets';
import { PostData } from '../home/ListUserData';
import { SpeedDial, Image, BottomSheet, ListItem } from 'react-native-elements';
import { Post } from '../../shared/models/Profile';
interface UserProfile {
    title: string;
}

const Profile = () => {
    const [open, setOpen] = useState(false);
    const Chip = ({ title }: UserProfile) => {
        return (
            <View style={styles.viewChip}>
                <Text style={styles.textChip}>{title}</Text>
            </View>
        );
    };
    const Follow = ({ number, title }: any) => {
        return (
            <View style={styles.followView}>
                <Text style={styles.followNumber}>{number}</Text>
                <Text style={styles.followTitle}>{title}</Text>
            </View>
        );
    };

    const RenderPost = ({ item }: Post) => {
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
                    <TouchableOpacity onPress={() => setIsVisible(true)}>
                        <Ionicons name="ellipsis-horizontal" size={20} />
                    </TouchableOpacity>
                </View>
                <Text style={{ paddingVertical: 10 }}>{item.subtitle}</Text>
                {item.image !== null ? (
                    <Image
                        source={{ uri: item.image }}
                        PlaceholderContent={<ActivityIndicator />}
                        style={{
                            height: 300,
                            maxWidth: '100%',
                            borderRadius: 10
                        }}
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
            </View>
        );
    };

    const [isVisible, setIsVisible] = useState(false);
    const list = [
        { title: 'List Item 1' },
        { title: 'List Item 2' },
        {
            title: 'Cancel',
            containerStyle: { backgroundColor: 'red' },
            titleStyle: { color: 'white' },
            onPress: () => setIsVisible(false)
        }
    ];
    const listHeader = () => {
        return (
            <View style={{ alignItems: 'center', paddingTop: 40 }}>
                <Image
                    source={Icon.img_user}
                    style={{ width: 110, height: 110, borderRadius: 60 }}
                />
                <Text style={styles.userName}>Bùi Anh Tuấn</Text>
                <Text style={styles.description}>
                    Chính phủ Việt Nam, Thủ tướng Chính phủ Việt Nam, Cổng Thông
                    tin điện tử Chính phủ,
                </Text>
                <View style={{ marginTop: 10 }}>
                    <View style={styles.chipView}>
                        <Chip title="Thích ăn đồ ngọt" />
                        <Chip title="nhút nhát" />
                    </View>
                    <View style={styles.chipView}>
                        <Chip title="Nghiện internet" />
                        <Chip title="Thích ở nhà" />
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Follow number={0} title="Đang theo dõi" />
                    <Follow number={999} title="Người theo dõi" />
                    <Follow number={999} title="Đã ghé thăm" />
                </View>
            </View>
        );
    };
    return (
        <View style={styles.container}>
            {/* thanh icon trên cùng màn hình  */}
            <View style={styles.iconView}>
                <Ionicons
                    name="radio-outline"
                    size={26}
                    style={{ marginLeft: 15 }}
                />
                <View style={styles.viewIconRight}>
                    <Ionicons name="gift-outline" size={26} />
                    <View style={styles.viewVIP}>
                        <Ionicons
                            name="duplicate-outline"
                            size={26}
                            color="#F6D78A"
                        />
                        <Text style={styles.textVIP}>VIP</Text>
                    </View>

                    <Ionicons name="settings-outline" size={26} />
                </View>
            </View>
            {/* ảnh nhân vật + tên */}
            <View style={{ flex: 0.9, paddingHorizontal: 20 }}>
                <FlatList
                    data={PostData}
                    renderItem={RenderPost}
                    ListHeaderComponent={listHeader}
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
            <BottomSheet
                isVisible={isVisible}
                modalProps={{ animationType: 'fade' }}
                containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}
            >
                <TouchableOpacity style={styles.reportButton}>
                    <Text style={styles.reportLabel}>Báo cáo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={() => setIsVisible(false)}
                >
                    <Text style={styles.cancelLabel}>Huỷ</Text>
                </TouchableOpacity>
            </BottomSheet>
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    iconView: {
        flex: 0.08,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    viewIconRight: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '50%'
    },
    viewVIP: {
        flexDirection: 'row',
        height: 36,
        width: 80,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#FEFAEF'
    },
    textVIP: {
        color: '#F6D78A',
        fontSize: 14,
        fontFamily: Fonts.bold
    },
    userName: {
        fontFamily: Fonts.bold,
        lineHeight: 20,
        fontSize: 16,
        marginTop: 14
    },
    description: {
        width: '74%',
        fontFamily: Fonts.medium,
        lineHeight: 20,
        fontSize: 14,
        marginTop: 14,
        textAlign: 'center'
    },
    chipView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 4
    },
    viewChip: {
        backgroundColor: '#F9F6FE',
        padding: 10,
        borderRadius: 30,
        marginHorizontal: 4,
        marginVertical: 2
    },
    textChip: {
        color: Colors.black1,
        fontFamily: Fonts.bold,
        fontSize: 14
    },
    followView: {
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 10
    },
    followNumber: {
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 22
    },
    followTitle: {
        fontFamily: Fonts.medium,
        color: Colors.gray3,
        fontSize: 14,
        lineHeight: 20
    },
    flexrowAndAlign: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    reportButton: {
        marginHorizontal: 20,
        borderRadius: 10,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8726FE',
        marginVertical: 12
    },
    reportLabel: {
        fontFamily: Fonts.bold,
        fontSize: 16,
        color: Colors.white
    },
    cancelButton: {
        marginHorizontal: 20,
        borderRadius: 10,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: 20
    },
    cancelLabel: {
        fontSize: 16,
        color: Colors.black1,
        fontFamily: Fonts.medium
    }
});
