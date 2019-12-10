import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import StyledAvatar from './styled/avatar';
import StyledImage from './styled/image';
import StyledText from './styled/text';
import StyledIcon from './styled/icon';
import RenderIf from '../RenderIf';
import { BaseProps } from '../types';

/**
 * An avatar component represents an object or entity
 */

type AvatarSizes = 'large' | 'medium' | 'small' | 'x-small';

interface Props extends BaseProps {
    src?: string;
    initials?: string;
    icon?: ReactNode;
    size?: AvatarSizes;
}

const Avatar: React.FC<Props> = props => {
    const { src, initials, icon, size, style } = props;
    const checkImage = !!(src && typeof src === 'string');
    const [isImage, setIsImage] = React.useState(checkImage);
    const isInitials = !!(initials && typeof initials === 'string' && !isImage);
    const isIcon = !!(icon !== null && !initials && !isImage);

    return (
        <StyledAvatar size={size} style={style}>
            <RenderIf isTrue={isImage}>
                <StyledImage
                    source={{ uri: src }}
                    onError={() => setIsImage(false)}
                />
            </RenderIf>
            <RenderIf isTrue={isInitials}>
                <StyledText size={size}>{initials}</StyledText>
            </RenderIf>
            <RenderIf isTrue={isIcon}>
                <StyledIcon size={size}>{icon}</StyledIcon>
            </RenderIf>
        </StyledAvatar>
    );
};

Avatar.propTypes = {
    /** The URL for the image.
     * It take precedence over the initials and icon. */
    src: PropTypes.string,
    /** If the record name contains two words, like first and last name,
     * use the first capitalized letter of each. For records that only have a single word name,
     * use the first two letters of that word using one capital and one lower case letter. */
    initials: PropTypes.string,
    /** The fallback icon to show when src and initials are not passed. */
    icon: PropTypes.node,
    /** The size of the avatar. Valid values are x-small, small, medium, and large.
     * It take precedence over the icon.
     * This value defaults to medium. */
    size: PropTypes.oneOf(['large', 'medium', 'small', 'x-small']),
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

Avatar.defaultProps = {
    icon: null,
    initials: undefined,
    src: undefined,
    size: 'medium',
    style: undefined,
};

export default Avatar;
