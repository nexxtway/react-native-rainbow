import React from 'react';
import { Text, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { COLOR_BRAND } from '../../styles/colors';

interface Props {
    isLoading?: boolean;
    children?: any;
}

// TODO: remove this and use Spinner when created
const SpinnerView = styled.View`
    position: absolute;
    top: 25%;
    left: 45%;
`;

const Body: React.FC<Props> = props => {
    const { isLoading, children } = props;
    if (isLoading) {
        return (
            <SpinnerView>
                <ActivityIndicator size="large" color={COLOR_BRAND} />
            </SpinnerView>
        );
    }
    if (children && typeof children === 'string') {
        return <Text>{children}</Text>;
    }
    return children;
};

Body.propTypes = {
    isLoading: PropTypes.bool,
    children: PropTypes.node,
};
Body.defaultProps = {
    isLoading: false,
    children: null,
};

export default Body;
