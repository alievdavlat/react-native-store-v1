import { View, Text } from "react-native";
import { styles } from "./welcome.style";
import { COLORS, SIZES } from "../../constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


const Welcome = () => {
  const navigation = useNavigation();
  return (
 <View>
     <View style={styles.container}>
      <Text style={styles.welcomeText(COLORS.black)}>
        {' '}
        Find the Most
      </Text>
      <Text style={styles.welcomeText(COLORS.primary, 0)}>
        {" "}
        Luxurious Furniture
      </Text>
    </View>

    <View style={styles.searchContainer}>
      <TouchableOpacity>  
        <Feather name="search" size={24} style={styles.searchIcon} />
      </TouchableOpacity>
      <View style={styles.searchWrapper}>
          <TextInput
          value=""
          onPress={() =>  navigation.navigate('Search')}
          style={styles.searchInput}
          placeholder="We are you looking for..."
          />
      </View>
    <View>
      <TouchableOpacity style={styles.searchBtn}>
        <Ionicons name="camera-outline" size={SIZES.xLarge} />
      </TouchableOpacity>
    </View>
    </View>

 </View>
  );
};
