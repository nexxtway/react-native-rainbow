import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styled from 'styled-components/native';

const ViewContainer = styled.ScrollView`
    background-color: #f5fcff;
    padding: 100px 40px;
`;

const viewStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
};
export default function RowView({ children }) {
    return (
        <ViewContainer contentContainerStyle={viewStyle}>
            {children}
        </ViewContainer>
    );
}

RowView.propTypes = {
    children: PropTypes.node,
};

RowView.defaultProps = {
    children: null,
};
