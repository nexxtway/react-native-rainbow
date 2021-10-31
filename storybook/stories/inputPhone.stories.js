import React, { useState, useRef } from 'react';
import { storiesOf } from '@storybook/react-native';
import ThemeWrapper from './ThemeWrapper';
import CenterView from './CenterView';
import InputPhone from '../../src/components/InputPhone';

const styles = {
    marginBottom: 24,
};

function BasicUsage() {
    const [firstValue, setFirstValue] = useState();
    const [secondValue, setSecondValue] = useState({
        phone: '12345678',
        isoCode: 'mx',
    });
    const [thirdValue, setThirdValue] = useState({
        isoCode: 'invalid',
    });
    const ref = useRef();

    return (
        <>
            <InputPhone
                style={styles}
                label="Label"
                placeholder="Enter Phone Number"
                value={firstValue}
                onChange={setFirstValue}
                onSubmitEditing={() => ref.current.focus()}
                returnKeyType="done"
            />
            <InputPhone label="Label" value={secondValue} onChange={setSecondValue} ref={ref} />
            <InputPhone label="Label" value={thirdValue} onChange={setThirdValue} />
        </>
    );
}

storiesOf('InputPhone', module)
    .addDecorator(getStory => (
        <ThemeWrapper>
            <CenterView>{getStory()}</CenterView>
        </ThemeWrapper>
    ))
    .add('basic', () => <BasicUsage />);
