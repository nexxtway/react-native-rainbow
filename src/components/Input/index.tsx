import React, { ReactNode, useState } from 'react';
import { View, TextInputProps, StyleProp, ViewStyle } from 'react-native';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import useReactHookForm from '../../hooks/useReactHookForm';
import StyledInput from './styled/input';
import { Label, Error, Icon } from './styled';
import { IconPosition } from '../types';
import useTheme from '../../hooks/useTheme';

const inputTypePropsMap = {
    text: {},
    username: {
        autoCapitalize: 'words',
        autoCorrect: false,
        textContentType: 'name',
        autoComplete: 'name',
    },
    email: {
        keyboardType: 'email-address',
        autoCapitalize: 'none',
        autoCorrect: false,
        textContentType: 'emailAddress',
        autoComplete: 'email',
    },
    password: {
        secureTextEntry: true,
        textContentType: 'password',
        autoComplete: 'password',
    },
};

type BaseInputProps = Pick<
    TextInputProps,
    Exclude<keyof TextInputProps, 'onChange' | 'onFocus' | 'onBlur'>
>;

export interface Props extends BaseInputProps {
    label?: ReactNode;
    onChange?: (value: string) => void | undefined;
    onFocus?: (value?: string) => void | undefined;
    onBlur?: (value?: string) => void | undefined;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    error?: ReactNode;
    type?: 'text' | 'username' | 'email' | 'password';
    icon?: ReactNode;
    iconPosition?: IconPosition;
    style?: StyleProp<ViewStyle>;
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
        type,
        style,
        icon,
        iconPosition,
        ...rest
    } = useReactHookForm(props);
    const isEnabled = !disabled;
    const inputProps = inputTypePropsMap[type] || inputTypePropsMap.text;

    const [isFocused, setFocusState] = useState(false);
    const theme = useTheme();

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
                    blurOnSubmit={false}
                    {...inputProps}
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
                    hasIcon={!!icon}
                    iconPosition={iconPosition}
                    placeholderTextColor={theme.rainbow.palette.text.header}
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
    type: PropTypes.oneOf(['text', 'username', 'email', 'password']),
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    icon: PropTypes.node,
    iconPosition: PropTypes.oneOf(['left', 'right']),
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
    type: 'text',
    style: undefined,
    icon: null,
    iconPosition: 'left',
};

export default Input;
