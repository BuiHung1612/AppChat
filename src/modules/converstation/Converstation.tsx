import React, { useEffect, useLayoutEffect, useState } from 'react';
import {
    ActivityIndicator,
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../../themes/Colors';
import Fonts from '../../themes/Fonts';
import Metrics from '../../themes/Metrics';
import { ListConverstations } from './ListConverstations';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Avatar } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { getListFriend } from './ConverstationActions';
const Converstation = ({ navigation }: any) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity
                    style={{
                        marginLeft: 10,
                        width: Metrics.navigationButtonSize,
                        height: Metrics.navigationButtonSize,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Ionicons name="headset-outline" size={25} color="black" />
                </TouchableOpacity>
            ),
            headerRight: () => (
                <TouchableOpacity
                    style={{
                        width: Metrics.navigationButtonSize,
                        height: Metrics.navigationButtonSize,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 10
                    }}
                    onPress={() => navigation.navigate('ListUser')}
                >
                    <Ionicons
                        name="person-add-outline"
                        size={25}
                        color="black"
                    />
                </TouchableOpacity>
            )
        });
    }, [navigation]);

    const dispatch = useDispatch()
    const token = useSelector((store: any) => store.AuthReducer.token)
    const isLoading = useSelector((store: any) => store.ConverstationReducer.isLoading)
    const listFriend = useSelector((store: any) => store.ConverstationReducer.listFriend)
    const ProfileData = useSelector((store: any) => store.AuthReducer.profile)
    console.log('isloading', isLoading);

    useEffect(() => {
        dispatch(getListFriend(token))
    }, [])

    const onRefresher = () => {
        dispatch(getListFriend(token))

    }

    const RenderButton = ({ item, action, title, subtitle }: any) => {
        return (
            <TouchableOpacity style={styles.buttonView} onPress={() => navigation.navigate(action !== 'Notification' ? 'ConvetstationDetail' : undefined, { Room: item })
            }>
                <View
                    style={[
                        styles.iconView,
                        {
                            backgroundColor:
                                action == 'Notification'
                                    ? '#A966FD'
                                    : Colors.transparent
                        }
                    ]}
                >
                    {action == 'Notification' ? (
                        <AntDesign
                            name="notification"
                            size={20}
                            color={Colors.white}
                        />
                    ) : (
                        <Image
                            source={{ uri: ProfileData.user_id == item.user_id_0 ? item.user_img_1 : item.user_img_0 }}
                            style={styles.iconView}
                        />
                    )}
                </View>
                <View style={{ marginLeft: 10, width: '86%' }}>
                    <Text style={styles.titleStyle}>
                        {action == 'Notification' ? title : ProfileData.user_id == item.user_id_0 ? item.user_name_1 : item.user_name_0}
                    </Text>
                    <Text style={styles.subtitleStyle} numberOfLines={1}>
                        {action == 'Notification' ? subtitle : item.subtitle}
                    </Text>
                </View>
            </TouchableOpacity >
        )
    };

    return (
        <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>



            <FlatList
                data={listFriend}
                renderItem={RenderButton}
                ListHeaderComponent={() => (
                    <RenderButton
                        action="Notification"
                        title="Sự kiện"
                        subtitle={`"người bí ẩn" vừa ghé thăm trang cá nhân của bạn`}
                    />
                )}
                refreshing={isLoading}
                onRefresh={onRefresher}
                showsVerticalScrollIndicator={false}
            />



        </SafeAreaView>
    );
};

export default Converstation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingVertical: 10
    },
    buttonView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 6
    },
    viewBtnRight: {
        marginLeft: 15,
    },
    iconView: {
        width: 56,
        height: 56,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleStyle: {
        color: 'black',

        fontSize: 15,
        fontFamily: Fonts.bold
    },
    subtitleStyle: {
        fontSize: 12,
        color: Colors.gray3,

        width: '90%'
    },
    horizontalBtn: { height: 90, marginLeft: 15 }
});
