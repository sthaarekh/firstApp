import { StyleSheet, Text, View } from 'react-native'
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
      <Text>ContactList</Text>
    </View>
  )
}

const styles = StyleSheet.create({})