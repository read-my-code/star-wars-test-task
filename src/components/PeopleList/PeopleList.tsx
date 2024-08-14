import {
  View,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {IPerson} from '../../utils/types/person';
import PeopleListItem from '../PeopleListItem';
import HeaderTextCell from '../HeaderTextCell';
import FilledHeartIcon from '../../assests/icons/FilledHeartIcon';
import ArrowLeftIcon from '../../assests/icons/ArrowLeftIcon';
import ArrowRightIcon from '../../assests/icons/ArrowRightIcon';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props {
  data: IPerson[];
  isLoading: boolean;
  page: number;
  hasMore: boolean;
  itemsCount: number | undefined;
  showNextPage?: () => void;
  showPrevPage?: () => void;
}

export const PeopleList = ({
  data,
  isLoading,
  page,
  hasMore,
  itemsCount,
  showNextPage,
  showPrevPage,
}: Props) => {
  let isGoPrevPageBtnDisabled = false;
  let isGoNextPageBtnDisabled = false;

  if (page === 1) {
    isGoPrevPageBtnDisabled = true;
  }

  if (!hasMore) {
    isGoNextPageBtnDisabled = true;
  }

  const getVisibleItemsRange = () => {
    const start = (page - 1) * 10 + 1;
    const end = Math.min(page * 10, itemsCount || 0);
    return `${start}-${end} of ${itemsCount}`;
  };

  const listHeader = () => {
    return (
      <View
        style={{
          paddingVertical: 25,
          flexDirection: 'row',
          borderBottomColor: 'grey',
          borderBottomWidth: 1,
        }}>
        <View style={styles.favIconContainer}>
          <FilledHeartIcon />
        </View>
        <HeaderTextCell title="Name" textStyle={styles.name} />
        <HeaderTextCell title="Birth Year" textStyle={styles.birth} />
        <HeaderTextCell title="Gender" textStyle={styles.gender} />
      </View>
    );
  };

  const renderItem = (item: IPerson) => {
    return <PeopleListItem person={item} />;
  };

  const listEmpty = () => {
    return (
      <View style={styles.emptyContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color="grey" />
        ) : (
          <Text style={styles.emptyText}>No results found.</Text>
        )}
      </View>
    );
  };

  const listFooter = () => {
    return (
      <View style={styles.footerContainer}>
        {isLoading && <ActivityIndicator size="small" color="grey" />}
        {!isLoading && !!data.length && <Text>{getVisibleItemsRange()}</Text>}
        <View style={{flexDirection: 'row', gap: 5}}>
          <TouchableOpacity
            disabled={isGoPrevPageBtnDisabled}
            style={[{padding: 10}, isGoPrevPageBtnDisabled && {opacity: 0.5}]}
            onPress={showPrevPage}>
            <ArrowLeftIcon width={26} height={26} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[{padding: 10}, isGoNextPageBtnDisabled && {opacity: 0.5}]}
            onPress={showNextPage}
            disabled={isGoNextPageBtnDisabled}>
            <ArrowRightIcon width={26} height={26} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={true}
        bounces={false}
        nestedScrollEnabled>
        <FlatList
          data={data}
          renderItem={({item}) => renderItem(item)}
          keyExtractor={item => item.url}
          contentContainerStyle={styles.contentContainer}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListHeaderComponent={listHeader}
          ListEmptyComponent={listEmpty}
          ListFooterComponent={listFooter}
          bounces={false}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  favIconContainer: {
    width: 70,
    paddingLeft: 20,
  },
  contentContainer: {
    borderColor: 'grey',
    borderWidth: 1,
  },
  footerContainer: {
    borderTopWidth: 1,
    borderTopColor: 'grey',
    flexDirection: 'row',
    gap: 20,
    paddingRight: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 50,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: 'grey',
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
  emptyContainer: {
    height: 100,
    justifyContent: 'center',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
});
