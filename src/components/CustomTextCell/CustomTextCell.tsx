import {View, Text, StyleSheet, TextStyle} from 'react-native';
import React from 'react';
import {PropsWithChildren} from 'react';

interface Props extends PropsWithChildren {
  extraStyles?: TextStyle | TextStyle[];
}

export const CustomTextCell = ({children, extraStyles}: Props) => {
  return <Text style={[styles.text, extraStyles]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
    paddingLeft: 10,
  },
});
