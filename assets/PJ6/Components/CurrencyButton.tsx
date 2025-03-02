import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PropsWithChildren } from 'react'

type CurrencyButtonProps = PropsWithChildren<{
    name: string,
    flag: string,
}>

export default function CurrencyButton(props:CurrencyButtonProps) {
  return (
    <View style={styles.buttonContainer}> 
        <Text style={styles.flag}>{props.flag}</Text>
        <Text style={styles.country}>{props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
        buttonContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f5f5f5',
            paddingVertical: 12,
            paddingHorizontal: 20,
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 3,
            marginVertical: 8,
        },
        flag: {
            fontSize: 24,
            marginRight: 10,
        },
        country: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#333',
        },
})