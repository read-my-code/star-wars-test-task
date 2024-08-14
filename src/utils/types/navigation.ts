import {StackScreenProps} from '@react-navigation/stack';
import {IPerson} from './person';

export type RootStackParamList = {
  MainScreen: undefined;
  PersonDetails: {person: IPerson};
};

export type PersonDetailsScreenProps = StackScreenProps<
  RootStackParamList,
  'PersonDetails'
>;
