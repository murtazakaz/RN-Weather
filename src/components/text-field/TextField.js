import * as React from "react"
import { View, TextInput } from "react-native"
import { color, spacing, typography } from "../../theme"
import { translate } from "../../i18n"
import { Text } from "../"
import { mergeAll, flatten } from "ramda"

// base styling for the container
const CONTAINER = {
  paddingVertical: spacing[2],
}

// base styling for the TextInput
const INPUT = {
  fontFamily: typography.primary,
  color: color.black,
  minHeight: 44,
  fontSize: 18,
  backgroundColor: color.palette.white,
  borderWidth: 0.3,
  borderRadius: 5,
  marginVertical: spacing[1],
  paddingHorizontal: spacing[3]
}



const enhance = (style, styleOverride) => {
  return mergeAll(flatten([style, styleOverride]))
}

/**
 * label and an input together.
 */
export const TextField = props => {
  const {
    placeholderTx,
    placeholder,
    labelTx,
    label,
    preset = "default",
    style: styleOverride,
    inputStyle: inputStyleOverride,
    forwardedRef,
    ...rest
  } = props

  const PRESETS = {
    default: {},
  }

  let containerStyle = { ...CONTAINER, ...PRESETS[preset] }
  containerStyle = enhance(containerStyle, styleOverride)

  let inputStyle = INPUT
  inputStyle = enhance(inputStyle, inputStyleOverride)
  const actualPlaceholder = placeholderTx ? translate(placeholderTx) : placeholder

  return (
    <View style={containerStyle}>
      <Text preset="fieldLabel" tx={labelTx} text={label} />
      <TextInput
        placeholder={actualPlaceholder}
        placeholderTextColor={color.palette.lighterGrey}
        underlineColorAndroid={color.transparent}
        {...rest}
        style={inputStyle}
        ref={forwardedRef}
      />
    </View>
  )
}
