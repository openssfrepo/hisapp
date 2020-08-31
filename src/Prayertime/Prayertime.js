import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
//import { Card, Button, Icon } from 'react-native-elements'
import {Card} from '../Custom/Card';
import {Col, Row, Grid} from 'react-native-easy-grid';
export default class Prayertime extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <ImageBackground
        source={require('../Assests/Images/hisback.jpg')}
        style={{width: '100%', height: '100%'}}>
        <SafeAreaView>
          <ScrollView>
            <View>
              <Text style={styles.headertitle}>Saturday, 29 August 2020</Text>
              <Card>
                <Grid>
                  <Col>
                    <Text style={styles.title}>Seyam Time</Text>
                    <View style={styles.lineStyle} />
                    <Row>
                      <Col style={styles.colStyle}>
                        <Text />
                      </Col>
                      <Col style={styles.colStyle}>
                        <Text>Start time</Text>
                      </Col>
                      <Col style={styles.colStyle}>
                        <Text>finish time</Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col style={styles.colStyle}>
                        <Text>Shehri</Text>
                      </Col>
                      <Col style={styles.colStyle}>
                        <Text>3</Text>
                      </Col>
                      <Col style={styles.colStyle}>
                        <Text>4</Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        style={{
                          alignItems: 'center',
                          borderWidth: 0.5,
                          borderColor: 'black',
                          margin: 0,
                          padding: 5,
                          width: '33.3%',
                        }}>
                        <Text>Sunrise</Text>
                      </Col>
                      <Col
                        style={{
                          alignItems: 'center',
                          borderWidth: 0.5,
                          borderColor: 'black',
                          margin: 0,
                          padding: 5,
                          width: '66.7%',
                        }}>
                        <Text>3</Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col style={styles.colStyle}>
                        <Text>Iftar</Text>
                      </Col>
                      <Col style={styles.colStyle}>
                        <Text>3</Text>
                      </Col>
                      <Col style={styles.colStyle}>
                        <Text>4</Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        style={{
                          alignItems: 'center',
                          borderWidth: 0.5,
                          borderColor: 'black',
                          margin: 0,
                          padding: 5,
                          width: '33.3%',
                        }}>
                        <Text>Sunset</Text>
                      </Col>
                      <Col
                        style={{
                          alignItems: 'center',
                          borderWidth: 0.5,
                          borderColor: 'black',
                          margin: 0,
                          padding: 5,
                          width: '66.7%',
                        }}>
                        <Text>3</Text>
                      </Col>
                    </Row>
                  </Col>
                </Grid>
                <Grid>
                  <Col>
                    <Text style={styles.title}>Regular Salat Time</Text>
                    <View style={styles.lineStyle} />
                    <Row>
                      <Col style={styles.colStyle}>
                        <Text />
                      </Col>
                      <Col style={styles.colStyle}>
                        <Text>Azan</Text>
                      </Col>
                      <Col style={styles.colStyle}>
                        <Text>Iqamah</Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col style={styles.colStyle}>
                        <Text>Fajr</Text>
                      </Col>
                      <Col style={styles.colStyle}>
                        <Text>3</Text>
                      </Col>
                      <Col style={styles.colStyle}>
                        <Text>4</Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col style={styles.colStyle}>
                        <Text>Dhuhr</Text>
                      </Col>
                      <Col style={styles.colStyle}>
                        <Text>3</Text>
                      </Col>
                      <Col style={styles.colStyle}>
                        <Text>4</Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col style={styles.colStyle}>
                        <Text>Asr</Text>
                      </Col>
                      <Col style={styles.colStyle}>
                        <Text>3</Text>
                      </Col>
                      <Col style={styles.colStyle}>
                        <Text>4</Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col style={styles.colStyle}>
                        <Text>Magrib</Text>
                      </Col>
                      <Col style={styles.colStyle}>
                        <Text>3</Text>
                      </Col>
                      <Col style={styles.colStyle}>
                        <Text>4</Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col style={styles.colStyle}>
                        <Text>Isha</Text>
                      </Col>
                      <Col style={styles.colStyle}>
                        <Text>3</Text>
                      </Col>
                      <Col style={styles.colStyle}>
                        <Text>4</Text>
                      </Col>
                    </Row>
                  </Col>
                </Grid>
                <Grid>
                  <Col>
                    <Text style={styles.title}>Jummah Time</Text>
                    <View style={styles.lineStyle} />
                    <Row>
                      <Col style={styles.colStyle}>
                        <Text />
                      </Col>
                      <Col style={styles.colStyle}>
                        <Text>Khutbah</Text>
                      </Col>
                      <Col style={styles.colStyle}>
                        <Text>Iqamah</Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col style={styles.colStyle}>
                        <Text>Jummah (1)</Text>
                      </Col>
                      <Col style={styles.colStyle}>
                        <Text>3</Text>
                      </Col>
                      <Col style={styles.colStyle}>
                        <Text>4</Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col style={styles.colStyle}>
                        <Text>Jummah (2)</Text>
                      </Col>
                      <Col style={styles.colStyle}>
                        <Text>3</Text>
                      </Col>
                      <Col style={styles.colStyle}>
                        <Text>4</Text>
                      </Col>
                    </Row>
                  </Col>
                </Grid>
                <View style={styles.lineStyle} />
                <Button
                  title="Edit"
                  onPress={() => this.props.navigation.navigate('EditPrayertime')}
                />
              </Card>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  headertitle: {
    color: 'white',
    padding: 5,
    fontSize: 20,
    backgroundColor: 'darkcyan',
    textAlign: 'center',
    marginVertical: 0,
  },
  title: {
    color: 'white',
    padding: 5,
    fontSize: 20,
    backgroundColor: 'darkcyan',
    textAlign: 'center',
    marginVertical: 8,
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: 'black',
    marginTop: 5,
    marginBottom: 5,
  },
  colStyle: {
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: 'black',
    margin: 0,
    padding: 5,
  },
});
