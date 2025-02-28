import { Linking, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ElevatedCard from './ElevatedCard'

export default function ActionCard() {
    function openWebsite(webstieLink: string){
        Linking.openURL(webstieLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Action Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>What's new in Javascript 21 - ES12</Text>
        </View>
        <Image
        source={{
            uri: 'https://i.ytimg.com/vi/YwHJCTXg6Es/maxresdefault.jpg'
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBodyContainer}>
            <Text>
            Just like every year, Javascript brings in new features. This year javascript is bringing 4 new features, which are almost in production rollout. I won't be wasting much more time and directly jump to code with easy to understand examples. Use the latest node version, if you want to play around with these features. 15.8.0 worked fine for me. Once the compatible node version is available, simply create a new JS file, and let's get started.
            </Text>
        </View>
        <View style={styles.cardFooterContainer}>
            <TouchableOpacity onPress={()=> openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}>
                <Text>Read More</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        color: 'white'
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 10,
        overflow: 'hidden',
    },
    elevatedCard: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    headingContainer: {
        padding: 15,
        backgroundColor: '#007BFF',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    cardImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    cardBodyContainer: {
        padding: 15,
    },
    cardFooterContainer: {
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    cardLabel: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
    },
    cardDescription: {
        fontSize: 16,
        color: '#444',
        lineHeight: 22,
        marginBottom: 10,
    },
    cardFooter: {
        fontSize: 14,
        fontWeight: '600',
        color: '#007BFF',
    },
})