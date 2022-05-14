/**
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 import {
   Colors,
   Header,
 } from 'react-native/Libraries/NewAppScreen';
 
 
 export default HomeScreen = () => {
     
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   const styles = StyleSheet.create({
     sectionContainer: {
       marginTop: 32,
       paddingHorizontal: 24,
     },
     sectionTitle: {
       fontSize: 24,
       fontWeight: '600',
     },
     sectionDescription: {
       marginTop: 8,
       fontSize: 18,
       fontWeight: '400',
     },
     highlight: {
       fontWeight: '700',
     },
   });
 
   return (
     <SafeAreaView style={backgroundStyle}>
       <StatusBar barStyle={'dark-content'} />
       <ScrollView
         contentInsetAdjustmentBehavior="automatic"
         style={backgroundStyle}>
         <Header />
         <View style={{ backgroundColor: isDarkMode ? Colors.black : Colors.white }}>

         </View>
       </ScrollView>
     </SafeAreaView>
   );
 };