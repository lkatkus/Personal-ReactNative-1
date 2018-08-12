import React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';

const listItem = (props) => {
    return(
        <TouchableOpacity onPress = {props.onItemPressed} >
            <View style = {styles.listItem} >
                <Image resizeMode = 'cover' source = {props.placeImage} style = {styles.placeImage}/>
                <Text>{props.placeName}</Text>
            </View>            
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        padding: 10,
        backgroundColor: '#eee',
        marginBottom: 5,
        alignItems: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    placeImage: {
        marginRight: 8,
        width: '100%',
        height: 30,
        width: 30
    }
});

export default listItem;

