import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import StyledTitle from '../../Modal/styled/title';
import Input from '../../Input';

interface Props {
    query?: string;
    onSearch?: (value: string) => void;
}

const Header: React.FC<Props> = props => {
    const { query, onSearch } = props;

    return (
        <View>
            <StyledTitle>What’s your country?</StyledTitle>
            <Input value={query} onChange={onSearch} />
        </View>
    );
};

Header.propTypes = {
    query: PropTypes.string,
    onSearch: PropTypes.func,
};

Header.defaultProps = {
    query: undefined,
    onSearch: () => {},
};

export default Header;
