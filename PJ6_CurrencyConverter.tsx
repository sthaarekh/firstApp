import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { currencyByRupee } from './assets/PJ6/constants'
import CurrencyButton from './assets/PJ6/Components/CurrencyButton'
import Snackbar from 'react-native-snackbar'

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

        const inputAmount = parseFloat(inputValue);
            if(!isNaN(inputAmount)){
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
    }

  return (
    <View>
      <Text>PJ6_CurrencyConverter</Text>
    </View>
  )
}

const styles = StyleSheet.create({})