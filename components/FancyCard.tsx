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
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Boudhanath</Text>
            <Text style={styles.cardLabel}>Kathmandu, Bagmati Province</Text>
            <Text style={styles.cardDescription}>Boudha Stupa; or Jarung Kashor, also known as Khasti Chaitya or Khāsa Chaitya, is a stupa and major spiritual landmark seen as the embodiment of the enlightened mind of all the Buddhas, located in Boudhanath, within the city of Kathmandu, Nepal.</Text>
            <Text style={styles.cardFooter}>12 mins away</Text>
            </View>
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
    cardBody:{},
    cardTitle:{},
    cardLabel:{},
    cardDescription:{},
    cardFooter:{},
})