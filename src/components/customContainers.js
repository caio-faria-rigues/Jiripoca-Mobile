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
    width: '85%',
    height:'15%',
    gap:'5%',
  },
  scrollViewContainer: {
    //flex: 1,
    width: '85%',
    height: '10%',
    backgroundColor: '#ff0000',
    marginHorizontal: 20,
    borderRadius: 8,
    alignContent: 'left',
  },
  scrollViewContent: {
    padding: 10,
    alignItems: 'flex-start',
  },
  customInput: {
    height: '20%',
    width: '100%',
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#ffffff',
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: '#333333',
    marginBottom: '5%',
  },
  pickerContainer: {
    height: '20%',
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    marginBottom: 20,
    overflow: 'hidden',
    justifyContent: 'center',
  },
})

export default containerStyles