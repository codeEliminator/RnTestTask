import { StatusBar } from 'expo-status-bar'
import { ScrollView, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { colors } from './ds/colors'
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
        <ExpandableSection title='Cocktail profile' content="A martini is a simple marriage of gin and dry vermouth (which has never enjoyed the same acclaim as its cousin, sweet vermouth). This martini variation tempers the intensity of dry vermouth with a little help from Italy in the form of Aperol. The drink’s appealing balance offers a first step toward enjoying the classic medley of vermouth, gin, and a bitter (does that formula sound familiar?).">
          <Tag text="Is a classic cocktail" />
          <Tag text="Looks layered" />
          <Tag text="Dry" />
        </ExpandableSection>
        <ExpandableSection title='Cocktail profile' content="A martini is a simple marriage of gin and dry vermouth (which has never enjoyed the same acclaim as its cousin, sweet vermouth). This martini variation tempers the intensity of dry vermouth with a little help from Italy in the form of Aperol. The drink’s appealing balance offers a first step toward enjoying the classic medley of vermouth, gin, and a bitter (does that formula sound familiar?).">
          <Tag text="Is a classic cocktail" />
          <Tag text="Looks layered" />
          <Tag text="Dry" />
        </ExpandableSection>
      </ScrollView>
    </View>
  )
}
