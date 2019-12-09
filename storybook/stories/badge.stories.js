import React from 'react';
import { storiesOf } from '@storybook/react-native';

import CenterView from './CenterView';
import Badge from '../../src/components/Badge';

storiesOf('Badge', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('Default', () => <Badge label="BADGE DEFAULT" />)
    .add('Lighttest', () => (
        <Badge label="BADGE LIGTHTEST" variant="lightest" />
    ))
    .add('Brand', () => <Badge label="BADGE BRAND" variant="brand" />)
    .add('Outline Brand', () => (
        <Badge label="BADGE OUTLINE BRAND" variant="outline-brand" />
    ));
