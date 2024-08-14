import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {PersonDetailsScreenProps} from '../utils/types/navigation';
import PersonIcon from '../assests/icons/PersonIcon';
import {getPlanetName} from '../api/planetApi';
import {getPersonSpecies} from '../api/peopleApi';
import useFilms from '../utils/hooks/useFilms';
import BorderHeartIcon from '../assests/icons/BorderHeartIcon';
import {FansContext} from '../context/FansContext';
import FilledHeartIcon from '../assests/icons/FilledHeartIcon';

interface ExtraData {
  homeworld: string | null;
  species: string | null;
  language: string | null;
  films: string[];
}

const PersonDetailsScreen = ({route}: PersonDetailsScreenProps) => {
  const {state, likePerson} = useContext(FansContext);
  const personInfo = route.params.person;

  const isFan = state.fans.includes(personInfo.url);

  const [isLoading, setIsLoading] = useState(false);
  const [extraData, setExtraData] = useState<ExtraData>({
    homeworld: null,
    species: null,
    language: null,
    films: [],
  });
  const {getAllFilmsOfPerson} = useFilms();

  const loadExtraData = async () => {
    setIsLoading(true);
    const homeworld =
      !!personInfo.homeworld && (await getPlanetName(personInfo.homeworld));
    const species =
      !!personInfo.species.length &&
      (await getPersonSpecies(personInfo.species[0]));
    const films =
      !!personInfo.films.length &&
      (await getAllFilmsOfPerson(personInfo.films));

    setTimeout(() => {
      setExtraData({
        homeworld: homeworld || null,
        species: species?.name || null,
        language: species?.language || null,
        films: films || [],
      });

      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    loadExtraData();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.personInfoContainer}>
        <View style={styles.userIconContainer}>
          <PersonIcon width={100} height={100} />
        </View>
        <View style={styles.textInfoContainer}>
          <Text style={styles.name}>{personInfo.name}</Text>
          {!isLoading && (
            <>
              {extraData.homeworld && extraData.homeworld !== 'unknown' && (
                <Text>from {extraData.homeworld}</Text>
              )}
              {personInfo.birth_year && personInfo.birth_year !== 'unknown' && (
                <Text style={styles.birth}>{personInfo.birth_year}</Text>
              )}
            </>
          )}
        </View>
        <TouchableOpacity
          style={styles.likeBtn}
          onPress={() => likePerson(personInfo)}>
          {isFan ? (
            <FilledHeartIcon color="red" width={24} height={24} />
          ) : (
            <BorderHeartIcon width={24} height={24} />
          )}
        </TouchableOpacity>
      </View>

      {isLoading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <>
          {extraData.species && extraData.homeworld && extraData.language && (
            <View style={styles.bio}>
              <Text style={styles.featureTitle}>Bio</Text>
              <Text
                style={
                  styles.featureItem
                }>{`${personInfo.name} is a ${extraData.species} from ${extraData.homeworld} who speaks ${extraData.language} and was born at ${personInfo.birth_year}...`}</Text>
            </View>
          )}

          <View style={styles.featuresContainer}>
            <View style={styles.featureBlock}>
              <Text style={styles.featureTitle}>Physical characteristics</Text>
              <Text style={styles.featureItem}>
                - Gender: {personInfo.gender}
              </Text>
              <Text style={styles.featureItem}>
                - Height: {personInfo.height}
              </Text>
              <Text style={styles.featureItem}>- Mass: {personInfo.mass}</Text>
              <Text style={styles.featureItem}>
                - Hair color: {personInfo.hair_color}
              </Text>
              <Text style={styles.featureItem}>
                - Eye color: {personInfo.eye_color}
              </Text>
              <Text style={styles.featureItem}>
                - Skin color: {personInfo.skin_color}
              </Text>
            </View>

            {extraData.films && (
              <View style={styles.featureBlock}>
                <Text style={styles.featureTitle}>Films</Text>
                {extraData.films.map(film => (
                  <Text style={styles.featureItem} key={film}>
                    - {film}
                  </Text>
                ))}
              </View>
            )}
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default PersonDetailsScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  userIconContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 100,
    alignItems: 'center',
    marginBottom: 10,
  },
  personInfoContainer: {
    alignItems: 'center',
    marginBottom: 15,
    width: '100%',
  },
  textInfoContainer: {
    gap: 5,
    alignItems: 'center',
  },
  likeBtn: {
    position: 'absolute',
    padding: 5,
    right: 0,
    top: 5,
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
  },
  birth: {
    fontSize: 18,
    fontWeight: '500',
  },
  bio: {
    marginBottom: 30,
    width: '100%',
  },
  featuresContainer: {
    gap: 15,
    width: '100%',
  },
  featureBlock: {
    width: '100%',
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 5,
  },
  featureItem: {
    paddingLeft: 10,
    fontSize: 16,
  },
});
