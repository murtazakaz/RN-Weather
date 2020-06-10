import * as React from "react"
import { View } from "react-native"
import { Text, Icon } from "../"
import { spacing, typography, color } from "../../theme"

const BULLET_ITEM = {
  flexDirection: "row",
  marginTop: spacing[4],
  paddingBottom: spacing[4],
  borderBottomWidth: 1,
  borderBottomColor: color.black,
}
const BULLET_CONTAINER = {
  marginRight: spacing[4] - 1,
  marginTop: spacing[2],
}
const BULLET = {
  width: 8,
  height: 8,
}
const BULLET_TEXT = {
  flex: 1,
  fontFamily: typography.primary,
  color: color.primary,
  fontSize: 15,
  lineHeight: 22,
}



export const BulletItem = props => {
  return (
    <View style={BULLET_ITEM}>
      <Icon icon="bullet" containerStyle={BULLET_CONTAINER} style={BULLET} />
      <Text style={BULLET_TEXT} text={props.text} />
    </View>
  )
}
