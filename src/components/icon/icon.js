import * as React from "react"
import { View, Image, ImageStyle } from "react-native"
import { icons } from "./icons"

export const Icon = props => {
  const { style, icon, containerStyle } = props;

  return (
    <View style={containerStyle}>
      <Image style={style} source={icons[icon]} />
    </View>
  )
}
