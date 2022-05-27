import React from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    useColorScheme,
    View,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import Header from '../components/header/Header'
import InfoCarousel from '../components/carousel/InfoCarousel';
import SearchBar from '../components/searchBar/SearchBar'
const styles = require('../style');

const HomeScreen = () => {

    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <Header />
                <InfoCarousel />
                <SearchBar />
                </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;