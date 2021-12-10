import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Text, View, ScrollView, TextInput} from 'react-native';
import {SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { discoverStyle } from './discover.style';

export default function DiscoverScreen() {
  const [search, setSearch] = useState('');
  return (
    <ScrollView style={discoverStyle.body}>
        <View style={discoverStyle.searchBarView}>
          <Icon
          name="search"
          size={25}
          color="grey"
          style={discoverStyle.searchBarIcon}/>
          <TextInput
          placeholder='artist, age, movement, style etc...'
          style={discoverStyle.searchBarInput}
          placeholderTextColor="#c2c2c2"
          />
        </View>
        <View style={discoverStyle.flatListNest}>
          <View style={discoverStyle.flatListView}>
              <Text style={discoverStyle.flatListText}>Leonardo Da Vinci</Text>
          </View>
          <View style={discoverStyle.flatListView}>
              <Text style={discoverStyle.flatListText}>Pablo Picasso</Text>
          </View>
          <View style={discoverStyle.flatListView}>
              <Text style={discoverStyle.flatListText}>Jackson Pollock</Text>
          </View>
          <View style={discoverStyle.flatListView}>
              <Text style={discoverStyle.flatListText}>Jackson Pollock</Text>
          </View>
          <View style={discoverStyle.flatListView}>
              <Text style={discoverStyle.flatListText}>Jackson Pollock</Text>
          </View>
          <View style={discoverStyle.flatListView}>
              <Text style={discoverStyle.flatListText}>Jackson Pollock</Text>
          </View>
          <View style={discoverStyle.flatListView}>
              <Text style={discoverStyle.flatListText}>Jackson Pollock</Text>
          </View>
          <View style={discoverStyle.flatListView}>
              <Text style={discoverStyle.flatListText}>Jackson Pollock</Text>
          </View>
          <View style={discoverStyle.flatListView}>
              <Text style={discoverStyle.flatListText}>Jackson Pollock</Text>
          </View>
        </View>
    </ScrollView>
  );
}
