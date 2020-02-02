import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import { BaseProps } from '../types';
import {
    StyledSegmentedControlContainer,
    StyledSegmentedControlLabel,
    StyledSegmentedControlOptionsWrapper,
} from './styled';
import SegmentedControlOption from './SegmentedControlOption';

interface Option {
    label: ReactNode;
    value: string;
    icon?: ReactNode;
}

interface Props extends BaseProps {
    label?: string;
    variant?: 'brand' | 'default';
    value?: string;
    options: Option[];
    onChange: (event: any) => void;
    isDisabled?: boolean;
    isFullWidth?: boolean;
}

const SegmentedControl: React.FC<Props> = props => {
    const {
        style,
        label,
        variant = 'brand',
        value,
        options,
        onChange,
        isDisabled,
        isFullWidth,
    } = props;
    const [active, setActive] = React.useState(value);
    let handleOnChange = (value: string) => {
        setActive(value);
        onChange(value);
    };
    let hasLabel = !!label;
    return (
        <StyledSegmentedControlContainer
            isFullWidth={isFullWidth}
            style={style}
        >
            <RenderIf isTrue={hasLabel}>
                <StyledSegmentedControlLabel>
                    {label}
                </StyledSegmentedControlLabel>
            </RenderIf>
            <StyledSegmentedControlOptionsWrapper isDisabled={isDisabled}>
                {options.map((option, index) => (
                    <SegmentedControlOption
                        key={index}
                        label={option.label}
                        value={option.value}
                        handleSelect={handleOnChange}
                        isDisabled={isDisabled}
                        isActive={!!(option.value === active)}
                        variant={variant}
                        icon={option.icon}
                    />
                ))}
            </StyledSegmentedControlOptionsWrapper>
        </StyledSegmentedControlContainer>
    );
};

SegmentedControl.propTypes = {
    label: PropTypes.string,
    variant: PropTypes.oneOf(['brand', 'default']),
    value: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.node,
            value: PropTypes.string,
            icon: PropTypes.node,
        }),
    ),
    onChange: PropTypes.func,
    isDisabled: PropTypes.bool,
    isFullWidth: PropTypes.bool,
};

SegmentedControl.defaultProps = {
    label: undefined,
    variant: 'brand',
    value: undefined,
    options: [
        { label: 'Off', value: 'off' },
        { label: 'Auto', value: 'auto' },
        { label: 'On', value: 'on' },
    ],
    onChange: () => {},
    isDisabled: false,
    isFullWidth: false,
};

export default SegmentedControl;
