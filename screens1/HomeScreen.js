import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../config';


export default class HomeScreen extends React.Component {
  
  //Neeti Buttons
  neetiAbsentPressed(){
  var neetiAbsent = db.ref('Neeti/' + '/')
  neetiAbsent.update({
    'absent': 'true'
  })}
  
  neetiPresentPressed(){
  var neetiPresent = db.ref('Neeti/' + '/')
  neetiPresent.update({
    'present': 'true'
  })}

  //Dhiya Buttons
  dhiyaAbsentPressed(){
  var dhiyaAbsent = db.ref('Dhiya/' + '/')
  dhiyaAbsent.update({
    'absent': 'true'
  })}

  dhiyaPresentPressed(){
  var dhiyaPresent = db.ref('Dhiya/' + '/')
  dhiyaPresent.update({
    'present': 'true'
  })}

  //Aryaanshi Buttons
  aryaanshiAbsentPressed(){
  var aryaanshiAbsent = db.ref('Aryaanshi/' + '/')
  aryaanshiAbsent.update({
    'absent': 'true'
  })}

  aryaanshiPresentPressed(){
  var aryaanshiPresent = db.ref('Aryaanshi/' + '/')
  aryaanshiPresent.update({
    'present': 'true'
  })}

  //Siya Buttons
  siyaAbsentPressed(){
  var siyaAbsent = db.ref('Siya/' + '/')
  siyaAbsent.update({
    'absent': 'true'
  })}

  siyaPresentPressed(){
  var siyaPresent = db.ref('Siya/' + '/')
  siyaPresent.update({
    'present': 'true'
  })}

  //Code to go to Buzzer Screen
  goToBuzzerScreen = (buzzercolor) => {
    this.props.navigation.navigate('BuzzerScreen', { color: buzzercolor });
  };
  
  //Code for Buttons
  render() {
    return (
      <View>

        <AppHeader />
        <Text style={styles.studenChartContainer}>Neeti</Text>
        <Text style={styles.studenChartContainer}>Dhiya</Text>
        <Text style={styles.studenChartContainer}>Aryaanshi</Text>
        <Text style={styles.studenChartContainer}>Siya</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.neetiAbsentPressed();
        }}>
        <Text style={styles.buttonText}>Absent</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button }
          onPress={() => {
            this.dhiyaAbsentPressed();
          }}>
          <Text style={styles.buttonText}>Absent</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
               this.aryaanshiAbsentPressed();
          }}>
          <Text style={styles.buttonText}>Absent</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
             this.siyaAbsentPressed();
          }}>
          <Text style={styles.buttonText}>Absent</Text>
        </TouchableOpacity>
           <TouchableOpacity
          style={styles.button2}
          onPress={() => {
           this.neetiPresentPressed();
          }}>
          <Text style={styles.button2Text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
             this.dhiyaPresentPressed();
          }}>
          <Text style={styles.button2Text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
              this.aryaanshiPresentPressed();
          }}>
          <Text style={styles.button2Text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
              this.siyaPresentPressed();
          }}>
          <Text style={styles.button2Text}>Present</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button3}
          onPress={() => {
            this.goToBuzzerScreen('yellow');
          }}>
          <Text style={styles.button3Text}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
  },

  studenChartContainer: {
     flexDirection: 'row',
     padding: 10,
     alignItems: 'center',
     margin: 2
  },

  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 5,
    marginTop: -41,
    marginBottom: -28,
    marginLeft: 200,
    width: 100,
    height: 30,
    backgroundColor: 'red'
  },

  buttonText: {
    textAlign: 'center',
    color: 'white',
  },

  button2: {
    justifyContent: 'center',
    alignSelf: 'left',
    borderWidth: 2,
    borderRadius: 5,
    marginTop: -1,
    marginBottom: 10,
    marginLeft: 100,
    width: 100,
    height: 30,
    backgroundColor: 'green'
  },

  button2Text: {
    textAlign: 'center',
    color: 'white',
  },

  button3: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 30,
    marginLeft: 40,
    width: 200,
    height: 50,
    backgroundColor: '#89c0c2',
  },

   button3Text: {
   textAlign: 'center',
   color: 'white',
  },
});