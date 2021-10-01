import React, { useLayoutEffect } from 'react';
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../../themes/Colors';
import Fonts from '../../themes/Fonts';
import Metrics from '../../themes/Metrics';
import { ListConverstations } from './ListConverstations';

const Converstation = ({ navigation }: any) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity
                    style={{
                        marginLeft: 10,
                        width: Metrics.navigationButtonSize,
                        height: Metrics.navigationButtonSize,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Ionicons name="headset-outline" size={25} color="black" />
                </TouchableOpacity>
            ),
            headerRight: () => (
                <TouchableOpacity
                    style={{
                        width: Metrics.navigationButtonSize,
                        height: Metrics.navigationButtonSize,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 10
                    }}
                >
                    <Ionicons
                        name="person-add-outline"
                        size={25}
                        color="black"
                    />
                </TouchableOpacity>
            )
        });
    }, [navigation]);

    const RenderButton = ({ item, action, title, subtitle }: any) => {
        return (
            <TouchableOpacity style={styles.buttonView}>
                <View
                    style={[
                        styles.iconView,
                        {
                            backgroundColor:
                                action == 'Notification'
                                    ? '#A966FD'
                                    : Colors.transparent
                        }
                    ]}
                >
                    {action == 'Notification' ? (
                        <AntDesign
                            name="notification"
                            size={20}
                            color={Colors.white}
                        />
                    ) : (
                        <Image
                            source={item.userImage}
                            style={styles.iconView}
                        />
                    )}
                </View>
                <View style={{ marginLeft: 20, width: '86%' }}>
                    <Text style={styles.titleStyle}>
                        {action == 'Notification' ? title : item.userName}
                    </Text>
                    <Text style={styles.subtitleStyle} numberOfLines={1}>
                        {action == 'Notification' ? subtitle : item.subtitle}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };
    return (
        <View style={styles.container}>
            <FlatList
                data={ListConverstations}
                renderItem={RenderButton}
                ListHeaderComponent={() => (
                    <RenderButton
                        action="Notification"
                        title="Sự kiện"
                        subtitle={`"người bí ẩn" vừa ghé thăm trang cá nhân của bạn`}
                    />
                )}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default Converstation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingVertical: 10
    },
    buttonView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    iconView: {
        width: 60,
        height: 60,

        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleStyle: {
        color: 'black',

        fontSize: 16,
        fontFamily: Fonts.bold
    },
    subtitleStyle: {
        fontSize: 14,
        color: Colors.gray3,
        marginTop: 4,
        width: '90%'
    }
});
