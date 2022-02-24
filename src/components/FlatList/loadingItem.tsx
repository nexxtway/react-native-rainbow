import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { Placeholder, PlaceholderLine, Fade } from 'rn-placeholder';
import { Divider } from './styled';

const viewStyles: StyleProp<ViewStyle> = {
    paddingTop: 16,
    paddingHorizontal: 24,
    backgroundColor: 'white',
};

const placeholderStyles: StyleProp<ViewStyle> = {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
};

const placeholderLineStyles: StyleProp<ViewStyle> = {
    marginTop: 0,
};

const LoadingItem = () => {
    return (
        <View style={viewStyles}>
            <Placeholder Animation={Fade} style={placeholderStyles}>
                <PlaceholderLine width={60} height={12} style={placeholderLineStyles} />
                <PlaceholderLine width={80} height={12} style={placeholderLineStyles} />
            </Placeholder>
            <Divider />
        </View>
    );
};

export default LoadingItem;
