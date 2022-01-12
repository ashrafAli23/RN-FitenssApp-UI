import React, {useMemo} from 'react';
import {Image, ImageBackground, Pressable, Text, View} from 'react-native';
import createStyles from './styles';
import {INITIAL_BACKGROUND, LOGO} from '../../assets';
import Button from '../../components/Button';

const InitialScreen = ({navigation}) => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.body}>
      <ImageBackground source={INITIAL_BACKGROUND} style={styles.background}>
        <Image source={LOGO} style={styles.logo} />
        <Text style={styles.text}>
          Make yourself stronger than your excuses
        </Text>
        <View style={styles.footer}>
          <Button
            title="Get Started"
            disabled={false}
            onPress={() => navigation.navigate('SignupScreen')}
          />
          <Pressable onPress={() => navigation.navigate('SigninScreen')}>
            <Text style={styles.loginText}>Or login</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default InitialScreen;
