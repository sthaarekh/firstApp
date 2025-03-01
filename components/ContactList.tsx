import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
          uid: "101",
          name: "Rohit Sharma",
          status: "Software Engineer",
          imageURL: "https://randomuser.me/api/portraits/men/25.jpg"
        },
        {
          uid: "102",
          name: "Priya Mehta",
          status: "Product Designer",
          imageURL: "https://randomuser.me/api/portraits/women/30.jpg"
        },
        {
          uid: "103",
          name: "Aarav Khanna",
          status: "Data Scientist",
          imageURL: "https://randomuser.me/api/portraits/men/40.jpg"
        },
        {
          uid: "104",
          name: "Neha Kapoor",
          status: "Marketing Manager",
          imageURL: "https://randomuser.me/api/portraits/women/22.jpg"
        }
      ];
      
  return (
    <View>
      <Text style= {styles.headingText}>Contact List</Text>
      <ScrollView
      style={styles.container}
      scrollEnabled={false}
       >
       {contacts.map(({uid, name, status, imageURL})=>(
            <View key={uid} style={styles.userCard}>
                <Image source={{
                    uri: imageURL
                }}
                style={styles.userImage}/>
                <View>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userStatus}>{status}</Text>
                </View>
            </View>
       ))}     
      </ScrollView>
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
    container: {
        paddingVertical: 10,
      },
      userCard: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
      },
      userImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
      },
      textContainer: {
        flex: 1,
      },
      userName: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
      },
      userStatus: {
        fontSize: 14,
        color: "#666",
      },
})