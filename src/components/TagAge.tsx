import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { User } from '../shared/models/Home';
import Colors from '../themes/Colors';
import Fonts from '../themes/Fonts';

const TagAge = (data: any) => {
    console.log('data', data);


    return (
        <View
            style={[
                styles.tagAgeView,
                { backgroundColor: data.sex == 0 ? '#2E9AFE' : '#FF6BA5' }
            ]}
        >
            <Ionicons
                name={data.sex == 0 ? 'male-outline' : 'female-outline'}
                size={14}
                color={Colors.white}
            />
            <Text style={styles.tagAgeText}>{data.age}</Text>
        </View>
    );
};

export default TagAge;

const styles = StyleSheet.create({
    tagAgeView: {
        marginLeft: 10,
        height: 18,
        alignItems: 'center',
        paddingHorizontal: 4,
        justifyContent: 'space-evenly',
        backgroundColor: '#FF6BA5',
        flexDirection: 'row',
        borderRadius: 10,
        width: 40
    },
    tagAgeText: {
        fontSize: 12,
        fontFamily: Fonts.regular,
        color: Colors.white
    }
});
