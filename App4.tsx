import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function App4() {
    const [randomBackground, setRandomBackground] = useState('#ffffff ')

    const generateColor=()=>{
        const hexRange= "01234589ABCDEF"
        let color = "#"

        for (let index = 0; index < 6; index++) {
            color += hexRange[Math.floor(Math.random() * 16)]
        }
        setRandomBackground(color)
        console.log(color)
    }
    return (
        <>
            <StatusBar backgroundColor={randomBackground}/>
            <View style={[styles.container, {backgroundColor: randomBackground}]}>
                <TouchableOpacity onPress={generateColor}>
                    <View style={styles.actionBtn}>
                        <Text style={styles.actionBtnText}>Press Me </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
    },
    actionBtn: {
        backgroundColor: '#1E90FF',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    actionBtnText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})