import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from './CenterView';
import ButtonIcon from '../../src/components/ButtonIcon';
import ArrowRight from '../../src/components/Icons/arrowRight';

const styles = {
    marginBottom: 16,
};

const iconStyles = {
    fill: 'purple',
};

storiesOf('ButtonIcon', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('basic', () => (
        <>
            <ButtonIcon
                style={styles}
                icon={<ArrowRight style={iconStyles} />}
                variant="base"
                // eslint-disable-next-line no-alert
                onPress={() => alert('button clicked')}
            />
            <ButtonIcon
                style={styles}
                icon={<ArrowRight />}
                variant="brand"
                size="xx-small"
            />
            <ButtonIcon
                style={styles}
                icon={<ArrowRight />}
                variant="success"
                size="x-small"
            />
            <ButtonIcon
                style={styles}
                icon={<ArrowRight />}
                variant="brand"
                size="small"
            />
            <ButtonIcon
                style={styles}
                icon={<ArrowRight />}
                variant="success"
                size="medium"
            />
            <ButtonIcon
                style={styles}
                icon={<ArrowRight />}
                variant="brand"
                size="large"
            />
        </>
    ))
    .add('disabled', () => (
        <>
            <ButtonIcon
                disabled
                style={styles}
                icon={<ArrowRight />}
                variant="base"
                // eslint-disable-next-line no-alert
                onPress={() => alert('button clicked')}
            />
            <ButtonIcon
                disabled
                style={styles}
                icon={<ArrowRight />}
                variant="brand"
            />
            <ButtonIcon
                disabled
                style={styles}
                icon={<ArrowRight />}
                variant="success"
            />
        </>
    ));
