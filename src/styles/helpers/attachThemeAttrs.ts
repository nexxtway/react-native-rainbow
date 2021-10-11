import { ComponentType } from 'react';
import { ReactNativeThemedStyledFunction } from 'styled-components/native';
import getTheme from './getTheme';

export default function attachThemeAttrs<T extends object>(
    styledElement: ReactNativeThemedStyledFunction<ComponentType<any>, T>,
) {
    return styledElement.attrs(props => {
        const theme = getTheme(props);
        return {
            ...props,
            ...theme,
        };
    });
}
