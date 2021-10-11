import getBrightness from './getBrightness';

export default function isDark(color: string) {
    return getBrightness(color) < 128;
}
