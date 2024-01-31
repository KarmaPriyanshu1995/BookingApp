import {FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {CustomView} from './CustomView';
import {CustomTextBold, CustomTextSemiBold} from './CustomText';
import {IMAGES} from '../constant/Images';
import {COLORS} from '../constant/Colors';
import {
  ScaledSheet,
  moderateScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import {FONT_SIZE} from '../constant/FontSize';
import {ENGLISH} from '../../local/eng';
type Props = {
  header?: string;
};
const SliderHeader = ({header}: Props) => {
  const SliderData = [
    {
      icon: IMAGES.BED,
      text: ENGLISH.stay,
      id: 1,
    },
    {
      icon: IMAGES.FLIGHT,
      text: ENGLISH.flight,
      id: 2,
    },
    {
      icon: IMAGES.CAR,
      text: ENGLISH.car,
      id: 3,
    },
    {
      icon: IMAGES.TAXI,
      text: ENGLISH.taxi,
      id: 4,
    },
  ];
  const [slide, setSlide] = React.useState(1);

  return (
    <CustomView style={styles.header}>
      <CustomView style={styles.textHeadingStyle}>
        <CustomTextBold title={header || ''} style={styles.headerText} />
        <TouchableOpacity>
          <Image
            source={IMAGES.NOTIFICATION}
            style={styles.iconStyles}
            tintColor={COLORS.WHITE}
          />
        </TouchableOpacity>
      </CustomView>
      <CustomView style={styles.flateListScroller}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={SliderData}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => {
                setSlide(item.id);
              }}
              style={[
                styles.selectionTouchable,
                {
                  borderWidth: slide == item.id ? 1 : 0,
                },
              ]}>
              <Image
                source={item.icon}
                style={styles.iconStyles}
                resizeMode="contain"
                tintColor={COLORS.WHITE}
              />
              <CustomTextSemiBold title={item.text} style={styles.sliderText} />
            </TouchableOpacity>
          )}
        />
      </CustomView>
    </CustomView>
  );
};

export default SliderHeader;
const styles = ScaledSheet.create({
  header: {
    backgroundColor: COLORS.DARK_BLUE,
    paddingVertical: verticalScale(15),
  },
  headerText: {
    fontSize: moderateScale(FONT_SIZE.FONT_20),
    color: COLORS.WHITE,
    textAlign: 'center',
    flex: 1,
  },
  iconStyles: {
    height: scale(15),
    width: scale(15),
    resizeMode: 'contain',
  },
  textHeadingStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sliderText: {
    color: COLORS.WHITE,
    fontSize: moderateScale(FONT_SIZE.FONT_12),
  },
  selectionTouchable: {
    flexDirection: 'row',
    gap: scale(10),
    borderRadius: scale(15),
    borderColor: COLORS.WHITE,
    padding: scale(5),
    marginHorizontal: scale(15),
  },
  flateListScroller: {
    paddingVertical: verticalScale(5),
    top: verticalScale(5),
  },
});
