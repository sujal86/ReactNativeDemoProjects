/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import { StyleSheet } from 'react-native'
import buttonStyles from './components/Buttons'
/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function ({ Colors, ...args }) {
  return {
    button: buttonStyles({ Colors, ...args }),
    ...StyleSheet.create({
      backgroundPrimary: {
        backgroundColor: Colors.primary,
      },
      backgroundReset: {
        backgroundColor: Colors.transparent,
      },
      textInput: {
        minWidth: 60,
        borderWidth: 1,
        borderColor: Colors.border,
        backgroundColor: Colors.inputBackground,
        color: Colors.text,
        minHeight: 30,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
      },
      text: {
        color: Colors.text,
        fontWeight: 'bold',
      },
    }),
  }
}
