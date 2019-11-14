import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import Title from './title';
import StyledViewHeader from './styled/header';
import StyledViewTitle from './styled/title';
import StyledViewIcon from './styled/icon';

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
            <StyledViewHeader>
                <StyledViewTitle>
                    <RenderIf isTrue={!!icon}>
                        <StyledViewIcon>{icon}</StyledViewIcon>
                    </RenderIf>
                    <Title>{title}</Title>
                </StyledViewTitle>
                {actions}
            </StyledViewHeader>
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
