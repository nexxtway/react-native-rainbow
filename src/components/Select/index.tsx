import React, { useMemo, ReactNode } from 'react';
import { View, ViewStyle } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Palette } from 'styled-components';
import RenderIf from '../RenderIf';
import { Label, Error } from '../Input/styled';
import useTheme from '../../hooks/useTheme';
import useReactHookForm from '../../hooks/useReactHookForm';
import { ArrowIcon } from './styled';
import { BaseProps } from '../types';

interface InputStylesProps {
    palette: Palette;
    error?: ReactNode;
    disabled?: boolean;
}

const getInputStyles = (props: InputStylesProps) => {
    const { palette, error, disabled } = props;
    const styles = {
        backgroundColor: palette.background.main,
        borderWidth: 1,
        borderColor: palette.border.main,
        borderRadius: 192,
        width: '100%',
        height: 48,
        color: palette.text.main,
        fontSize: 16,
        paddingLeft: 16,
        paddingRight: 45,
    };
    if (error) {
        styles.backgroundColor = palette.background.main;
        styles.borderColor = palette.error.main;
    }
    if (disabled) {
        styles.backgroundColor = palette.background.disabled;
        styles.color = palette.text.disabled;
    }
    return styles;
};

const iconContainer: ViewStyle = {
    justifyContent: 'center',
    width: 30,
    height: '100%',
};

interface Option {
    label: string;
    value: string | null;
}

interface Props extends BaseProps {
    label?: ReactNode;
    onChange?: (value: string) => void | undefined;
    value?: string;
    error?: ReactNode;
    placeholder?: string;
    disabled?: boolean;
    options: Option[];
    [key: string]: unknown;
}

const Select = (props: Props) => {
    const {
        style,
        label,
        onChange = () => {},
        value,
        error,
        placeholder,
        disabled,
        options,
        pickerProps: pickerPropsProp,
        ...rest
    } = useReactHookForm(props);
    const {
        rainbow: { palette },
    } = useTheme();
    const styles = useMemo(() => {
        const inputStyles = getInputStyles({
            palette,
            error,
            disabled,
        });
        return {
            inputIOS: inputStyles,
            inputAndroid: inputStyles,
            placeholder: {
                paddingLeft: 16,
                paddingRight: 16,
                color: palette.text.header,
            },
            iconContainer,
            modalViewMiddle: {
                backgroundColor: palette.background.secondary,
                borderTopColor: palette.border.main,
            },
            modalViewBottom: {
                backgroundColor: palette.background.main,
                pading: 16,
            },
            done: { color: palette.brand.main },
        };
    }, [disabled, error, palette]);
    const selectPlaceholder = placeholder ? { label: placeholder, value: null } : {};

    const pickerProps = {
        itemStyle: {
            color: palette.text.main,
        },
        ...pickerPropsProp,
    };

    return (
        <View style={style}>
            <RenderIf isTrue={!!label}>
                <Label>{label}</Label>
            </RenderIf>
            <View>
                <RNPickerSelect
                    {...rest}
                    items={options}
                    itemKey="value"
                    placeholder={selectPlaceholder}
                    onValueChange={newValue => onChange(newValue)}
                    value={value}
                    disabled={disabled}
                    Icon={() => <ArrowIcon disabled={disabled} error={error} />}
                    style={styles}
                    useNativeAndroidPickerStyle={false}
                    pickerProps={pickerProps}
                />
            </View>
            <RenderIf isTrue={!!error}>
                <Error>{error}</Error>
            </RenderIf>
        </View>
    );
};

export default Select;
