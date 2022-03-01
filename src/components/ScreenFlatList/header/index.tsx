import React, { ReactNode } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
    HeaderAreaView,
    HeaderContainer,
    StyledButton,
    ArrowBackIcon,
    Title,
    TitleContainer,
} from './styled';

interface Props {
    title?: ReactNode;
}

const Header = ({ title }: Props) => {
    const { goBack } = useNavigation();

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <HeaderAreaView>
                <HeaderContainer>
                    <StyledButton
                        icon={<ArrowBackIcon />}
                        iconPosition="left"
                        variant="base"
                        onPress={goBack}
                    />
                    <TitleContainer>
                        <Title numberOfLines={1}>{title}</Title>
                    </TitleContainer>
                </HeaderContainer>
            </HeaderAreaView>
        </>
    );
};

export default Header;
