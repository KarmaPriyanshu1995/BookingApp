import {TouchableOpacity} from 'react-native';
import React from 'react';
import {CustomTextSemiBold} from './CustomText';
import {
  ScaledSheet,
  moderateScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import {COLORS} from '../constant/Colors';
import {FONT_SIZE} from '../constant/FontSize';
type Props = {
  ButtonTitle?: string;
  onClick?: Function;
  buttonText?: string;
  onSearch?: Function;
};

export const SearchButton = ({buttonText, onSearch = () => {}}: Props) => {
  return (
    <TouchableOpacity style={styles.textInputBorder} onPress={() => onSearch()}>
      <CustomTextSemiBold
        title={buttonText}
        style={styles.searchButtonTextStyle}
      />
    </TouchableOpacity>
  );
};

const CustomButtons = ({ButtonTitle, onClick = () => {}}: Props) => {
  return (
    <TouchableOpacity onPress={() => onClick()}>
      <CustomTextSemiBold title={ButtonTitle || ''} />
    </TouchableOpacity>
  );
};

export default CustomButtons;

const styles = ScaledSheet.create({
  textInputBorder: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(18),
    paddingHorizontal: scale(10),
    borderColor: COLORS.YELLOW,
    borderWidth: scale(2),
    backgroundColor: COLORS.DARK_BLUE,
  },
  searchButtonTextStyle: {
    fontSize: moderateScale(FONT_SIZE.FONT_15),
    color: COLORS.WHITE,
    textAlign: 'center',
    flex: 1,
    paddingVertical: verticalScale(10),
  },
});
