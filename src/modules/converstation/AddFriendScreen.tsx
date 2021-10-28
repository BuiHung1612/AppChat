
import React, { useEffect, useLayoutEffect, useState } from 'react';
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getListUser } from './ConverstationActions';
import { img_url } from '../../shared/Constants'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const AddFriend = () => {
    const [data, setData] = useState([]);
    const dispatch = useDispatch()
    const ListUserData = useSelector((store: any) => store.ConverstationReducer.listUser)
    console.log('ListUserData', ListUserData);

    useEffect(() => {
        dispatch(getListUser())
        return () => {

        }
    }, [])


    const ItemRender = ({ item }: any) => {
        return (
            <View>
                <TouchableOpacity
                    style={styles.btnContainer}
                    onPress={() => Alert.alert(item.user_name)}>
                    <View style={{ width: windowWidth * 0.25, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={{ uri: item.user_image ?? img_url }} style={styles.userImg} />
                    </View>

                    <View
                        style={{
                            width: windowWidth * 0.67,

                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}>
                            <Text style={styles.userName}>{item.user_name}</Text>
                            <Text style={styles.requestTime}>1 ngày</Text>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                marginTop: 10,
                            }}>
                            <TouchableOpacity
                                style={styles.btnAddFriend}
                            >
                                <Text style={styles.btnText}>Thêm bạn bè</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnUnAddFriend}>
                                <Text style={styles.btnText}>Gỡ</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.container}>

            <View style={{ flex: 0.94 }}>
                <FlatList
                    data={ListUserData}
                    renderItem={ItemRender}
                    keyExtractor={(item, index) => index.toString()}
                />

            </View>
        </View>
    );
};

export default AddFriend;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
        paddingRight: 10,
        paddingLeft: 10,
    },
    btnContainer: {
        height: windowHeight * 0.14,
        flexDirection: 'row',
        borderRadius: 20,
        paddingVertical: 10,
        borderBottomWidth: 0.4,
        borderColor: '#d8d8d8'
    },
    userImg: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    header: {
        flex: 0.06,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#E5E6EB',
    },
    headerText2: {
        color: '#4799FD',
        fontSize: 16,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    requestTime: {
        color: '#8A8D92',
    },
    btnAddFriend: {
        width: windowWidth * 0.3,
        height: 35,
        backgroundColor: '#216FDB',
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    btnUnAddFriend: {
        width: windowWidth * 0.3,
        height: 35,
        backgroundColor: '#393A3C',
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
    },
});
