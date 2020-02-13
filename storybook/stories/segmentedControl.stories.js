import React from 'react';
import { storiesOf } from '@storybook/react-native';
import RowView from './RowView';
import { Text, View } from 'react-native';
import { COLOR_GRAY_3 } from '../../src/styles/colors';
import SegmentedControl from '../../src/components/SegmentedControl';
import Person from '../../src/components/Icons/person';
import Shoe from '../../src/components/Icons/shoe';

const Box = ({ children, is }) => (
    <View style={{ width: '100%', alignItems: 'center' }}>
        {children}
        <Text
            style={{
                marginTop: 10,
                marginBottom: 15,
                color: COLOR_GRAY_3,
                fontSize: 12,
            }}
        >
            SegmentedControl {is}
        </Text>
    </View>
);

const iconStyles = {
    width: 15,
    height: 15,
    lineHeight: 0,
};

const OptionsWithIcons = [
    { label: 'Off', value: 'off', icon: <Person style={iconStyles} /> },
    { label: 'Auto', value: 'auto' },
    { label: 'On', value: 'on', icon: <Shoe style={iconStyles} /> },
];

const Options = [
    { label: 'Off', value: 'off' },
    { label: 'Auto', value: 'auto' },
    { label: 'On', value: 'on' },
];

storiesOf('Segmented Control', module).add('Basic', () => (
    <>
        <RowView spaceTop={150}>
            <Box is="Brand">
                <SegmentedControl
                    label="Label"
                    options={Options}
                    value="auto"
                />
            </Box>
        </RowView>
        <RowView spaceTop={20}>
            <Box is="Default">
                <SegmentedControl
                    label="Label"
                    options={OptionsWithIcons}
                    variant="brand"
                    value="auto"
                />
            </Box>
        </RowView>
        <RowView spaceTop={20}>
            <Box is="Disabled">
                <SegmentedControl
                    label="Label"
                    options={Options}
                    value="auto"
                    isDisabled={true}
                />
            </Box>
        </RowView>
    </>
));
