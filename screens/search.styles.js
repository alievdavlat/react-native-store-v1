import { StyleSheet } from 'react-native'

import { COLORS, SIZES } from '../constants'

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
    marginHorizontal:SIZES.small,
    height:50,
 },
 searchIcon: {
     marginHorizontal: 10,
     color: COLORS.gray,
     backgroundColor:COLORS.secondary,
     marginRight:SIZES.small,
     borderRadius:SIZES.small,
     marginTop:SIZES.small,
 },
 searchWrapper: {
   flex: 1,
   backgroundColor: COLORS.secondary,
   marginLeft: SIZES.small,
   borderRadius: SIZES.small,
 },
 searchInput: {
   fontFamily: 'regular',
   width: '100%',
   height: '100%',
   paddingHorizontal: SIZES.small,
 },
 searchBtn: {
   width: 50,
   height: '100%',
   backgroundColor: COLORS.primary,
   borderRadius: SIZES.medium,
   justifyContent: 'center',
   alignItems: 'center',
 },
 searchImage:{
  resizeMode:'contain',
  width:SIZES.width -100,
  height:SIZES.height -100,  
 }
})

export default styles;