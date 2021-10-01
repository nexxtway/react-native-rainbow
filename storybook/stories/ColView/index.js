import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const ViewContainer = styled.View`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-left: 10px;
    padding-right: 10px;
    justify-content: space-around;
`;

export default function ColView({ children, spaceTop = 0 }) {
    return <ViewContainer style={{ paddingTop: spaceTop }}>{children}</ViewContainer>;
}

ColView.propTypes = {
    children: PropTypes.node,
};

ColView.defaultProps = {
    children: null,
};
