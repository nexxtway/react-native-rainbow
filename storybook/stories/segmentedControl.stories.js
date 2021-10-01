import React, { createElement } from 'react';
import { storiesOf } from '@storybook/react-native';
import RowView from './RowView';
import { View } from 'react-native';
import SegmentedControl from '../../src/components/SegmentedControl';
import Person from '../../src/components/Icons/person';
import Shoe from '../../src/components/Icons/shoe';

const Box = ({ children }) => (
    <View style={{ width: '100%', alignItems: 'center' }}>{children}</View>
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

storiesOf('Segmented Control', module).add('Basic', () =>
    createElement(() => {
        const [active1, setActive1] = React.useState('auto');
        const [active2, setActive2] = React.useState('');

        function onChange1(option) {
            setActive1(option.value);
        }
        function onChange2(option) {
            setActive2(option.value);
        }
        return (
            <>
                <RowView spaceTop={150}>
                    <Box is="Brand">
                        <SegmentedControl
                            label="label"
                            options={Options}
                            value={active1}
                            onChange={onChange1}
                        />
                    </Box>
                </RowView>
                <RowView spaceTop={20}>
                    <Box is="Default">
                        <SegmentedControl
                            label="Label"
                            options={OptionsWithIcons}
                            variant="brand"
                            value={active2}
                            onChange={onChange2}
                        />
                    </Box>
                </RowView>
                <RowView spaceTop={20}>
                    <Box is="Disabled">
                        <SegmentedControl label="Label" options={Options} disabled={true} />
                    </Box>
                </RowView>
            </>
        );
    }),
);
