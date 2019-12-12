import React from 'react';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import CenterView from './CenterView';
import Badge from '../../src/components/Badge';

const styles = {
    marginBottom: 10,
};

const BadgeNode = () => <Text>Custom React Node</Text>;

storiesOf('Badge', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('Basic', () => {
        return (
            <>
                <Badge style={styles} label="BADGE DEFAULT" />
                <Badge
                    style={styles}
                    label="BADGE LIGTHTEST"
                    variant="lightest"
                />
                <Badge style={styles} label="BADGE BRAND" variant="brand" />
                <Badge
                    style={styles}
                    label="BADGE OUTLINE BRAND"
                    variant="outline-brand"
                />
                <Badge style={styles} label={<BadgeNode />} />
            </>
        );
    });
