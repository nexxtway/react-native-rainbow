import React, { ReactNode, useState } from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import { Label, Error } from '../Input/styled';
import useReactHookForm from '../../hooks/useReactHookForm';
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
    isoCode?: string;
    phone?: string;
}

interface Props extends BaseProps {
    label?: ReactNode;
    onChange?: (value: Value) => void;
    onFocus?: (value: Value) => void | undefined;
    onBlur?: (value: Value) => void | undefined;
    value?: Value;
    placeholder?: string;
    disabled?: boolean;
    error?: ReactNode;
    autoFocus?: boolean;
    [key: string]: unknown;
}

const defaultCountry = {
    flagIcon: <Image source={require('./flagImages/united-states.png')} />,
    isoCode: 'us',
    country: 'United States',
    countryCode: '+1',
};

const InputPhone = React.forwardRef<any, Props>((props, ref) => {
    const {
        label,
        onChange = () => {},
        onFocus = () => {},
        onBlur = () => {},
        value = {},
        placeholder,
        disabled,
        error,
        autoFocus,
        style,
        ...rest
    } = useReactHookForm(props);
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

    const handleFocus = () => {
        setFocusState(true);
        onFocus(value);
    };

    const handleBlur = () => {
        setFocusState(false);
        onBlur(value);
    };

    return (
        <View style={style}>
            <RenderIf isTrue={!!label}>
                <Label>{label}</Label>
            </RenderIf>
            <InputContainer>
                <StyledInput
                    blurOnSubmit={false}
                    {...rest}
                    onChangeText={handleChange}
                    value={phone}
                    placeholder={placeholder}
                    editable={isEnabled}
                    selectTextOnFocus={isEnabled}
                    error={error}
                    isFocused={isFocused}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    disabled={disabled}
                    keyboardType="number-pad"
                    autoFocus={autoFocus}
                    ref={ref}
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
});

InputPhone.propTypes = {
    label: PropTypes.node,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    value: PropTypes.shape({
        countryCode: PropTypes.string,
        isoCode: PropTypes.string,
        phone: PropTypes.string,
    }),
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.node,
    autoFocus: PropTypes.bool,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

InputPhone.defaultProps = {
    label: undefined,
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    value: {},
    placeholder: undefined,
    disabled: false,
    error: undefined,
    autoFocus: false,
    style: undefined,
};

export default InputPhone;
