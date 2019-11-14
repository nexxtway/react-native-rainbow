import React from 'react';
import PropTypes from 'prop-types';
import StyledTextTitle from './styled/textTitle';

interface Props {
    children?: any;
}

const HeaderTitle: React.FC<Props> = props => {
    const { children } = props;
    if (typeof children === 'string' || typeof children === 'number') {
        return <StyledTextTitle numberOfLines={1}>{children}</StyledTextTitle>;
    }
    return children;
};

HeaderTitle.propTypes = {
    children: PropTypes.node,
};

HeaderTitle.defaultProps = {
    children: undefined,
};

export default HeaderTitle;
