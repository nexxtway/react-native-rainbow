import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Switch } from '../../src/components';
import RowView from './RowView';

const BasicSwitch = ({ defaultValue = true }) => {
    const [value, setValue] = React.useState(defaultValue);
    return (
        <Switch
            label="Switch Toggle enabled"
            value={value}
            onChange={() => {
                setValue(!value);
            }}
        />
    );
};

storiesOf('Switch', module).add('Basic', () => {
    return (
        <>
            <RowView spaceTop={150}>
                <BasicSwitch />
            </RowView>
            <RowView spaceTop={50}>
                <BasicSwitch defaultValue={false} />
            </RowView>
            <RowView spaceTop={50}>
                <Switch disabled={true} label="Switch Toggle disabled" />
            </RowView>
        </>
    );
});
