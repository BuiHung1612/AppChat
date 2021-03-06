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

const Home = ({ navigation }: any) => {

    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)
    const [selectUser, setSelectUser] = useState()
    const ListUser = useSelector((store: any) => store.ProfileReducer.dataProfile)

    useEffect(() => {
        dispatch(getProfile())
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
                <Image source={Icon.img_user} style={styles.userImage} />
            </View>
            <View style={styles.itemView2}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.userName}>{item.userName}</Text>
                    <TagAge
                        sex={item.sex}
                        age={item.age}

                    />
                </View>
                <Text style={styles.description}>Anh ???y l?? ng?????i m???i</Text>
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
                    title="Nh???n Tin"
                    subtitle="23852 Tr???c tuy???n"
                />
                <HeaderBox
                    color={'#E3F2ED'}
                    image={Icon.phone}
                    title="G???i ??i???n"
                    subtitle="C??n l???i 10 l???n"
                />
                <HeaderBox
                    color={Colors.pink1}
                    image={Icon.mic}
                    title="Ph??ng Chat"
                    subtitle="Chat nh??m"
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
