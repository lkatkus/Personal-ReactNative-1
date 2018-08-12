import React, { Component } from 'react';
import { View, Button, StyleSheet, ImageBackground } from 'react-native';

import startTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import Heading from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import MyButton from '../../components/UI/Button/Button';

import backgroundImage from '../../assets/background.jpg'

class AuthScreen extends Component {
    
    loginHandler = () => {
        startTabs();
    }

    render(){
        return(
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <View style={styles.container}>
                    <MainText>
                        <Heading>Please Log In</Heading>
                    </MainText>
                    <View style={styles.inputContainer}>
                        <DefaultInput placeholder='Your E-mail' style={styles.input} />
                        <DefaultInput placeholder='Password' style={styles.input} />
                        <DefaultInput placeholder='Confirm Password' style={styles.input} />
                    </View>
                    <MyButton title='Submit' onPress={this.loginHandler} color='#29aaf4' onPress={this.loginHandler}>Submit</MyButton>
                    <MyButton title='Submit' onPress={this.loginHandler} color='#29aaf4' onPress={() => alert('Hello')}>Switch to Login</MyButton>
                </View>                
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundImage: {
        flex: 1,
        width: '100%'
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: '#eee',
        borderColor: '#bbb'
    }
});

export default AuthScreen;



