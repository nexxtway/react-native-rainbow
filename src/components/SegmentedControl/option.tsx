import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import { BaseProps } from '../types';
import { StyledOption, StyledOptionText } from './styled';
import { OptionProps, Size } from './types';

interface Props extends BaseProps {
    option?: OptionProps;
    onPress?: (event: OptionProps) => void;
    disabled?: boolean;
    isActive: boolean;
    variant?: string;
    size: Size;
}

const Option: React.FC<Props> = ({
    option = {},
    onPress = () => {},
    disabled,
    isActive,
    variant,
    size,
}: Props): JSX.Element => {
    const hasIcon = !!option.icon;

    const handlePress = () => (isActive ? null : onPress(option));

    return (
        <StyledOption
            accessibilityRole="checkbox"
            isActive={isActive}
            variant={variant}
            disabled={disabled}
            onPress={handlePress}
            size={size}
        >
            <StyledOptionText variant={variant} isActive={isActive} disabled={disabled}>
                <RenderIf isTrue={hasIcon}>{option.icon} </RenderIf>
                {option.label}
            </StyledOptionText>
        </StyledOption>
    );
};

Option.propTypes = {
    option: PropTypes.shape({
        label: PropTypes.node,
        value: PropTypes.string,
        icon: PropTypes.node,
    }),
};

Option.defaultProps = {
    option: {},
};

export default Option;
