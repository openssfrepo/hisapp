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
import {Card} from '../Custom/Card';
import {Col, Row, Grid} from 'react-native-easy-grid';
import DateTimePicker from 'react-native-modal-datetime-picker';
export default class EditPrayertime extends Component {
  state = {
    sehri_start: ['test'],
    sehri_end: '',
    isDateTimePickerVisible: false,
  };
  _showDateTimePicker = () => this.setState({isDateTimePickerVisible: true});

  _hideDateTimePicker = () => this.setState({isDateTimePickerVisible: false});
  _handleTimePicked = time => {
    this.setState({sehri_start: time.toString()})
    console.log('A date has been picked: ', time.toString());
    this._hideDateTimePicker();
  };
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
                        <Text>03:10 AM</Text>
                      </Col>
                      <Col style={styles.colStyle}>
                        <Text>04:00 AM</Text>
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
                        <Text>04:10 AM</Text>
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
                <View style={{flex: 1}}>
                  <TouchableOpacity onPress={this._showDateTimePicker}>
                    <Text>{this.state.sehri_start}</Text>
                  </TouchableOpacity>
                  <DateTimePicker
                  date={new Date().getTime}
                    mode={'time'}
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleTimePicked}
                    onCancel={this._hideDateTimePicker}
                  />
                </View>
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
