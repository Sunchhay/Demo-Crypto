import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './src/container/HomeScreen'
import { NativeBaseProvider } from 'native-base'

const App = () => {
  return (
    <NativeBaseProvider>
      <HomeScreen />
    </NativeBaseProvider>
  )
}

export default App

const styles = StyleSheet.create({})