import React from 'react';
import PropTypes from 'prop-types';
import { TextTitle } from './styled';

interface Props {
    children?: any;
}

const HeaderTitle: React.FC<Props> = props => {
    const { children } = props;
    if (typeof children === 'string' || typeof children === 'number') {
        return <TextTitle numberOfLines={1}>{children}</TextTitle>;
    }
    return children;
};

HeaderTitle.propTypes = {
    children: PropTypes.node,
};

HeaderTitle.defaultProps = {
    children: undefined,
};

export default HeaderTitle;
