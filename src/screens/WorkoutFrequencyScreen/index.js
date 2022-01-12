import React, {useMemo} from 'react';
import {Text, View} from 'react-native';
import createStyles from './styles';

const WorkoutFrequencyScreen = ({navigation}) => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.body}>
      <Text style={styles.text}>WorkoutFrequencyScreen</Text>
    </View>
  );
};

export default WorkoutFrequencyScreen;
