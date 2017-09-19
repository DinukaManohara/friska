import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import { Circle } from 'react-native-progress';

const screen = Dimensions.get('window');
//const BUTTON_HEIGHT = (screen.height-106)/5;
const BUTTON_WIDTH = (screen.width-30)/2;
const BOTTOM_BUTTON_HEIGHT = screen.height-(110+2*BUTTON_WIDTH);
const FULL_CURVE = BUTTON_WIDTH/2

export default class Health extends Component {

  render() {
    return(
      <View style={styles.container}>

        <View elevation={15} style={
          [styles.buttonContainer,
          {
            top: 10,
            left: 10,
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 32,
            borderTopRightRadius: 32,
            borderTopLeftRadius: 32,
          },]
        }>
          <TouchableOpacity style={ styles.button } >
            <Text style={ {color: 'rgb(179, 179, 179)', fontSize: 45,} }>74</Text>
            <Text style={ {position: 'absolute', top: 105, color: 'rgb(179, 179, 179)', fontSize: 14,} }>BPM</Text>
          </TouchableOpacity>
        </View>

        <View elevation={15} style={
          [styles.buttonContainer,
          {
            top: 10,
            right: 10,
            borderBottomRightRadius: 32,
            borderBottomLeftRadius: 0,
            borderTopRightRadius: 32,
            borderTopLeftRadius: 32,
          },]
        }>
          <TouchableOpacity style={ styles.button } >
            <Text style={ {color: 'rgb(179, 179, 179)', fontSize: 45,} }>31</Text>
            <Text style={ {position: 'absolute', top: 105, color: 'rgb(179, 179, 179)', fontSize: 14,} }>Celcius</Text>
          </TouchableOpacity>
        </View>

        <View elevation={15} style={
          [styles.buttonContainer,
          {
            top: 20+BUTTON_WIDTH,
            left: 10,
            borderBottomRightRadius: 32,
            borderBottomLeftRadius: 32,
            borderTopRightRadius: 0,
            borderTopLeftRadius: 32,
          },]
        }>
          <TouchableOpacity style={ styles.button } >
            <Text style={ {color: 'rgb(179, 179, 179)', fontSize: 45,} }>38</Text>
            <Text style={ {position: 'absolute', top: 105, color: 'rgb(179, 179, 179)', fontSize: 14,} }>Percent</Text>
          </TouchableOpacity>
        </View>

        <View elevation={15} style={
          [styles.buttonContainer,
          {
            top: 20+BUTTON_WIDTH,
            right: 10,
            borderBottomRightRadius: 32,
            borderBottomLeftRadius: 32,
            borderTopRightRadius: 32,
            borderTopLeftRadius: 0,
          },]
        }>
          <TouchableOpacity style={ styles.button } >
            <Text style={ {color: 'rgb(179, 179, 179)', fontSize: 45,} }>32</Text>
            <Text style={ {position: 'absolute', top: 105, color: 'rgb(179, 179, 179)', fontSize: 14,} }>Celcius</Text>
          </TouchableOpacity>
        </View>

        <Circle
          style={ {position: 'absolute', top: 30+2*BUTTON_WIDTH,} }
          size={BOTTOM_BUTTON_HEIGHT}
          progress={0.65}
          showsText={true}
          thickness={10}
          color={'rgb(26, 26, 26)'}
          boderColor={'rgb(26, 26, 26)'}
          borderWidth={0.5}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  button: {
    flex: 1,
    backgroundColor: 'transparent',
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
    backgroundColor: 'rgb(26, 26, 26)',
  },
});
