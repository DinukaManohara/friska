import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

const screen = Dimensions.get('window');
const BUTTON_HEIGHT = (screen.height-106)/5;
const BUTTON_WIDTH = screen.width-20;
const BUTTONS = [
  {
    id: 1,
    text: 'HEART PULSE',
    top: 10,
    val: 74
  },
  {
    id: 2,
    text: 'BODY TEMP',
    top: BUTTON_HEIGHT + 20,
    val: 31+'•C'
  },
  {
    id: 3,
    text: 'SURROUNDING HUMIDITY',
    top: 2*BUTTON_HEIGHT + 30,
    val: '38%'
  },
  {
    id: 4,
    text: 'SURROUNDING TEMPERATURE',
    top: 3*BUTTON_HEIGHT + 40,
    val: 32+'•C'
  }
];

export default class Health extends Component {
  renderButtons() {
    return BUTTONS.map((buttonInfo) => {
      return(
        <View key={buttonInfo.id} style={[styles.buttonContainer, { top: buttonInfo.top },]}>
          <TouchableOpacity
            style={styles.button}
          >
            <Text style={ {position: 'absolute', color: 'rgb(128, 128, 128)', fontSize: 45,} }>{buttonInfo.val}</Text>
          </TouchableOpacity>
        </View>
      );
    });
  }

  render() {
    return(
      <View style={styles.container}>
        {this.renderButtons()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  button: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'rgb(128, 128, 128)',
    backgroundColor: 'black',
    borderRadius: 40,
    width: BUTTON_WIDTH,
    height: BUTTON_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    borderRadius: 40,
    width: BUTTON_WIDTH,
    height: BUTTON_HEIGHT,
    flexDirection: 'row',
    position: 'absolute',
    left: 10,
    backgroundColor: 'transparent',
  },
});
