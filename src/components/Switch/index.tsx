import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';

import { BaseProps } from '../types';
import { SwitchWrapper, StyledSwitch, SwitchText } from './styled';
import { COLOR_BRAND, COLOR_GRAY_2 } from '../../styles/colors';
import RenderIf from '../RenderIf';

interface Props extends BaseProps {
    label?: ReactNode;
    onChange?: (value: boolean) => void;
    disabled?: boolean;
    value?: boolean;
}

/**
 * Switch toggle is a checkable input that communicates if an option is true or false
 */

const SwitchComponent: React.FC<Props> = ({
    label,
    onChange,
    disabled,
    value,
}) => {
    const trackColor = { false: COLOR_GRAY_2, true: COLOR_BRAND };
    return (
        <SwitchWrapper>
            <StyledSwitch
                onValueChange={onChange}
                value={value}
                trackColor={trackColor}
                disabled={disabled}
            />
            <RenderIf isTrue={!!label}>
                <SwitchText>{label}</SwitchText>
            </RenderIf>
        </SwitchWrapper>
    );
};

SwitchComponent.propTypes = {
    /** Text label for the Switch toggle. */
    label: PropTypes.oneOf([PropTypes.string, PropTypes.element]),
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** Specifies that the element should be disabled. This value defaults to false. */
    disabled: PropTypes.bool,
    /** The value of the element. */
    value: PropTypes.bool,
};

SwitchComponent.defaultProps = {
    label: undefined,
    onChange: () => {},
    disabled: false,
    value: false,
};

export default SwitchComponent;
