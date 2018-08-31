import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Dimensions
} from 'react-native';

const width = Dimensions.get('window').width;

export const NumberButtons = ({ onBtnPress, buttons, theme, themeColor }) => {
  _styledButtons = (rowIndex, colIndex) => {
    if (rowIndex === 0 && colIndex === 3) return styles.numeralStyle;
    if (rowIndex === 1 && colIndex === 3) return styles.numeralStyle;
    if (rowIndex === 2 && colIndex === 3) return styles.numeralStyle;
    if (rowIndex === 3 && colIndex === 3) return styles.numeralStyle;
    if (rowIndex === 4 && colIndex === 3) return styles.numeralStyle;

    if (rowIndex === 4 && colIndex === 2) return styles.equallyStyle;

    if (rowIndex === 0 && colIndex === 0) return styles.actionStyle;
    if (rowIndex === 0 && colIndex === 1) return styles.actionStyle;
    if (rowIndex === 0 && colIndex === 2) return styles.actionStyle;
  };

  return (
    <View style={styles.container}>
      {buttons.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.contRow}>
          {row.map((col, colIndex) => (
            <TouchableOpacity key={colIndex} onPress={() => onBtnPress(col)}>
              <View
                style={[
                  styles.contButton,
                  { borderColor: themeColor === 'light' ? '#ecf0f1' : null },
                  themeColor === 'light'
                    ? this._styledButtons(rowIndex, colIndex)
                    : null
                ]}
              >
                <Text
                  style={[
                    styles.txtDefault,
                    {
                      color: theme.primaryColorTxt
                    }
                  ]}
                >
                  {col}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  txtDefault: {
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
    borderWidth: 0.5
  },
  actionStyle: {
    backgroundColor: '#F2F2F2',
    borderColor: '#ffff'
  },
  equallyStyle: {
    backgroundColor: '#FECBCC'
  },
  numeralStyle: {
    backgroundColor: '#D7E4F5'
  }
});
