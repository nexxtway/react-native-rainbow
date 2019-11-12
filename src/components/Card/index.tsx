import React from 'react';
import { View, Text } from 'react-native';
import PropTypes, { string } from 'prop-types';

export interface CardProps {
    title?: string;
    footer: React.ReactNode;
}

const Card: React.FC<CardProps> = props => {
    return (
        <View>
            <Text>{props.title}</Text>
        </View>
    );
};

Card.propTypes = {};

Card.defaultProps = {};

export default Card;
