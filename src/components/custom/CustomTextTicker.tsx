import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextTicker from 'react-native-text-ticker'
import { size } from '../../theme/fonts'
import colors from '../../theme/colors'
import { screenWidth } from '../../theme/layouts'
import { Battambang } from '../../services/config/fonts'

interface Props {
    text: string;
}

const CustomTextTicker: React.FC<Props> = (props) => {
    return (
        <View style={{
            backgroundColor: colors.red,
            paddingVertical: screenWidth(5),
            paddingHorizontal: screenWidth(5)
        }}>
            <TextTicker
                style={{
                    fontSize: size.font16,
                    color: colors.white,
                    ...Battambang
                }}
                duration={30000}
                loop 
                bounce={true}
                bounceDelay={0}
            >
                {
                    props.text
                }
            </TextTicker> 
        </View>
    )
}

export default CustomTextTicker

const styles = StyleSheet.create({})