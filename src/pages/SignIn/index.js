import React from 'react';
import {
    View, 
    Text,
    Platform
} from 'react-native';

import {
    Background, 
    Container, 
    Logo, 
    AreaInput, 
    Input,
    SubmitButton,
    SubmitText,
    Link,
    Linktext
} from './styles';

import {useNavigation} from '@react-navigation/native';

export default function SignIn(){
    const navigation = useNavigation();
    return(
        <Background>
            <Container
                behavior={Platform.OS ==='ios' ? 'padding': ''}
                enabled
            >
                <Logo
                    source={require('../../assets/logo.png')}
                />

                <AreaInput>
                    <Input
                        placeholder="Seu E-mail"
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Sua Senha"
                    />
                </AreaInput>

                <Link onPress={() => navigation.navigate('Forgot Password')}>
                    <Linktext>Esqueci minha senha</Linktext>
                </Link>

                <SubmitButton activeOpacity={0.7}>
                    <SubmitText>Acessar</SubmitText>
                </SubmitButton>

                <Link onPress={() => navigation.navigate('Sign Up')}>
                    <Linktext>Crie sua conta</Linktext>
                </Link>
            </Container>
        </Background>
    )
}