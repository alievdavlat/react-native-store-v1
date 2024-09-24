import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './productCardView.style'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../constants'
import { useNavigation } from '@react-navigation/native'

const ProductCardView = ({item}) => {

  const navigation = useNavigation()

  return (
  <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', {item})}>
    <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
          source={{uri:item?.imageUrl ? item?.imageUrl : "https://firebasestorage.googleapis.com/v0/b/learning-platfrom-9b485.appspot.com/o/fn2.jpg?alt=media&token=4b66b81e-af25-4a32-907a-e5c7b5b89140"}}
          style={styles.image}
          />
        </View>

        <View style={styles.details}>
            <Text style={styles.title} numberOfLines={1}>
             {
              item?.title
             }
            </Text>

            <Text style={styles.supplier} numberOfLines={1}>
             {
              item?.supplier
             }
            </Text>

            <Text style={styles.price} >
              {
                item?.price
              }
            </Text>
        </View>

        <TouchableOpacity style={styles.addBtn}>
          <Ionicons
          name='add-circle'
          size={35}
          color={COLORS.primary}
          />
        </TouchableOpacity>
    </View>
  </TouchableOpacity>
  )
}

export default ProductCardView

