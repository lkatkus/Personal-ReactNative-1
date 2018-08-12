import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePlace } from '../../store/actions/index';

import { View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class PlaceDetail extends Component {
    
    placeDeletedHandler = () => {
        this.props.onDeletePlace(this.props.selectedPlace.key);
        this.props.navigator.pop();
    }

    render(){
        return(
            <View style={styles.container}>
                <View>
                    <Image source = {this.props.selectedPlace.image} style={styles.placeImage}/>
                    <Text style={styles.placeName}>{this.props.selectedPlace.name}</Text>
                </View>
                <View>
                    <TouchableOpacity onPress = {this.placeDeletedHandler}>
                        <View style={[styles.button, styles.deleteButton]}>
                            <Icon size={30} name='ios-trash' color='white'/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#eee',
        height: '100%'
    },
    placeImage: {
        width: '100%',
        height: 200
    },
    placeName: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        padding: 20
    },
    button: {
        padding: 10,
        marginBottom: 10,
        borderRadius: 5
    },
    deleteButton: {
        alignItems: 'center',
        backgroundColor: 'red',
    }
})

const mapDispatchToProps = dispatch => {
    return{
        onDeletePlace: (key) => dispatch(deletePlace(key))
    };
}

export default connect(null, mapDispatchToProps)(PlaceDetail);