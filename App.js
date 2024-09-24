import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { Text} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigations from './navigation/BottomTabNavigations';
import { Cart, NewRivals, ProductDetails } from './screens';



const Stack = createNativeStackNavigator();


export default function App() {

  const [fontsLoaded] = useFonts({
    regular: require('./assets/fonts/Poppins-Regular.ttf'),
    bold: require('./assets/fonts/Poppins-Bold.ttf'),
    extraBold: require('./assets/fonts/Poppins-ExtraBold.ttf'),
    light: require('./assets/fonts/Poppins-Light.ttf'),
    medium: require('./assets/fonts/Poppins-Medium.ttf'),
    semiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
    thin: require('./assets/fonts/Poppins-Thin.ttf'),
  });


  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.preventAutoHideAsync();
    }
  }, [fontsLoaded]);


  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
      <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Bottom Navigation" component={BottomTabNavigations}  options={{headerShown: false}} />

      <Stack.Screen name='Cart' component={Cart} options={{headerShown: false}} />

      <Stack.Screen name='ProductDetails' component={ProductDetails} options={{headerShown: false}} />

      <Stack.Screen name='Productlist' component={NewRivals} options={{headerShown: false}} />

    </Stack.Navigator>
    </NavigationContainer>
  );
}


