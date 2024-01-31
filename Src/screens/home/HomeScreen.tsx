import React from 'react';
import {ScaledSheet, scale, verticalScale} from 'react-native-size-matters';
import SliderHeader from '../../components/CommonComponent/SliderHeader';
import {ENGLISH} from '../../local/eng';
import CustomTextInput from '../../components/CommonComponent/CustomTextInput';
import {IMAGES} from '../../components/constant/Images';
import {CustomDatePicker} from '../../components/CommonComponent/CustomDatePicker';
import {CustomView} from '../../components/CommonComponent/CustomView';
import {SearchButton} from '../../components/CommonComponent/CustomButtons';
import ModalScreen from '../../components/CommonComponent/ModalScreen';
import {COLORS} from '../../components/constant/Colors';
import {Modal, TouchableOpacity} from 'react-native';
import {CustomText} from '../../components/CommonComponent/CustomText';

const HomeScreen = () => {
  const [modalVisibility, setModalVisibility] = React.useState(false);
  return (
    <CustomView>
      <SliderHeader header={ENGLISH.headerText} />
      <CustomView style={styles.SearchableContent}>
        <CustomTextInput
          image={IMAGES.SEARCH}
          Placeholder={ENGLISH.enterYourDestination}
        />
        <CustomDatePicker
          image={IMAGES.CALENDER}
          placeHolder={ENGLISH.selectData}
        />
        <CustomTextInput
          image={IMAGES.USER}
          Placeholder={ENGLISH.oneRoomTwoChildren}
        />
        <SearchButton
          buttonText={ENGLISH.search}
          onSearch={() => {
            setModalVisibility(true);
          }}
        />

        <ModalScreen
          visible={modalVisibility}
          buttonTitle={ENGLISH.apply}
          onClose={() => {
            setModalVisibility(!modalVisibility);
          }}
          headerModalTitel={ENGLISH.selectRoomsAndGuste}
        />
      </CustomView>
    </CustomView>
  );
};

export default HomeScreen;

const styles = ScaledSheet.create({
  SearchableContent: {
    top: scale(20),
    marginHorizontal: scale(15),
  },
  modalButton: {
    marginBottom: verticalScale(20),
    color: COLORS.WHITE,
    backgroundColor: COLORS.DARK_BLUE,
  },
});
