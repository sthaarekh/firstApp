import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import { PropsWithChildren } from 'react'
import React from 'react'
import DiceOne from './assets/PJ5/One.png'
import DiceTwo from './assets/PJ5/Two.png'
import DiceThree from './assets/PJ5/Three.png'
import DiceFour from './assets/PJ5/Four.png'
import DiceFive from './assets/PJ5/Five.png'
import DiceSix from './assets/PJ5/Six.png'

type DiceProps = PropsWithChildren<{
  imageURL: ImageSourcePropType
}>

const Dice=({imageURL}: DiceProps): JSX.Element=>{
  return(
    <View>
      <Image style={styles.diceImage} source={imageURL}/>
    </View>
  )
}
export default function App5() {
  return (
    <View>
      <Text>App5</Text>
    </View>
  )
}

const styles = StyleSheet.create({})