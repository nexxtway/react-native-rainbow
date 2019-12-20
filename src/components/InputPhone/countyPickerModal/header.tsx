import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Title } from '../../Modal/styled';
import { InputSearch, MagnifyingIcon } from './styled';

interface Props {
    query?: string;
    onSearch?: (value: string) => void;
}

const Header: React.FC<Props> = props => {
    const { query, onSearch } = props;

    return (
        <View>
            <Title>What’s your country?</Title>
            <InputSearch
                value={query}
                onChange={onSearch}
                icon={<MagnifyingIcon />}
            />
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
