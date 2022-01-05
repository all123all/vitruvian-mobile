import { StatusBar } from 'expo-status-bar';
import React, {useState, Component} from 'react';
import { Text, View, ScrollView, Modal, Image, Dimensions, TouchableOpacity} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import {homeStyle} from './home.style'
import ImgTest from '../../../assets/p1.jpg'
import ImgGradient from '../../../assets/gradient.png'
import api from '../../api';

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const images = [{
    uri: "https://uploads8.wikiart.org/00339/images/henri-pierre-picou/picou-henri-pierre-mark-antony-and-cleopatra-aboard-an-egyptian-barge-1891.jpg",
  }]
  const imagesZoom = [{
    url: "https://uploads8.wikiart.org/00339/images/henri-pierre-picou/picou-henri-pierre-mark-antony-and-cleopatra-aboard-an-egyptian-barge-1891.jpg",
    props: {
         headers: 'This is the title'
    }
}]
  return (
    <ScrollView style={homeStyle.scrollView}>
      <Modal
        animationType='fade'
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)}}>
        <ImageViewer
          imageUrls={imagesZoom}
        />
      </Modal>        
      <View style={homeStyle.bodyView}>
        <TouchableOpacity style={homeStyle.imgPanel}
        onPress={() => setModalVisible(true)}>
          <Image
          style={homeStyle.img}
          source={images}/>
        </TouchableOpacity>
        <Text style={homeStyle.imgPanelText}>Click the image to see full</Text>
        <Text style={homeStyle.headerTextName}>Elegy</Text>
        <Text style={homeStyle.headerTextDesc}>William-Adolphe Bouguereau</Text>
        <Text style={homeStyle.headerTextInfo}>(French pronunciation: ​[wijam.adɔlf buɡ(ə)ʁo]; 30 November 1825 – 19 August 1905) was a French academic painter. In his realistic genre paintings he used mythological themes, making modern interpretations of classical subjects, with an emphasis on the female human body. During his life he enjoyed significant popularity in France and the United States, was given numerous official honors, and received top prices for his work. As the quintessential salon painter of his generation, he was reviled by the Impressionist avant-garde. By the early twentieth century, Bouguereau and his art fell out of favor with the public, due in part to changing tastes. In the 1980s, a revival of interest in figure painting led to a rediscovery of Bouguereau and his work. Throughout the course of his life, Bouguereau executed 822 known finished paintings, although the whereabouts of many are still unknown. </Text>
      </View>
    </ScrollView>
  );
}