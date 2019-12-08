import React, { ReactNode, useState } from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import StyledLabel from '../Input/styled/label';
import StyledError from '../Input/styled/error';
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

interface Value {
    countryCode?: string;
    phone?: string;
}

interface Props extends BaseProps {
    label?: ReactNode;
    onChange?: (value: Value) => void;
    value?: Value;
    placeholder?: string;
    disabled?: boolean;
    error?: ReactNode;
}

const defaultCountry = {
    flagIcon: <Image source={require('./flagImages/united-states.png')} />,
    prefixCode: '+1',
    country: 'United States',
    countryCode: 'us',
};

const InputPhone: React.FC<Props> = props => {
    const {
        label,
        onChange = () => {},
        value = {},
        placeholder,
        disabled,
        error,
        style,
    } = props;
    const isEnabled = !disabled;
    const { countryCode = '', phone = '' } = value;

    const [isFocused, setFocusState] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCountry, setCountry] = useState<CountryType>(
        () => getCountryFromValue(countryCode) || defaultCountry,
    );

    const selectCountry = (country: CountryType) => {
        setCountry(country);
        setIsOpen(false);
    };

    const handleChange = (phoneValue: string) => {
        onChange({
            countryCode: selectedCountry.countryCode,
            phone: phoneValue,
        });
    };

    return (
        <View style={style}>
            <RenderIf isTrue={!!label}>
                <StyledLabel>{label}</StyledLabel>
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
                />
                <LeftElement>
                    <ButtonContent onPress={() => setIsOpen(true)}>
                        {selectedCountry.flagIcon}
                        <ArrowDownIcon />
                    </ButtonContent>
                    <Divider />
                    <PrefixCode>{selectedCountry.prefixCode}</PrefixCode>
                </LeftElement>
            </InputContainer>
            <RenderIf isTrue={!!error}>
                <StyledError>{error}</StyledError>
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
        phone: PropTypes.string,
    }),
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.node,
    style: PropTypes.object,
};

InputPhone.defaultProps = {
    label: undefined,
    onChange: () => {},
    value: {},
    placeholder: undefined,
    disabled: false,
    error: undefined,
    style: undefined,
};

export default InputPhone;
