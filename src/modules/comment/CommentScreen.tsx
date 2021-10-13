import React from 'react'
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Input } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons'
import TagAge from '../../components/TagAge'
import Fonts from '../../themes/Fonts'

const CommentScreen = ({ navigation, route }: any) => {
    const { DataComment } = route.params
    // console.log('dataComment', DataComment);

    const ListHeader = () => {
        return <View style={styles.renderPostView}>
            <View
                style={styles.flexrowAndBetween}
            >
                <View style={[styles.flexrowAndAlign]}>
                    <TouchableOpacity >
                        <Image source={DataComment?.userImage} style={styles.userImage} />
                    </TouchableOpacity>
                    <View style={{ marginLeft: 10 }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Text>{DataComment?.userName}</Text>
                            <TagAge sex={DataComment?.sex}
                                age={DataComment?.age} />
                        </View>
                        <Text
                            style={styles.createUpText}
                        >
                            {DataComment.createUp}
                        </Text>
                    </View>
                </View>
                <TouchableOpacity >
                    <Ionicons name="ellipsis-horizontal" size={20} />
                </TouchableOpacity>
            </View>
            <Text style={{ paddingVertical: 10 }}>{DataComment.subtitle}</Text>
            {DataComment.image !== null ? (
                <Image
                    source={{ uri: DataComment.image }}
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
                    <Text style={{ marginLeft: 6 }}>{DataComment.like}</Text>
                </View>

                <View style={[styles.flexrowAndAlign, { marginLeft: 24 }]}>
                    <TouchableOpacity>
                        <Ionicons
                            name="chatbubble"
                            size={24}
                            color={'#DFDFDF'}
                        />
                    </TouchableOpacity>
                    <Text style={{ marginLeft: 8 }}>{DataComment.disLike}</Text>
                </View>
            </View>
            <View style={{ backgroundColor: '#F9F6FF', marginVertical: 10, paddingVertical: 8, paddingHorizontal: 10, borderRadius: 6, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons name="construct" size={24} color="#FAAC58" />
                    <Text style={{ fontFamily: Fonts.bold, fontSize: 12, marginLeft: 10 }}>Nhấn và giữ bình luận để báo cáo hoặc xoá</Text>
                </View>
                <Ionicons name="close-outline" size={24} color="black" />
            </View>
        </View>
    }
    const renderItem = ({ item }: any) => {
        return (
            <View
                style={{ marginBottom: 10, paddingHorizontal: 16 }}
            >
                <View style={[styles.flexrowAndAlign]}>
                    <TouchableOpacity >
                        <Image source={item?.userImage} style={styles.userImage} />
                    </TouchableOpacity>
                    <View style={{ marginLeft: 10 }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Text>{item?.userName}</Text>
                            <TagAge sex={item?.sex}
                                age={item?.age} />
                        </View>
                        <Text
                            style={styles.createUpText}
                        >
                            {item.createUp}
                        </Text>
                    </View>
                </View>
                <Text style={{ marginLeft: 70 }}>{item?.content}</Text>

            </View>
        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <FlatList
                data={DataComment.comments}
                renderItem={renderItem}
                ListHeaderComponent={ListHeader}
                showsVerticalScrollIndicator={false}
            />
            <View style={styles.bottomBar}>
                <TouchableOpacity style={{ padding: 10 }} >

                    <Ionicons name="happy-outline" size={26} />
                </TouchableOpacity>
                <TextInput
                    placeholder="Bình luận"

                    style={styles.inputView}
                />
                <TouchableOpacity style={{ padding: 10 }} >

                    <Ionicons name="mic" size={26} />
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 10, }}>
                    <Ionicons name="image" size={26} color="#04B4AE" />
                </TouchableOpacity>
            </View>


        </View>
    )
}

export default CommentScreen

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#EDEDED'
    },
    header: {
        flex: 0.1,
        flexDirection: 'row',
        alignItems: 'center',

    },
    flexrowAndAlign: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    renderPostView: {
        maxWidth: '100%',
        flex: 0.9,
        paddingHorizontal: 16,
        paddingVertical: 10,
        marginBottom: 10,
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
    },
    inputView: {
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 10,
        height: 42,
        borderWidth: 0.3,
        width: '64%',
        borderRadius: 10,
        color: 'black',
        fontSize: 14,
        fontFamily: Fonts.light
    },
    bottomBar: {
        height: 54,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 4,
    }
})
