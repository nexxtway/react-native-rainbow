import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import StyledAvatar from './styled/avatar';
import StyledText from './styled/text';
import StyledIcon from './styled/icon';
import RenderIf from '../RenderIf';
import { BaseProps } from '../types';

type AvatarSizes = 'large' | 'medium' | 'small' | 'x-small';

interface Props extends BaseProps {
    icon?: ReactNode;
    initial?: string;
    src?: string;
    size?: AvatarSizes;
    style?: object;
}

const Avatar: React.FC<Props> = props => {
    const { icon, initial, src, size, style } = props;
    const isIcon = !!(icon !== null && src === '');
    const isInitial = !!(typeof initial !== undefined && src === '');
    return (
        <StyledAvatar size={size} style={style} src={src}>
            <RenderIf isTrue={isIcon}>
                <StyledIcon>{icon}</StyledIcon>
            </RenderIf>
            <RenderIf isTrue={isInitial}>
                <StyledText>{initial}</StyledText>
            </RenderIf>
        </StyledAvatar>
    );
};

Avatar.propTypes = {
    icon: PropTypes.node,
    initial: PropTypes.string,
    src: PropTypes.string,
    size: PropTypes.oneOf(['large', 'medium', 'small', 'x-small']),
    style: PropTypes.object,
};

Avatar.defaultProps = {
    icon: null,
    initial: undefined,
    src: '',
    size: 'medium',
    style: undefined,
};

export default Avatar;
