import React from 'react';
import StyledButton from './styled/button';
import StyledText from './styled/text';

export interface Props {
    onPress?: (event?: any) => void;
    label?: any;
    disabled?: boolean;
    loading?: boolean;
    variant?:
    | 'base'
    | 'neutral'
    | 'brand'
    | 'outline-brand'
    | 'destructive'
    | 'success'
    | 'inverse'
    | 'border-inverse';
    style: object;
}

const Button: React.FC<Props> = (props) => {
    const { onPress, label, variant, style } = props;

    return (
        <StyledButton style={style} variant={variant} onPress={onPress}>
            <StyledText variant={variant} numberOfLines={1}>
                {label}
            </StyledText>
        </StyledButton>
    );
}

Button.defaultProps = {
    label: undefined,
    onPress: () => {},
    variant: 'neutral',
    style: undefined,
};

export default Button;
