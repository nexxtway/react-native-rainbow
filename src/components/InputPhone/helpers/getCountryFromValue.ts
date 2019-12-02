import COUNTRIES from '../countyPickerModal/countries';

export default function getCountryFromValue(countryCode?: string) {
    return COUNTRIES.find(country => country.countryCode === countryCode);
}
