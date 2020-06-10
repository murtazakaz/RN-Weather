import React from 'react';
import { SafeAreaView } from 'react-native';

import PropTypes from 'prop-types';

import { spacing } from '../../theme';

const CONTAINER = {
    flex: 1,
    padding: spacing[4],
  }

const ContainerView = props => {
    const {  children, style, ...rest } = props;   
    return (
        <SafeAreaView style={[CONTAINER, style]}  {...rest} >
            {children}
        </SafeAreaView>
    )
}

ContainerView.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element)
}

export default ContainerView;
