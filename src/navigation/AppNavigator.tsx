import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator, { AuthStack } from './MainNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
interface RootState {
    AuthReducer: {
        token: string
    }
}
const AppNavigator = () => {
    const isUserLogin = useSelector((store: RootState) => store.AuthReducer.token)
    console.log('initial', isUserLogin);

    return (
        <SafeAreaProvider>
            <NavigationContainer
            >
                {
                    isUserLogin !== null ? <MainNavigator /> : <AuthStack />
                }
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

export default AppNavigator

const styles = StyleSheet.create({})
