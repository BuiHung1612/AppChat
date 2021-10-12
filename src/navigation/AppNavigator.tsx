import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './MainNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import analytics from '@react-native-firebase/analytics';
const AppNavigator = () => {
    const routeNameRef: any = React.useRef();
    const navigationRef: any = React.useRef();
    return (
        <SafeAreaProvider>
            <NavigationContainer ref={navigationRef}
                onReady={() => {
                    routeNameRef.current = navigationRef.current.getCurrentRoute().name;
                }}
                onStateChange={async () => {
                    const previousRouteName = routeNameRef.current;
                    const currentRouteName = navigationRef.current.getCurrentRoute().name;

                    if (previousRouteName !== currentRouteName) {
                        await analytics().logScreenView({
                            screen_name: currentRouteName,
                            screen_class: currentRouteName,
                        });
                    }
                    routeNameRef.current = currentRouteName;
                }}
            >
                <MainNavigator />
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

export default AppNavigator

const styles = StyleSheet.create({})
