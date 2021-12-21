import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Text, View, ScrollView, TextInput, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {shopStyle} from './shop.style';
import p3 from '../../../assets/p3.jpg';

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
            <TouchableOpacity style={shopStyle.cardLeft}>
                <Text style={shopStyle.cardTitleText}>Leonardo da Vinci</Text>
                <Text style={shopStyle.cardDescriptionText}>Buy Leonardo's works with high resolution</Text>
            </TouchableOpacity>
            <TouchableOpacity style={shopStyle.cardLeft}>
                <Text style={shopStyle.cardTitleText}>Van Gogh</Text>
                <Text style={shopStyle.cardDescriptionText}>Buy Van Gogh's works with high resolution</Text>
            </TouchableOpacity>
          </View>
        </View>
    </ScrollView>
  );
}
