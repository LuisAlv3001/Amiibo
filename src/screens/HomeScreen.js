import React, { useEffect } from 'react'
import { View, StyleSheet, SafeAreaView, FlatList, Text, Image } from 'react-native'

//import Text from '../components/TextCustom'
import { fontsName } from '../utils/fonts';

import axios from '../utils/axios'

import Amiibo from '../components/Amiibo'
import constants from '../utils/constants'

export const HomeScreen = ({ navigation }) => {

    const [amiibos, setAmiibos] = React.useState([]);

    useEffect(() => {
        axios
            .get(`api/amiibo/`)
            .then((res) => {
                setAmiibos(res.data.amiibo);
                console.log(res)
            })
            .catch((err) => console.log(err));
    }, [setAmiibos]);

    amiibos.map

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.titleContainer}>
                <Image style={styles.image} source={require('../img/Amiibo_logo.png')}></Image>
            </View>

            <FlatList
                style={styles.list}
                data={amiibos}
                numColumns={2}
                renderItem={({ item }) => <Amiibo amiibo={item} navigation={navigation}/>}
                keyExtractor={(item) => `${item.tail}`}
            >
            </FlatList>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        //backgroundColor: constants.COLORS.PRIMARY,
        alignItems: 'center'
    },
    list: {
        
    },
    image: {
        width: 250,
        height: 100,
        resizeMode: "contain",
    }
});
