import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { currencyByRupee } from './assets/PJ6/constants'
import CurrencyButton from './assets/PJ6/Components/CurrencyButton'
import Snackbar from 'react-native-snackbar'
import ReactNativeHapticFeedback from 'react-native-haptic-feedback'

export default function PJ6_CurrencyConverter() {
    const [inputValue, setInputValue] = useState('')
    const [resultValue, setResultValue] = useState('')
    const [targetCurrency, setTargetCurrency] = useState('')

    const buttonPress=(tragetValue: Currency)=>{
        if(!inputValue){
            return Snackbar.show({
                text: "Enter a value to convert.",
                backgroundColor: "#EA7773",
                textColor: "#000000"
            })
        }

        const options = {
            enableVibrateFallback: true,
            ignoreAndroidSystemSettings: true,
          };

          
        const inputAmount = parseFloat(inputValue);
            if(!isNaN(inputAmount)){
                ReactNativeHapticFeedback.trigger("impactLight", options);
                const convertedValue = inputAmount * tragetValue.value;
                const result = `${tragetValue.symbol} ${convertedValue.toFixed(2)}`
                setResultValue(result);
                setTargetCurrency(tragetValue.name)

            }  else{
                return Snackbar.show({
                    text: "Not a valid number to convert",
                    backgroundColor: "#F4BE2C",
                    textColor: "#000000"
                })
            }
        }

  return (
    <>
    <View style={styles.container}>
        <View style={styles.topContainer}>
            <View style={styles.nrsContainer}>
                <Text style={styles.nrs}>रु</Text>
                <TextInput style={styles.input}
                maxLength={14} 
                value={inputValue} 
                clearButtonMode='always' 
                onChangeText={setInputValue} 
                keyboardType='number-pad' 
                placeholder='Enter amount in Rupees'/>
            </View>
            {resultValue && (
                <Text style={styles.resultTxt}>
                    {resultValue}
                </Text>
            )}
        </View>
        <View style={styles.bottomContainer}>
            <FlatList 
            numColumns={3}
            data={currencyByRupee}
            keyExtractor={item=>item.name}
            renderItem={({item})=>(
                <Pressable
                style={[styles.button, 
                targetCurrency === item.name && styles.selected]
                 }
                 onPress={()=>buttonPress(item)}>
                <CurrencyButton {...item}/>
                </Pressable>
            )}/>
        </View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f0f4f8', // Light subtle background
        padding: 20,
    },
    topContainer: {
        width: '100%',
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 4, // Adds shadow for Android
    },
    nrsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 10,
        backgroundColor: '#fafafa',
    },
    nrs: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#000',
        paddingVertical: 5,
    },
    resultTxt: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
        textAlign: "center",
        marginVertical: 20,
    },
    bottomContainer: {
        marginTop: 20,
        paddingBottom: 30,
    },
    button: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    selected: {
        backgroundColor: "#4CAF50",
    },
})