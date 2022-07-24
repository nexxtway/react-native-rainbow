import { DefaultTheme, Palette } from 'styled-components';
import { ThemeProp } from './../../components/types';
import defaultTheme from '../defaultTheme';
import { darken, lighten, isDark, getContrastText } from './color';
import { normalizePaletteColors } from './normalizeThemeColors';

interface Colors {
    brand?: {
        main: string;
    };
    success?: {
        main: string;
    };
    error?: {
        main: string;
    };
    [key: string]: unknown;
}

function pickColors(colors: string[], obj = {}): Colors {
    return colors.reduce((seed, color) => {
        if (typeof obj[color] === 'string') {
            seed[color] = obj[color];
        }
        return seed;
    }, {});
}

function get(obj = {}, path = ''): unknown {
    return path.split('.').reduce((acc, item) => {
        if (typeof acc === 'object' && acc !== null) {
            return acc[item];
        }
        return undefined;
    }, obj);
}

function normalizeColors(colors = {}) {
    return Object.keys(colors).reduce((seed, key) => {
        seed[key] = {
            main: colors[key],
            dark: darken(colors[key]),
            light: lighten(colors[key]),
        };
        return seed;
    }, {});
}

function resolveCustomBackground(background: string) {
    if (background) {
        const dark = isDark(background);
        const mainText = getContrastText(background);
        const theme = {
            background: {
                main: background,
                secondary: dark ? lighten(background, 0.04) : darken(background, 0.04),
                highlight: dark ? lighten(background, 0.15) : darken(background, 0.1),
                disabled: dark ? lighten(background, 0.08) : darken(background, 0.08),
            },
            text: {
                main: mainText,
                title: dark ? darken(mainText, 0.25) : lighten(mainText, 0.24),
                header: dark ? darken(mainText, 0.6) : lighten(mainText, 0.6),
                label: dark ? darken(mainText, 0.3) : lighten(mainText, 0.3),
                disabled: dark ? darken(mainText, 0.7) : lighten(mainText, 0.7),
            },
            border: {
                main: dark ? lighten(background, 0.3) : darken(background, 0.3),
                divider: dark ? lighten(background, 0.1) : darken(background, 0.1),
                disabled: dark ? lighten(background, 0.1) : darken(background, 0.1),
            },
            action: {
                active: dark ? lighten(background, 0.08) : darken(background, 0.08),
                hover: dark ? lighten(background, 0.08) : darken(background, 0.08),
            },
            isDark: dark,
        };
        return theme;
    }
    return {};
}

function resolveCustomShadows(colors: Palette, background: string) {
    let shadows: Record<string, string> = {};
    if (colors.brand) {
        shadows.brand = `0 0 1px ${colors.brand.main}`;
    }
    if (colors.success) {
        shadows.success = `0 0 1px ${colors.success.main}`;
    }
    if (colors.error) {
        shadows.error = `0 0 1px ${colors.error.main}`;
    }
    if (background) {
        const gray1 = darken(background, 0.1);
        const gray2 = darken(background, 0.3);
        const gray3 = darken(background, 0.5);
        shadows = {
            ...shadows,
            shadow_1: `0 0 2px 0 ${gray3}`,
            shadow_2: `0 2px 4px 0 ${gray2}`,
            shadow_3: `0 0 1px 0 ${gray3}`,
            shadow_4: `0 1px 2px 0 ${gray2}`,
            shadow_5: `0 0 3px ${gray1}`,
            shadow_6: `0 2px 12px 0 ${gray2}`,
            shadow_7: `0 0 0 4px ${gray2}`,
            shadow_8: `0 1px 0 0 ${gray2}`,
            shadow_9: `0 1px 1px 0 ${gray2}`,
            shadow_10: `0 0 4px 0 ${gray3}`,
            shadow_11: `0 0 4px 2px ${gray3}`,
        };
    }
    return shadows;
}

export default function normalizeTheme(theme: ThemeProp): DefaultTheme {
    const { rainbow = {}, ...rest } = theme;
    const colors = normalizeColors(
        pickColors(['brand', 'success', 'error', 'warning'], get(rainbow, 'palette') as Palette),
    );
    const mainBackground = get(rainbow, 'palette.mainBackground');
    return {
        rainbow: {
            palette: normalizePaletteColors({
                ...defaultTheme.palette,
                ...colors,
                ...resolveCustomBackground(mainBackground as string),
            }),
            shadows: {
                ...defaultTheme.shadows,
                ...resolveCustomShadows(colors as Palette, mainBackground as string),
            },
        },
        ...rest,
    };
}
