import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, useColorScheme, Appearance } from 'react-native'
function AppPro(): JSX.Element{
    const isDarkMode = Appearance.getColorScheme();
  return (
        <View style={styles.container}>
            <Text style={isDarkMode==='dark' ? styles.whiteText : styles.darkText}>Hello World {isDarkMode}</Text>
        </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    whiteText:{
        color: '#ffffff'
    },
    darkText:{
        color: '#000000'
    }
})
export default AppPro
