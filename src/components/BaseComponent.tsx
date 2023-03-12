import { Image, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View, ViewStyle } from 'react-native'
import React from 'react'
import { Box, HStack } from 'native-base'
import { padding_horizontal, screenWidth } from '../theme/layouts'
import colors from '../theme/colors'
import { size } from '../theme/fonts'
import Feather from 'react-native-vector-icons/Feather'
import { AppImages } from '../theme/images'

interface Props {
  children?: React.ReactNode
  style?: ViewStyle
  backgroundColor?: any
}

const BaseComponent: React.FC<Props> = (props) => {
  return (
    <>
      <SafeAreaView style={{ backgroundColor: props.backgroundColor ? props.backgroundColor : colors.mainColor }} />
      <StatusBar
        hidden={false}
        barStyle={'light-content'}
        backgroundColor='transparent'
        translucent
      />
      <HStack style={[styles.container, {
        height: screenWidth(60) + StatusBar.currentHeight! + screenWidth(5),
        paddingTop: StatusBar.currentHeight! + screenWidth(5),
        backgroundColor: props.backgroundColor ? props.backgroundColor : colors.mainColor
      }]}>
        <TouchableOpacity
          style={[styles.menuButton, { marginRight: screenWidth(60) }]}
          activeOpacity={0.8}
        >
          <Image source={AppImages.Menu} style={{ width: screenWidth(32), height: screenWidth(32) }} />
        </TouchableOpacity>
        <Image source={AppImages.Logo} style={{
          width: screenWidth(120),
          height: screenWidth(80)
        }} />
        <HStack alignItems='center'>
          <TouchableOpacity
            style={[styles.menuButton, { marginTop: screenWidth(5), marginRight: screenWidth(10) }]}
            activeOpacity={0.8}
          >
            <Image source={AppImages.TV} style={{
              width: screenWidth(36),
              height: screenWidth(36),
              resizeMode: 'contain'
            }} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.menuButton, { marginTop: -screenWidth(5) }]}
            activeOpacity={0.8}
          >
            <Image source={AppImages.Live} style={{
              width: screenWidth(36),
              height: screenWidth(36),
              resizeMode: 'contain'
            }} />
          </TouchableOpacity>
        </HStack>

      </HStack>
      <KeyboardAvoidingView
        enabled
        style={{
          flex: 1,
          backgroundColor: colors.backgroundColor,
        }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}
      >
        <View {...props.style}>
          {
            props.children
          }
        </View>
      </KeyboardAvoidingView>
      {/* <NoInternet /> */}
    </>
  )
}

export default BaseComponent

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.mainColor,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: screenWidth(15),
    zIndex: 200,
  },
  title: {
    fontSize: size.font20,
    color: colors.white,
  },
  menuButton: {
    marginTop: -screenWidth(5),
    padding: screenWidth(5),
  },
})