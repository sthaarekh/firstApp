import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
  return (
    <View>
      <Text style={styles.headingText}>Action Card</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        color: 'white'
    },
})