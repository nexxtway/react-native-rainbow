import decomposeColor from './decomposeColor';
import hslToRgb from './hslToRgb';

export default function getLuminance(color: string) {
    const decomposedColor = decomposeColor(color);
    const { type = '', values = [] } = decomposedColor;

    let rgb = type === 'hsl' ? decomposeColor(hslToRgb(decomposedColor)).values : values;
    rgb = rgb.map(val => {
        val /= 255; // normalized
        return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
    });

    // Truncate at 3 digits
    return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}
