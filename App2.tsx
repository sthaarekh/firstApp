import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCard from './components/FlatCard'
import ElevatedCard from './components/ElevatedCard'

export default function App2() {
  return (
    <SafeAreaView>
        <ScrollView>
            <FlatCard/>
            <ElevatedCard/>
        </ScrollView>
    </SafeAreaView>
  )
}