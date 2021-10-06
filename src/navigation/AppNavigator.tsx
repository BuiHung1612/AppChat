import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './MainNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const AppNavigator = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <MainNavigator />
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

export default AppNavigator

const styles = StyleSheet.create({})
