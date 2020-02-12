import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const ViewContainer = styled.View`
    display: flex;
    align-items: center;
    ${props =>
        props.flexDirection &&
        `
            flex-direction:  ${props.flexDirection}
    `}
    padding-left: 10;
    padding-right: 10;
    justify-content: space-around;
`;

export default function RowView({
    children,
    spaceTop = 0,
    flexDirection = 'row',
}) {
    return (
        <ViewContainer
            flexDirection={flexDirection}
            style={{ paddingTop: spaceTop }}
        >
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
