import React from 'react';
import { storiesOf } from '@storybook/react-native';
import {
    COLOR_BRAND,
    COLOR_SUCCESS,
    COLOR_ERROR,
    COLOR_WARNING,
} from '../../src/styles/colors';
import RowView from './RowView';
import ProgressCircular from '../../src/components/ProgressCircular';
import User from '../../src/components/Icons/user';
import Heart from '../../src/components/Icons/heart';
import Magnifying from '../../src/components/Icons/magnifying';
import Share from '../../src/components/Icons/share';

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
                icon={<Heart style={{ color: COLOR_SUCCESS, ...iconStyles }} />}
            />
            <ProgressCircular
                value={50}
                variant="warning"
                icon={
                    <Magnifying
                        style={{ color: COLOR_WARNING, ...iconStyles }}
                    />
                }
            />
            <ProgressCircular
                size="small"
                variant="error"
                icon={<User style={{ color: COLOR_ERROR, ...iconStyles }} />}
            />
        </RowView>
        <RowView spaceTop={50}>
            <ProgressCircular
                value={20}
                icon={<Magnifying style={iconStyles} />}
            />
            <ProgressCircular
                variant="success"
                value={25}
                icon={<Heart style={{ color: COLOR_SUCCESS, ...iconStyles }} />}
            />
            <ProgressCircular
                variant="warning"
                value={25}
                icon={<Share style={{ color: COLOR_WARNING, ...iconStyles }} />}
            />
            <ProgressCircular
                variant="error"
                value={25}
                icon={<User style={{ color: COLOR_ERROR, ...iconStyles }} />}
            />
        </RowView>
    </>
));
