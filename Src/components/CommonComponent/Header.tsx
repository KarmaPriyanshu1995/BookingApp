import React from 'react';
import {COLORS} from '../constant/Colors';
import {
  ScaledSheet,
  moderateScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import {CustomTextBold} from './CustomText';
import {FONT_SIZE} from '../constant/FontSize';
import {CustomView} from './CustomView';
type Prope = {
  header?: string;
};
const Header = ({header}: Prope) => {
  return (
    <CustomView style={styles.header}>
      <CustomTextBold title={header || ''} style={styles.headertext} />
    </CustomView>
  );
};

export default Header;

const styles = ScaledSheet.create({
  header: {
    backgroundColor: COLORS.DARK_BLUE,
    paddingVertical: verticalScale(15),

    paddingHorizontal: scale(15),
  },
  headertext: {
    fontSize: moderateScale(FONT_SIZE.FONT_20),
    color: COLORS.WHITE,
    textAlign: 'center',
    flex: 1,
  },
});
