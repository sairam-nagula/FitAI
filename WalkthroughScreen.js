import React from "react";
import { View, Image, Text, useColorScheme, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import AppIntroSlider from "react-native-app-intro-slider";
import { useFonts, JosefinSans_400Regular } from '@expo-google-fonts/josefin-sans';
import AppLoading from 'expo-app-loading';
import { useNavigation } from '@react-navigation/native';

const WalkthroughScreen = ({ route }) => {
  const { appConfig, appStyles } = route?.params || {};
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(appStyles, colorScheme);

  const slides = [
    {
      key: '1',
      title: 'Welcome to FitAI',
      text: 'Your AI-powered fitness companion.',
      image: require('./images/welcome.png'),
    },
    {
      key: '2',
      title: 'Personalized Workouts',
      text: 'Get workout plans tailored just for you.',
      image: require('./images/workout.png'),
    },
    {
      key: '3',
      title: 'AI Chat Coach',
      text: 'Chat with your virtual coach anytime.',
      image: require('./images/chat_coach.png'),
    }
  ];

  const navigation = useNavigation();

  const _renderItem = ({ item, dimensions, index }) => (
    <View style={[styles.container, dimensions]}>
      <Image
        style={styles.image}
        source={item.image}
        size={100}
        color="white"
      />
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
      {index === slides.length - 1 && (
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  const [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <AppIntroSlider
      data={slides}
      renderItem={_renderItem}
      showSkipButton={true}
      showDoneButton={true}
      showNextButton={true}
      dotStyle={styles.dotStyle}
      activeDotStyle={styles.activeDotStyle}
      skipLabel="Skip"
      nextLabel="Next"
      doneLabel="Done"
    />
  );
};

WalkthroughScreen.propTypes = {
  appStyles: PropTypes.object,
  appConfig: PropTypes.object,
};

export default WalkthroughScreen;

import { StyleSheet } from 'react-native';

const dynamicStyles = (appStyles, colorScheme) => {
  return StyleSheet.create({
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingBottom: 25,
      color: '#2E86AB',
      fontFamily: 'JosefinSans_400Regular',
    },
    text: {
      fontSize: 20,
      textAlign: 'center',
      color: '#2E86AB',
      paddingLeft: 10,
      paddingRight: 10,
      fontFamily: 'JosefinSans_400Regular',
    },
    image: {
      width: 150,
      height: 150,
      marginBottom: 40,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "#F0F8FF",
    },
    dotStyle: {
      backgroundColor: '#2E86AB',
      width: 10,
      height: 10,
      borderRadius: 5,
      margin: 3,
    },
    activeDotStyle: {
      backgroundColor: '#F0F8FF',
      width: 10,
      height: 10,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#2E86AB',
      margin: 3,
    },
    getStartedButton: {
      marginTop: 50,
      paddingVertical: 12,
      paddingHorizontal: 30,
      borderRadius: 5,
      backgroundColor: '#2E86AB',
    },
    buttonText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff',
      fontFamily: 'JosefinSans_400Regular',
    },
  });
};
