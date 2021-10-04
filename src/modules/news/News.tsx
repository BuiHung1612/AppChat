import React from 'react'
import { ActivityIndicator, FlatList, Image, ImageProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import TagAge from '../../components/TagAge';
import { Post } from '../../shared/models/Profile';
import Colors from '../../themes/Colors';
import Fonts from '../../themes/Fonts';
import { PostData } from './NewsData';

interface News {
    item: {
        idUser: string,
        userName: string,
        userImage: ImageProps | Readonly<ImageProps>,
        sex: number,
        age: number,
        createUp: Date,
        subtitle: string,
        image: string,
        like: number,
        disLike: number,
        isLike: boolean
    }
}

const News = ({ navigation }: any) => {

    const RenderPost = ({ item }: News) => {
        return (
            <View style={styles.renderPostView}>
                <View
                    style={styles.flexrowAndBetween}
                >
                    <View style={[styles.flexrowAndAlign]}>
                        <TouchableOpacity onPress={() => navigation.navigate('Me', { UserId: item.idUser })}>
                            <Image source={item.userImage} style={styles.userImage} />
                        </TouchableOpacity>
                        <View style={{ marginLeft: 10 }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text>{item.userName}</Text>
                                <TagAge sex={item.sex}
                                    age={item.age} />
                            </View>
                            <Text
                                style={styles.createUpText}
                            >
                                {item.createUp}
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity >
                        <Ionicons name="ellipsis-horizontal" size={20} />
                    </TouchableOpacity>
                </View>
                <Text style={{ paddingVertical: 10 }}>{item.subtitle}</Text>
                {item.image !== null ? (
                    <Image
                        source={{ uri: item.image }}
                        style={styles.imagePost}
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
    return (
        <View style={styles.container}>
            <FlatList data={PostData} renderItem={RenderPost} />
        </View>
    )
}

export default News

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDEDED'
    },
    flexrowAndAlign: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    renderPostView: {
        maxWidth: '100%',
        marginTop: 10,
        paddingHorizontal: 16,
        paddingVertical: 10,
        marginBottom: 4,
        backgroundColor: 'white'
    },
    flexrowAndBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    createUpText: {
        color: '#DDDDDD',
        fontFamily: Fonts.bold,
        marginTop: 4

    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    imagePost: {
        height: 300,
        maxWidth: '100%',
        borderRadius: 10
    }
})
