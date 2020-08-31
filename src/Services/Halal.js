import React, {Component} from 'react';
import {
  View,
  Text,
  Alert,
  StyleSheet,
  Button,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Card} from '../Custom/Card';
import {Col, Row, Grid} from 'react-native-easy-grid';
export default class Halal extends Component {
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
              <TouchableOpacity style={styles.button} onPress={() => Alert.alert('card button pressed')}>
                <Card>
                  <Text style={styles.title}>Dawat Caffe & Restaurant</Text>
                  <Text>北海道札幌市北区北17条西4丁目1-11 ニューエルム1F</Text>
                  <View style={styles.lineStyle} />
                  <Grid>
                    <Col>
                      <Text>
                        Islam teaches us that Halal Food is an important part of
                        our life
                      </Text>
                    </Col>
                    <Col>
                      <Row>
                        <Text>
                          Islam teaches us that Halal Food is an important part
                          of our life2
                        </Text>
                      </Row>
                      <Row>
                        <Col>
                          <Row>
                            <Text>Status: OPEN</Text>
                          </Row>
                          <Row>
                            <Text>Advanced Order: Yes</Text>
                          </Row>
                          <Row>
                            <Text>Takeout: Yes</Text>
                          </Row>
                          <Row>
                            <Text>Home Delivery: Yes</Text>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Grid>
                  <View style={styles.fixToText}>
                    <Text>Ratings: 5.0</Text>
                    <Text>Order: Yes</Text>
                    <Text>Takeout: Yes</Text>
                    <Text>Delivery: No</Text>
                  </View>
                  <View style={styles.lineStyle} />
                  <Button
                    title="Visit Shop"
                    onPress={() => Alert.alert('Visit Shop button pressed')}
                  />
                </Card>
              </TouchableOpacity>
            </View>
            <View>
              <Card>
                <Text style={styles.title}>Dawat Caffe & Restaurant</Text>
                <Text>北海道札幌市北区北17条西4丁目1-11 ニューエルム1F</Text>
                <View style={styles.lineStyle} />
                <Grid>
                  <Col>
                    <Text>
                      Islam teaches us that Halal Food is an important part of
                      our life
                    </Text>
                  </Col>
                  <Col>
                    <Row>
                      <Text>
                        Islam teaches us that Halal Food is an important part of
                        our life2
                      </Text>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Text>Status: OPEN</Text>
                        </Row>
                        <Row>
                          <Text>Advanced Order: Yes</Text>
                        </Row>
                        <Row>
                          <Text>Takeout: Yes</Text>
                        </Row>
                        <Row>
                          <Text>Home Delivery: Yes</Text>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Grid>
                <View style={styles.fixToText}>
                  <Text>Ratings: 5.0</Text>
                  <Text>Order: Yes</Text>
                  <Text>Takeout: Yes</Text>
                  <Text>Delivery: No</Text>
                </View>
                <View style={styles.lineStyle} />
                <Button
                  title="Visit Shop"
                  onPress={() => Alert.alert('Visit Shop button pressed')}
                />
              </Card>
            </View>
            <View>
              <Card>
                <Text style={styles.title}>Dawat Caffe & Restaurant</Text>
                <Text>北海道札幌市北区北17条西4丁目1-11 ニューエルム1F</Text>
                <View style={styles.lineStyle} />
                <Grid>
                  <Col>
                    <Text>
                      Islam teaches us that Halal Food is an important part of
                      our life
                    </Text>
                  </Col>
                  <Col>
                    <Row>
                      <Text>
                        Islam teaches us that Halal Food is an important part of
                        our life2
                      </Text>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Text>Status: OPEN</Text>
                        </Row>
                        <Row>
                          <Text>Advanced Order: Yes</Text>
                        </Row>
                        <Row>
                          <Text>Takeout: Yes</Text>
                        </Row>
                        <Row>
                          <Text>Home Delivery: Yes</Text>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Grid>
                <View style={styles.fixToText}>
                  <Text>Ratings: 5.0</Text>
                  <Text>Order: Yes</Text>
                  <Text>Takeout: Yes</Text>
                  <Text>Delivery: No</Text>
                </View>
                <View style={styles.lineStyle} />
                <Button
                  title="Visit Shop"
                  onPress={() => Alert.alert('Visit Shop button pressed')}
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
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    color: 'white',
    padding: 5,
    fontSize: 20,
    backgroundColor: 'green',
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: 'black',
    marginTop: 5,
    marginBottom: 5,
  },
});
