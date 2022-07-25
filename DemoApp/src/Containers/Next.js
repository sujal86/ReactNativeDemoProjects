import React, { useState, useEffect } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import { useDispatch } from 'react-redux'
import { useTheme } from '@/Hooks'
import { changeTheme } from '@/Store/Theme'

const Next = ({ navigation }) => {
  const [changed, setChanged] = useState(false)

  const { Common, Gutters, Layout } = useTheme()
  // const dispatch = useDispatch()

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
        <Text style={Common.text}>NEXT SCREEN</Text>
        <TextInput style={Common.textInput} />
        <TextInput style={Common.textInput} />
        {/* <Button
          title="Change to myTheme"
          onPress={() => {
            onChangeTheme()
            console.log('onPRESS', changed)
          }}
        /> */}
        <Button title="Prev" onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  )
}

export default Next
