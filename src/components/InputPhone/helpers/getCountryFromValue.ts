import COUNTRIES from '../countyPickerModal/countries';

export default function getCountryFromValue(isoCode?: string) {
    return COUNTRIES.find(country => country.isoCode === isoCode);
}
