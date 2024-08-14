import {StyleSheet, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {IPerson} from '../../utils/types/person';
import CustomeTextCell from '../CustomTextCell';
import BorderHeartIcon from '../../assests/icons/BorderHeartIcon';
import FilledHeartIcon from '../../assests/icons/FilledHeartIcon';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../utils/types/navigation';
import {FansContext} from '../../context/FansContext';

interface Props {
  person: IPerson;
}

export const PeopleListItem = ({person}: Props) => {
  const {state, likePerson} = useContext(FansContext);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const isFan = state.fans.includes(person.url)

  const handleNavigateToPersonalDetails = () => {
    navigation.navigate('PersonDetails', {person});
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleNavigateToPersonalDetails}>
      <TouchableOpacity
        style={styles.favIconContainer}
        onPress={() => likePerson(person)}>
        {isFan ? <FilledHeartIcon color="red" /> : <BorderHeartIcon />}
      </TouchableOpacity>
      <CustomeTextCell extraStyles={styles.name}>{person.name}</CustomeTextCell>
      <CustomeTextCell extraStyles={styles.birth}>
        {person.birth_year}
      </CustomeTextCell>
      <CustomeTextCell extraStyles={styles.gender}>
        {person.gender}
      </CustomeTextCell>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 15,
  },
  favIconContainer: {
    paddingLeft: 20,
    width: 70,
  },
  name: {
    width: 180,
  },
  birth: {
    width: 110,
  },
  gender: {
    width: 90,
  },
  homeWorld: {
    width: 110,
  },
});
