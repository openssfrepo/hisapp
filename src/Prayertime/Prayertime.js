import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';
//import { Card, Button, Icon } from 'react-native-elements'
import {Card} from '../Custom/Card';
import {Col, Row, Grid} from 'react-native-easy-grid';
import HisApi from '../Common/HisApi';
export default class Prayertime extends Component {
  constructor() {
    super();
    this.state = {
      _prayerInfo: [],
    };
  }
  componentDidMount() {
    HisApi.getPrayerInfo('2020/12/27').then(response =>{
      this.setState({
        _prayerInfo: response.results[0],
      });
    });
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
                        <Text></Text>
                      </Col>
                      <Col style={styles.colStyle}>
                        <Text>{this.state._prayerInfo.shehriStart}</Text>
                      </Col>
                      <Col style={styles.colStyle}>
                        <Text>{this.state._prayerInfo.shehriFinish}</Text>
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
                        <Text>{this.state._prayerInfo.sunrise}</Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col style={styles.colStyle}>
                        <Text>Iftar</Text>
                      </Col>
                      <Col style={styles.colStyle}>
                        <Text>{this.state._prayerInfo.iftarStart}</Text>
                      </Col>
                      <Col style={styles.colStyle}>
                        <Text>{this.state._prayerInfo.iftarFinish}</Text>
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
                        <Text>{this.state._prayerInfo.sunset}</Text>
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
                        <Text>{this.state._prayerInfo.fajrAzan}</Text>
                      </Col>
                      <Col style={styles.colStyle}>
                        <Text>{this.state._prayerInfo.fajrIqamah}</Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col style={styles.colStyle}>
                        <Text>Dhuhr</Text>
                      </Col>
                      <Col style={styles.colStyle}>
                        <Text>{this.state._prayerInfo.dhuhrAzan}</Text>
                      </Col>
                      <Col style={styles.colStyle}>
                        <Text>{this.state._prayerInfo.dhuhrIqamah}</Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col style={styles.colStyle}>
                        <Text>Asr</Text>
                      </Col>
                      <Col style={styles.colStyle}>
                        <Text>{this.state._prayerInfo.asrAzan}</Text>
                      </Col>
                      <Col style={styles.colStyle}>
                        <Text>{this.state._prayerInfo.asrIqamah}</Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col style={styles.colStyle}>
                        <Text>Magrib</Text>
                      </Col>
                      <Col style={styles.colStyle}>
                        <Text>{this.state._prayerInfo.magribAzan}</Text>
                      </Col>
                      <Col style={styles.colStyle}>
                        <Text>{this.state._prayerInfo.magribIqamah}</Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col style={styles.colStyle}>
                        <Text>Isha</Text>
                      </Col>
                      <Col style={styles.colStyle}>
                        <Text>{this.state._prayerInfo.ishaAzan}</Text>
                      </Col>
                      <Col style={styles.colStyle}>
                        <Text>{this.state._prayerInfo.ishaIqamah}</Text>
                      </Col>
                    </Row>
                  </Col>
                </Grid>
                {()=>{if(this.state._prayerInfo.jummahFlg === "1"){
                  <Text>flg test</Text>
                }}}
                <Grid>
                  <Col>
                    <Text style={styles.title}>Jummah Time</Text>
                    <View style={styles.lineStyle} />
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
                        <Text>Azan</Text>
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
                        <Text>{this.state._prayerInfo.jummahAzan}</Text>
                      </Col>
                    </Row>
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
                        <Text>{this.state._prayerInfo.jummahKhuthbhaFirst}</Text>
                      </Col>
                      <Col style={styles.colStyle}>
                        <Text>{this.state._prayerInfo.jummahIqamahFirst}</Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col style={styles.colStyle}>
                        <Text>Jummah (2)</Text>
                      </Col>
                      <Col style={styles.colStyle}>
                        <Text>{this.state._prayerInfo.jummahKhuthbhaSecond}</Text>
                      </Col>
                      <Col style={styles.colStyle}>
                        <Text>{this.state._prayerInfo.jummahIqamahSecond}</Text>
                      </Col>
                    </Row>
                  </Col>
                </Grid>
                <View style={styles.lineStyle} />
                <Button
                  title="Edit"
                  onPress={() =>
                    this.props.navigation.navigate('EditPrayertime')
                  }
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
