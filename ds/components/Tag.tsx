import React from 'react'
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native'

import { colors } from '../colors'

interface TagProps {
  text: string
}

const Tag: React.FC<TagProps> = ({ text }) => {
  const onPress = () => {
    Alert.alert(`${text} is pressed`)
  }
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.tag}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  tag: {
    backgroundColor: colors.surface.accent,
    borderRadius: 20,
    height: 32,
    paddingVertical: 4,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    marginRight: 5,
    marginBottom: 5
  },
  text: {
    color: colors.text.primary,
    fontSize: 12
  }
})

export default Tag
