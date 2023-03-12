import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAppSelector } from '../../hooks/dispatch';
import { screenWidth } from '../../theme/layouts';
import { Battambang } from '../../services/config/fonts';
import colors from '../../theme/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const NoInternet = () => {

    const no_connection = useAppSelector(state => state.no_connection);
    const insetHeight = useSafeAreaInsets()

    return (
        <>
            {no_connection &&
                <View style={{
                    position: 'absolute',
                    width: '100%',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                }}>
                    <View style={{
                        backgroundColor: '#b52424',
                        justifyContent: 'center',
                        paddingBottom: screenWidth(8),
                        alignItems: 'center',
                        flexDirection: 'row',
                        width: '100%',
                        paddingTop: screenWidth(10) + insetHeight.top
                    }}>
                        <Text style={{
                            ...Battambang,
                            color: colors.white
                        }}>គ្មានការភ្ជាប់អ៊ីនធឺណិត</Text>
                    </View>
                    <View style={{
                        backgroundColor: colors.lowOpacityBlack,
                        flex: 1
                    }} />
                </View>
            }
        </>
    )
}

export default NoInternet

const styles = StyleSheet.create({})