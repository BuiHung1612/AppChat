import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../modules/home/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import News from '../modules/news/News';
import Converstation from '../modules/converstation/Converstation';
import Profile from '../modules/profile/Profile';
import Fonts from '../themes/Fonts';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CommentScreen from '../modules/comment/CommentScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()
const MainStack = () => {
    return (
        <Stack.Navigator initialRouteName="MainButtonTabs">
            <Stack.Screen
                name="MainButtonTabs"
                component={MainButtonTabs}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Comment"
                component={CommentScreen}
                options={{
                    headerShown: true,
                    headerTitleAlign: 'center',
                    title: 'Bình Luận',
                    headerShadowVisible: false
                }}
            />

        </Stack.Navigator>
    )
}

const MainButtonTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: true,
                // tabBarShowLabel: false,
                tabBarStyle: [
                    {
                        display: 'flex',
                        paddingBottom: 8,
                        shadowColor: 'transparent',
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
                name="MyProfile"
                component={Profile}
                options={({ route, navigation }) => {
                    return {
                        title: 'Cá nhân',
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

export default MainStack;
