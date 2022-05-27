import React from 'react';
import { View, Text, Image } from 'react-native';
import { FlatListSlider } from 'react-native-flatlist-slider';
import Slide from './lib/slide'



const styles = require('./lib/style')

const images = [
    {
        banner: require('./lib/images/waveOrange.jpeg'),
        title: 'Welcome to Surf Weasel',
        desc: 'The best app to get your surf report and cams'
    },
    {
        banner: require('./lib/images/waveBlue.jpeg'),
        title: 'this app is not functional', 
        desc: 'We will have it up and running soon!',
    },
    {
        banner: require('./lib/images/waveGreen.jpeg'),
        title: 'Insert Ad here',
        desc: 'Would you like to advertise?',
    },
]

const InfoCarousel = () => {

    return (
        <View style={styles.container}>
            <FlatListSlider
                data={images}
                imageKey={'banner'}
                timer={5000}
                onPress={item => item}
                indicatorActiveWidth={20}
                indicatorInActiveColor={'white'}
                indicatorActiveColor={'white'}
                indicatorContainerStyle={{ position: 'absolute', bottom: 20 }}
                component={<Slide/>}
                local
            />
        </View>
    );
}

export default InfoCarousel;