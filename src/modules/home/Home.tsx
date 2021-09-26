import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from '../../themes/Colors'
const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.boxHeader}>
                <Ionicons name="options-outline" size={25} />
                <Image source={{ uri: 'https://images-platform.99static.com/rJf3yEkwswCDD7s1v1woWkHve20=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/79/79860/attachment_79860684' }} style={styles.imageLogo} />
            </View>

        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    imageLogo: {
        width: 100,
        height: 100
    },
    boxHeader: {
        flex: 0.1,
        flexDirection: 'row'
    }
})
