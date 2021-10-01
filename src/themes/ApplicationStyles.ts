import { DefaultTheme } from '@react-navigation/native';
import { Platform, StyleSheet } from 'react-native';
import Colors, { ColorSettings } from "./Colors";
import Metrics from "./Metrics";

const ApplicationStyles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    headerTitle: {
        fontWeight: '500',
        fontFamily: Platform.OS == 'ios' ? 'System' : 'sans-serif-medium',
        fontSize: Metrics.screenTitleSize,
        color: ColorSettings.primary,
        // fontWeight: 'bold'
    },
    normalButton: {
        height: Metrics.normalButtonHeight,
        fontSize: Metrics.normalButtonFontSize
    },
});

export default ApplicationStyles;

export const ApplicationOptions = {
    natigationTheme: {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            primary: ColorSettings.navigationTintColor,
            background: ColorSettings.screenBackground,
            text: ColorSettings.navigationTintColor
        },
    },
    screen: {
        headerTitleStyle: {
            fontSize: 18,
            color: ColorSettings.navigationTintColor,
            // textAlign: 'center'
        },
        headerTitleAlign: 'center',
        headerStyle: {
            backgroundColor: ColorSettings.primary
        },
        headerBackTitleVisible: false
    },
    modal: {
        deviceWidth: Metrics.modalDeviceWidth,
        deviceHeight: Metrics.modalDeviceHeight,
        propagateSwipe: true,
        animationInTiming: 400,
        animationOutTiming: 500,
        backdropTransitionOutTiming: 0,
        hideModalContentWhileAnimating: true,
    },
    navigationIcon: { //Icon props
        size: Metrics.navigationIconSize,
        color: ColorSettings.primary
    },

};