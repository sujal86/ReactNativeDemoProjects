import React from 'react';
import {StyleSheet, Appearance} from 'react-native';
// import default_theme from './default_theme';
// import dark_theme from './dark_theme';
import darkTheme from './themes'
import defaultTheme from './themes';

const Common = StyleSheet.create({
  // text: {
  //   color:
  //     Appearance.getColorScheme() === 'dark'
  //       ? darkTheme.darkTheme.dark.Colors.text
  //       : defaultTheme.defaultTheme.light.Colors.text
  // },
    textInput: {
      backgroundColor: 
        Appearance.getColorScheme() === 'dark'
          ? dark_theme.Colors.inputBackground
          : default_theme.Colors.inputBackground,
      borderColor: 
        Appearance.getColorScheme() === 'dark'
          ? dark_theme.Colors.borders
          : default_theme.Colors.borders,
      borderWidth: 1,
    },
    buttons: {
      color: 
        Appearance.getColorScheme() === 'dark' 
        ? dark_theme.Colors.button 
        : default_theme.Colors.button,
    },
});

export default Common;
