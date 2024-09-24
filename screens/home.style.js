import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

export const styles = StyleSheet.create({
    appBarWrapper: {
        marginHorizontal: 22,
        marginTop:SIZES.small,

    },
    appBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textStyle: {
        fontFamily: 'bold',
        fontSize: 40,
    },
    location: {
        fontFamily: 'semibold',
        fontSize: SIZES.medium,
        color: COLORS.gray,
    },
    cartCount: {
        position: 'absolute',
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: 'green',
        justifyContent: 'center',
        zIndex: 999,
        bottom:16,
        alignItems: 'center',
    },
    cartNumber:{
    fontFamily:'regular',
    fontWeight:'600',
    fontSize:10,
    color:COLORS.lightWhite
    }
});


export default styles;