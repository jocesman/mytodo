import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: '#6f6f6f'
  },
  container:{
    paddingTop:50,
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(239, 238, 245, 1)',
  },
  text:{
    fontSize: 16,
    color: '#6f6f6f',
  },
  textDone:{
    fontSize: 16,
    color: '#6f6f6f',
    textDecorationLine: 'line-through',
  },
  whiteText:{
    fontSize: 16,
    color: '#fff'
  },
  textInput:{
    borderColor: '#6f6f6f',
    borderWidth: 1,
    width: Dimensions.get('screen').width * 0.6,
    borderRadius: 6,
    paddingLeft: 15,
    color: '#0c0430ff',
  },
  inputContainer:{
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addButtom:{
    backgroundColor: '#2cbaff',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('screen').width * 0.25,
    borderRadius: 6,
    },
    scrollContainer:{
      marginTop: 20
    },
    itemContainer:{
      paddingVertical: 20,
      borderBottomColor: '#100f61ff',
      borderBottomWidth: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    removeButtom:{
      backgroundColor: '#f33d3d',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 6,
      height: 40,
      width: Dimensions.get('screen').width * 0.25,
      paddingHorizontal: 15,
    }
});

export default styles;