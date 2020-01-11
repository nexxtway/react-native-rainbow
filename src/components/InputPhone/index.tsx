import React, { ReactNode, useState } from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import { Label, Error } from '../Input/styled/index';
import {
    LeftElement,
    InputContainer,
    PrefixCode,
    StyledInput,
    Divider,
    ArrowDownIcon,
    ButtonContent,
} from './styled';
import CountryPickerModal, { CountryType } from './countyPickerModal';
import getCountryFromValue from './helpers/getCountryFromValue';
import { BaseProps } from '../types';
import withReduxForm from '../../hocs/withReduxForm';

interface Value {
    countryCode?: string;
    isoCode?: string;
    phone?: string;
}

interface Props extends BaseProps {
    label?: ReactNode;
    onChange?: (value: Value) => void;
    value?: Value;
    placeholder?: string;
    disabled?: boolean;
    error?: ReactNode;
    autoFocus?: boolean;
}

const defaultCountry = {
    flagIcon: <Image source={require('./flagImages/united-states.png')} />,
    isoCode: 'us',
    country: 'United States',
    countryCode: '+1',
};

const InputPhone: React.FC<Props> = props => {
    const {
        label,
        onChange = () => {},
        value = {},
        placeholder,
        disabled,
        error,
        autoFocus,
        style,
    } = props;
    const isEnabled = !disabled;
    const { isoCode = '', phone = '' } = value;

    const [isFocused, setFocusState] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCountry, setCountry] = useState<CountryType>(
        () => getCountryFromValue(isoCode) || defaultCountry,
    );

    const selectCountry = (country: CountryType) => {
        setCountry(country);
        setIsOpen(false);
        handleChange(phone);
    };

    const handleChange = (phoneNumberValue: string = '') => {
        onChange({
            countryCode: selectedCountry.countryCode,
            isoCode: selectedCountry.isoCode,
            phone: phoneNumberValue,
        });
    };

    return (
        <View style={style}>
            <RenderIf isTrue={!!label}>
                <Label>{label}</Label>
            </RenderIf>
            <InputContainer>
                <StyledInput
                    onChangeText={handleChange}
                    value={phone}
                    placeholder={placeholder}
                    editable={isEnabled}
                    selectTextOnFocus={isEnabled}
                    error={error}
                    isFocused={isFocused}
                    onBlur={() => setFocusState(false)}
                    onFocus={() => setFocusState(true)}
                    disabled={disabled}
                    keyboardType="number-pad"
                    autoFocus={autoFocus}
                />
                <LeftElement>
                    <ButtonContent onPress={() => setIsOpen(true)}>
                        {selectedCountry.flagIcon}
                        <ArrowDownIcon />
                    </ButtonContent>
                    <Divider />
                    <PrefixCode>{selectedCountry.countryCode}</PrefixCode>
                </LeftElement>
            </InputContainer>
            <RenderIf isTrue={!!error}>
                <Error>{error}</Error>
            </RenderIf>
            <CountryPickerModal
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                onSelect={selectCountry}
            />
        </View>
    );
};

InputPhone.propTypes = {
    label: PropTypes.node,
    onChange: PropTypes.func,
    value: PropTypes.shape({
        countryCode: PropTypes.string,
        isoCode: PropTypes.string,
        phone: PropTypes.string,
    }),
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.node,
    autoFocus: PropTypes.bool,
    style: PropTypes.object,
};

InputPhone.defaultProps = {
    label: undefined,
    onChange: () => {},
    value: {},
    placeholder: undefined,
    disabled: false,
    error: undefined,
    autoFocus: false,
    style: undefined,
};

export default withReduxForm(InputPhone);
