import React, { ReactNode, useState, useEffect } from 'react';
import Modal from '../../Modal';
import PropTypes from 'prop-types';
import Header from './header';
import List from './list';
import COUNTRIES from './countries';
import filterCollection from '../../../libs/utils/filterCollection';
// import debounce from '../../../libs/utils/debounce';

export const CountryPropTypes = {
    flagIcon: PropTypes.node.isRequired,
    prefixCode: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    // TODO: set as required when add all
    countryCode: PropTypes.string,
};

export interface CountryType {
    flagIcon: ReactNode;
    prefixCode: string;
    country: string;
    // TODO: set as required when add all
    countryCode?: string;
}

interface Props {
    isOpen?: boolean;
    onRequestClose?: () => void;
    onSelect?: (country: CountryType) => void;
}

const CountryPickerModal: React.FC<Props> = props => {
    const { isOpen, onRequestClose, onSelect } = props;

    const [query, setQuery] = useState('');
    const [filteredCountries, setFilteredCountries] = useState<CountryType[]>(
        [],
    );

    useEffect(() => {
        // TODO: debounce filter
        setFilteredCountries(
            filterCollection({
                query,
                collection: COUNTRIES,
                mapValuesToStringFn: item => item.country,
            }),
        );
    }, [query]);

    return (
        <Modal
            isOpen={isOpen}
            title={<Header onSearch={setQuery} query={query} />}
            onRequestClose={onRequestClose}
        >
            <List data={filteredCountries} onSelect={onSelect} />
        </Modal>
    );
};

CountryPickerModal.propTypes = {
    isOpen: PropTypes.bool,
    onRequestClose: PropTypes.func,
    onSelect: PropTypes.func,
};

CountryPickerModal.defaultProps = {
    isOpen: false,
    onRequestClose: () => {},
    onSelect: () => {},
};

export default CountryPickerModal;
