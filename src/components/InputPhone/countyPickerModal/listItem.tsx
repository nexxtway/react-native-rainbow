import React from 'react';
import PropTypes from 'prop-types';
import { CountryType, CountryPropTypes } from './index';
import { ListItemContainer, RightContent, Title, Prefix } from './styled';

interface Props {
    item: CountryType;
    onPress?: (country: CountryType) => void;
}

const ListItem: React.FC<Props> = props => {
    const { item, onPress = () => {} } = props;
    const { flagIcon, country, countryCode } = item;

    return (
        <ListItemContainer onPress={() => onPress(item)}>
            <RightContent>
                {flagIcon}
                <Title>{country}</Title>
            </RightContent>
            <Prefix>{countryCode}</Prefix>
        </ListItemContainer>
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
