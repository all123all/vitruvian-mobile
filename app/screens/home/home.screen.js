//I'll need to make some 'LOADING SCREEN' to not allow the user to see the black screen while the server returns the information
//Also, note that error: //I'll need to make some 'LOADING SCREEN' to not allow the user to see the black screen while the server returns the information
import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, Component} from 'react';
import { Text, View, ScrollView, Modal, Image, Dimensions, TouchableOpacity, ActivityIndicator} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import {homeStyle} from './home.style'
import ImgTest from '../../../assets/p1.jpg'
import ImgGradient from '../../../assets/gradient.png'
import api from '../../api';

export default function HomeScreen({url}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [artistDesc, setArtistDesc] = useState({});
  const [loading, setLoading] = useState(true);
  const images = [{
    uri: artistDesc.image
  }]
  const imagesZoom = [{
    url: artistDesc.image,
    props: {
         headers: 'This is the title'
    }
  }]

  //The API will use the 'contentId' to pick the artist. In this example the '185307' refers to Jackson Pollock
  //in this case i'll only need to let the user choose the 'contentId' he prefer
  useEffect(()=> {
    let controller = new AbortController();
    const getInfo = async () => {
      try{
        const {data} = await api.get('Painting/ImageJson/225189', {signal: controller.signal});
        setArtistDesc(data);
      }catch(error){
        if(error.name === "AbortError"){
          console.log('caught cancel');
        }else{
          throw error;
        }
      }
    }
    setLoading(false);
    getInfo();
    return () => {
      console.log('unmounting');
      controller.abort();
    };
  }, [api])
  if(loading){
    return(
      <View style={homeStyle.loadingScreen}>
        <ActivityIndicator
        size="large"
        color="#fff"/>
      </View>
    )
  }else{
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
          <Text style={homeStyle.headerTextName}>{artistDesc.title}</Text>
          <Text style={homeStyle.headerTextDesc}>{artistDesc.artistName}</Text>
          <Text style={homeStyle.headerTextInfo}>{artistDesc.description}</Text>
        </View>
      </ScrollView>
    );
  }
}