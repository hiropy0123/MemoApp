import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class CircleButton extends React.Component {
  render() {
    return (
      <View style={styles.circleButtom}>
        <Text style={styles.circleButtomText}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circleButtom: {
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
  circleButtomText: {
    fontSize: 35,
    lineHeight: 35,
    color: '#fff',
  },
});

export default CircleButton;
