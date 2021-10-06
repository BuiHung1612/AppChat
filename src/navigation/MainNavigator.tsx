import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../modules/home/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import News from '../modules/news/News';
import Converstation from '../modules/converstation/Converstation';
import Profile from '../modules/profile/Profile';

import Fonts from '../themes/Fonts';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();



const MainNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: true,
                // tabBarShowLabel: false,
                tabBarStyle: [
                    {
                        display: 'flex',
                        paddingBottom: 14,
                        shadowColor: 'transparent',
                        height: 54,
                        borderTopWidth: 0,


                    },
                    null
                ],
                headerStyle: {
                    shadowColor: 'transparent'
                },
                headerTitleStyle: {
                    color: 'black',
                    fontFamily: Fonts.bold,
                    fontSize: 24,
                    backgroundColor: 'transparent'
                },
                headerTitleAlign: 'center',

            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={({ route, navigation }) => {
                    return {
                        title: 'Trang chủ',
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons
                                name="newspaper"
                                color={color}
                                size={20}
                            />
                        )
                    };
                }}
            />
            <Tab.Screen
                name="News"
                component={News}
                options={({ route, navigation }) => {
                    return {
                        title: 'Bảng tin',
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons
                                name="planet"
                                color={color}
                                size={20}
                            />
                        ),

                    };
                }}
            />
            <Tab.Screen
                name="Converstation"
                component={Converstation}
                options={({ route, navigation }) => {
                    return {
                        title: 'Trò chuyện',
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons
                                name="chatbubbles"
                                color={color}
                                size={20}
                            />
                        ),
                        headerTitleStyle: {
                            color: 'black',
                            fontFamily: Fonts.bold,
                            fontSize: 22,
                            backgroundColor: 'transparent'
                        }
                    };
                }}
            />
            <Tab.Screen
                name="Me"
                component={Profile}
                options={({ route, navigation }) => {
                    return {
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons
                                name="leaf"
                                color={color}
                                size={20}
                            />
                        ),
                        headerShown: false
                    };
                }}
            />
        </Tab.Navigator>
    );
};

export default MainNavigator;
