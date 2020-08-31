import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = props => {
  let shadowStyle = {
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
  };
  if (props.noShadow) {
    shadowStyle = {};
  }
  return (
      <View style={[styles.containerStyle, props.style, shadowStyle]}>
        {props.children}
      </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    padding: 10,
    margin: 5,
    marginHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 3,
  },
});

export {Card};
