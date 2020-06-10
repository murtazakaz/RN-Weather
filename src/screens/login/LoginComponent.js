import React from 'react';

import { Text, TextField } from '../../components';
import ContainerView from '../../components/container/ContainerView';
import ButtonComponent from '../../components/button/ButtonComponent';
import { color, spacing } from '../../theme';

const TEXT = {
    color: color.palette.white,
    fontFamily: "Montserrat",
}

const BOLD = { fontWeight: "bold" }

const CONTINUE = {
    paddingVertical: spacing[4],
    paddingHorizontal: spacing[4],
    backgroundColor: "#5D2555",
}

const CONTINUE_TEXT = {
    ...TEXT,
    ...BOLD,
    fontSize: 13,
    letterSpacing: 2,
}


const LoginComponent = props => {
    const { handlePress } = props;

    return (
        <ContainerView style={{ justifyContent: 'center'}}>
            <Text style={{textAlign: 'center', fontSize: 22}}>Login</Text>
            <TextField
                allowFontScaling={true}
                onChangeText={() => { }}
                placeholder="Email"
                placeholderTextColor="#CDD4DA"
                rejectResponderTermination={true}
                label="Email"
                style={
                    {
                        "color": color.black,
                        "fontFamily": "Montserrat",
                        "fontSize": 18,
                        "minHeight": 44
                    }
                }
                underlineColorAndroid="rgba(0, 0, 0, 0)"
                value=""
                keyboardType="email-address"
            />
            <TextField
                onChangeText={() => { }}
                value=""
                name="password"
                label="Password"
                placeholder="Password"
                secureTextEntry={true}
                style={{ "color": color.black }}
            />
            <ButtonComponent
                style={CONTINUE}
                textStyle={CONTINUE_TEXT}
                onPress={handlePress}
                text="Login"
            />
        </ContainerView>
    )
}

export default LoginComponent;
