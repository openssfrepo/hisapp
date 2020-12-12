import React, {Component} from 'react';
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import SearchBar from 'react-native-search-bar';
import {Header} from 'react-native-elements';

export default class chatScreen extends React.Component {
  state = {
    collapsed1: true,
    collapsed2: true,
    search: '',
  };
  toggleExpanded1 = () => {
    this.setState({collapsed1: !this.state.collapsed1});
  };
  toggleExpanded2 = () => {
    this.setState({collapsed2: !this.state.collapsed2});
  };

  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          onChangeText={search => {
            this.setState({search: search});
          }}
          onSearchButtonPress={search => {
            this.setState({search: search});
          }}
          onCancelButtonPress={search => {
            this.setState({search: search});
          }}
        />

        <ScrollView contentContainerStyle={{paddingTop: 0}}>
          <TouchableOpacity onPress={this.toggleExpanded1}>
            <Header
              centerComponent={{
                text: 'Friends',
                style: {color: '#fff'},
              }}
              rightComponent={{text: 'Friends', style: { color: '#fff' } }}
              containerStyle={styles.title}
            />
          </TouchableOpacity>
          <Collapsible collapsed={this.state.collapsed1} align="center">
            <View style={styles.content}>
              <Text>
                Bacon ipsum dolor amet chuck turducken landjaeger tongue spare
                ribs
              </Text>
            </View>
          </Collapsible>
          <TouchableOpacity onPress={this.toggleExpanded2}>
            <Header
              centerComponent={{
                text: 'Groups',
                style: {color: '#fff'},
              }}
            />
          </TouchableOpacity>
          <Collapsible collapsed={this.state.collapsed2} align="center">
            <View style={styles.content}>
              <Text>
                Bacon ipsum dolor amet chuck turducken landjaeger tongue spare
                ribs
              </Text>
            </View>
          </Collapsible>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 0,
  },
  title: {
    textAlign: 'center',
    fontSize: 2,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: 'grey',
    padding: 1,
    flex: 0.3,
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  headerText: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 2,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 1,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 1,
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
});
