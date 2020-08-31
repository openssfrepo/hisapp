import React, {Component} from 'react';
import {
  View,
  Alert,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
//import { Card, Button, Icon } from 'react-native-elements'
import {Card} from '../Custom/Card';
export default class RequestService extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View>
            <Card>
              <View>
                <Text style={styles.title}>Halal Info & Certificate</Text>
                <Text>
                  Islam teaches us that Halal Food is an important part of our
                  life
                </Text>
                <View style={styles.fixToText}>
                  <Button
                    title="Apply Now"
                    onPress={() => Alert.alert('Apply Now button pressed')}
                  />
                  <Button
                    title="See Details"
                    onPress={() => Alert.alert('See Details button pressed')}
                  />
                </View>
              </View>
            </Card>
            <Card>
              <View>
                <Text style={styles.title}>New Muslim Certificate</Text>
                <Text>
                  Taking the shahada, profession of the Islamic faith, is one of
                  the biggest decisions
                </Text>
                <View style={styles.fixToText}>
                  <Button
                    title="Apply Now"
                    onPress={() => Alert.alert('Apply Now button pressed')}
                  />
                  <Button
                    title="See Details"
                    onPress={() => Alert.alert('See Details button pressed')}
                  />
                </View>
              </View>
            </Card>
            <Card>
              <View>
                <Text style={styles.title}>Islamic Marriage Ceremony</Text>
                <Text>
                  Islam teaches us that marriage is an important part of our
                  life
                </Text>
                <View style={styles.fixToText}>
                  <Button
                    title="Apply Now"
                    onPress={() => Alert.alert('Apply Now button pressed')}
                  />
                  <Button
                    title="See Details"
                    onPress={() => Alert.alert('See Details button pressed')}
                  />
                </View>
              </View>
            </Card>
            <Card>
              <View>
                <Text style={styles.title}>Burial Assistance</Text>
                <Text>
                  Funeral Arrangements “To Allah we belong and to Him is our
                  return. “
                </Text>
                <View style={styles.fixToText}>
                  <Button
                    title="Apply Now"
                    onPress={() => Alert.alert('Apply Now button pressed')}
                  />
                  <Button
                    title="See Details"
                    onPress={() => Alert.alert('See Details button pressed')}
                  />
                </View>
              </View>
            </Card>
            <Card>
              <View>
                <Text style={styles.title}>Visit Mosque</Text>
                <Text>
                  Islam teaches us that Prayer in the mosque is an important
                  part of our life
                </Text>
                <View style={styles.fixToText}>
                  <Button
                    title="Apply Now"
                    onPress={() => Alert.alert('Apply Now button pressed')}
                  />
                  <Button
                    title="See Details"
                    onPress={() => Alert.alert('See Details button pressed')}
                  />
                </View>
              </View>
            </Card>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    color: 'white',
    padding:5,
    fontSize: 20,
    backgroundColor: 'green',
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
