import { StyleSheet } from "react-native";

const containerStyles = StyleSheet.create({
    gradientcontainer: {
    flex: 1,
  },
  innercontainer: {
    flex: 1,
    backgroundColor: 'transparent',
    //backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'top',
    gap:'3%'
  },
  rowcontainer:{
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height:'15%',
    gap:'5%',
  },
})

export default containerStyles