import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, ScroolView, ImageBackground, SafeAreaView} from 'react-native';
import {homeStyle} from './home.style'
import ImgTest from '../../../assets/p1.jpg'
import ImgGradient from '../../../assets/gradient.png'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ImageBackground
      source={ImgTest}
      resizeMode="cover"
      style={homeStyle.ImgTest}>
        <ImageBackground
        source={ImgGradient}
        resizeMode="cover"
        style={homeStyle.ImgGradient}>
          <View style={homeStyle.bodyContainer}>
            <View style={homeStyle.expandImage}>
              <TouchableOpacity>
                <Text style={homeStyle.expandImageText}>Click here to see full image</Text>
              </TouchableOpacity>
            </View>
            <View style={homeStyle.mainCard}>
              <Text style={homeStyle.titleArtNameText}>Elegy</Text>
              <Text style={homeStyle.titleArtistNameText}>William-Adolphe Bouguereau</Text>
            </View>
          </View>
        </ImageBackground>
      </ImageBackground>
    </SafeAreaView>
  );
}
