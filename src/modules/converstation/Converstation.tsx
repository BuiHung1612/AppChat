import React, { useEffect, useLayoutEffect, useState } from 'react';
import {
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
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import { Avatar } from 'react-native-elements';
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

    const [listUser, setListUser] = useState([])


    useEffect(() => {
        firestore().collection('Friends')
            .doc(auth().currentUser?.uid)
            .collection('List')
            .get()
            .then(querySnapshot => {
                const newData: any = querySnapshot.docs.map(doc => ({
                    ...doc.data(),
                }));
                setListUser(newData);
            })
            .catch(error => {
                console.log('Error getting documents: ', error);
            });
    }, [])

    const RenderButton = ({ item, action, title, subtitle }: any) => {
        return (
            <TouchableOpacity style={styles.buttonView} onPress={() => navigation.navigate(action !== 'Notification' ? 'ConvetstationDetail' : undefined, { Id_Room: item })
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
                            source={item.userImage}
                            style={styles.iconView}
                        />
                    )}
                </View>
                <View style={{ marginLeft: 10, width: '86%' }}>
                    <Text style={styles.titleStyle}>
                        {action == 'Notification' ? title : item.userName}
                    </Text>
                    <Text style={styles.subtitleStyle} numberOfLines={1}>
                        {action == 'Notification' ? subtitle : item.subtitle}
                    </Text>
                </View>
            </TouchableOpacity >
        );
    };
    const example = {
        title: 'Big pimple',
        size: 65,
        badgeProps: {
            size: 'pimpleHuge',
            borderWidth: 0,
            backgroundColor: '#51CA31',
        },
        badgePosition: 'BOTTOM_RIGHT',
    };
    return (
        <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
            <FlatList
                data={listUser}
                renderItem={RenderButton}
                renderItem={({ item }: any) => {
                    return auth().currentUser?.uid === item?.idSender ? (
                        <TouchableOpacity style={styles.horizontalBtn}>
                            <Image style={{ width: 60, height: 60, borderRadius: 40 }} source={{ uri: item?.img }} />
                            <View style={styles.viewBtnRight}>
                                <Text >
                                    {item?.userName}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity >
                            <Image style={{ width: 60, height: 60, borderRadius: 40 }} source={{ uri: item?.img }} />

                            <View style={styles.viewBtnRight}>
                                <Text >
                                    {item?.friendName}
                                </Text>
                            </View>

                            {console.log('boxchar', item?.idBoxChat)}
                        </TouchableOpacity>
                    );
                }}
                ListHeaderComponent={() => (
                    <RenderButton
                        action="Notification"
                        title="Sự kiện"
                        subtitle={`"người bí ẩn" vừa ghé thăm trang cá nhân của bạn`}
                    />
                )}
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
