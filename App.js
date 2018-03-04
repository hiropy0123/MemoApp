import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MemoList from './src/components/MemoList';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.apptitle}>MEMOT</Text>
        </View>

        <MemoList />

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
