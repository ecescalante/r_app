import React from 'react';
import { Platform, SafeAreaView, StyleSheet } from 'react-native';
import { RegForm } from './component/view/RegForm';

export default function App() {
  return (
      <SafeAreaView style={styles.container}>
        <RegForm />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop: Platform.OS = "android" ? 20 : 0,
    paddingLeft: 60,
    paddingRight: 60,
  },
});
