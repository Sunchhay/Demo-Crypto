import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AutoHeightImage from 'react-native-auto-height-image';
import colors from '../../theme/colors';
import { padding_horizontal, screenWidth } from '../../theme/layouts';
import { AppImages } from '../../theme/images';
import { Battambang } from '../../services/config/fonts';
import { size } from '../../theme/fonts';

const NoData = () => {
  return (
    <View style={styles.container}>
      <AutoHeightImage
        width={screenWidth(130)}
        source={AppImages.NoData}
        style={{opacity: 0.5}}
      />
      <Text style={styles.text}>គ្មានទិន្នន័យ</Text>
    </View>
  );
};

export default React.memo(NoData);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: padding_horizontal * 2,
  },
  text: {
    color: colors.grayColor,
    ...Battambang,
    opacity: 0.7,
    fontSize: size.font18,
    marginTop: screenWidth(10),
  },
});
