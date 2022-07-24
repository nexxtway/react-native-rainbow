import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface Color {
        main: string;
        dark: string;
        light: string;
    }

    export interface Palette {
        brand: Color;
        success: Color;
        error: Color;
        warning: Color;
        background: {
            main: string;
            highlight: string;
            secondary: string;
            disabled: string;
        };
        text: {
            main: string;
            title: string;
            header: string;
            label: string;
            disabled: string;
        };
        border: {
            main: string;
            divider: string;
            disabled: string;
        };
        getContrastText: (color: string) => string;
        isDark: boolean;
    }
    export interface Shadows {
        brand: string;
        error: string;
        shadow_1: string;
        shadow_2: string;
        shadow_3: string;
        shadow_4: string;
        shadow_5: string;
        shadow_6: string;
        shadow_7: string;
        shadow_8: string;
        shadow_9: string;
        shadow_10: string;
        shadow_11: string;
        shadow_12: string;
        success: string;
    }
    export interface RainbowTheme {
        palette: Palette;
        shadows: Shadows;
    }
    export interface DefaultTheme {
        rainbow: RainbowTheme;
        [key: string]: unknown;
    }
}
