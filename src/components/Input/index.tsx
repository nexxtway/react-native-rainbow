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
    autoFocus?: boolean;
    icon?: ReactNode;
    iconPosition?: IconPosition;
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
        icon,
        iconPosition,
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
    icon: PropTypes.node,
    iconPosition: PropTypes.oneOf(['left', 'right']),
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
    icon: null,
    iconPosition: 'left',
};

export default withReduxForm(Input);
