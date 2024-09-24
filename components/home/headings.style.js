import { COLORS, SIZES} from '../../constants'
import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
container :{
marginTop:SIZES.medium,
// marginBottom:-SIZES.small,
marginHorizontal:12,
},
header:{
flexDirection:'row',
justifyContent:'space-between',
},
headerTitle:{
fontFamily:'semibold',
fontSize:SIZES.xLarge -2,
},

})

export default styles