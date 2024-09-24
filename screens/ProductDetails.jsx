import * as React from "react";
import { Image, Text, View } from "react-native";
import styles from "./productDetail.style";
import { Fontisto, Ionicons, MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, SIZES } from "../constants";
import { useRoute } from "@react-navigation/native";

const ProductDetails = ({ navigation }) => {
  const route = useRoute()
  const {item} = route.params
  const [count, setCount] = React.useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <View style={styles.container}>
      {/*  like and back */}
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      {/* image  */}
      <Image
        source={{
          uri: item?.imageUrl ? item?.imageUrl : 'https://firebasestorage.googleapis.com/v0/b/learning-platfrom-9b485.appspot.com/o/fn4.jpg?alt=media&token=6e0e6f0d-c69b-4aaa-9e45-69ef19bf2221',
        }}
        style={styles.Image}
      />

      <View style={styles.details}>

        {/* header */}
        <View style={styles.titleRow}>
          <Text style={styles.title}>{item?.title}</Text>

          <View style={styles.priceWrapper}>
            <Text style={styles.price}>{item?.price}</Text>
          </View>
        </View>

        {/* rating and counter */}
        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons key={index} name="star" size={24} color={"gold"} />
            ))}

            <Text style={styles.ratingText}>(4.9)</Text>
          </View>

          <View style={styles.rating}>
            <TouchableOpacity onPress={() => increment()}>
              <SimpleLineIcons name="plus" size={20} />
            </TouchableOpacity>

            <Text style={styles.ratingText}>{count}</Text>

            <TouchableOpacity onPress={() => decrement()}>
              <SimpleLineIcons name="minus" size={20} />
            </TouchableOpacity>
          </View>
        </View>

          {/* Description */}
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.descText}>
            {item?.description}
          </Text>
        </View>
          
            {/* Delivery and lcoation */}
        <View style={{ marginBottom: SIZES.small }}>
          <View style={styles.location}>

            <View style={{ flexDirection: "row" }}>
              <Ionicons name="location-outline" size={20} />
              <Text>
                {item?.product_location} 
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons name="truck-delivery-outline" size={20} />
              <Text>Free delivery</Text>
            </View>

          </View>
        </View>

          
        <View style={styles.cartRow}>
            <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
              <Text style={styles.cartTitle}>
              BUY NOW
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}} style={styles.addCart}>
              <Fontisto
              name="shopping-bag"
              size={24}
              color={COLORS.lightWhite}
              />
            </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};

export default ProductDetails;
