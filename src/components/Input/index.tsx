import React, { ReactNode, useState } from 'react';
import { View, KeyboardTypeOptions } from 'react-native';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import useReactHookForm from '../../hooks/useReactHookForm';
import StyledInput from './styled/input';
import { Label, Error, Icon } from './styled';
import { BaseProps, IconPosition } from '../types';

export interface Props extends BaseProps {
    label?: ReactNode;
    onChange?: (value: string) => void | undefined;
    onFocus?: (value?: string) => void | undefined;
    onBlur?: (value?: string) => void | undefined;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    error?: ReactNode;
    keyboardType?: KeyboardTypeOptions;
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
    autoFocus?: boolean;
    icon?: ReactNode;
    iconPosition?: IconPosition;
    secureTextEntry?: boolean;
    [key: string]: unknown;
}

const Input = React.forwardRef<any, Props>((props, ref) => {
    const {
        label,
        onChange,
        onFocus = () => {},
        onBlur = () => {},
        value,
        placeholder,
        disabled,
        error,
        keyboardType,
        autoFocus,
        style,
        icon,
        iconPosition,
        autoCapitalize,
        secureTextEntry,
        ...rest
    } = useReactHookForm(props);
    const isEnabled = !disabled;

    const [isFocused, setFocusState] = useState(false);

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
            <View>
                <StyledInput
                    {...rest}
                    onChangeText={onChange}
                    value={value}
                    placeholder={placeholder}
                    editable={isEnabled}
                    selectTextOnFocus={isEnabled}
                    error={error}
                    isFocused={isFocused}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    disabled={disabled}
                    keyboardType={keyboardType}
                    autoFocus={autoFocus}
                    hasIcon={!!icon}
                    iconPosition={iconPosition}
                    autoCapitalize={autoCapitalize}
                    secureTextEntry={secureTextEntry}
                    ref={ref}
                />
                <RenderIf isTrue={!!icon}>
                    <Icon iconPosition={iconPosition}>{icon}</Icon>
                </RenderIf>
            </View>
            <RenderIf isTrue={!!error}>
                <Error>{error}</Error>
            </RenderIf>
        </View>
    );
});

Input.propTypes = {
    label: PropTypes.node,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
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
    autoCapitalize: PropTypes.oneOf(['none', 'sentences', 'words', 'characters']),
    autoFocus: PropTypes.bool,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    icon: PropTypes.node,
    iconPosition: PropTypes.oneOf(['left', 'right']),
    secureTextEntry: PropTypes.bool,
};

Input.defaultProps = {
    label: undefined,
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    value: undefined,
    placeholder: undefined,
    disabled: false,
    error: undefined,
    keyboardType: 'default',
    autoCapitalize: undefined,
    autoFocus: false,
    style: undefined,
    icon: null,
    iconPosition: 'left',
    secureTextEntry: false,
};

export default Input;
