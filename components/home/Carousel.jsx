 import { View } from 'react-native'
import {SliderBox} from 'react-native-image-slider-box'
import { COLORS } from '../../constants'

 const Carousel = () => {
  const slides = [
    'https://firebasestorage.googleapis.com/v0/b/learning-platfrom-9b485.appspot.com/o/fn1.jpg?alt=media&token=804b7f07-dddb-4d29-bff7-ac4026fbb5a4',
    'https://firebasestorage.googleapis.com/v0/b/learning-platfrom-9b485.appspot.com/o/fn2.jpg?alt=media&token=4b66b81e-af25-4a32-907a-e5c7b5b89140',
    'https://firebasestorage.googleapis.com/v0/b/learning-platfrom-9b485.appspot.com/o/fn3.jpg?alt=media&token=d548499e-2895-4cb6-9fea-60640c25e2df',
    'https://firebasestorage.googleapis.com/v0/b/learning-platfrom-9b485.appspot.com/o/fn4.jpg?alt=media&token=6e0e6f0d-c69b-4aaa-9e45-69ef19bf2221',
    'https://firebasestorage.googleapis.com/v0/b/learning-platfrom-9b485.appspot.com/o/fn5.jpg?alt=media&token=e00ba6a1-2599-464a-a4e6-3017023bf7cf'

  ]
    return (
        <View style={styles.carouselContainer}>
          <SliderBox
          images={slides}
          autoPlay
          circleLoop
          dotColor={COLORS.primary}
          inactiveDotColor={COLORS.secondary}
          ImageComponentStyle={{borderRadius:15, width:'93%',marginTop:15 }}
          />
        </View>
    )
 }

 const styles = StyleSheet.create({
    container: {
       flex: 1,
       alignItems: 'center',
    }
 })
 