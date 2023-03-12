import { StyleSheet } from 'react-native';
import { Battambang, BattambangBold, PoppinBold, PoppinMedium } from '../services/config/fonts';
import { size } from '../theme/fonts';
import colors from '../theme/colors';

export const style = StyleSheet.create({
  poppinsMedium: {
    ...PoppinMedium
  },
  poppinsBold: {
    ...PoppinBold
  },
  lobsterRegular: {
    fontFamily: 'Lobster-Regular'
  },
  battambang: {
    ...Battambang
  },
  battambangBold: {
    ...BattambangBold
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  normalShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,

    elevation: 0.5,
  },
  title: {
    fontSize: size.font22,
    color: colors.black,
    ...Battambang
  },
  text: {
    fontSize: size.font18,
    color: colors.mainColor,
  },
});
