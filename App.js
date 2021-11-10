import React from 'react';
import {
  StyleSheet,
  Platform,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Button,
  Alert,
  StatusBar,
  Dimensions,
} from 'react-native';
import {
  useDimensions,
  useDeviceOrientation,
} from '@react-native-community/hooks';
import { Entypo } from '@expo/vector-icons';

import AppText from './app/components/AppText';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AccountScreen from './app/screens/AccountScreen';
import colors from './app/config/colors';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import ListingScreen from './app/screens/ListingScreen';

export default function App() {
  // return <ViewImageScreen />;
  // return <WelcomeScreen />;
  // // const handlePress = () => console.log(require('./assets/favicon.png'));
  // // console.log(Dimensions.get('window'));
  // // console.log(Dimensions.get('screen'));
  // const { landscape } = useDeviceOrientation();
  // return (
  //   // <SafeAreaView style={styles.container}>
  //   //   {/* <TouchableNativeFeedback>
  //   //     <View
  //   //       style={{
  //   //         paddingBottom: 20,
  //   //         paddingTop: 20,
  //   //         paddingLeft: 50,
  //   //         paddingRight: 50,
  //   //         backgroundColor: '#fff',
  //   //       }}
  //   //     >
  //   //       <Text numberOfLines={1} onPress={handlePress}>
  //   //         Hello React!
  //   //       </Text>
  //   //     </View>
  //   //   </TouchableNativeFeedback> */}
  //   //   {/* <Image source={require('./assets/favicon.png')} /> */}
  //   //   {/* <TouchableNativeFeedback onPress={() => console.log('ITapped')}>
  //   //     <Image
  //   //       source={{
  //   //         width: 200,
  //   //         height: 200,
  //   //         uri: 'https://picsum.photos/200',
  //   //       }}
  //   //     />
  //   //   </TouchableNativeFeedback> */}
  //   //   {/* <Button
  //   //     color="red"
  //   //     title="Click"
  //   //     // onPress={() =>
  //   //     //   Alert.alert('Title', 'Message', [
  //   //     //     { text: 'Yes', onPress: () => console.log('Yes') },
  //   //     //     { text: 'No', onPress: () => console.log('No') },
  //   //     //   ])
  //   //     // }
  //   //     onPress={() =>
  //   //       Alert.prompt('Tytle', 'What is your Name?', (text) =>
  //   //         console.log(text)
  //   //       )
  //   //     }
  //   //   /> */}
  //   //   <Button title="click" onPress={() => console.log('PRessed')} />
  //   //   <View
  //   //     style={{
  //   //       backgroundColor: '#000',
  //   //       width: '50%',
  //   //       height: landscape ? '10%' : '20%',
  //   //     }}
  //   //   ></View>
  //   // </SafeAreaView>
  //   <View
  //     style={{
  //       backgroundColor: 'blue',
  //       flex: 1,
  //       flexDirection: 'row',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       alignContent: 'center',
  //       // flexWrap: 'wrap',
  //     }}
  //   >
  //     <View
  //       style={{ backgroundColor: 'tomato', height: 100, width: 100 }}
  //     ></View>
  //     <View
  //       style={{
  //         backgroundColor: 'black',
  //         flexBasis: 300,
  //         // flexGrow: 1,
  //         flexShrink: -1,
  //         // flex: 1,
  //         height: 100,
  //         // width: 100,
  //         top: 20,
  //         left: 20,
  //         position: 'relative',
  //       }}
  //     ></View>
  //     <View
  //       style={{
  //         backgroundColor: 'red',
  //         height: 100,
  //         width: 100,
  //         // alignSelf: 'flex-start',
  //       }}
  //     ></View>
  //   </View>
  // );
  //   return (
  //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  //       <View
  //         style={{
  //           backgroundColor: 'blue',
  //           height: 100,
  //           width: 100,
  //           borderWidth: 10,
  //           borderColor: 'red',
  //           borderRadius: 10,
  //           borderTopWidth: 20,
  //         }}
  //       ></View>
  //     </View>
  //   );
  // }
  // return (
  //   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  //     <View
  //       style={{
  //         backgroundColor: 'blue',
  //         height: 100,
  //         width: 100,
  //         shadowColor: 'grey',
  //         shadowOffset: { width: 20, height: 20 },
  //         shadowOpacity: 1,
  //         elevation: 100,
  //         padding: 20,
  //         paddingHorizontal: 60,
  //         paddingLeft: 30,
  //       }}
  //     >
  //       <View
  //         style={{
  //           backgroundColor: 'red',
  //           width: 50,
  //           height: 50,
  //         }}
  //       ></View>
  //     </View>
  //     <View
  //       style={{
  //         backgroundColor: 'tomato',
  //         width: 100,
  //         height: 100,
  //         marginEnd: 56,
  //       }}
  //     ></View>
  //   </View>
  // );
  //   return (
  //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  //       {/* <Text
  //         style={{
  //           fontFamily: 'sans-serif-thin',
  //           fontSize: 20,
  //           fontWeight: '900',
  //           // fontStyle: 'italic',
  //           color: 'tomato',
  //           textTransform: 'uppercase',
  //           // textDecorationLine: 'underline line-through',
  //           // textDecorationStyle: '',
  //           textAlign: 'center',
  //           // textAlignVertical: '',
  //           lineHeight: 35,
  //         }}
  //       >
  //         React Native React NativeReact NativeReact Native React NativeReact
  //         Native React NativeReact NativeReact Native React Native
  //       </Text> */}
  //       <AppText>I Love React Native!!!</AppText>
  //       <Entypo name="mail" color={colors.primary} size={50} />
  //       <AppButton
  //         title="Login"
  //         onPress={() => console.log('Tapped')}
  //       ></AppButton>
  //     </View>
  //   );
  return (
    // <ListingDetailsScreen />
    // <WelcomeScreen />
    // <MessagesScreen />
    // <AccountScreen />
    <ListingScreen />
    // <ViewImageScreen />

    // <Screen>
    //   {/* <Icon
    //     name="email"
    //     size={50}
    //     backgroundColor={colors.danger}
    //     iconColor={colors.white}
    //   ></Icon> */}
    //   <ListItem title="My Title" IconComponent={<Icon name="email" />} />
    // </Screen>
    // <ViewImageScreen />
    // <View
    //   style={{
    //     backgroundColor: '#f8f4f4',
    //     padding: 20,
    //     paddingTop: 100,
    //   }}
    // >
    //   <Card
    //     title="Red jacket for sale!"
    //     subTitle="$100"
    //     image={require('./app/assets/jacket.jpg')}
    //   />
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f7b731',
//     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
//   },
// });
