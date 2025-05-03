import { StyleSheet, Platform } from "react-native";

const buttonStyles = StyleSheet.create({
  roundedButton:{
    backgroundColor: '#3875e8',
    alignItens: "center",
    justifyContent: 'center',
    width:'40%',
    height: '100%',
    overflow:'hidden',
    borderRadius:10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});

export default buttonStyles