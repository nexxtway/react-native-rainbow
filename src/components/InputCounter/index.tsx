import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { StyleProp, TextInputProps, View, ViewStyle } from 'react-native';
import useReactHookForm from '../../hooks/useReactHookForm';
import { Label, Error } from '../Input/styled';
import StyledInput from './styled/input';
import RenderIf from '../RenderIf';
import isButtonDisabled from './helpers/isButtonDisabled';
import isMax from './helpers/isMax';
import isMin from './helpers/isMin';
import ButtonIcon from '../ButtonIcon';
import { ButtonContainer, RelativeView, StyledMinusIcon, StyledPlusIcon } from './styled';
import getNormalizedValue from './helpers/getNormalizedValue';
import getValue from './helpers/getValue';

type BaseInputProps = Pick<
    TextInputProps,
    Exclude<keyof TextInputProps, 'onChange' | 'onFocus' | 'onBlur' | 'value'>
>;

export interface Props extends BaseInputProps {
    label?: ReactNode;
    onChange?: (value?: number) => void | undefined;
    value?: number;
    disabled?: boolean;
    error?: ReactNode;
    min?: number;
    max?: number;
    step: number;
    style?: StyleProp<ViewStyle>;
    [key: string]: unknown;
}

const InputCounter = React.forwardRef<any, Props>((props, ref) => {
    const {
        label,
        onChange = () => {},
        value = 0,
        disabled,
        error,
        min,
        max,
        step,
        style,
        ...rest
    } = useReactHookForm(props);

    const handlePlusPress = (event: Event) => {
        event.preventDefault();
        const val = getValue(Number(value));
        if (val < min) {
            return onChange(getNormalizedValue(min));
        }
        return onChange(getNormalizedValue(val + step));
    };

    const handleMinusPress = (event: Event) => {
        event.preventDefault();
        const val = getValue(Number(value));
        if (val > max) {
            return onChange(getNormalizedValue(max));
        }
        return onChange(getNormalizedValue(val - step));
    };

    return (
        <View style={style}>
            <RenderIf isTrue={!!label}>
                <Label>{label}</Label>
            </RenderIf>
            <RelativeView>
                <ButtonContainer iconPosition="left">
                    <ButtonIcon
                        variant="base"
                        size="small"
                        icon={
                            <StyledMinusIcon
                                disabled={isButtonDisabled(isMin(value, step, min), disabled)}
                            />
                        }
                        onPress={handleMinusPress}
                        disabled={isButtonDisabled(isMin(value, step, min), disabled)}
                    />
                </ButtonContainer>
                <StyledInput
                    blurOnSubmit={false}
                    {...rest}
                    value={value?.toString()}
                    editable={false}
                    error={error}
                    textAlign="center"
                    disabled={disabled}
                    type="number"
                    ref={ref}
                />
                <ButtonContainer iconPosition="right">
                    <ButtonIcon
                        variant="base"
                        size="small"
                        icon={
                            <StyledPlusIcon
                                disabled={isButtonDisabled(isMax(value, step, max), disabled)}
                            />
                        }
                        onPress={handlePlusPress}
                        disabled={isButtonDisabled(isMax(value, step, max), disabled)}
                    />
                </ButtonContainer>
            </RelativeView>
            <RenderIf isTrue={!!error}>
                <Error>{error}</Error>
            </RenderIf>
        </View>
    );
});

InputCounter.propTypes = {
    label: PropTypes.node,
    onChange: PropTypes.func,
    value: PropTypes.number,
    disabled: PropTypes.bool,
    error: PropTypes.node,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

InputCounter.defaultProps = {
    label: undefined,
    onChange: () => {},
    value: 0,
    disabled: false,
    error: undefined,
    min: undefined,
    max: undefined,
    step: 1,
    style: undefined,
};

export default InputCounter;
