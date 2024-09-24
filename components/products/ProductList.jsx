import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import useFetch from '../../hooks/useFetch'
import { COLORS, SIZES } from '../../constants'
import styles from './ProductList.style'
import { FlatList } from 'react-native-gesture-handler'
import ProductCardView from './ProductCardView'

const ProductList = () => {

  const {data, error, isLoading} = useFetch()

  if (isLoading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator
          size={SIZES.large}
          color={COLORS.primary}
          />
        </View>
      )
  }

  return (
    <View style={styles.container}>
      <FlatList
      data={data}
      numColumns={2}
      renderItem={({item}) => <ProductCardView item={item}/>}
      contentContainerStyle={styles.container}
      ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      />
    </View>
  )
}

export default ProductList