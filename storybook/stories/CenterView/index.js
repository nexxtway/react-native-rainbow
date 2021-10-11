import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import attachThemeAttrs from '../../../src/styles/helpers/attachThemeAttrs';

const ViewContainer = attachThemeAttrs(styled.ScrollView)`
    background-color: ${props => props.palette.background.secondary || '#f5fcff'};
    padding: 0px 40px;
`;

const contentContainerStyle = {
    flex: 1,
    justifyContent: 'center',
};

export default function CenterView({ children, style }) {
    return (
        <ViewContainer contentContainerStyle={[contentContainerStyle, style]}>
            {children}
        </ViewContainer>
    );
}

CenterView.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
};

CenterView.defaultProps = {
    children: null,
    style: undefined,
};
