import React, {useMemo} from 'react';
import {Text, View} from 'react-native';
import createStyles from './styles';

const SuccessScreen = ({navigation}) => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.body}>
      <Text style={styles.text}>SuccessScreen</Text>
    </View>
  );
};

export default SuccessScreen;
