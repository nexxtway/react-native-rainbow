import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const ViewContainer = styled.View`
    flex: 1;
    justify-content: center;
    background-color: #f5fcff;
    padding: 0px 40px;
`;

export default function CenterView({ children }) {
    return <ViewContainer>{children}</ViewContainer>;
}

CenterView.propTypes = {
    children: PropTypes.node,
};

CenterView.defaultProps = {
    children: null,
};
