import React, { createElement } from 'react';
import { storiesOf } from '@storybook/react-native';
import styled from 'styled-components/native';
import ThemeWrapper from './ThemeWrapper';
import RowView from './RowView';
import SegmentedControl from '../../src/components/SegmentedControl';
import Person from '../../src/components/Icons/person';
import Shoe from '../../src/components/Icons/shoe';
import attachThemeAttrs from '../../src/styles/helpers/attachThemeAttrs';

const Container = attachThemeAttrs(styled.ScrollView)`
    background-color: ${props => props.palette.background.secondary || '#f5fcff'};
`;

const Box = styled.View`
    width: 100%;
    align-items: center;
`;

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

storiesOf('Segmented Control', module)
    .addDecorator(getStory => (
        <ThemeWrapper>
            <Container>{getStory()}</Container>
        </ThemeWrapper>
    ))
    .add('Basic', () =>
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
                        <Box>
                            <SegmentedControl
                                label="label"
                                options={Options}
                                value={active1}
                                onChange={onChange1}
                                size="small"
                            />
                        </Box>
                    </RowView>
                    <RowView spaceTop={20}>
                        <Box>
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
