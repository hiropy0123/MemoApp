import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import CircleButton from '../elements/CircleButton';

class MemoDetailScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.memoHeader}>
          <View style={styles.memoHeaderContent}>
            <Text style={styles.memoHeaderTitle}>講座のアイデア</Text>
            <Text style={styles.memoHeaderDate}>2018/02/26</Text>
          </View>
        </View>

        <View style={styles.memoContent}>
          <Text>
            学習メモのテキスト。本文。
          </Text>
        </View>

        <CircleButton color="white" style={styles.editButton}>
          {'\f303'}
        </CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  memoHeader: {
    height: 100,
    backgroundColor: '#17313C',
    justifyContent: 'center',
    padding: 20,
    marginTop: -5,
    zIndex: 0,
  },
  memoHeaderTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFF',
    marginBottom: 5,
  },
  memoHeaderDate: {
    fontSize: 14,
    color: '#FFF',
  },
  editButton: {
    top: 60,
    bottom: 'auto',
  },
});

export default MemoDetailScreen;
