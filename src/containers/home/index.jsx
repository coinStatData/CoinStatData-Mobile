import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const navigate = () => {
    navigation.navigate('');
  }
  return (
    <>
      <Text>hello world!</Text>
      <View>
        <Button
          onPress={navigate}
          title="navigate"
        />
      </View>
      <StatusBar style="auto" />
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "#00BFFF",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#FFD700c0"
  },
  button: {
    color: "#00BFFF",
  }
});

export default HomeScreen;
