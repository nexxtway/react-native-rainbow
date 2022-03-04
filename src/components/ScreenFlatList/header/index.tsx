import React, { ReactNode } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
    HeaderAreaView,
    HeaderContainer,
    StyledButton,
    ArrowBackIcon,
    Title,
    StyledButtonLabel,
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
                        label={<StyledButtonLabel>Back</StyledButtonLabel>}
                        variant="base"
                        onPress={goBack}
                    />
                    <Title numberOfLines={1}>{title}</Title>
                </HeaderContainer>
            </HeaderAreaView>
        </>
    );
};

export default Header;
