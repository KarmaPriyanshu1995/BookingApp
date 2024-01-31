import {Text} from 'react-native';
import React from 'react';
import {ScaledSheet, moderateScale} from 'react-native-size-matters';
import {COLORS} from '../constant/Colors';
import {FONT_SIZE} from '../constant/FontSize';

type prop = {
  children?: any;
  style?: any;
  title?: any;
};
export const CustomTextBold = ({children, style, title}: prop) => {
  return (
    <Text style={[styles.BoldText, style]}>
      {title || 'Hiiii'}
      {children && children}
    </Text>
  );
};

export const CustomTextSemiBold = ({children, style, title}: prop) => {
  return (
    <Text style={[styles.SemiBoldText, style]}>
      {title || ''}
      {children && children}
    </Text>
  );
};

export const CustomText = ({children, style, title}: prop) => {
  return (
    <Text>
      {title || ''}
      {children && children}
    </Text>
  );
};
const styles = ScaledSheet.create({
  BoldText: {
    color: COLORS.BLACK,
    fontSize: moderateScale(FONT_SIZE.FONT_15),
    fontWeight: 'bold',
  },
  SemiBoldText: {
    color: COLORS.BLACK,
    fontSize: moderateScale(FONT_SIZE.FONT_15),
    fontWeight: '600',
  },
});
