import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Icon from '../assets';
import styles from '../modules/profile/Profile.styles'
import { UserProfile } from '../shared/models/Profile';
interface UserProps {
    data: UserProfile
}
const ListHeader = ({ data }: UserProps) => {

    const Chip = ({ title }: any) => {
        return (
            <View style={styles.viewChip}>
                <Text style={styles.textChip}>{title}</Text>
            </View>
        );
    };

    const Follow = ({ number, title }: any) => {
        return (
            <View style={styles.followView}>
                <Text style={styles.followNumber}>{number}</Text>
                <Text style={styles.followTitle}>{title}</Text>
            </View>
        );
    };
    return (
        <View style={{ alignItems: 'center', paddingTop: 40 }}>
            <Image
                source={Icon.img_user}
                style={{ width: 110, height: 110, borderRadius: 60 }}
            />
            <Text style={styles.userName}>{data.userName}</Text>
            <Text style={styles.description}>
                {data.description}
            </Text>
            <View style={{ marginTop: 10 }}>
                <View style={styles.chipView}>
                    <Chip title="Thích ăn đồ ngọt" />
                    <Chip title="nhút nhát" />
                </View>
                <View style={styles.chipView}>
                    <Chip title="Nghiện internet" />
                    <Chip title="Thích ở nhà" />
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Follow number={data.following} title="Đang theo dõi" />
                <Follow number={data.followers} title="Người theo dõi" />
                <Follow number={data.visited} title="Đã ghé thăm" />
            </View>
        </View>
    );
};

export default ListHeader


