import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo';
import fontAwesome from '../../assets/fonts/fa-solid-900.ttf';

class CircleButton extends React.Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      FontAwesome: fontAwesome,
    });
    this.state({ fontLoaded: true });
  }

  render() {
    const { style, color } = this.props;
    let bgColor = '#E31676';
    let textColor = '#FFF';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#E31676';
    }

    return (
      <View style={[styles.circleButtom, style, { backgroundColor: bgColor }]}>
        {
          this.state.fontLoaded ? (
            <Text style={[styles.circleButtomText, { color: textColor }]}>
              {this.props.children}
            </Text>
          ) : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circleButtom: {
    width: 70,
    height: 70,
    position: 'absolute',
    bottom: 25,
    right: 25,
    borderRadius: 35,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 30,
    shadowColor: 'rgb(100, 100, 100)',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  circleButtomText: {
    fontFamily: 'FontAwesome',
    fontSize: 35,
    lineHeight: 35,
  },
});

export default CircleButton;
