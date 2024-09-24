import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './searchTitle.style'
import { useNavigation } from '@react-navigation/native'

const SearchTitle = ({item}) => {
    const navigation = useNavigation()
  return (
    <View >
      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('ProductDetails')}>
        <View style={styles.image}>
        <Image
          source={{
            uri:item?.imageUrl ? item.imageUrl:"https://firebasestorage.googleapis.com/v0/b/learning-platfrom-9b485.appspot.com/o/fn1.jpg?alt=media&token=804b7f07-dddb-4d29-bff7-ac4026fbb5a4"
          }}
          style={styles.productImage}
        />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.productTitle}>

          </Text>

          <Text style={styles.suppliar}>

          </Text>

          <Text style={styles.price}>

          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default SearchTitle