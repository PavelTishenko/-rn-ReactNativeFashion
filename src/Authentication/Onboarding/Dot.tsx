import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, { interpolate, Extrapolate } from 'react-native-reanimated';

interface DotProps {
    index: number;
    currentIndex: Animated.Node<number>;
};

export const Dot = ({index, currentIndex}: DotProps) => {
    // Animate Dots to move when scroll
    const opacity = interpolate(currentIndex, {
        inputRange: [index - 1, index, index + 1],
        outputRange: [0.5, 1, 0.5],
        extrapolate: Extrapolate.CLAMP
    });
    const scale = interpolate(currentIndex, {
        inputRange: [index - 1, index, index + 1],
        outputRange: [1, 1.25, 1],
        extrapolate: Extrapolate.CLAMP
    });
    return(
        <Animated.View style={[styles.container, {opacity, transform: [{scale}]}]}>
            
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2CB9B0",
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 4
    }
})