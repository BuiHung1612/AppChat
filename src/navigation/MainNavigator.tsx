import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../modules/home/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import News from '../modules/news/News';
import Converstation from '../modules/converstation/Converstation';
import Profile from '../modules/profile/Profile';
import { Image } from 'react-native';
import Icon from '../assets';
import Fonts from '../themes/Fonts';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Suggest from '../modules/news/screens/Suggest';
import Later from '../modules/news/screens/Later';
import Following from '../modules/news/screens/Following';

const MaterialTop = createMaterialTopTabNavigator();
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
                        display: 'flex'
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
                headerTitleAlign: 'center'
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
                                name="newspaper-outline"
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
                                name="planet-outline"
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
                                name="chatbubbles-outline"
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
                                name="leaf-outline"
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
