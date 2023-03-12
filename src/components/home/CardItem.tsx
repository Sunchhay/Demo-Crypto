import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { HStack, VStack } from 'native-base'
import { Image } from 'react-native'
import { AppImages } from '../../theme/images'
import { padding_horizontal, screenWidth } from '../../theme/layouts'
import { Battambang } from '../../services/config/fonts'
import { size } from '../../theme/fonts'
import colors from '../../theme/colors'
import Ionicons from 'react-native-vector-icons/Ionicons'

interface Props {
    title: string;
    date: any;
    image: any;
    onPress: () => void;
}

const CardItem: React.FC<Props> = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.container} activeOpacity={0.7}>
            <Image source={props.image ? { uri: props.image } : AppImages.Cover} style={styles.cover} />
            <VStack>
                <Text style={styles.title} numberOfLines={3}>
                    {
                        props.title
                    }
                </Text>
                <HStack style={styles.dateContainer}>
                    <HStack>
                        <Ionicons name='ios-calendar-outline' size={screenWidth(20)} color={colors.black} />
                        <Text style={styles.date}>
                            {/* ០៤ មីនា ២០២៣ */}
                            {
                                props.date
                            }
                        </Text>
                    </HStack>
                    <TouchableOpacity>
                        <Ionicons name='ios-share-outline' size={screenWidth(32)} color={colors.mainColor} />
                    </TouchableOpacity>
                </HStack>
            </VStack>
        </TouchableOpacity>
    )
}

export default CardItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: padding_horizontal,
        paddingVertical: screenWidth(10),
        alignItems: 'center',
        borderBottomWidth: screenWidth(1),
        borderColor: colors.lightGrayColor
    },
    cover: {
        width: screenWidth(170),
        height: screenWidth(115),
        marginRight: screenWidth(15),
        borderRadius: screenWidth(5)
    },
    title: {
        ...Battambang,
        fontSize: size.font16,
        color: colors.black,
        width: screenWidth(255)
    },
    date: {
        ...Battambang,
        fontSize: size.font14,
        color: colors.black,
        marginLeft: screenWidth(5),
    },
    dateContainer: {
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    }
})