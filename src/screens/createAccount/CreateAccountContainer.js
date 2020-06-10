import React, { Component } from 'react';
import CreateAccountComponent from './CreateAccountComponent';

const CreateAccountContainer = props => {

    const _handlePress = () => {
        props.navigation.navigate('Login')
    }

    return (
        <CreateAccountComponent 
            handlePress={_handlePress} 
        />
    )
}

export default CreateAccountContainer;
