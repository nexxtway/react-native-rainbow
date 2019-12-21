import React, { ReactNode, useState, useRef, useEffect } from 'react';
import { View, TextInput, Clipboard } from 'react-native';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import { Container, StyledLabel } from './styled/index';
import { Error } from '../Input/styled/index';
import StyledInput from './styled/input';
import getNextIndex from './helpers/getNextIndex';
import getPrevIndex from './helpers/getPrevIndex';
import { BaseProps } from '../types';

interface Props extends BaseProps {
    digits?: number;
    label?: ReactNode;
    onChange?: (value: string) => void;
    error?: ReactNode;
    autoFocus?: boolean;
}

const InputCode: React.FC<Props> = props => {
    const {
        digits = 6,
        label,
        onChange = () => {},
        error,
        autoFocus,
        style,
    } = props;

    const [inputIndexFocused, setFocusInputIndex] = useState(-1);
    const [values, setValues] = useState<string[]>([]);

    const inputEl = useRef<TextInput>(null);
    useEffect(() => {
        if (inputEl.current && typeof inputEl.current.focus === 'function') {
            inputEl.current.focus();
        }
    }, [inputIndexFocused]);

    const handlePasteCode = (pasteValue: string): string => {
        const regx = new RegExp(`\\d{${digits}}`);
        const match = regx.exec(pasteValue);
        if (!match) {
            return '';
        }

        const codeFromClipboard = match[0];

        return codeFromClipboard;
    };

    const handleChange = async (value: string) => {
        const clipboardContent = await Clipboard.getString();
        const codeFromClipboard = handlePasteCode(clipboardContent);
        await Clipboard.setString('');
        const newValues = [...values];
        if (codeFromClipboard.length === digits) {
            const codeValues = codeFromClipboard.split('');
            setValues(codeValues);
            codeValues.map((text, index) => {
                setFocusInputIndex(index);
                if (inputEl && inputEl.current) {
                    inputEl.current.setNativeProps({ text });
                }
            });
            onChange(codeFromClipboard);
        } else {
            if (value) {
                const nextInputIndex = getNextIndex({
                    currentIndex: inputIndexFocused,
                    length: digits,
                });
                setFocusInputIndex(nextInputIndex);
            } else {
                const prevInputIndex = getPrevIndex({
                    currentIndex: inputIndexFocused,
                });
                setFocusInputIndex(prevInputIndex);
            }

            newValues[inputIndexFocused] = value;
            setValues(newValues);
        }
        if (newValues.length === digits && newValues.every(item => !!item)) {
            onChange(newValues.join(''));
        }
    };

    return (
        <View style={style}>
            <RenderIf isTrue={!!label}>
                <StyledLabel>{label}</StyledLabel>
            </RenderIf>
            <Container style={style}>
                {Array(digits)
                    .fill(0)
                    .map((_input, index) => {
                        const key = `input-${index}`;
                        const autoFocusFirstInput = autoFocus && index === 0;
                        const isLastInput = index === digits - 1;
                        const isFocused = index === inputIndexFocused;
                        const hasValue = !!values[index];
                        const ref = isFocused ? inputEl : undefined;

                        return (
                            <StyledInput
                                key={key}
                                selectionColor="transparent"
                                keyboardType="number-pad"
                                maxLength={1}
                                blurOnSubmit={false}
                                onChangeText={handleChange}
                                onBlur={() => setFocusInputIndex(-1)}
                                onFocus={() => setFocusInputIndex(index)}
                                isFocused={isFocused}
                                hasValue={hasValue}
                                isLastInput={isLastInput}
                                error={error}
                                ref={ref}
                                autoFocus={autoFocusFirstInput}
                            />
                        );
                    })}
            </Container>
            <RenderIf isTrue={!!error}>
                <Error>{error}</Error>
            </RenderIf>
        </View>
    );
};

InputCode.propTypes = {
    digits: PropTypes.number,
    label: PropTypes.node,
    onChange: PropTypes.func,
    error: PropTypes.node,
    autoFocus: PropTypes.bool,
    style: PropTypes.object,
};

InputCode.defaultProps = {
    digits: 6,
    label: undefined,
    onChange: () => {},
    error: undefined,
    autoFocus: false,
    style: undefined,
};

export default InputCode;
