import React, { useState } from 'react'
import { View, Text, Button, TextInput, Appearance } from 'react-native'
import { useDispatch } from 'react-redux'
import { useTheme } from '@/Hooks'
import { changeTheme } from '@/Store/Theme'

const ExampleContainer = ({ navigation }) => {
  const [changed, setChanged] = useState(false)
  const colorScheme = Appearance.getColorScheme()
  const { Common, Gutters, Layout } = useTheme()
  const dispatch = useDispatch()

  if (colorScheme === 'dark') {
    dispatch(changeTheme({ theme: 'default_dark' }))
  } else {
    dispatch(changeTheme({ theme: 'myTheme' }))
  }

  // const onChangeTheme = () => {
  //   setChanged(!changed)
  //   console.log('State changed', changed)
  //   dispatch(changeTheme({ theme: changed ? 'myTheme' : 'default_dark' }))
  // }

  return (
    <View style={[Layout.fill, Layout.colVCenter, Gutters.smallHPadding]}>
      <View
        style={[
          Layout.row,
          Layout.colCenter,
          Gutters.smallHPadding,
          Gutters.largeVMargin,
          Common.backgroundPrimary,
        ]}
      >
        <Text style={Common.text}>Hello User</Text>
        <TextInput style={Common.textInput} />
        {/* <Switch onValueChange={onChangeTheme} value={changed} /> */}
        {/* <Button
          title="Change to myTheme"
          onPress={() => {
            onChangeTheme()
            console.log('onPRESS', changed)
          }}
        /> */}
        <Button
        style={{backgroundColor: 'white'}}
          title="Next"
          color={'red'}
          onPress={() =>
            navigation.navigate('Next', {
              themeState: changed,
            })
          }
        />
      </View>
    </View>
  )
}

export default ExampleContainer
