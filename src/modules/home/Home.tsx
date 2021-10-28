import React, { useEffect, useLayoutEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../themes/Colors';
import Icon from '../../assets';
import styles from './Home.styles';
import ListUserData from './ListUserData';
import TagAge from '../../components/TagAge';
import { SafeAreaView } from 'react-native-safe-area-context';
import ModalProfile from '../../components/UserProfileModal';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../profile/ProfileAction';
import { getListUser } from '../converstation/ConverstationActions';
import { img_url } from '../../shared/Constants'
const Home = ({ navigation }: any) => {

    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)
    const [selectUser, setSelectUser] = useState()
    const ListUser = useSelector((store: any) => store.ConverstationReducer.listUser)
    console.log(ListUser);

    useEffect(() => {
        dispatch(getListUser())
    }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity
                    onPress={() => console.log('alo')}
                    style={styles.headerButtonLeft}
                >
                    <Ionicons
                        name="options-outline"
                        size={30}
                        style={{ marginLeft: 15 }}
                    />
                </TouchableOpacity>
            )
        });
    }, [navigation]);

    const HeaderBox = ({ color, image, title, subtitle }: any) => {
        return (
            <TouchableOpacity
                style={[styles.boxButton, { backgroundColor: color }]}
            >
                <Image source={image} style={styles.headerBoxImage} />
                <Text style={styles.headerBoxTitle}>{title}</Text>
                <Text style={styles.headerBoxSubtitle}>{subtitle}</Text>
            </TouchableOpacity>
        );
    };

    const itemBoxRender = ({ item }: any) =>
        <TouchableOpacity style={styles.itemView} onPress={() => {
            navigation.navigate('UserProfile', { data: item })
        }}>
            <View style={{ marginRight: 14 }}>
                <Image source={{ uri: item.user_image ?? img_url }} style={styles.userImage} />
            </View>
            <View style={styles.itemView2}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.userName}>{item.user_name}</Text>
                    <TagAge
                        sex={item.sex}
                        age={item.age}

                    />
                </View>
                <Text style={styles.description}>Anh ấy là người mới</Text>
            </View>
        </TouchableOpacity>


    const onCloseModel = () => {
        setShowModal(false)
    }

    return ListUser !== null ? (
        <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
            <View style={styles.headerView}>
                <HeaderBox
                    color={Colors.pink1}
                    image={Icon.chat}
                    title="Nhắn Tin"
                    subtitle="23852 Trực tuyến"
                />
                <HeaderBox
                    color={'#E3F2ED'}
                    image={Icon.phone}
                    title="Gọi Điện"
                    subtitle="Còn lại 10 lần"
                />
                <HeaderBox
                    color={Colors.pink1}
                    image={Icon.mic}
                    title="Phòng Chat"
                    subtitle="Chat nhóm"
                />
            </View>
            <View style={{ marginHorizontal: 16 }}>
                <FlatList
                    data={ListUser}
                    renderItem={itemBoxRender}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    ) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size={30} color="blue" />
        </View>
    )


};

export default Home;
