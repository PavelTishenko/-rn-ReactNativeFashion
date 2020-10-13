import React, { useRef } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
import {useValue, onScrollEvent, interpolateColor, useScrollHandler} from 'react-native-redash/lib/module/v1';
// Component
import {Slide} from './Slide';
import {Subslide} from './Subslide';
import {Dot} from './Dot';
// Reanimated
import Animated, { multiply, divide } from 'react-native-reanimated';

const {width, height} = Dimensions.get('window');

interface OnboardingProps {}
const slides = [
    {
        label: "Relaxed", 
        subtitle:"Find Your Outfits", 
        discription:"Confused about your outfit ?", 
        color: "#BFEAF5"
    },
    {
        label: "Playful", 
        color: "#BEECC4",
        subtitle:"Hear it First, Wear it First", 
        discription:"Hating the clothes in your wardrobe ?"
    },
    {
        label: "Excentric", 
        color: "#FFE4D9",
        subtitle:"Your style, Your Way", 
        discription:"Create your individual & unique style"
    },
    {
        label: "Funky", 
        color: "#FFDDDD",
        subtitle:"Look Good, Feel Good", 
        discription:"Discover the latest trends"
    }
];
export const Onboarding = () => {
    const scroll = useRef<Animated.ScrollView>(null)
    // const x = useValue(0);
    const {scrollHandler, x} = useScrollHandler();
    const backgroundColor = interpolateColor(x, {
        inputRange: [0, width, width * 2, width * 3],
        outputRange: ["#BFEAF5", "#BEECC4", "#FFE4D9", "#FFDDDD"]
    })
    return(
        <View style={styles.container}> 
            {/* Slider */}
            <Animated.View style={[styles.slider , {backgroundColor}]}>
                <Animated.ScrollView 
                horizontal 
                snapToInterval={width} 
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
                bounces={false}
                ref={scroll}
                {...scrollHandler}>
                    <Slide 
                        label='Relaxed'
                        picture="../../../assets/1.jpeg"
                        />
                    <Slide 
                        label='Playful'
                        right 
                        picture="../../../assets/1.jpeg"
                        />
                    <Slide 
                    label='Excentric'
                    picture="../../../assets/1.jpeg" 
                    />
                    <Slide 
                        label='Funky' 
                        right 
                        picture="../../../assets/1.jpeg"
                        />
                </Animated.ScrollView>
            </Animated.View>
            {/* Footer */}
            <View style={styles.footer}>
                <Animated.View style={{...StyleSheet.absoluteFillObject, backgroundColor}}/>
                <View style={[styles.footerContent]}>
                    <View style={styles.pagination}>
                        {slides.map((_, index)=>(<Dot key={index} 
                                                currentIndex={divide(x, width)} 
                                                {...{index}} />))}
                    </View>
                    <Animated.View style={ {  
                        flexDirection: 'row',
                        width: width * slides.length ,
                        flex: 1 , 
                        transform: [{translateX: multiply(x, -1)}]
                        }}>
                        { slides.map(({subtitle, discription}, index)=>(
                            <Subslide 
                            key={index} 
                            onPress={() => {
                                if(scroll.current){
                                    scroll.current
                                        .getNode()
                                        .scrollTo({ x: width * ( index + 1), animated: true })
                                    }
                                }}
                                last={index === slides.length - 1} 
                                {...{subtitle, discription}}
                                />   
                            ))
                        }
                    </Animated.View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    footer: {
        flex: 1
    },
    slider: {
        height: 0.61 * height, // 61% of screen height
        borderBottomRightRadius: 75
    },
    footerContent: {
        flex: 1,
        backgroundColor: 'white', 
        borderTopLeftRadius: 75,
        
    },
    pagination: { 
        ...StyleSheet.absoluteFillObject, 
        height: 75,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }

})