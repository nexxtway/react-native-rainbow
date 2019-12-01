import React from 'react';
import PropTypes from 'prop-types';
import StyledTitle from './styled/title';

interface Props {
    title?: any;
}

const Header: React.FC<Props> = ({ title }) => {
    if (typeof title === 'string') {
        return <StyledTitle>{title}</StyledTitle>;
    }
    return title;
};

Header.propTypes = {
    title: PropTypes.node,
};

Header.defaultProps = {
    title: null,
};

export default Header;
