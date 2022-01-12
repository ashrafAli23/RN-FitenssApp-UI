import React, {useMemo} from 'react';
import {Text, View} from 'react-native';
import createStyles from './styles';

const DateScreen = ({navigation}) => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.body}>
      <Text style={styles.text}>DateScreen</Text>
    </View>
  );
};

export default DateScreen;
