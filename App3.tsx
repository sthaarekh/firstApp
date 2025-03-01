import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import * as Yup from 'yup'

const passwordSchema = Yup.object().shape({
    passwordLength: Yup.number()
    .min(4,'Should be minimum of 4 characters')
    .max(16,'Should be maximum of 16 characters')
    .required()
})
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