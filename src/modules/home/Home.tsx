import React, { useLayoutEffect } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../themes/Colors';
import Icon from '../../assets';
import styles from './Home.styles';
import ListUserData from './ListUserData';
import TagAge from '../../components/TagAge';
import { User } from '../../shared/models/Home';

const Home = ({ navigation }: any) => {
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

    const itemBoxRender = ({ item }: any) => {
        return (
            <TouchableOpacity style={styles.itemView}>
                <View style={{ width: '20%' }}>
                    <Image source={Icon.img_user} style={styles.userImage} />
                </View>
                <View style={styles.itemView2}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.userName}>{item.userName}</Text>
                        <TagAge
                            sex={item.sex}
                            age={item.age}
                            id={''}
                            userName={''}
                            userImage={''}
                            subtitle={''}
                        />
                    </View>
                    <Text style={styles.description}>Anh ấy là người mới</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
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
            <FlatList
                data={ListUserData}
                renderItem={itemBoxRender}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default Home;
