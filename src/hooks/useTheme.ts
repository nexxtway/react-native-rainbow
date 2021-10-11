import { useContext, useMemo } from 'react';
import { DefaultTheme, ThemeContext } from 'styled-components/native';
import normalizeThemeColors from '../styles/helpers/normalizeThemeColors';
import defaultTheme from '../styles/defaultTheme';

export default function useTheme(): DefaultTheme {
    const themeContext = useContext(ThemeContext);
    return useMemo(() => {
        if (themeContext && !themeContext.rainbow) {
            themeContext.rainbow = {
                ...defaultTheme,
                ...normalizeThemeColors(defaultTheme),
            };
        }
        return (
            themeContext || {
                rainbow: {
                    ...defaultTheme,
                    ...normalizeThemeColors(defaultTheme),
                },
            }
        );
    }, [themeContext]);
}
