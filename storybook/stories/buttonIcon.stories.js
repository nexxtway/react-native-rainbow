import React from 'react';
import { storiesOf } from '@storybook/react-native';
import ThemeWrapper from './ThemeWrapper';
import CenterView from './CenterView';
import ButtonIcon from '../../src/components/ButtonIcon';
import ArrowRight from '../../src/components/Icons/arrowRight';
import ArrowLeft from '../../src/components/Icons/arrowLeft';

const styles = {
    marginBottom: 16,
};

const iconBaseStyles = {
    color: '#01b6f5',
    width: 16,
    height: 16,
};

const iconStyles = {
    color: 'white',
    width: '50%',
    height: '50%',
};

const iconDisabledStyles = {
    color: 'rgba(82, 95, 127, 0.3)',
    width: '50%',
    height: '50%',
};

storiesOf('ButtonIcon', module)
    .addDecorator(getStory => (
        <ThemeWrapper>
            <CenterView>{getStory()}</CenterView>
        </ThemeWrapper>
    ))
    .add('basic', () => (
        <>
            <ButtonIcon
                style={styles}
                icon={<ArrowLeft style={iconBaseStyles} />}
                variant="base"
                size="xx-small"
                // eslint-disable-next-line no-alert
                onPress={() => alert('button clicked')}
            />
            <ButtonIcon
                style={styles}
                icon={<ArrowLeft style={iconBaseStyles} />}
                variant="neutral"
                size="x-small"
            />
            <ButtonIcon
                style={styles}
                icon={<ArrowRight style={iconStyles} />}
                variant="success"
                size="x-small"
            />
            <ButtonIcon
                style={styles}
                icon={<ArrowRight style={iconStyles} />}
                variant="destructive"
                size="small"
            />
            <ButtonIcon
                style={styles}
                icon={<ArrowRight style={iconStyles} />}
                variant="success"
                size="medium"
            />
            <ButtonIcon
                style={styles}
                icon={<ArrowRight style={iconStyles} />}
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
                icon={<ArrowRight style={iconDisabledStyles} />}
                variant="base"
            />
            <ButtonIcon
                disabled
                style={styles}
                icon={<ArrowRight style={iconDisabledStyles} />}
                variant="brand"
            />
            <ButtonIcon
                disabled
                style={styles}
                icon={<ArrowRight style={iconDisabledStyles} />}
                variant="success"
            />
        </>
    ))
    .add('isLoading', () => (
        <>
            <ButtonIcon
                style={styles}
                icon={<ArrowRight style={iconStyles} />}
                variant="base"
                size="medium"
                isLoading
            />
            <ButtonIcon
                style={styles}
                icon={<ArrowRight style={iconStyles} />}
                variant="brand"
                size="medium"
                isLoading
            />
            <ButtonIcon
                style={styles}
                icon={<ArrowRight style={iconStyles} />}
                variant="success"
                size="medium"
                isLoading
            />
            <ButtonIcon
                style={styles}
                icon={<ArrowRight style={iconStyles} />}
                variant="destructive"
                size="medium"
                isLoading
            />
        </>
    ));
