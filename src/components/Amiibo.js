import React from 'react'
import { View, Text } from 'react-native'

const Amiibo = ({ amiibo, navigation }) => {

    const {amiiboSeries, character, gameSeries, image, name} = amiibo

    return (
        <View>
            <Text>{name}</Text>
        </View>
    )
}

export default Amiibo
