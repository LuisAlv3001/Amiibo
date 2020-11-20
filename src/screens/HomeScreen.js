import React, { useEffect } from 'react'
import { View, StyleSheet, SafeAreaView, FlatList, Text } from 'react-native'

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

    

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>AMIIBOS</Text>
            </View>

            <FlatList
                style={styles.list}
                data={amiibos}
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
        backgroundColor: constants.COLORS.PRIMARY,
        alignItems: 'center'
    },
    titleContainer:{
        
    },
    title: {
        color: constants.COLORS.LIGHT,
        fontSize: 20,
        fontWeight: 'bold',
    },
    list: {
        paddingHorizontal: 25,

    }
});
