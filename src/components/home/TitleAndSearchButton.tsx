import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { HStack } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { padding_horizontal, screenWidth } from '../../theme/layouts';
import colors from '../../theme/colors';
import { BattambangBold } from '../../services/config/fonts';
import { size } from '../../theme/fonts';
import { style } from '../../styles/style';

interface Props {
    title: string;
    onPress: ()=>void;
}

const TitleAndSearchButton: React.FC<Props> = (props) => {
  return (
    <HStack style={styles.container}>
        <Text style={styles.title}>
            {
                props.title
            }
        </Text>
        <TouchableOpacity onPress={props.onPress} style={styles.icon} activeOpacity={0.8}>
            <Ionicons name='search' size={screenWidth(30)} color={colors.mainColor} />
        </TouchableOpacity>
    </HStack>
  )
}

export default TitleAndSearchButton

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: screenWidth(12),
        paddingBottom: screenWidth(8),
        paddingHorizontal: padding_horizontal,
        backgroundColor: colors.white,
        ...style.normalShadow
    },
    title: {
        ...BattambangBold,
        color: colors.black,
        fontSize: size.font20
    },
    icon: {
        padding: screenWidth(5)
    }
})