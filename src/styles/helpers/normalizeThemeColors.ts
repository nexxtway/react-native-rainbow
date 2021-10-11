import { RainbowTheme, Palette } from 'styled-components';
import { colorToRgba } from './color';

export function normalizePaletteColors(palette: Palette) {
    const normalizedPalette = {};
    Object.keys(palette).forEach(key => {
        const value = palette[key];
        if (typeof value === 'string') {
            normalizedPalette[key] = colorToRgba(value);
        } else if (typeof value === 'object') {
            normalizedPalette[key] = normalizePaletteColors(palette[key]);
        } else {
            normalizedPalette[key] = palette[key];
        }
    });
    return normalizedPalette as Palette;
}

export default function normalizeThemeColors(theme: RainbowTheme) {
    return {
        ...theme,
        palette: {
            ...normalizePaletteColors(theme?.palette),
        },
    };
}
