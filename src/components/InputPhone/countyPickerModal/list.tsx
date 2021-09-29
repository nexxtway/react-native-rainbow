import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { CountryType, CountryPropTypes } from './index';
import ListItem from './listItem';
import { Divider } from './styled';

interface Props {
    data?: CountryType[];
    onSelect?: (country: CountryType) => void;
}

const List: React.FC<Props> = props => {
    const { data = [], onSelect } = props;

    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <ListItem item={item} onPress={onSelect} />}
            keyExtractor={item => item.country}
            // TODO: make a separator styled component
            ItemSeparatorComponent={() => <Divider />}
            // TODO: add optimizations
            // initialNumToRender={20}
            // initialScrollIndex={findCountryIndex(countries, selectedCountry.country)}
        />
    );
};

List.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape(CountryPropTypes).isRequired),
    onSelect: PropTypes.func,
};

List.defaultProps = {
    data: [],
    onSelect: () => {},
};

export default List;
