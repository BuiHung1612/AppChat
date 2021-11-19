import React, { useState } from 'react'
import { ActivityIndicator, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { BottomSheet, ListItem } from 'react-native-elements';
import Icon from '../assets';
import styles from '../modules/profile/Profile.styles'
import { UserProfile } from '../shared/models/Profile';
import Colors from '../themes/Colors';
import Fonts from '../themes/Fonts';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { updateAvatar } from '../modules/auth/AuthActions';
import { Image } from 'react-native-elements';
interface UserProps {
    data: any
}
const ListHeader = ({ data }: UserProps) => {
    const token = useSelector((store: any) => store.AuthReducer.token)
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
    const [isVisibleModal, setIsVibleModal] = useState(false)
    const dispatch = useDispatch()
    const pressImage = () => {
        setIsVibleModal(true)
    }

    const MultipleImage = async (image: any) => {

        const formData = new FormData();
        formData.append('image', {
            uri: image.path,
            type: 'image/jpeg',
            name: 'lasda.jpg',
        });
        axios({
            method: 'post',
            url: 'https://api.imgur.com/3/upload',
            data: formData,
            headers: {
                Accept: 'application/x-www-form-urlencode',
                Authorization: 'Client-ID 49581f490d5908f',
            },
        })
            .then(data => {
                setIsVibleModal(false)
                dispatch(updateAvatar(token, data?.data?.data?.link))

            }
            )
            .catch(error => {
                console.log('error', error);
            });

    };

    const takeFromLib = () => {
        ImagePicker.openPicker({
            compressImageMaxHeight: 1024,
            compressImageMaxWidth: 1024

        }).then(image => {
            MultipleImage(image)
        });
    }

    const takeAPicture = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
        }).then(image => {
            MultipleImage(image);

        });
    }


    return data !== undefined ? (
        <View style={{ alignItems: 'center', paddingTop: 40 }}>
            <TouchableOpacity onPress={pressImage}>

                <Image
                    source={{ uri: data.user_image }}
                    style={{ width: 110, height: 110, borderRadius: 60 }}
                    PlaceholderContent={<ActivityIndicator />}
                    placeholderStyle={{ backgroundColor: '#f2f2f2' }}
                />



            </TouchableOpacity>
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
            <BottomSheet
                isVisible={isVisibleModal}

                containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}
            >

                <TouchableOpacity
                    style={headerStyle.reportButton}
                    onPress={takeFromLib}
                >
                    <Text style={headerStyle.reportLabel}>Chọn ảnh từ thư viện</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={headerStyle.reportButton}
                    onPress={takeAPicture}
                >
                    <Text style={headerStyle.reportLabel}>Chụp ảnh</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={headerStyle.cancelButton}
                    onPress={() => setIsVibleModal(false)}
                >
                    <Text style={headerStyle.cancelLabel}>Cancel</Text>
                </TouchableOpacity>

            </BottomSheet>
        </View>
    ) : null

};

export default ListHeader
const headerStyle = StyleSheet.create({
    cancelButton: {
        marginHorizontal: 20,
        borderRadius: 10,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: 20
    },
    cancelLabel: {
        fontSize: 16,
        color: Colors.black1,
        fontFamily: Fonts.medium
    },
    reportButton: {
        marginHorizontal: 20,
        borderRadius: 10,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A867FF',
        marginBottom: 10,
    },
    reportLabel: {
        fontFamily: Fonts.bold,
        fontSize: 16,
        color: Colors.white
    },

})


