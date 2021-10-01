import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const ViewContainer = styled.View`
    display: flex;
    align-items: center;
    flex-direction: row;
    padding-left: 10px;
    padding-right: 10px;
    justify-content: space-around;
`;

export default function RowView({ children, spaceTop = 0 }) {
    return <ViewContainer style={{ paddingTop: spaceTop }}>{children}</ViewContainer>;
}

RowView.propTypes = {
    children: PropTypes.node,
};

RowView.defaultProps = {
    children: null,
};
