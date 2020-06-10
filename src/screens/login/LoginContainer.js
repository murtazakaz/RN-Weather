import React from 'react'
import { StyleSheet } from 'react-native';

import LoginComponent from './LoginComponent'


const LoginContainer = props => {

    const _handlePress = () => {
        props.navigation.navigate('CreateAccount')
    }

    return (
        <LoginComponent
            handlePress={_handlePress}
        />
    )
}


const styles = StyleSheet.create({})

export default LoginContainer;
