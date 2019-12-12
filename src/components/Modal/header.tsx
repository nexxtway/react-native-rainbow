import React from 'react';
import PropTypes from 'prop-types';
import { Title } from './styled';

interface Props {
    title?: any;
}

const Header: React.FC<Props> = ({ title }) => {
    if (typeof title === 'string') {
        return <Title>{title}</Title>;
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
