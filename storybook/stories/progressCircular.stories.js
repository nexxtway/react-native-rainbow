import React from 'react';
import { storiesOf } from '@storybook/react-native';
import RowView from './RowView';
import ProgressCircular from '../../src/components/ProgressCircular';
import Shoe from '../../src/components/Icons/shoe';
import Fire from '../../src/components/Icons/fire';
import Rute from '../../src/components/Icons/rute';
import Person from '../../src/components/Icons/person';

const iconStyles = {
    width: '100%',
    height: '100%',
};

storiesOf('Progress Circular', module).add('Basic', () => (
    <>
        <RowView spaceTop={150}>
            <ProgressCircular
                size="large"
                variant="success"
                icon={<Shoe style={iconStyles} />}
            />
            <ProgressCircular
                value={50}
                variant="warning"
                icon={<Fire style={iconStyles} />}
            />
            <ProgressCircular
                size="small"
                variant="error"
                icon={<Rute style={iconStyles} />}
            />
        </RowView>
        <RowView spaceTop={50}>
            <ProgressCircular value={50} icon={<Person style={iconStyles} />} />
            <ProgressCircular
                variant="success"
                value={50}
                icon={<Shoe style={iconStyles} />}
            />
            <ProgressCircular
                variant="warning"
                value={50}
                icon={<Fire style={iconStyles} />}
            />
            <ProgressCircular
                variant="error"
                value={50}
                icon={<Rute style={iconStyles} />}
            />
        </RowView>
    </>
));
