import * as RNLocalize from 'react-native-localize';
import COUNTRIES from '../countyPickerModal/countries';

export default function getCountryFromValue(isoCode?: string) {
    if (isoCode === '') {
        const currentCountry = RNLocalize.getCountry();
        return COUNTRIES.find(
            country => country.isoCode === currentCountry.toLowerCase(),
        );
    }

    return COUNTRIES.find(country => country.isoCode === isoCode);
}
