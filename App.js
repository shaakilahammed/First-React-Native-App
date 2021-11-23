import React, { useEffect, useState } from 'react';
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
  TextInput,
  Switch,
} from 'react-native';
import {
  useDimensions,
  useDeviceOrientation,
} from '@react-native-community/hooks';
import { Entypo } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// import AppText from './app/components/AppText';
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
import AppTextInput from './app/components/forms/AppTextInput';
import AppPicker from './app/components/forms/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import BasicLoginScreen from './app/screens/BasicLoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import ImageInput from './app/components/forms/ImageInput';
import ImageInputList from './app/components/forms/ImageInputList';
import RegisterScreen from './app/screens/RegisterScreen';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Camera', value: 3 },
];

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button title="Click" onPress={() => navigation.navigate('TweetDetails')} />
  );
};

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="View Tweet"
      onPress={() => navigation.navigate('TweetDetails', { id: 1 })}
    />
    {/* <Link /> */}
  </Screen>
);
const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweet Details - {route.params.id}</Text>
  </Screen>
);

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    initialRouteName="Tweets"
    screenOptions={{
      headerStyle: { backgroundColor: 'tomato' },
      headerTintColor: 'white',
    }}
  >
    <Stack.Screen
      name="Tweets"
      component={Tweets}
      options={{
        title: 'Tweet',
      }}
    />
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={({ route }) => ({ title: `Tweet Details - ${route.params.id}` })}
    />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveBackgroundColor: 'tomato',
      tabBarActiveTintColor: 'white',
      tabBarInactiveBackgroundColor: '#eee',
      tabBarInactiveTintColor: 'black',
    }}
  >
    <Tab.Screen
      name="Feed"
      component={StackNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons color={color} name="home" size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={Account}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            color={color}
            name="baby-face-outline"
            size={size}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default function App() {
  const [imageUris, setImageUris] = useState([]);
  // const [firstName, setFirstName] = useState('');
  // const [isNew, setIsNew] = useState(false);
  // const [category, setCategory] = useState(categories[0]);
  // // return <ViewImageScreen />;
  // // return <WelcomeScreen />;
  // // // const handlePress = () => console.log(require('./assets/favicon.png'));
  // // // console.log(Dimensions.get('window'));
  // // // console.log(Dimensions.get('screen'));
  // // const { landscape } = useDeviceOrientation();
  // // return (
  // //   // <SafeAreaView style={styles.container}>
  // //   //   {/* <TouchableNativeFeedback>
  // //   //     <View
  // //   //       style={{
  // //   //         paddingBottom: 20,
  // //   //         paddingTop: 20,
  // //   //         paddingLeft: 50,
  // //   //         paddingRight: 50,
  // //   //         backgroundColor: '#fff',
  // //   //       }}
  // //   //     >
  // //   //       <Text numberOfLines={1} onPress={handlePress}>
  // //   //         Hello React!
  // //   //       </Text>
  // //   //     </View>
  // //   //   </TouchableNativeFeedback> */}
  // //   //   {/* <Image source={require('./assets/favicon.png')} /> */}
  // //   //   {/* <TouchableNativeFeedback onPress={() => console.log('ITapped')}>
  // //   //     <Image
  // //   //       source={{
  // //   //         width: 200,
  // //   //         height: 200,
  // //   //         uri: 'https://picsum.photos/200',
  // //   //       }}
  // //   //     />
  // //   //   </TouchableNativeFeedback> */}
  // //   //   {/* <Button
  // //   //     color="red"
  // //   //     title="Click"
  // //   //     // onPress={() =>
  // //   //     //   Alert.alert('Title', 'Message', [
  // //   //     //     { text: 'Yes', onPress: () => console.log('Yes') },
  // //   //     //     { text: 'No', onPress: () => console.log('No') },
  // //   //     //   ])
  // //   //     // }
  // //   //     onPress={() =>
  // //   //       Alert.prompt('Tytle', 'What is your Name?', (text) =>
  // //   //         console.log(text)
  // //   //       )
  // //   //     }
  // //   //   /> */}
  // //   //   <Button title="click" onPress={() => console.log('PRessed')} />
  // //   //   <View
  // //   //     style={{
  // //   //       backgroundColor: '#000',
  // //   //       width: '50%',
  // //   //       height: landscape ? '10%' : '20%',
  // //   //     }}
  // //   //   ></View>
  // //   // </SafeAreaView>
  // //   <View
  // //     style={{
  // //       backgroundColor: 'blue',
  // //       flex: 1,
  // //       flexDirection: 'row',
  // //       justifyContent: 'center',
  // //       alignItems: 'center',
  // //       alignContent: 'center',
  // //       // flexWrap: 'wrap',
  // //     }}
  // //   >
  // //     <View
  // //       style={{ backgroundColor: 'tomato', height: 100, width: 100 }}
  // //     ></View>
  // //     <View
  // //       style={{
  // //         backgroundColor: 'black',
  // //         flexBasis: 300,
  // //         // flexGrow: 1,
  // //         flexShrink: -1,
  // //         // flex: 1,
  // //         height: 100,
  // //         // width: 100,
  // //         top: 20,
  // //         left: 20,
  // //         position: 'relative',
  // //       }}
  // //     ></View>
  // //     <View
  // //       style={{
  // //         backgroundColor: 'red',
  // //         height: 100,
  // //         width: 100,
  // //         // alignSelf: 'flex-start',
  // //       }}
  // //     ></View>
  // //   </View>
  // // );
  // //   return (
  // //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  // //       <View
  // //         style={{
  // //           backgroundColor: 'blue',
  // //           height: 100,
  // //           width: 100,
  // //           borderWidth: 10,
  // //           borderColor: 'red',
  // //           borderRadius: 10,
  // //           borderTopWidth: 20,
  // //         }}
  // //       ></View>
  // //     </View>
  // //   );
  // // }
  // // return (
  // //   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  // //     <View
  // //       style={{
  // //         backgroundColor: 'blue',
  // //         height: 100,
  // //         width: 100,
  // //         shadowColor: 'grey',
  // //         shadowOffset: { width: 20, height: 20 },
  // //         shadowOpacity: 1,
  // //         elevation: 100,
  // //         padding: 20,
  // //         paddingHorizontal: 60,
  // //         paddingLeft: 30,
  // //       }}
  // //     >
  // //       <View
  // //         style={{
  // //           backgroundColor: 'red',
  // //           width: 50,
  // //           height: 50,
  // //         }}
  // //       ></View>
  // //     </View>
  // //     <View
  // //       style={{
  // //         backgroundColor: 'tomato',
  // //         width: 100,
  // //         height: 100,
  // //         marginEnd: 56,
  // //       }}
  // //     ></View>
  // //   </View>
  // // );
  // //   return (
  // //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  // //       {/* <Text
  // //         style={{
  // //           fontFamily: 'sans-serif-thin',
  // //           fontSize: 20,
  // //           fontWeight: '900',
  // //           // fontStyle: 'italic',
  // //           color: 'tomato',
  // //           textTransform: 'uppercase',
  // //           // textDecorationLine: 'underline line-through',
  // //           // textDecorationStyle: '',
  // //           textAlign: 'center',
  // //           // textAlignVertical: '',
  // //           lineHeight: 35,
  // //         }}
  // //       >
  // //         React Native React NativeReact NativeReact Native React NativeReact
  // //         Native React NativeReact NativeReact Native React Native
  // //       </Text> */}
  // //       <AppText>I Love React Native!!!</AppText>
  // //       <Entypo name="mail" color={colors.primary} size={50} />
  // //       <AppButton
  // //         title="Login"
  // //         onPress={() => console.log('Tapped')}
  // //       ></AppButton>
  // //     </View>
  // //   );
  // // return (
  // //   // <ListingDetailsScreen />
  // //   // <WelcomeScreen />
  // //   // <MessagesScreen />
  // //   // <AccountScreen />
  // //   // <ListingScreen />
  // //   // <ViewImageScreen />

  // //   // <Screen>
  // //   //   {/* <Icon
  // //   //     name="email"
  // //   //     size={50}
  // //   //     backgroundColor={colors.danger}
  // //   //     iconColor={colors.white}
  // //   //   ></Icon> */}
  // //   //   <ListItem title="My Title" IconComponent={<Icon name="email" />} />
  // //   // </Screen>
  // //   // <ViewImageScreen />
  // //   // <View
  // //   //   style={{
  // //   //     backgroundColor: '#f8f4f4',
  // //   //     padding: 20,
  // //   //     paddingTop: 100,
  // //   //   }}
  // //   // >
  // //   //   <Card
  // //   //     title="Red jacket for sale!"
  // //   //     subTitle="$100"
  // //   //     image={require('./app/assets/jacket.jpg')}
  // //   //   />
  // //   // </View>
  // // );
  // return (
  //   <Screen>
  //     {/* <AppText>{firstName}</AppText>
  //     <TextInput
  //       style={{ borderBottomColor: colors.light, borderBottomWidth: 1 }}
  //       placeholder="First Name"
  //       onChangeText={(text) => setFirstName(text)}
  //       maxLength={5}
  //       secureTextEntry={true}
  //       keyboardType="numeric"
  //     ></TextInput> */}
  //     {/* <AppTextInput placeholder="First Name" icon="email" /> */}
  //     {/* <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} /> */}
  //     <AppPicker
  //       selectedItem={category}
  //       onSelectItem={(item) => setCategory(item)}
  //       items={categories}
  //       icon="apps"
  //       placeholder="Category"
  //     />
  //     <AppTextInput icon="email" placeholder="Email" />
  //   </Screen>
  // );
  // return <LoginScreen />;

  // return <ListingEditScreen />;
  // const requestPermission = async () => {
  //   const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  //   if (!granted) alert('You need to enable Permission');
  // };

  // useEffect(async () => {
  //   const result = requestPermission();
  // }, []);

  // const selectImage = async () => {
  //   try {
  //     const result = await ImagePicker.launchImageLibraryAsync();
  //     if (!result.cancelled) {
  //       setImageUri(result.uri);
  //     }
  //   } catch (error) {
  //     console.log('Error Reading Image', error);
  //   }
  // };
  // const handleAdd = (uri) => {
  //   setImageUris([...imageUris, uri]);
  // };
  // const handleRemove = (uri) => {
  //   setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  // };
  return (
    // <Screen>
    //   <ImageInputList
    //     imageUris={imageUris}
    //     onAddImage={handleAdd}
    //     onRemoveImage={handleRemove}
    //   />
    // </Screen>
    // <ListingEditScreen />
    // <NavigationContainer>
    //   {/* <StackNavigator /> */}
    //   <TabNavigator />
    // </NavigationContainer>
    <NavigationContainer theme={navigationTheme}>
      <AuthNavigator />
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create( {
//   container: {
//     flex: 1,
//     backgroundColor: '#f7b731',
//     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
//   },
// });
