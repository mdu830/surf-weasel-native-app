import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    Platform,
} from 'react-native';

export default (Slide = ({
    item,
    imageKey,
    onPress,
    index,
    active,
    local,
}) => {
    console.log(item[imageKey])
    return (
        <View style={styles.slideContainer}>
            <Image
                style={{width: 390}}
                source={item[imageKey]}
            />
            <Text style={styles.desc}>{item.title}</Text>
        </View>

    );
});

const styles = StyleSheet.create({
    desc: {
        color: 'white',
        fontSize: 24,
        letterSpacing: 0,
        lineHeight: 24,
        marginTop: 160,
        position: 'absolute',
        alignContent:'center'
    },
    slideContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    }
});