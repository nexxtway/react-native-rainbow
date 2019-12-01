import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

interface Props {
    title?: any;
}

const Header: React.FC<Props> = ({ title }) => {
    if (typeof title === 'string') {
        // TODO: make this styled title
        return <Text>{title}</Text>;
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
