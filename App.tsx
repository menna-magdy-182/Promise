import React, {useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import WebView from 'react-native-webview';
const {height} = Dimensions.get('window');
const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? '#fff' : '#000',
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? '#fff' : '#000',
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};
const url = 'https://promise.com.sa/';
const App = () => {
  const [loading, setLoading] = useState(true);
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <WebView
        source={{uri: url}}
        onLoadStart={() => setLoading(true)}
        onLoad={() => {
          SplashScreen.hide();
          setLoading(false);
        }}
      />
      <ActivityIndicator
        color="#C4044C"
        animating={loading}
        style={{top: height * 0.5, alignSelf: 'center', position: 'absolute'}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
