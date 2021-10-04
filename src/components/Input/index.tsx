import React, { ReactNode, useState } from 'react';
import { View, KeyboardTypeOptions } from 'react-native';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import StyledInput from './styled/input';
import { Label, Error, Icon } from './styled/index';
import { BaseProps, IconPosition } from '../types';
import withReduxForm from '../../hocs/withReduxForm';

export interface Props extends BaseProps {
    label?: ReactNode;
    onChange?: (value: string) => void;
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
}

const Input = React.forwardRef<any, Props>((props, ref) => {
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
        icon,
        iconPosition,
        autoCapitalize,
        secureTextEntry,
        ...rest
    } = props;
    const isEnabled = !disabled;

    const [isFocused, setFocusState] = useState(false);

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
                    onBlur={() => setFocusState(false)}
                    onFocus={() => setFocusState(true)}
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

export default withReduxForm(Input);
