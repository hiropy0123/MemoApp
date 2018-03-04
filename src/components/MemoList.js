import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class MemoList extends React.Component {
  render() {
    return (
      <View style={styles.memoList}>
        <View style={styles.memoListItem}>
          <Text style={styles.itemTitle}>タイトル</Text>
          <Text style={styles.itemMetaDate}>2018/01/01</Text>
        </View>
        <View style={styles.memoListItem}>
          <Text style={styles.itemTitle}>タイトル</Text>
          <Text style={styles.itemMetaDate}>2018/01/01</Text>
        </View>
        <View style={styles.memoListItem}>
          <Text style={styles.itemTitle}>タイトル</Text>
          <Text style={styles.itemMetaDate}>2018/01/01</Text>
        </View>
        <View style={styles.memoListItem}>
          <Text style={styles.itemTitle}>タイトル</Text>
          <Text style={styles.itemMetaDate}>2018/01/01</Text>
        </View>
        <View style={styles.memoListItem}>
          <Text style={styles.itemTitle}>タイトル</Text>
          <Text style={styles.itemMetaDate}>2018/01/01</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  memoList: {
    padding: 0,
    margin: 0,
  },
  memoListItem: {
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#dedede',
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 20,
    paddingRight: 20,
  },
  itemTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#555',
    marginBottom: 7,
  },
  itemMetaDate: {
    color: '#aaa',
    fontSize: 13,
  },
});

export default MemoList;
