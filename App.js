import React from 'react';
import {StatusBar, View} from 'react-native';
import Screens from './src/navigation';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent={true}
      />
      <Screens />
    </View>
  );
};

export default App;
