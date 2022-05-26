'use strict';
import { StyleSheet, useColorScheme } from 'react-native';

const isDarkMode = useColorScheme() === 'dark';

module.exports = StyleSheet.create({
    headerBar: {
        backgroundColor: isDarkMode ? 'dark-grey' : 'white',
        paddingVertical: 45,
        paddingHorizontal: 25,
        width: '100%',
        marginVertical: 10,
    },
    shadowProp: {
        shadowColor: isDarkMode ? 'white' : 'black',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    headerTitle: {
        fontSize: 25,
        fontWeight: '600',
        color: isDarkMode ? 'white' : 'black',
        alignSelf: 'center',
        textShadowColor: isDarkMode ? 'black' : 'white',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 2
    }
    
});