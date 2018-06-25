import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Dimensions
} from 'react-native';

const width = Dimensions.get('window').width;

export default class NumberButtons extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  _handleOnPress = value => {
    requestAnimationFrame(() => {
      this.props.onBtnPress(value);
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.props.buttons.map((row, index) => (
          <View key={index} style={styles.contRow}>
            {row.map((col, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => this._handleOnPress(col)}
              >
                <View style={styles.contButton}>
                  <Text style={styles.txtDefault}>{col}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  txtDefault: {
    color: '#000',
    fontFamily: 'Helvetica-Light',
    fontSize: 20
  },
  contRow: {
    flex: 1,
    flexDirection: 'row'
  },
  contButton: {
    flex: 1,
    ...Platform.select({
      ios: {
        width: width / 4
      }
    }),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#ecf0f1'
  }
});
