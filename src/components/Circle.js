import React from 'react'
import {
    View
} from 'react-native'

const Circle = ({top, left, backgroundColor, opacity}) => {
    return (
        <View style={{
            width: 20,
            height: 20,
            borderRadius: 20/2,
            backgroundColor: backgroundColor,
            position: 'absolute',
            top: top,
            left: left,
            opacity: opacity
        }}>
        </View>
    )
}

export default Circle
