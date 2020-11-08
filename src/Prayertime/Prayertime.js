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
export default class Prayertime extends Component {
  constructor() {
    super();
    this.state = {
      _prayerInfo: [],
    };
  }
  componentDidMount() {
    // var _response = HisApi.getPrayerInfo("2020/11/08");
    // console.log(_response);
    // this.setState({
    //   _prayerInfo: JSON.parse(_response.results)
    // })
    var url = 'http://localhost:4001/' + 'prayerSelectOne';
    var body = JSON.stringify({
      prayerDate: '2020/11/08',
    });
    this._callHisApi(url, 'POST', body);
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
  _callHisApi(apiUrl, methodName, itemBody) {
    try {
      const _headerOptions = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      var options = {
        method: methodName,
        headers: _headerOptions,
        body: itemBody,
      };
      fetch(apiUrl, options)
        .then(response => response.json())
        .then(responseJson => {
          this.setState({
            _prayerInfo: responseJson.results[0],
          });
        })
        .catch(error => {
          console.error(error);
        });
    } catch (e) {
      throw e;
    }
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
