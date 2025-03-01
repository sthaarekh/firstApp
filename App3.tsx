import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

export default function App3() {
  return (
    <SafeAreaView>
        <ScrollView>
            <Text style={styles.headingText}> Password Generator</Text>
        </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    headingText:{
        fontSize: 30,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        color: 'white'
    },
})