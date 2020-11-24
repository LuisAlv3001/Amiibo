import React, {useEffect} from 'react';
import { SafeAreaView, View, StyleSheet, Text, Image } from 'react-native';
import constants from '../utils/constants';

import { Ionicons } from '@expo/vector-icons';

import { fonts, fontsName } from '../utils/fonts';


const height = '90%';

const DetailsScreen = ({ navigation, route }) => {

    const { amiibo } = route.params

    const {amiiboSeries, character, gameSeries, image, name} = amiibo;

    useEffect(() => {
        navigation.setOptions({
            headerLeft: (props) => {
                return(
                    <View style={styles.containerButtonIcon}>
                        <Ionicons 
                            name="md-arrow-round-back" 
                            size={24} 
                            color='white' 
                            {...props}
                        />
                    </View>
                )
            },
        })
    })


    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.title}>details</Text>
                <View style={styles.imageContainer}>
                    <Image
                        resizeMode="contain"
                        style={styles.image}
                        source={image}
                        />
                    
                </View>
                <Text style={styles.character}>{character}</Text>
                <Text style={styles.name}>{name}</Text>
                <View style={styles.infoContainer}>
                        <View style={styles.info}>
                            <View style={{width: '45%'}}>
                                <Text style={{
                                    fontFamily: fontsName.BOLD,
                                    backgroundColor: constants.COLORS.SECONDARY,
                                    color: 'white',
                                    borderTopStartRadius: 10,
                                    borderTopEndRadius: 10,
                                    textAlign: "center",
                                    fontSize: 30,}}
                                >Game</Text>
                                <Text style={{
                                    fontFamily: fontsName.REGULAR,
                                    borderEndWidth: 1,
                                    borderStartWidth: 1,
                                    borderBottomWidth: 1,
                                    borderBottomEndRadius: 10,
                                    borderBottomStartRadius: 10,
                                    borderColor: constants.COLORS.SECONDARY,
                                    fontSize: 15,
                                    textAlign: "center",}}
                                >{gameSeries}</Text>
                            </View>
                            <View style={{width: '45%'}}>
                                <Text style={{
                                    fontFamily: fontsName.BOLD,
                                    backgroundColor: constants.COLORS.TERTIARY,
                                    color: 'white',
                                    borderTopStartRadius: 10,
                                    borderTopEndRadius: 10,
                                    textAlign: "center",
                                    fontSize: 30,}}
                                >Series</Text>
                                <Text style={{
                                    fontFamily: fontsName.REGULAR,
                                    borderEndWidth: 1,
                                    borderStartWidth: 1,
                                    borderBottomWidth: 1,
                                    borderBottomEndRadius: 10,
                                    borderBottomStartRadius: 10,
                                    borderColor: constants.COLORS.TERTIARY,
                                    fontSize: 15,
                                    textAlign: "center",}}
                                >{amiiboSeries}</Text>
                            </View>
                        </View>
                </View>
            </View>
        </SafeAreaView>
    )

}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 8,

    },
    containerButtonIcon: {
        backgroundColor: '#E62C8B',
        borderRadius: 20,
        width: 36,
        height: 36,
        marginHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontFamily: fontsName.FANCY,
        fontSize: 48,
    },
    infoContainer:{
        width: '80%',
        marginTop: 20,
    },
    imageContainer: {
        width: '60%',
        height: 400,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    character: {
        color: constants.COLORS.LIGHT,
        fontFamily: fontsName.FANCY,
        fontSize: 36,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        backgroundColor: constants.COLORS.PRIMARY,
        padding: 5,
        textAlign: "center",
        width: "50%",
    },
    name: {
        borderEndWidth: 1,
        borderStartWidth: 1,
        borderBottomWidth: 1,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        borderColor: constants.COLORS.PRIMARY,
        fontFamily: fontsName.REGULAR,
        fontWeight: "bold",
        fontSize: 15,
        textAlign: "center",
        width: "50%",
    },
    info:{
        flexDirection: 'row',
        justifyContent: "space-between",
    }
});

export default DetailsScreen;
