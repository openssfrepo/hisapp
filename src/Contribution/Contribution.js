import React, {Component} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Card} from '../Custom/Card';
import {Avatar} from 'react-native-elements';
import HisApi from '../Common/HisApi';

  export default class Contribution extends Component {
    _contributionList = [];
  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
    };
  }
  componentDidMount() {
    HisApi.getAllUser()
    const list = HisApi.getLoginInfo()
    this.setState({
      dataSource: list
    })

  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={item => this._renderContributionList(item)}
          keyExtractor={item => item.id.toString()}
        />
      </SafeAreaView>
    );
  }
  _renderContributionList = data => (
    <TouchableOpacity style={styles.item}>
      <Card>
        <View
          style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}>
          <Avatar
            size="small"
            rounded
            title={data.item.Name.length > 1 ? data.item.Name.substring(0,2) : data.item.Name.substring(0,1)}
            onPress={() => console.log('Works!')}
            activeOpacity={0.7}
          />
          <Text style={{margin: 5, fontSize: 20}}>{data.item.Name}</Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 5,
    },
    item: {
      // marginVertical: 3,
      // marginHorizontal: 3,
    },
    title: {
      fontSize: 32,
    },
  });