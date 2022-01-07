import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Text, View, ScrollView, TextInput, FlatList, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { discoverStyle } from './discover.style';
import api from '../../api';

export default function DiscoverScreen() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState({});
  const [loadgin, setLoading] = useState(true);

  useEffect(()=> {
    let controller = new AbortController();
    const getInfo = async () => {
      try{
        const {data} = await api.get('Painting/MostViewedPaintings?offset=0&quantity=100&limit=100&randomSeed=123&json=1', {signal: controller.signal});
        setData(data);
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

  const itemView = ({item}) => {
        const images = [{uri: item.image}]
        return(
            <TouchableOpacity
            style={discoverStyle.flatListView}
            onPress={() => {}}>
                <Text style={discoverStyle.flatListText}>{item.artistName}</Text>
            </TouchableOpacity>
        );
    }

  return (
    <SafeAreaView style={discoverStyle.body}>
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
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={itemView}
            initialNumToRender={5}
            maxToRenderPerBatch={10}
          />
        </View>
    </SafeAreaView>
  );
}
