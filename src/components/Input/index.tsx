import React, { ReactNode, useState } from 'react';
import { StyleProp, ViewStyle, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import StyledInput from './styled/input';

interface Props {
    label?: ReactNode;
    onChange?: (event?: any) => void;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    error?: ReactNode;
    style?: StyleProp<ViewStyle>;
}

const Input: React.FC<Props> = props => {
    const {
        label,
        onChange,
        value,
        placeholder,
        disabled,
        error,
        style,
    } = props;
    const isEnabled = !disabled;

    const [isFocused, setFocusState] = useState(false);

    return (
        <View style={style}>
            <RenderIf isTrue={!!label}>
                <Text>{label}</Text>
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
            />
            <RenderIf isTrue={!!error}>
                <Text>{error}</Text>
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
    style: PropTypes.object,
};

Input.defaultProps = {
    label: undefined,
    onChange: () => {},
    value: undefined,
    placeholder: undefined,
    disabled: false,
    error: undefined,
    style: undefined,
};

export default Input;
