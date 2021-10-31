import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Icon from '../assets';
import styles from '../modules/profile/Profile.styles'
import { UserProfile } from '../shared/models/Profile';
interface UserProps {
    data: any
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
    return data !== undefined ? (
        <View style={{ alignItems: 'center', paddingTop: 40 }}>
            <Image
                source={{ uri: data.user_image ?? 'https://i.pinimg.com/236x/09/aa/8d/09aa8d86147fa14a67fda510d5df2f60.jpg' }}
                style={{ width: 110, height: 110, borderRadius: 60 }}
            />
            <Text style={styles.userName}>{data.user_name}</Text>
            <Text style={styles.description}>
                {data.description !== "" ? data.description : 'Người này rất lười ko chịu để thông tin gì'}
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
    ) : null
};

export default ListHeader


