import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import colors from '../../theme/colors';
import { padding_horizontal, screenWidth } from '../../theme/layouts';
import { size } from '../../theme/fonts';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export interface ISlideNewData {
  id: number;
  title: string;
  image: string;
  image_url: string;
}

interface Props {
  data: Array<any>;
  // index?: number;
  // onChageIndex: (value: number) => void;
}

const ImageSlide: React.FC<Props> = (props) => {
  return (
    <>
      {
        props.data && <View style={styles.container}>
          <Swiper
            showsPagination={false}
            removeClippedSubviews={false}
            showsButtons
            nextButton={
              <MaterialIcons name='arrow-forward-ios' size={screenWidth(30)} color={colors.mainColor} style={{}} />
            }
            prevButton={
              <MaterialIcons name='arrow-back-ios' size={screenWidth(30)} color={colors.mainColor} style={{ marginLeft: screenWidth(5) }} />
            }
            autoplay
            loop={true}
            autoplayTimeout={5}
            // onIndexChanged={(index: number) => props.onChageIndex(index)}
            activeDotColor={colors.white}>
            {props.data.map((item: ISlideNewData, index: number) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    // navigate('', { id: item.id })
                  }}>
                  <Image
                    resizeMode="contain"
                    key={index}
                    style={styles.img}
                    source={{
                      uri: item.image_url,
                    }}
                  />
                </TouchableOpacity>
              );
            })}
          </Swiper>
        </View>
      }
    </>

  );
};

export default React.memo(ImageSlide);

const styles = StyleSheet.create({
  img: {
    backgroundColor: colors.white,
    overflow: 'hidden',
    width: '100%',
    height: screenWidth(240)
  },
  container: {
    height: screenWidth(240)
  },
});
