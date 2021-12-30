import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import {settingStyle} from './settings.style';
import Icon from 'react-native-vector-icons/FontAwesome';

import profile from '../../../assets/profile1.jpg';
import backgoundPntg from '../../../assets/bg1.jpg';

export default function SettingScreen() {
  return (
    <ScrollView style={settingStyle.scrollView}>
      <View style={settingStyle.body}>
        <View style={settingStyle.header}>
          <TouchableOpacity style={settingStyle.headerImgContainer}>
            <Image
            style={settingStyle.headerImg}
            source={profile}
            />
          </TouchableOpacity>
          <View style={settingStyle.headerText}>
            <Text style={settingStyle.headerTextName}>John Doe</Text>
            <Text style={settingStyle.headerTextDesc}>Last seen: dec, 24, 2021</Text>
          </View>
        </View>
        <View style={settingStyle.optionsBody}>
          <View style={settingStyle.optionsNest}>
            <TouchableOpacity style={settingStyle.optionBtn}>
              <Text style={settingStyle.optionBtnText}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={settingStyle.optionBtn}>
              <Text style={settingStyle.optionBtnText}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={settingStyle.optionBtn}>
              <Text style={settingStyle.optionBtnText}>Saved</Text>
            </TouchableOpacity>
            <TouchableOpacity style={settingStyle.optionBtn}>
              <Text style={settingStyle.optionBtnText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
