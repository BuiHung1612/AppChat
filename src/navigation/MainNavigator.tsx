import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../modules/home/Home';
import Ionicons from 'react-native-vector-icons/Ionicons'
import News from '../modules/news/News';
import Converstation from '../modules/converstation/Converstation';
import Profile from '../modules/profile/Profile';
import { Image } from 'react-native';
import Icon from '../assets'
import Fonts from '../themes/Fonts';
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
                    },
                    null,
                ],
                headerTitleStyle: {
                    color: '#8726FE',
                    fontFamily: Fonts.extraBold,
                    fontSize: 30
                },
                headerTitleAlign: 'center',

            }}
        >
            <Tab.Screen name="Home" component={Home} options={({ route, navigation }) => {
                return {
                    title: "STRANGE",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="newspaper-outline" color={color} size={20} />
                    ),
                };
            }} />
            <Tab.Screen name="News" component={News} options={({ route, navigation }) => {
                return {
                    title: 'Bảng tin',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="planet-outline" color={color} size={20} />
                    ),
                };
            }} />
            <Tab.Screen name="Converstation" component={Converstation} options={({ route, navigation }) => {
                return {
                    title: 'Trò chuyện',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="chatbubbles-outline" color={color} size={20} />
                    ),
                };
            }} />
            <Tab.Screen name="Me" component={Profile} options={({ route, navigation }) => {
                return {
                    title: 'Tôii',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="leaf-outline" color={color} size={20} />
                    ),
                };
            }} />
        </Tab.Navigator>
    )
}

export default MainNavigator

