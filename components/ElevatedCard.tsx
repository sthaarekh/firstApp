import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
  return (
    <View>
        <Text style={styles.headingText}>Elevated Card</Text>
        <ScrollView horizontal={true} style={styles.container}>
            <View style={[styles.card, styles.cardElevated]}>
                <Text>Tap</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                <Text>me</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                <Text>to</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                <Text>Scroll</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                <Text>more...</Text>
            </View>
        </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
    headingText:{
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        color: 'white'
    },
    container:{
        padding: 8,
    },
    card:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        width: 100,
        borderRadius: 4,
        margin: 8,
    },
    cardElevated:{
        backgroundColor: '#00A86B',
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#ffffff',
    }    

})