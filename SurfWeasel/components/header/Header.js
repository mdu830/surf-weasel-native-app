import React from 'react';

import {
    View,
    Text
} from 'react-native';

const styles = require('./style')

const Header = () => {
    return(
        <View style={[styles.headerBar, styles.shadowProp]}>
            <Text style={styles.headerTitle}>Welcome to Surf Weasel</Text>
        </View>
    )
}

export default Header;