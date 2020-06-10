import React from 'react';
import { Button } from 'react-native';

import { Text } from '../../components';
import ContainerView from '../../components/container/ContainerView';

const CreateAccountComponent = props => {
    const { handlePress } = props;
    return (
        <ContainerView>
            <Text>Create Account Component</Text>
            <Button title="Login" onPress={handlePress} />
        </ContainerView>
    )
}

export default CreateAccountComponent;
