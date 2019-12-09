import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const ViewContainer = styled.ScrollView`
    background-color: #f5fcff;
    padding: 0px 40px;
`;

const contentContainerStyle = {
    flex: 1,
    justifyContent: 'center',
};

export default function CenterView({ children }) {
    return (
        <ViewContainer contentContainerStyle={contentContainerStyle}>
            {children}
        </ViewContainer>
    );
}

CenterView.propTypes = {
    children: PropTypes.node,
};

CenterView.defaultProps = {
    children: null,
};
