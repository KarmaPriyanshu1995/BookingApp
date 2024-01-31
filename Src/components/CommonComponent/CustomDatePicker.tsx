import {
  GestureResponderEvent,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {ScaledSheet, moderateScale, scale} from 'react-native-size-matters';
// @ts-ignore
import DatePicker from 'react-native-date-ranges';
import {FONT_SIZE} from '../constant/FontSize';
import {COLORS} from '../constant/Colors';
import CustomButtons from './CustomButtons';
import {ENGLISH} from '../../local/eng';
import React from 'react';

type Props = {
  image?: any;
  style?: any;
  placeHolder?: string;
};

export const CustomDatePicker = ({image, style, placeHolder}: Props) => {
  const [selectedDates, setSelectedDates] = React.useState();
  return (
    <TouchableOpacity style={styles.textInputBorder}>
      <Image
        source={image}
        style={[styles.iconStyle, style]}
        resizeMode="contain"
      />
      <DatePicker
        style={styles.datePickerStyles}
        customStyles={{
          placeholderText: {
            fontSize: moderateScale(FONT_SIZE.FONT_15),
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 'auto',
          },
          headerStyle: {
            backgroundColor: COLORS.DARK_BLUE,
          },
          contentText: {
            fontSize: moderateScale(FONT_SIZE.FONT_15),
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 'auto',
          },
        }}
        selectedBgColor="#0047AB"
        customButton={(
          onConfirm: ((event: GestureResponderEvent) => void) | undefined,
        ) => <CustomButtons onClick={onConfirm} ButtonTitle={ENGLISH.submit} />}
        onConfirm={(
          startDate: React.SetStateAction<undefined>,
          endDate: any,
        ) => {
          setSelectedDates(startDate, endDate);
        }}
        centerAlign
        allowFontScaling={false}
        placeholder={placeHolder}
        mode={'range'}
      />
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  iconStyle: {
    height: scale(20),
    width: scale(20),
    resizeMode: 'contain',
  },
  textInputBorder: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(18),
    paddingHorizontal: scale(10),
    borderColor: COLORS.YELLOW,
    borderWidth: scale(2),
  },
  datePickerStyles: {
    width: 350,
    height: 45,
    borderRadius: 0,
    borderWidth: 0,
    borderColor: 'transparent',
  },
});
