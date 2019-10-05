import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';

function Home(props) {
  return (
    <View style={styles.container}>
      <Text>首頁</Text>
    </View>
  );
}

function Following() {
  return (
    <View style={styles.container}>
      <Text>追蹤</Text>
    </View>
  );
}

function Notification() {
  return (
    <View style={styles.container}>
      <Text>通知</Text>
    </View>
  );
}

function Other() {
  return (
    <View style={styles.container}>
      <Text>其他</Text>
    </View>
  );
}

const AppNavigator = createBottomTabNavigator(
  {
    '首頁': Home,
    '追蹤': Following,
    '通知': Notification,
    '其他': Other,
  }, {
    initialRouteName: '首頁',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return <AppContainer />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
