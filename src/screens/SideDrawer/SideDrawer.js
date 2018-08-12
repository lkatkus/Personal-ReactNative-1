import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

class SideDrawer extends Component {
    render(){
        return(
            <View style={[styles.container, { width: Dimensions.get('window').width * 0.8 }]}>
                <Text>SideDraweris</Text>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 20,
        flex: 1
    }
})

export default SideDrawer;