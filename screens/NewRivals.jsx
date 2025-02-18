import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./newRivals.style";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants";
import ProductList from "../components/products/ProductList";

const NewRivals = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.upperRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-circle" size={30} color={COLORS.lightWhite}/>
          </TouchableOpacity>

          <Text style={styles.heading}>
            Products
          </Text>

        </View>
        <ProductList/>
      </View>
    </SafeAreaView>
  );
};

export default NewRivals;
