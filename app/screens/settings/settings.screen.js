import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, ScrollView} from 'react-native';
import settingsStyle from './settings.style';

export default function SettingScreen() {
  return (
    <View style={settingsStyle.scrollView}>
      <View style={settingsStyle.bodyView}>
        <Text style={settingsStyle.exampleText}>This is the Settings Screen. I'll do this later</Text>
      </View>
    </View>
  );
}
