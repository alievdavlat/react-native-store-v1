import React from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { COLORS, SIZES } from "../../constants";
import ProductCardView from "./ProductCardView";
import styles from "./productrow.style";
import useFetch from '../../hooks/useFetch'
import { ActivityIndicator } from "react-native";

const ProductRow = () => {

  const { data, isLoading , error} = useFetch()

  return (
    <View style={styles.container}>
      {
        isLoading 
        ? <ActivityIndicator size={SIZES.large} color={COLORS.primary}/>
        : error 
        ? <Text>Somthing  went wrong</Text>

        : <FlatList
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={({item}) => (<ProductCardView item={item}/>)}
        horizontal
        contentContainerStyle={{ columnGap: SIZES.medium }}
      />
      }
    </View>
  );
};

export default ProductRow;
