import * as React from 'react';
import { Feather, Ionicons } from '@expo/vector-icons';
import { Image, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './search.styles';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import SearchTitle from '../components/products/SearchTitle';

const Search = () => {

  const [searchKey, setSearchKey] = React.useState('')
  const [searchResult , setSearchResult] = React.useState([])

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/products/search/${searchKey}`)
      setSearchResult(response.data)

    } catch (err) {
     console.log('Failed to get products') 
    }
  }

  return (
    <SafeAreaView>
 <View style={styles.searchContainer}>
      <TouchableOpacity>  
      <Ionicons name="camera-outline" size={SIZES.xLarge} />

      </TouchableOpacity>
      <View style={styles.searchWrapper}>
          <TextInput
          value={searchKey}
          onChangeText={setSearchKey}
          style={styles.searchInput}
          placeholder="We are you looking for..."
          />
      </View>
    <View>
      <TouchableOpacity style={styles.searchBtn} onPress={() => {}} >
      <Feather name="search" size={24} style={styles.searchIcon} />

      </TouchableOpacity>
    </View>
    </View>    

    {
      searchResult.length === 0
      ? <View style={{flex:1}}>
        <Image
        source={require('../assets/images/Pose23.png')}
        style={styles.searchImage}
        />
      </View>
      : <FlatList
        data={searchResult}
        keyExtractor={(item) => item._id}
        renderItem={({item}) => <SearchTitle item={item}/>}
        style={{marginHorizontal:12}}
      />
    }
    </SafeAreaView>
  );
};



export default Search;