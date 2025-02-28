import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image source={{
            uri: 'https://images.squarespace-cdn.com/content/v1/5b735348266c075124b0ffb3/1568373828844-AP1ZPOIWBGGFJWMIZ55N/Boudha_Stupa_181030-9.jpg'
        }}
        style = {styles.cardImage}></Image>
      </View>
    </View>
  )
}

export default FancyCard

const styles = StyleSheet.create({
    headingText:{
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        color: 'white'
    },
    card:{},
    cardElevated:{},
    cardImage:{
        height: 180,
        
    },
})