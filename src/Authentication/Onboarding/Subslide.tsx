import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';
import { Text } from '../../components/Theme/Theme';
import { Button } from '../../components/Button';
interface SubslideProps {
    subtitle: string;
    discription: string;
    last?: boolean;
    // x: Animated.Node<Number>;
    onPress: () => void;
}

export const Subslide = ({subtitle, discription, last, onPress }: SubslideProps) => {
    return(
        <View style={styles.container}>
            <Text variant='title2' style={styles.subtitle}>{subtitle}</Text>        
            <Text variant='body' style={styles.discription}>{discription}</Text>        
            <Button 
                label={last ? "Let's get started" : "Next"} 
                variant={last ? "primary" : "default"}
                {...{onPress}}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 44,
        // backgroundColor: 'white',
        flex: 1
    },
    subtitle: {
        marginBottom: 12
    },
    discription: {
        color: '#0C0D34',
        textAlign: 'center',
        marginBottom: 40
    }
})
