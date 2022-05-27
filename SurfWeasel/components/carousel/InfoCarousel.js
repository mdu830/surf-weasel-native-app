import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FlatListSlider } from 'react-native-flatlist-slider';



const styles = require('./style')

const images = [
    {
        banner: require('./images/waveOrange.jpeg'),
        desc: 'something',
    },
    {
        banner: require('./images/waveBlue.jpeg'),
        desc: 'something',
    },
    {
        banner: require('./images/waveGreen.jpeg'),
        desc: 'something',
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
                indicatorContainerStyle={{position:'absolute', bottom: 20}}
                // component={<Text>text</Text>}
                local
            />
        </View>
    );
}

export default InfoCarousel;