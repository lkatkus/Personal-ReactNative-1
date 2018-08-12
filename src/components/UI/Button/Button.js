import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const button = (props) => {
    return(
        <TouchableOpacity onPress={props.onPress}>
            <View style={[styles.button, { backgroundColor: props.color ? props.color : 'red' }]}>
                <Text style={{color: 'white', fontWeight: 'bold' }}>{props.children.toUpperCase()}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        margin: 5,
        borderRadius: 5,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderColor: '#29ddf4'
    }
});

export default button;
