import { StatusBar } from 'expo-status-bar'
import { ScrollView, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { colors } from './ds/colors'
import data from './data/mock.json'
import ExpandableSection from './ds/components/ExpandableSection'
import Tag from './ds/components/Tag'

export const Screen1: React.FC<{}> = () => {
  const insets = useSafeAreaInsets()

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.surface.primary
      }}
    >
      <StatusBar style='light' />
      <ScrollView
        style={{
          flex: 1
        }}
        alwaysBounceVertical={false}
        contentContainerStyle={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom
        }}
      >
        
        <ExpandableSection title={data.section.title}>
          {data.section.tags.map(tag => (
            <Tag key={tag} text={tag} />
          ))}
        </ExpandableSection>
        <ExpandableSection title={data.sectionWithDescription.title} content={data.sectionWithDescription.description}>
          {data.sectionWithDescription.tags.map(tag => (
            <Tag key={tag} text={tag} />
          ))}
        </ExpandableSection>
        
      </ScrollView>
    </View>
  )
}
