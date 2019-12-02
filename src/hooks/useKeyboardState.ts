import { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';

export default function() {
    const [keyboardState, setKeyboardState] = useState({ isOpen: false });

    useEffect(() => {
        const showListener = Keyboard.addListener('keyboardDidShow', event => {
            setKeyboardState({ isOpen: true, ...event });
        });

        const hideListener = Keyboard.addListener('keyboardDidHide', event => {
            setKeyboardState({ isOpen: false, ...event });
        });

        return () => {
            showListener.remove();
            hideListener.remove();
        };
    }, []);

    return keyboardState;
}
