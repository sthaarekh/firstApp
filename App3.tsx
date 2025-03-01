import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'

const passwordSchema = Yup.object().shape({
    passwordLength: Yup.number()
    .min(4,'Should be minimum of 4 characters')
    .max(16,'Should be maximum of 16 characters')
    .required()
})
export default function App3() {
    const [password, setPassword] = useState('')
    const [isPassGenerated, setIsPassGenerated] = useState(false)
    const [lowerCase, setLowerCase] = useState(true)
    const [upperCase, setUpperCase] = useState(false)
    const [numbers, setNumbers] = useState(false)
    const [symbols, setSymbols] = useState(false)

    const generatePassword = (passwordLength : number)=>{
        //
    }
    const createPassword = (characters : string, passwordLength : number)=>{
        let result =''
        for (let index = 0; index < passwordLength; index++) {
            const characterIndex = Math.round(Math.random() * characters.length)
            result += characters.charAt(characterIndex)
        }
        return result;
    }
    const resetPasswordState = ()=>{

    }

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