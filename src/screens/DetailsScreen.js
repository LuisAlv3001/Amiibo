import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import constants from '../utils/constants';


const height = '90%';

const DetailsScreen = () => {


    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.card}>

           
            </View>

        </SafeAreaView>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: constants.COLORS.PRIMARY,
    },
    card: {
        backgroundColor: constants.COLORS.TERTIARY,
        height: height,
		marginTop: 30,
        marginLeft: 50,
        marginRight: 50,
		borderRadius: 30,
    },


});

export default DetailsScreen;
