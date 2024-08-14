import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
import React, {useContext, useEffect, useMemo, useState} from 'react';
import {getPeopleByPage} from '../api/peopleApi';
import PeopleList from '../components/PeopleList';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import SearchIcon from '../assests/icons/SearchIcon';
import {IGetPeopleResponse} from '../utils/types/people';
import {FansContext} from '../context/FansContext';

const MainScreen = () => {
  const {state, clearFans} = useContext(FansContext);

  const [data, setData] = useState<IGetPeopleResponse>();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [searchValue, setSearchValue] = useState('');

  const loadData = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    const response = await getPeopleByPage(page);

    setTimeout(() => {
      if (response) {
        setData(response);
        setHasMore(!!response.next);
      }
      setLoading(false);
    }, 1000);
  };

  const renderData = useMemo(() => {
    if (data?.results) {
      if (searchValue) {
        return data?.results.filter(item =>
          item.name.toLowerCase().includes(searchValue.toLowerCase()),
        );
      } else {
        return data?.results;
      }
    } else return [];
  }, [data, searchValue]);

  const showNextPage = () => {
    if (hasMore && !loading) {
      setPage(current => current + 1);
    }
  };

  const showPrevPage = () => {
    if (page > 1 && !loading) {
      setPage(cureent => cureent - 1);
      setHasMore(true);
    }
  };

  const handleClearFans = () => {
    clearFans();
  };

  useEffect(() => {
    loadData();
  }, [page]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.fansConatiner}>
        <View style={styles.fansActionsContainer}>
          <Text style={{fontSize: 30}}>Fans</Text>
          <TouchableOpacity style={styles.clearBtn} onPress={handleClearFans}>
            <Text style={{color: '#ff2f59'}}>CLEAR FANS</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.fansInfoContainer}>
          <View style={styles.fansInfoBlock}>
            <Text style={{fontSize: 24}}>{state.fansCountByGender.female}</Text>
            <Text style={{fontSize: 14}}>Female Fans</Text>
          </View>
          <View style={styles.fansInfoBlock}>
            <Text style={{fontSize: 24}}>{state.fansCountByGender.male}</Text>
            <Text style={{fontSize: 14}}>Male Fans</Text>
          </View>
          <View style={styles.fansInfoBlock}>
            <Text style={{fontSize: 24}}>{state.fansCountByGender.others}</Text>
            <Text style={{fontSize: 14}}>Others</Text>
          </View>
        </View>
      </View>
      <View style={styles.peopleContainer}>
        <Pressable style={styles.search}>
          <SearchIcon width={20} height={20} />
          <TextInput
            placeholder="Search"
            placeholderTextColor="grey"
            value={searchValue}
            onChangeText={setSearchValue}
            autoComplete="off"
            style={{width: '50%'}}
          />
        </Pressable>
        <PeopleList
          data={renderData}
          isLoading={loading}
          page={page}
          hasMore={hasMore}
          itemsCount={data?.count}
          showNextPage={showNextPage}
          showPrevPage={showPrevPage}
        />
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  safeArea: {
    paddingHorizontal: 15,
    gap: 15,
    flex: 1,
  },
  fansConatiner: {
    gap: 15,
  },
  fansActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fansInfoContainer: {
    gap: 15,
    flexDirection: 'row',
  },
  fansInfoBlock: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    flex: 1,
  },
  clearBtn: {
    borderWidth: 2,
    borderColor: '#ff2f59',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
  },
  peopleContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    gap: 10,
  },
  search: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
});
