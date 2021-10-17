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
import ConvetstationDetail from '../modules/converstation/ConvetstationDetail';
import LoginScreen from '../modules/auth/Login';
import AddFriend from '../modules/converstation/AddFriendScreen';
import Register from '../modules/auth/Register';
import ModalProfile from '../components/UserProfileModal';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()
const MainStack = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
                name="MainButtonTabs"
                component={MainButtonTabs}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Comment"
                component={CommentScreen}
                options={{
                    headerTitleAlign: 'center',
                    title: 'Bình Luận',
                    headerShadowVisible: false
                }}
            />
            <Stack.Screen
                name="ConvetstationDetail"
                component={ConvetstationDetail}
                options={{
                    headerTitleAlign: 'center',
                    title: 'User Name',
                    headerShadowVisible: false,
                }}
            />

            <Stack.Screen
                name="ListUser"
                component={AddFriend}
                options={{
                    headerTitleAlign: 'center',
                    title: 'Danh sách',
                    headerShadowVisible: false,
                }}
            />
            <Stack.Screen
                name="UserProfile"
                component={ModalProfile}
                options={{
                    headerTitleAlign: 'center',

                    headerShadowVisible: false,
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    headerTitleAlign: 'center',
                    title: 'Đăng nhập',
                    headerShadowVisible: false,
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{
                    headerTitleAlign: 'center',
                    title: 'Đăng Ký',
                    headerShadowVisible: false,
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
