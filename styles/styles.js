import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#46387C',
      alignItems: 'center',
      paddingTop: 150,
    },
    containerList: {
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      maxWidth: 1200,
    },
    button: {
      backgroundColor: '#00D8FF',
      width: 156,
      height: 45,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5
    },
    buttonIcon: {
      backgroundColor: '#00D8FF',
      width: 45,
      height: 45,
      alignItems: 'center',
      borderRadius: 5,
      flex: 1,
      justifyContent: 'center',
    },
    rightComponent: {
      alignSelf: 'flex-end',
      marginRight: 90,
      minWidth: 60,
      minHeight: 40,
    },
    buttonText: { color: '#302850', fontSize: 16 },
    buttonIconText: { color: '#302850', fontSize: 30 },
    titleText: {
      color: '#00D8FF',
      fontSize: 30
    },
    card: {
      backgroundColor: '#4638ff',
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
      margin: 60
    }
});


  
export default styles;
  