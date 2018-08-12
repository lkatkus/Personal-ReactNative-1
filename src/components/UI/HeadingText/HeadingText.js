import React from 'react';
import { Text, StyleSheet } from 'react-native';

const headingText = (props) => {
    return(
        <Text
            {...props}
            style={[styles.text, props.styles]}
        >
            {props.children}
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 28,
        fontWeight: 'bold'
    }
});

export default headingText;