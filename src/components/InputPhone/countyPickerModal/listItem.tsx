import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import { CountryType, CountryPropTypes } from './index';

interface Props {
    item: CountryType;
    onPress?: (country: CountryType) => void;
}

const ListItem: React.FC<Props> = props => {
    const { item, onPress = () => {} } = props;
    const { flagIcon, country, prefixCode } = item;

    return (
        <TouchableOpacity
            onPress={() => onPress(item)}
            // TODO: make this styled component
            style={{ flexDirection: 'row' }}
        >
            {flagIcon}
            <Text>{country}</Text>
            <Text>{prefixCode}</Text>
        </TouchableOpacity>
    );
};

ListItem.propTypes = {
    item: PropTypes.shape(CountryPropTypes).isRequired,
    onPress: PropTypes.func,
};

ListItem.defaultProps = {
    onPress: () => {},
};

export default ListItem;
