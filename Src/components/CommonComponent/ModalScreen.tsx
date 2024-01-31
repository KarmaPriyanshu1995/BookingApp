import React from 'react';
import {
  ScaledSheet,
  moderateScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import {COLORS} from '../constant/Colors';
import {Modal, TouchableOpacity} from 'react-native';
import {CustomView} from './CustomView';
import {CustomText, CustomTextSemiBold} from './CustomText';
import {FONT_SIZE} from '../constant/FontSize';

type Props = {
  visible?: boolean;
  onClick?: Function;
  buttonTitle?: string;
  onClose?: Function;
  headerModalTitel?: string;
};
const ModalScreen = ({
  visible,
  buttonTitle,
  onClose = () => {},
  headerModalTitel,
}: Props) => {
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          // this.closeButtonFunction()
        }}>
        <CustomView style={styles.modalMainContainor}>
          <CustomView style={styles.modalContainorStyle}>
            <CustomView style={styles.headerContainor}>
              <CustomText
                title={headerModalTitel}
                style={styles.headerModalText}
              />
            </CustomView>
            <TouchableOpacity
              style={styles.applyButtonStyle}
              onPress={() => {
                onClose();
              }}>
              <CustomTextSemiBold
                style={styles.buttonText}
                title={buttonTitle}
              />
            </TouchableOpacity>
          </CustomView>
        </CustomView>
      </Modal>
    </>
  );
};

export default ModalScreen;

const styles = ScaledSheet.create({
  modalButton: {
    marginBottom: verticalScale(20),
    color: COLORS.WHITE,
    backgroundColor: COLORS.DARK_BLUE,
  },
  modalContainorStyle: {
    height: '50%',

    backgroundColor: COLORS.WHITE,
    borderTopRightRadius: scale(10),
    borderTopLeftRadius: scale(10),
  },
  modalMainContainor: {
    backgroundColor: COLORS.TRANSPARENT_BLACK,
    justifyContent: 'flex-end',
    flex: 1,
  },
  applyButtonStyle: {
    backgroundColor: COLORS.DARK_BLUE,
    alignItems: 'center',
    paddingVertical: verticalScale(10),
  },
  buttonText: {
    color: COLORS.WHITE,
    fontSize: moderateScale(FONT_SIZE.FONT_15),
  },
  headerContainor: {
    backgroundColor: COLORS.TRANSPARENT_BLACK,
    borderTopRightRadius: scale(10),
    borderTopLeftRadius: scale(10),
    alignItems: 'center',
    paddingVertical: verticalScale(10),
  },
  headerModalText: {},
});
