import React from 'react';
import {
    TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { Text } from '../index';
import { mergeAll, flatten } from 'ramda';
import { viewPresets, textPresets } from './ButtonComponent.presets';

const ButtonComponent = (props) => {
    const {
        preset = "primary",
        tx,
        text,
        style: styleOverride,
        textStyle: textStyleOverride,
        children,
        ...rest
    } = props;

    const viewStyle = mergeAll(flatten([viewPresets[preset] || viewPresets.primary, styleOverride]))
    const textStyle = mergeAll(
        flatten([textPresets[preset] || textPresets.primary, textStyleOverride]),
    )

    const content = children || <Text tx={tx} text={text} style={textStyle} />

    return (
        <TouchableOpacity style={viewStyle} {...rest}>
            {content}
        </TouchableOpacity>
    );
}

ButtonComponent.propTypes = {
    onPress: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    style: PropTypes.any,
    textStyle: PropTypes.any,
    children: PropTypes.arrayOf([PropTypes.element])
};

export default ButtonComponent;