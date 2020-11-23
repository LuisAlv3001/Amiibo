import React from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import constants from '../utils/constants';

import { fonts, fontsName } from '../utils/fonts';

const Amiibo = ({ amiibo, navigation }) => {

    const {amiiboSeries, character, gameSeries, image, name} = amiibo;


    const loadDetails = () => {
		navigation.navigate(constants.SCREEN.DETAILS, { amiibo });
	};

    return (


        <Pressable style={styles.card} onPress={loadDetails}>
            <Image
                resizeMode="contain"
                style={styles.avatar}
                source={image}
            />
            <View style={styles.cardName}>
                
                <View>
                    <Text style={styles.name}>{name}</Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    card:{
        width: 125,
        backgroundColor: '#CDCDCD',
		marginBottom: 20,
        paddingBottom: 10,
        paddingTop: 10,
        marginHorizontal: 10,
		borderRadius: 10,
		flexDirection: 'column',
        alignItems: 'center',
        textAlign: "center",
    },
    avatar: {
		width: '80%',
		height: 125,
    },
    name: {
        color: constants.COLORS.LIGHT,
        fontFamily: fontsName.FANCY,
        fontSize: 12
    },
    cardName: {
        position: 'absolute',
        width: '80%',
        height: 40,
        top: 110,
        left: 30,
        borderBottomEndRadius: 10,
        borderTopStartRadius: 10,
        backgroundColor: constants.COLORS.PRIMARY,
        justifyContent: 'center',
    }
});

export default Amiibo;
