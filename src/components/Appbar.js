import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Appbar extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.apptitle}>MEMOT</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
});

export default Appbar;
