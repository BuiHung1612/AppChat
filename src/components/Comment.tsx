import React from 'react'
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import News from '../modules/news/News'
import { UserProfile } from '../shared/models/Profile'
import Fonts from '../themes/Fonts'
import TagAge from './TagAge'

interface CommentProps {
    isVisible: boolean,
    onCloseComment: (item: boolean) => void,
    data: any,


}
const Comment = ({ isVisible, onCloseComment, data }: CommentProps) => {



    const onPressBack = () => {
        onCloseComment(true)
    }


    return (
        <Modal visible={isVisible} >
            <View style={styles.header}>
                <TouchableOpacity onPress={() => onPressBack()} style={{ marginLeft: 10, width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}>
                    <Ionicons
                        name="arrow-back-outline"
                        size={20}

                        color="#000000"
                    />
                </TouchableOpacity>
                <View style={{ width: '70%', alignItems: 'center' }}>
                    <Text style={{
                        color: 'black',
                        fontFamily: Fonts.bold,
                        fontSize: 20,
                    }}>Chi Tiết</Text>
                </View>
            </View>
            <View style={styles.renderPostView}>
                <View
                    style={styles.flexrowAndBetween}
                >
                    <View style={[styles.flexrowAndAlign]}>
                        <TouchableOpacity >
                            <Image source={data.userImage} style={styles.userImage} />
                        </TouchableOpacity>
                        <View style={{ marginLeft: 10 }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text>{data?.userName}</Text>
                                <TagAge sex={data?.sex}
                                    age={data?.age} />
                            </View>
                            <Text
                                style={styles.createUpText}
                            >
                                {data.createUp}
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity >
                        <Ionicons name="ellipsis-horizontal" size={20} />
                    </TouchableOpacity>
                </View>
                <Text style={{ paddingVertical: 10 }}>{data.subtitle}</Text>
                {data.image !== null ? (
                    <Image
                        source={{ uri: data.image }}
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
                        <Text style={{ marginLeft: 6 }}>{data.like}</Text>
                    </View>

                    <View style={[styles.flexrowAndAlign, { marginLeft: 24 }]}>
                        <TouchableOpacity>
                            <Ionicons
                                name="chatbubble"
                                size={24}
                                color={'#DFDFDF'}
                            />
                        </TouchableOpacity>
                        <Text style={{ marginLeft: 8 }}>{data.disLike}</Text>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default Comment

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
    }
})
