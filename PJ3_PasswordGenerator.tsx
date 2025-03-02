import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

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
      let characterList = '';

      const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
      const digitChars = '0123456789';
      const specialChars = '!@#$%^&*()_+';
  
      if (upperCase) {
        characterList += upperCaseChars
      }
      if (lowerCase) {
        characterList += lowerCaseChars
      }
      if (numbers) {
        characterList += digitChars
      }
      if (symbols) {
        characterList += specialChars
      }
  
      const passwordResult = createPassword(characterList, passwordLength )
  
      setPassword(passwordResult)
      setIsPassGenerated(true)
    }
    const createPassword = (characters : string, passwordLength : number)=>{
      let result = ''
      for (let i = 0; i < passwordLength; i++) {
        const characterIndex = Math.round(Math.random() * characters.length)
        result += characters.charAt(characterIndex)
      }
      return result
    }
    const resetPasswordState = ()=>{
        setPassword('')
        setIsPassGenerated(false)
        setLowerCase(true)
        setNumbers(false)
        setUpperCase(false)
        setSymbols(false)
    }   

    return (
        <ScrollView keyboardShouldPersistTaps="handled">
        <SafeAreaView style={styles.appContainer}>
          <View style={styles.formContainer}>
            <Text style={styles.headingText}>Password Generator</Text>
  
            <Formik
              initialValues={{ passwordLength: "" }}
              validationSchema={passwordSchema}
              onSubmit={(values) => {
                console.log(values);
                generatePassword(+values.passwordLength);
              }}
            >
              {({
                values,
                errors,
                touched,
                isValid,
                handleChange,
                handleSubmit,
                handleReset,
              }) => (
                <>
                  {/* Password Length Input */}
                  <View style={styles.inputWrapper}>
                    <View style={styles.inputColumn}>
                      <Text style={styles.heading}>Password Length</Text>
                      {touched.passwordLength && errors.passwordLength && (
                        <Text style={styles.errorText}>{errors.passwordLength}</Text>
                      )}
                    </View>
                    <TextInput
                      style={styles.inputStyle}
                      value={values.passwordLength}
                      onChangeText={handleChange("passwordLength")}
                      placeholder="Ex. 8"
                      keyboardType="numeric"
                    />
                  </View>
  
                  {/* Checkbox Options */}
                  <View style={styles.checkboxContainer}>
                    <View style={styles.inputWrapper}>
                      <Text style={styles.heading}>Include Lower Case</Text>
                      <BouncyCheckbox disableBuiltInState isChecked={lowerCase} onPress={() => setLowerCase(!lowerCase)} fillColor="#74B9FF" />
                    </View>
                    <View style={styles.inputWrapper}>
                      <Text style={styles.heading}>Include Upper Case</Text>
                      <BouncyCheckbox disableBuiltInState isChecked={upperCase} onPress={() => setUpperCase(!upperCase)} fillColor="#67E6DC" />
                    </View>
                    <View style={styles.inputWrapper}>
                      <Text style={styles.heading}>Include Symbols</Text>
                      <BouncyCheckbox disableBuiltInState isChecked={symbols} onPress={() => setSymbols(!symbols)} fillColor="#badc57" />
                    </View>
                    <View style={styles.inputWrapper}>
                      <Text style={styles.heading}>Include Numbers</Text>
                      <BouncyCheckbox disableBuiltInState isChecked={numbers} onPress={() => setNumbers(!numbers)} fillColor="#53E0BC" />
                    </View>
                  </View>
  
                  {/* Buttons */}
                  <View style={styles.formAction}>
                    <TouchableOpacity disabled={!isValid} style={styles.button} onPress={()=>{handleSubmit()}}>
                      <Text style={styles.buttonText}>Generate Password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={()=>{
                      handleReset();
                      resetPasswordState()}}>
                      <Text style={styles.buttonText}>Reset</Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </Formik>
          </View>
          {isPassGenerated ? (
            <View style={styles.resultContainer}>
              <Text style={styles.header}>Results</Text>
              <Text style={styles.desc}>Long Press to copy</Text>
              <Text selectable={true} style={styles.generatedPass}>{password}</Text>
            </View>
          ) : null}
        </SafeAreaView>
      </ScrollView>
    )
}
const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    formContainer: {
      padding: 20,
      borderRadius: 10,
      backgroundColor: '#4C4B4B',
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 2 },
      elevation: 3,
    },
    headingText: {
      fontSize: 22,
      fontWeight: "bold",
      color: "#ffffff",
      textAlign: "center",
      marginBottom: 20,
    },
    inputWrapper: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 15,
    },
    inputColumn: {
      flex: 1,
    },
    inputStyle: {
      borderWidth: 1,
      color: '#fff',
      borderColor: "#ccc",
      borderRadius: 8,
      padding: 10,
      fontSize: 16,
      width: 80,
      textAlign: "center",
    },
    checkboxContainer: {
      marginTop: 10,
    },
    heading: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#ffffff",
    },
    errorText: {
      fontSize: 12,
      color: "red",
    },
    formAction: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 20,
    },
    button: {
      backgroundColor: "#6ab04c",
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
    },
    resetButton: {
      backgroundColor: "#d9534f",
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center",
    },
    resultContainer: {
      backgroundColor: "#2c3e50", // Dark background for contrast
      padding: 16,
      borderRadius: 12,
      marginVertical: 12,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 6,
      elevation: 5, // For Android shadow
    },
    header: {
      fontSize: 22,
      fontWeight: "bold",
      color: "#ecf0f1", // Light text color
      marginBottom: 4,
    },
    desc: {
      fontSize: 14,
      color: "#bdc3c7", // Subtle gray
      marginBottom: 8,
    },
    generatedPass: {
      fontSize: 18,
      fontWeight: "600",
      color: "#badc57", // Highlight color
      backgroundColor: "#34495e",
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 8,
      textAlign: "center",
    },
  });