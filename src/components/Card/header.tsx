import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import Title from './title';
import { HeaderContainer, TitleContent, Icon } from './styled';

interface Props {
    title?: ReactNode;
    icon?: ReactNode;
    actions?: ReactNode;
}

const Header: React.FC<Props> = props => {
    const { title, icon, actions } = props;
    const isShowed = !!(title || icon || actions);

    return (
        <RenderIf isTrue={isShowed}>
            <HeaderContainer>
                <TitleContent>
                    <RenderIf isTrue={!!icon}>
                        <Icon>{icon}</Icon>
                    </RenderIf>
                    <Title>{title}</Title>
                </TitleContent>
                {actions}
            </HeaderContainer>
        </RenderIf>
    );
};

Header.propTypes = {
    title: PropTypes.node,
    icon: PropTypes.node,
    actions: PropTypes.node,
};

Header.defaultProps = {
    title: undefined,
    icon: undefined,
    actions: undefined,
};

export default Header;
