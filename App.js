import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import * as Firebase from 'firebase';
import {db} from './db';

const App = () => {
  useEffect(()=>{
    db.ref('/users').on('value', querySnapShot => {
      let data = querySnapShot.val() ? querySnapShot.val() : {};
      let todoItems = {...data};
      console.log(querySnapShot, ' adasdasdasfgdsgsg')
    });

  },[])
  const addItems = ()=>{
    // db.ref('/users').child('2').set({
    //   email:"12ahsanali34@gmail.com",
    //   fname: "ahsan",
    //   lname: "ali",
    // });
    // Firebase.auth()
    // .createUserWithEmailAndPassword("12ahsanali34@gmail.com", "123456")
    // .then((res) => console.log(res))
    // .catch(error => console.log(error))

    Firebase.auth()
    .signInWithEmailAndPassword("12ahsanali34@gmail.com", "123456")
    .then((res) => console.log(res))
    .catch(error => alert(error))
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Text>ahsan</Text>
          <Button title="click" onPress={addItems}></Button>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
