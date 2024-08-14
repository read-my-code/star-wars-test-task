import {View, StyleSheet, TextStyle} from 'react-native';
import React from 'react';
import CustomTextCell from '../CustomTextCell';

interface Props {
  title: string;
  textStyle?: TextStyle | TextStyle[];
}

export const HeaderTextCell = ({title, textStyle}: Props) => {
  return (
    <View>
      <View style={styles.border} />
      <CustomTextCell extraStyles={textStyle}>{title}</CustomTextCell>
    </View>
  );
};

const styles = StyleSheet.create({
  border: {
    width: 1,
    height: 16,
    borderWidth: 1,
    borderColor: 'grey',
    position: 'absolute',
    top: 1,
  },
});
