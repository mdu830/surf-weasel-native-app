'use strict';
import {
    Dimensions,
    StyleSheet,
    Platform
} from 'react-native';

// const { width: screenWidth } = Dimensions.get('window');

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        width: 200,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#dbf3fa',
    },
});