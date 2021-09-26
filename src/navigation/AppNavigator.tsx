import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './MainNavigator';

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    )
}

export default AppNavigator

const styles = StyleSheet.create({})
