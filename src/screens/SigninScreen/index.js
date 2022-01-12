import React, {useMemo} from 'react';
import {Text, View} from 'react-native';
import createStyles from './styles';

const SigninScreen = ({navigation}) => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.body}>
      <Text style={styles.text}>SigninScreen</Text>
    </View>
  );
};

export default SigninScreen;
