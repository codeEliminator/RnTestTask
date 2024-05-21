import React, { useState, ReactNode, useRef, useEffect } from 'react'
import {
  View,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
  Animated
} from 'react-native'
import { colors } from '../colors'
import Text from './Text'
import { FontAwesome } from '@expo/vector-icons'

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true)
}

interface ExpandableSectionProps {
  title: string
  children: ReactNode
  content?: string
}

const ExpandableSection: React.FC<ExpandableSectionProps> = ({ title, children, content }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const rotateAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(rotateAnim, {
      toValue: isExpanded ? 1 : 0,
      duration: 300,
      useNativeDriver: true
    }).start()
  }, [isExpanded, rotateAnim])

  const toggleExpansion = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    setIsExpanded(!isExpanded)
  }

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg']
  })

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={toggleExpansion} style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.title}>{title}</Text>
            <Animated.View style={{ transform: [{ rotate }] }}>
              <FontAwesome
                name="chevron-down"
                size={14}
                color={colors.text.primary}
              />
            </Animated.View>
          </View>
        </TouchableOpacity>
        {isExpanded && (
          <View style={styles.content}>
            {content && <Text>{content}</Text>}
            <View style={[styles.childrenContainer, {marginTop: content ? 25 : 5}]}>{children}</View>
          </View>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapper: {
    width: '95%',
    marginBottom: 10,
    backgroundColor: colors.surface.secondary,
    borderRadius: 15
  },
  header: {
    padding: 20
  },
  headerContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text.primary
  },
  content: {
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
  },
  childrenContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    
  }
})

export default ExpandableSection
