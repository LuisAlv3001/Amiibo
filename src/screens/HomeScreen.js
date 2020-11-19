import React, { useEffect } from 'react'
import { View, StyleSheet, SafeAreaView, FlatList } from 'react-native'

import axios from '../utils/axios'

import Amiibo from '../components/Amiibo'

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
        <SafeAreaView>
            <FlatList
                data={amiibos}
                renderItem={({ item }) => <Amiibo amiibo={item} navigation={navigation}/>}
                keyExtractor={(item) => `${item.tail}`}
            >
            </FlatList>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    
});
