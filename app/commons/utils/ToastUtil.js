/**
 * Created by miracle on 2016/10/10.
 */
import React from 'react-native';

const {
    ToastAndroid,
    Alert,
    Platform
} = React;
/**
 *  short toast
 * @param content :content for toast
 */
export function ToastShort(content) {
    if (Platform.OS === 'android') {
        ToastAndroid.show(content+'', ToastAndroid.SHORT);
    } else {
        Alert.alert(
            '提示',
            content.toString()
        )
    }
}