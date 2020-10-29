import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useRef,useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
export default function App() {
  // const notificationListener = useRef();
  // const responseListener = useRef();
  
  // const [notification, setNotification] = useState(false);
  useEffect(() => {
    registerForPushNotification().then(token=>console.log(token));
    // notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
    //   console.log(notification);
    // });
    // responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
    //   console.log(response);
    // });
    // return () => {
    //   cleanup
    // }
  }, [])

  async function registerForPushNotification(){
    const {status} = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    if (status != 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      // finalStatus = status;
    }
    if (status !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    return token
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
