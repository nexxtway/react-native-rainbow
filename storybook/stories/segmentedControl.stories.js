import React from 'react';
import { storiesOf } from '@storybook/react-native';
import RowView from './RowView';
import { Text, View } from 'react-native';
import { COLOR_GRAY_3 } from '../../src/styles/colors';
import SegmentedControl from '../../src/components/SegmentedControl';
import Shoe from '../../src/components/Icons/shoe';
import Fire from '../../src/components/Icons/fire';
import Route from '../../src/components/Icons/route';
import Person from '../../src/components/Icons/person';

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
    width: '40%',
    height: '40%',
};

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
                    options={Options}
                    variant="default"
                    value="auto"
                />
            </Box>
        </RowView>
        <RowView spaceTop={20}>
            <Box is="Disabled">
                <SegmentedControl
                    label="Label"
                    options={Options}
                    variant="default"
                    value="auto"
                    isDisabled={true}
                />
            </Box>
        </RowView>
    </>
));
