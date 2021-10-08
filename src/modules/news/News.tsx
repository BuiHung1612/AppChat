import React, { useState } from 'react'
import { FlatList, Image, ImageProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RenderPost from '../../components/RenderPost';
import Report from '../../components/Report';
import TagAge from '../../components/TagAge';
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
    const [showReport, setShowReport] = useState(false)
    const onHandleClose = () => {
        setShowReport(false)
    }
    const RenderItemPost = ({ item }: any) => {
        return <RenderPost item={item} typeReport={'news'} />
    }
    return (
        <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
            <FlatList data={PostData} renderItem={RenderItemPost} showsVerticalScrollIndicator={false} />
            <Report isVisible={showReport} button1="Không thích" button3="Báo Cáo" cancelLabel="Huỷ" setVisible={onHandleClose} />

        </SafeAreaView>
    )
}

export default News

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
    },
    flexrowAndAlign: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    renderPostView: {
        maxWidth: '100%',
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
