import { NativeModules, Platform } from 'react-native';

import COUNTRIES from '../countyPickerModal/countries';

const deviceLocale =
    Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale ||
          NativeModules.SettingsManager.settings.AppleLanguages[0]
        : NativeModules.I18nManager.localeIdentifier;

const defaultLocale = deviceLocale.split('_')[1];

export default function getCountryFromValue(isoCode?: string) {
    const userCountry = COUNTRIES.find(country => country.isoCode === isoCode);

    if (userCountry) {
        return userCountry;
    }

    return COUNTRIES.find(
        country => country.isoCode === defaultLocale.toLowerCase(),
    );
}
