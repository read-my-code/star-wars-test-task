import React, {ReactNode, createContext, useState} from 'react';
import {IPerson} from '../utils/types/person';

interface Props {
  children: ReactNode;
}

interface FansContextType {
  state: State;
  likePerson: (person: IPerson) => void;
  clearFans: () => void;
}

interface State {
  fans: string[];
  fansCountByGender: {
    female: number;
    male: number;
    others: number;
  };
}

const defaultValue: FansContextType = {
  state: {
    fans: [],
    fansCountByGender: {
      female: 0,
      male: 0,
      others: 0,
    },
  },
  likePerson: () => {},
  clearFans: () => {},
};

export const FansContext = createContext(defaultValue);

export const FansProvider: React.FC<Props> = ({children}) => {
  const [state, setState] = useState<State>({
    fans: [],
    fansCountByGender: {
      female: 0,
      male: 0,
      others: 0,
    },
  });

  const likePerson = (person: IPerson) => {
    const isFan = state.fans.includes(person.url);

    setState(current => {
      let fans = current.fans;
      let fansCountByGender = current.fansCountByGender;

      if (isFan) {
        fans = fans.filter(item => item !== person.url);
      } else fans = [...fans, person.url];

      switch (person.gender) {
        case 'male':
          fansCountByGender = {
            ...fansCountByGender,
            male: isFan
              ? fansCountByGender.male - 1
              : fansCountByGender.male + 1,
          };
          break;

        case 'female':
          fansCountByGender = {
            ...fansCountByGender,
            female: isFan
              ? fansCountByGender.female - 1
              : fansCountByGender.female + 1,
          };
          break;

        default:
          fansCountByGender = {
            ...fansCountByGender,
            others: isFan
              ? fansCountByGender.others - 1
              : fansCountByGender.others + 1,
          };
          break;
      }
      return {fans, fansCountByGender};
    });
  };

  const clearFans = () => {
    setState(defaultValue.state);
  };

  return (
    <FansContext.Provider value={{state, likePerson, clearFans}}>
      {children}
    </FansContext.Provider>
  );
};
