import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Text, View, ScrollView, TextInput} from 'react-native';
import {SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import {shopStyle} from './shop.style';

export default function ShopScreen() {
  return (
    <ScrollView style={shopStyle.body}>
        <View style={shopStyle.searchBarView}>
          <Icon
          name="search"
          size={25}
          color="grey"
          style={shopStyle.searchBarIcon}/>
          <TextInput
          placeholder='artist, age, movement, style etc...'
          style={shopStyle.searchBarInput}
          placeholderTextColor="#c2c2c2"
          />
        </View>
        <View style={shopStyle.cardContainer}>
          <View style={shopStyle.cardHorizontal}>
            <View style={shopStyle.cardLeft}>
              <Text style={shopStyle.cardTitleText}>Leonardo da Vinci</Text>
              <Text style={shopStyle.cardDescriptionText}>Buy Leonardo's works with high resolution</Text>
            </View>
            <View style={shopStyle.cardRight}>
              <Text>Text 2</Text>
            </View>
          </View>
          <View style={shopStyle.cardHorizontal}>
            <View style={shopStyle.cardLeft}>
              <Text>Text 1</Text>
            </View>
            <View style={shopStyle.cardRight}>
              <Text>Text 2</Text>
            </View>
          </View>
          <View style={shopStyle.cardHorizontal}>
            <View style={shopStyle.cardLeft}>
              <Text>Text 1</Text>
            </View>
            <View style={shopStyle.cardRight}>
              <Text>Text 2</Text>
            </View>
          </View>
        </View>
    </ScrollView>
  );
}
