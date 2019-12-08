import React, { ReactNode, useState } from 'react';
import { View, KeyboardTypeOptions } from 'react-native';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import StyledInput from './styled/input';
import StyledLabel from './styled/label';
import StyledError from './styled/error';
import { BaseProps } from '../types';

export interface Props extends BaseProps {
    label?: ReactNode;
    onChange?: (value: string) => void;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    error?: ReactNode;
    keyboardType?: KeyboardTypeOptions;
    autoFocus?: boolean;
}

const Input: React.FC<Props> = props => {
    const {
        label,
        onChange,
        value,
        placeholder,
        disabled,
        error,
        keyboardType,
        autoFocus,
        style,
    } = props;
    const isEnabled = !disabled;

    const [isFocused, setFocusState] = useState(false);

    return (
        <View style={style}>
            <RenderIf isTrue={!!label}>
                <StyledLabel>{label}</StyledLabel>
            </RenderIf>
            <StyledInput
                onChangeText={onChange}
                value={value}
                placeholder={placeholder}
                editable={isEnabled}
                selectTextOnFocus={isEnabled}
                error={error}
                isFocused={isFocused}
                onBlur={() => setFocusState(false)}
                onFocus={() => setFocusState(true)}
                disabled={disabled}
                keyboardType={keyboardType}
                autoFocus={autoFocus}
            />
            <RenderIf isTrue={!!error}>
                <StyledError>{error}</StyledError>
            </RenderIf>
        </View>
    );
};

Input.propTypes = {
    label: PropTypes.node,
    onChange: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.node,
    keyboardType: PropTypes.oneOf([
        'default',
        'number-pad',
        'decimal-pad',
        'numeric',
        'email-address',
        'phone-pad',
        'ascii-capable',
        'numbers-and-punctuation',
        'url',
        'name-phone-pad',
        'twitter',
        'web-search',
        'visible-password',
    ]),
    autoFocus: PropTypes.bool,
    style: PropTypes.object,
};

Input.defaultProps = {
    label: undefined,
    onChange: () => {},
    value: undefined,
    placeholder: undefined,
    disabled: false,
    error: undefined,
    keyboardType: 'default',
    autoFocus: false,
    style: undefined,
};

export default Input;
