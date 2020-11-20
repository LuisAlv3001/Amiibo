import React from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import constants from '../utils/constants';

const Amiibo = ({ amiibo, navigation }) => {

    const {amiiboSeries, character, gameSeries, image, name} = amiibo;

    return (


        <Pressable style={styles.card}>

            <Image
				resizeMode="cover"
				style={styles.avatar}
				source={image}
			/>
            
            <View>
                <Text style={styles.name}>{name}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: constants.COLORS.TERTIARY,
		marginTop: 20,
		paddingBottom: 20,
		paddingTop: 30,
		borderRadius: 20,
		flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
		width: 50,
		height: 100,
		bottom: 20,
    },
    name: {
        color: constants.COLORS.LIGHT,
    }
});

export default Amiibo;
