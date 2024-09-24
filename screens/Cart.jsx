
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Cart = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      {/* Add your cart items and functionality here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Cart;