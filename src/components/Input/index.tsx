import React, { ReactNode } from 'react';
import { 
    StyleProp, 
    ViewStyle,
    View, 
    Text,
    TextInput, 
} from 'react-native';
import PropTypes from 'prop-types';

interface Props {
    label?: String | ReactNode;
    type?: String;
    disabled?: boolean;
    style?: StyleProp<ViewStyle>;
    onChange?: (event?: any) => void;
}

const Input: React.FC<Props> = props => {
    return (
        <View>
            <Text>Input here!</Text>
            <TextInput />
        </View>
    );
};

Input.propTypes = {
    label: PropTypes.node,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    style: PropTypes.object,
};

Input.defaultProps = {
    type: 'text',
    label: undefined,
    disabled: false,
    onChange: () => {},
    style: undefined,
};

export default Input;
