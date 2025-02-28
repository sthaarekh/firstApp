import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
            <Text style={styles.headingText}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
            <Text style={styles.headingText}>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text style={styles.headingText}>Green</Text>
        </View>
        <View style={[styles.card, styles.cardFour]}>
            <Text style={styles.headingText}>Yellow</Text>
        </View>
      </View>
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
        flex: 1,
        flexDirection: 'row',
        padding: 8
    },
    card:{
        flex: 1,
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardOne:{
        backgroundColor: '#E0115F'
    },
    cardTwo:{
        backgroundColor: '#87CEEB'
    },
    cardThree:{
        backgroundColor: '#228B22'
    },
    cardFour:{
        backgroundColor: '#FFDB58'
    }

})