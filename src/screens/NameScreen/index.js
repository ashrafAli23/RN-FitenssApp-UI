import React, {useMemo} from 'react';
import {Text, View} from 'react-native';
import createStyles from './styles';

const NameScreen = ({navigation}) => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.body}>
      <Text style={styles.text}>NameScreen</Text>
    </View>
  );
};

export default NameScreen;
