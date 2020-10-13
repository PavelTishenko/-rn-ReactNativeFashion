import React from 'react';
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';

const {width, height} = Dimensions.get('window');


interface SlideProps {
    label: string;
    right?: boolean;
    picture: string;
}

export const Slide = ({label, right, picture}: SlideProps) => {
    const transform = [
        {translateY: (0.61 * height - 300 )},
        {translateX: (right) ? (width / 2 - 50)  : (-width / 2 ) + 50 }, 
        {rotate: right ? "-90deg" : "90deg"}
    ] 
    return(
        <View style={styles.container}>
            <View style={styles.pictureContainer}>
                <Image source={require("../../../assets/1.png")} style={styles.picture}/>
            </View>
            <View style={[styles.labelContainer, {transform}]}>
                <Text style={styles.label}>{label}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        width: width
    },
    label: {
        fontSize: 80,
        lineHeight: 80,
        fontFamily: 'System',
        color: 'white',
        textAlign: 'center'
    },
    labelContainer: {
        height: 100,
        justifyContent: 'center',
        
    },
    pictureContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "center"
    },
    picture: {
        ...StyleSheet.absoluteFillObject,
        width: undefined ,
        height: undefined,
        borderBottomRightRadius: 75
    }

})