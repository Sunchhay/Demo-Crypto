import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Box, HStack, VStack } from 'native-base'
import { padding_horizontal, screenWidth } from '../../theme/layouts'
import colors from '../../theme/colors'
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import LinearGradient from 'react-native-linear-gradient';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)

const LoadingCardItem = (props: any) => {
    return (
        <HStack style={[styles.whiteBox, { marginTop: props.marginTop ? props.marginTop : screenWidth(3) }]}>
            <ShimmerPlaceholder style={styles.image} />
            <VStack style={{ paddingVertical: screenWidth(5) }}>
                <ShimmerPlaceholder style={styles.longText} />
                <ShimmerPlaceholder style={styles.text} />
                <ShimmerPlaceholder style={styles.longText} />
                <Box style={{ height: screenWidth(25) }} />
            </VStack>
            <HStack style={styles.obsolute}>
                <ShimmerPlaceholder style={{ width: screenWidth(120), height: screenWidth(20), borderRadius: screenWidth(5), marginRight: screenWidth(10) }} />
                <ShimmerPlaceholder style={{ width: screenWidth(30), height: screenWidth(30), borderRadius: screenWidth(5) }} />
            </HStack>
        </HStack>
    )
}

export default LoadingCardItem

const styles = StyleSheet.create({
    whiteBox: {
        backgroundColor: colors.white,
        paddingHorizontal: padding_horizontal,
        width: '100%',
        paddingTop: screenWidth(10),
        paddingBottom: screenWidth(14),
        alignItems: 'center',
        borderBottomWidth: screenWidth(1),
        borderColor: colors.lightGrayColor
    },
    image: {
        width: screenWidth(170),
        height: screenWidth(115),
        marginRight: screenWidth(15),
        borderRadius: screenWidth(5)
    },
    text: {
        height: screenWidth(12),
        borderRadius: screenWidth(2),
        width: screenWidth(140),
        marginBottom: screenWidth(15)
    },
    longText: {
        height: screenWidth(12),
        borderRadius: screenWidth(2),
        width: screenWidth(200),
        marginBottom: screenWidth(15)
    },
    obsolute: {
        position: 'absolute',
        bottom: screenWidth(14),
        right: screenWidth(20),
        width: screenWidth(255),
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})