import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { BaseProps } from '../types';

const Plus: React.FC<BaseProps> = ({ style }) => (
    <Svg style={style} viewBox="0 0 14 14">
        <Path
            fill="currentColor"
            d="M12.181 5.964H8.036V1.819C8.036 1.247 7.573.783 7 .783s-1.036.464-1.036 1.036v4.145H1.819C1.246 5.964.783 6.428.783 7c0 .572.463 1.036 1.036 1.036h4.145v4.145c0 .572.463 1.036 1.036 1.036s1.036-.464 1.036-1.036V8.036h4.145c.573 0 1.036-.464 1.036-1.036 0-.572-.463-1.036-1.036-1.036z"
        />
    </Svg>
);

Plus.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Plus.defaultProps = {
    style: undefined,
};

export default Plus;
