import React, {useMemo} from 'react';
import {Pressable, Text} from 'react-native';
import {Colors} from '../../constants/colors';
import createStyles from './styles';

const Button = ({title, onPress, disabled, buttonStyle, textStyle}) => {
  const styles = useMemo(() => createStyles(), []);

  return (
    <Pressable
      style={[
        styles.button,
        {
          backgroundColor: disabled ? Colors.GREY : Colors.ORANGE,
        },
        buttonStyle,
      ]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  );
};

export default Button;
