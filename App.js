// import React from 'react';
// import {
//   StyleSheet,
//   Button,
//   View,
//   SafeAreaView,
//   Text,
//   Alert,
// } from 'react-native';
// import Constants from 'expo-constants';

// function Separator() {
//   return <View style={styles.separator} />;
// }

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View>
//         <Text style={styles.title}>
//           The title and onPress handler are required. It is recommended to set
//           accessibilityLabel to help make your app usable by everyone.
//         </Text>
//         <Button
//           title="Sign in"
//           onPress={() => Alert.alert('Lets Sign in But Not Now')}
//         />
//       </View>
//       <Separator />
//       <View>
        
//         <Button
//           title="Join Jakoo"
//           color="#f194ff"
//           onPress={() => Alert.alert('HEY JAKOOOOOOOO')}
//         />
//       </View>
//       <Separator />
     
//       <View>
//         <Text style={styles.title}>
//           This layout strategy lets the title define the width of the button.
//         </Text>
//         <View style={styles.fixToText}>
//           <Button
//             title="Forgot username"
//             onPress={() => Alert.alert('WHYYYYY')}
//           />
//           <Button
//             title="Forget password"
//             onPress={() => Alert.alert('NOOOOO Stupid')}
//           />
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: Constants.statusBarHeight,
//     marginHorizontal: 16,
//   },
//   title: {
//     textAlign: 'center',
//     marginVertical: 8, 
//   },
//   fixToText: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   separator: {
//     marginVertical: 8,
//     borderBottomColor: '#737373',
//     borderBottomWidth: StyleSheet.hairlineWidth,
//   },
// });






// import React, { Component } from 'react';
// import { View, ScrollView, TextInput, InputAccessoryView, Button } from 'react-native';

// export default class UselessTextInput extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {text: 'Placeholder Text'};
//   }


//   render() {
//     const inputAccessoryViewID = "uniqueID";
//     return (
//       <View>
//         <ScrollView keyboardDismissMode="interactive">
//           <TextInput
//             style={{
//               padding: 10,
//               paddingTop: 50,
//             }}
//             inputAccessoryViewID={inputAccessoryViewID}
//             onChangeText={text => this.setState({text})}
//             value={this.state.text}
//           />
//         </ScrollView>
//         <InputAccessoryView nativeID={inputAccessoryViewID}>
//           <Button
//             onPress={() => this.setState({text: 'Placeholder Text'})}
//             title="Reset Text"
//           />
//         </InputAccessoryView>
//       </View>

//     );
//   }
// }

