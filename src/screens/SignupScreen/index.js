import React, {useMemo} from 'react';
import {Text, View} from 'react-native';
import createStyles from './styles';

const SignupScreen = ({navigation}) => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.body}>
      <Text style={styles.text}>SignupScreen</Text>
    </View>
  );
};

export default SignupScreen;
