import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

const screen = Dimensions.get('window');
//const BUTTON_HEIGHT = (screen.height-106)/5;
const BUTTON_WIDTH = (screen.width-25)/2;
const FULL_CURVE = BUTTON_WIDTH/2
/*const BUTTONS = [
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
];*/

export default class Health extends Component {
  /*renderButtons() {
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
  }*/

  render() {
    return(
      <View style={styles.container}>

        <View style={
          [styles.buttonContainer,
          {
            top: 25,
            left: 10,
          },]
        }>
          <TouchableOpacity
            style={[styles.button,
            {
              borderBottomRightRadius: 0,
              borderBottomLeftRadius: 32,
              borderTopRightRadius: 32,
              borderTopLeftRadius: 32,
            },]
          }>
            <Text style={ {color: 'rgb(179, 179, 179)', fontSize: 45,} }>74</Text>
            <Text style={ {position: 'absolute', top: 105, color: 'rgb(179, 179, 179)', fontSize: 14,} }>BPM</Text>
          </TouchableOpacity>
        </View>

        <View style={
          [styles.buttonContainer,
          {
            top: 25,
            right: 10,
          },]
        }>
          <TouchableOpacity
            style={[styles.button,
            {
              borderBottomRightRadius: 32,
              borderBottomLeftRadius: 0,
              borderTopRightRadius: 32,
              borderTopLeftRadius: 32,
            },]
          }>
            <Text style={ {position: 'absolute', color: 'rgb(179, 179, 179)', fontSize: 45,} }>31</Text>
            <Text style={ {position: 'absolute', top: 105, color: 'rgb(179, 179, 179)', fontSize: 14,} }>Celcius</Text>
          </TouchableOpacity>
        </View>

        <View style={
          [styles.buttonContainer,
          {
            top: 30+BUTTON_WIDTH,
            left: 10,
          },]
        }>
          <TouchableOpacity
            style={[styles.button,
            {
              borderBottomRightRadius: 32,
              borderBottomLeftRadius: 32,
              borderTopRightRadius: 0,
              borderTopLeftRadius: 32,
            },]
          }>
            <Text style={ {position: 'absolute', color: 'rgb(179, 179, 179)', fontSize: 45,} }>38</Text>
            <Text style={ {position: 'absolute', top: 105, color: 'rgb(179, 179, 179)', fontSize: 14,} }>Percent</Text>
          </TouchableOpacity>
        </View>

        <View style={
          [styles.buttonContainer,
          {
            top: 30+BUTTON_WIDTH,
            right: 10,
          },]
        }>
          <TouchableOpacity
            style={[styles.button,
            {
              borderBottomRightRadius: 32,
              borderBottomLeftRadius: 32,
              borderTopRightRadius: 32,
              borderTopLeftRadius: 0,
            },]
          }>
            <Text style={ {position: 'absolute', color: 'rgb(179, 179, 179)', fontSize: 45,} }>32</Text>
            <Text style={ {position: 'absolute', top: 105, color: 'rgb(179, 179, 179)', fontSize: 14,} }>Celcius</Text>
          </TouchableOpacity>
        </View>

        <View style={
          {
            position: 'absolute',
            bottom: 100,
            width: screen.width-20,
            height: 35,
            borderWidth: 1,
            borderColor: 'rgb(179, 179, 179)',
            backgroundColor: 'rgb(26, 26, 26)',
            borderRadius: 17.5,
          }
        }>
          <View style={
            {
              position: 'absolute',
              left: 0,
              width: (screen.width-20)*0.45,
              height: 33,
              backgroundColor: 'rgb(179, 179, 179)',
              borderRadius: 16.5,
            }
          }/>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgb(38, 38, 38)',
  },
  button: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'rgb(179, 179, 179)',
    backgroundColor: 'rgb(26, 26, 26)',
    width: BUTTON_WIDTH,
    height: BUTTON_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: BUTTON_WIDTH,
    height: BUTTON_WIDTH,
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: 'transparent',
  },
});
