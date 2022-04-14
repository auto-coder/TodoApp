import {View, Text} from 'react-native';
import React from 'react';
import styles from './header.style';

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Yapılacaklar</Text>
      <Text style={styles.counter}>{props.counter}</Text>
    </View>
  );
};

export default Header;
