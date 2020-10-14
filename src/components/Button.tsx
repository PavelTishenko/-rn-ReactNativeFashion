import React from 'react';
import { View,  StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import theme from './Theme/Theme';
import Text from './Theme';

interface ButtonProps {
    variant: 'default' | 'primary';
    label: string;
    onPress: () => void;
}

export const Button = ({variant, label, onPress}: ButtonProps) => {
    const backgroundColor = variant === "primary" ? theme.colors.primary : theme.colors.grey;
    const color = variant === "primary" ? theme.colors.text : theme.colors.title1;
    return(
        <RectButton 
            style={[styles.container, {backgroundColor}]}
            {...{onPress}}>
                <Text style={{color}}>{label}</Text>
        </RectButton>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        height: 50,
        width: 245,
        justifyContent: 'center',
        alignItems: 'center'
    },
    label:{
        fontSize: 15,
        fontFamily: 'System',
        textAlign: 'center'
    }
})