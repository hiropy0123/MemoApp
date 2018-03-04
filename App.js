import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.apptitle}>MEMOT</Text>
        </View>
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
        <View style={styles.addButtom}>
          <Text style={styles.addButtomText}>+</Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  header: {
    backgroundColor: '#1A477C',
    paddingTop: 50,
    paddingBottom: 10,
    marginBottom: 5,
    shadowColor: 'rgb(100, 100, 100)',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  apptitle: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '700',
  },
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
  addButtom: {
    width: 70,
    height: 70,
    backgroundColor: '#E93664',
    position: 'absolute',
    bottom: 25,
    right: 25,
    borderRadius: 35,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 30,
    shadowColor: 'rgb(100, 100, 100)',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  addButtomText: {
    fontSize: 35,
    lineHeight: 35,
    color: '#fff',
  },
});
