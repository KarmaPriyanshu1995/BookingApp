import {Image, Keyboard, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {CustomView} from './CustomView';
import {ScaledSheet, scale, verticalScale} from 'react-native-size-matters';
import {COLORS} from '../constant/Colors';
type Props = {
  image?: any;
  Placeholder?: string;
  style?: any;
  value?: string;
  isEditable?: boolean;
  onChangeValue?: Function;
};
const CustomTextInput = ({
  image,
  Placeholder,
  style,
  value,
  isEditable = false,
  onChangeValue = () => {},
}: Props) => {
  return (
    <CustomView style={styles.textInputBorder}>
      <Image
        source={image}
        style={[styles.iconStyle, style]}
        resizeMode="contain"
      />

      <TextInput
        placeholder={Placeholder}
        value={value}
        onChangeText={(text: string) => {
          onChangeValue(text);
        }}
        // onSubmitEditing={() => {
        //   Keyboard.dismiss();
        // }}
      />
    </CustomView>
  );
};

export default CustomTextInput;

const styles = ScaledSheet.create({
  textInputBorder: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(18),
    paddingHorizontal: scale(10),
    borderColor: COLORS.YELLOW,
    borderWidth: scale(2),
  },
  iconStyle: {
    height: scale(20),
    width: scale(20),
    resizeMode: 'contain',
  },
});
