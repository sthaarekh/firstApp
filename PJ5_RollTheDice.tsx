import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import { PropsWithChildren, useState } from 'react'
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
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne)
  const rollDiceOnTap = () =>{
    let randomNumber = Math.floor(Math.random()*6)+1;
    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;
      default:
        break;
    }
  }
  return (
    <View style={styles.container}>
      <Dice imageURL={diceImage}/>
      <Pressable onPress={rollDiceOnTap} style={styles.rollDiceBtn}>
        <Text style={styles.rollDiceBtnText}>Roll the dice</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  diceImage:{
    width: 200,
    height: 200,
  },
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rollDiceBtn: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5, // For Android shadow
    shadowColor: "#000", // For iOS shadow
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  rollDiceBtnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
})