import React, { useState, useRef } from 'react';
import { storiesOf } from '@storybook/react-native';
import ThemeWrapper from './ThemeWrapper';
import CenterView from './CenterView';
import InputCounter from '../../src/components/InputCounter';

const styles = {
    marginBottom: 24,
};

function BasicUsage() {
    const [firstValue, setFirstValue] = useState();
    const [secondValue, setSecondValue] = useState(10);
    const [thirdValue, setThirdValue] = useState(3);
    const ref = useRef();

    return (
        <>
            <InputCounter
                style={styles}
                label="Counter"
                value={firstValue}
                onChange={setFirstValue}
                onSubmitEditing={() => ref.current.focus()}
                returnKeyType="done"
            />
            <InputCounter
                style={styles}
                label="Counter with step 5, min 0 and max 50"
                value={secondValue}
                onChange={setSecondValue}
                step={5}
                min={0}
                max={50}
                ref={ref}
            />
            <InputCounter style={styles} label="Disabled counter" disabled />
            <InputCounter
                style={styles}
                label="Counter with error"
                value={thirdValue}
                onChange={setThirdValue}
                error="Error message"
            />
        </>
    );
}

storiesOf('InputCounter', module)
    .addDecorator(getStory => (
        <ThemeWrapper>
            <CenterView>{getStory()}</CenterView>
        </ThemeWrapper>
    ))
    .add('basic', () => <BasicUsage />);
