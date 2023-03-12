import { StyleSheet, View } from 'react-native'
import React from 'react'
import { screenHeight } from '../../theme/layouts'
import colors from '../../theme/colors'

const HorizontalLine = (props: any) => {
  return (
    <View style={{
      height: screenHeight(1),
      alignSelf: 'center',
      backgroundColor: colors.lightGrayColor,
      width: props.width ? props.width : '90%',
      marginTop: props.marginTop,
      marginBottom: props.marginBottom,
    }} />
  )
}

export default React.memo(HorizontalLine)

const styles = StyleSheet.create({})