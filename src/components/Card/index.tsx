import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Body from './body';
import StyledViewContainer from './styled/container';
import StyledViewFooter from './styled/footer';
import RenderIf from '../RenderIf';
import { BaseProps } from '../types';

interface Props extends BaseProps {
    title?: ReactNode;
    icon?: ReactNode;
    actions?: ReactNode;
    footer?: ReactNode;
    isLoading?: boolean;
    children?: ReactNode;
}

const Card: React.FC<Props> = props => {
    const { title, icon, actions, footer, isLoading, children, style } = props;
    const showFooter = !!(footer && !isLoading);

    return (
        <StyledViewContainer style={style}>
            <Header title={title} icon={icon} actions={actions} />
            <Body isLoading={isLoading}>{children}</Body>
            <RenderIf isTrue={showFooter}>
                <StyledViewFooter>{footer}</StyledViewFooter>
            </RenderIf>
        </StyledViewContainer>
    );
};

Card.propTypes = {
    title: PropTypes.node,
    icon: PropTypes.node,
    actions: PropTypes.node,
    footer: PropTypes.node,
    isLoading: PropTypes.bool,
    children: PropTypes.node,
    style: PropTypes.object,
};

Card.defaultProps = {
    title: null,
    icon: null,
    actions: null,
    footer: null,
    isLoading: false,
    children: null,
    style: undefined,
};

export default Card;
