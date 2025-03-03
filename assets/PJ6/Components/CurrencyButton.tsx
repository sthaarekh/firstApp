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
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f0f0f0",
        width:130,
        margin:10,
        padding: 10,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3, // For Android shadow
      },
      flag: {
        fontSize: 24,
        marginRight: 10,
      },
      country: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
      },
})