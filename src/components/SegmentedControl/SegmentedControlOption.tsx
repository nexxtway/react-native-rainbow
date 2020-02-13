import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import { BaseProps } from '../types';
import { StyledOption, StyledOptionText } from './styled';

interface Props extends BaseProps {
    label?: ReactNode;
    value?: string | undefined;
    icon?: ReactNode;
    handleSelect: (event: any) => void;
    isDisabled?: boolean;
    isActive: boolean;
    variant: string;
}

const SegmentedControlOption: React.FC<Props> = props => {
    const {
        label,
        value,
        handleSelect,
        isDisabled,
        isActive,
        variant,
        icon,
    } = props;
    let hasIcon = !!icon;
    return (
        <StyledOption
            accessibilityRole="checkbox"
            isActive={isActive}
            variant={variant}
            disabled={isDisabled}
            onPress={() => (isActive ? null : handleSelect(value))}
        >
            <StyledOptionText
                variant={variant}
                isActive={isActive}
                isDisabled={isDisabled}
            >
                <RenderIf isTrue={hasIcon}>{icon} </RenderIf>
                {label}
            </StyledOptionText>
        </StyledOption>
    );
};

SegmentedControlOption.propTypes = {
    /** The icon at the left side of each option on the segmentedControl component.
     * default value is null
     */
    icon: PropTypes.node,
};

SegmentedControlOption.defaultProps = {
    icon: null,
};

export default SegmentedControlOption;
