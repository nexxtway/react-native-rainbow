import hexToRgba from './hexToRgba';
import { Color } from './types';

export default function decomposeColor(color: Color | string): Color {
    // Idempotent
    if (typeof color === 'object' && color.type) {
        return color;
    }

    if (typeof color === 'string') {
        if (color.charAt(0) === '#') {
            return decomposeColor(hexToRgba(color));
        }

        const marker = color.indexOf('(');
        const type = color.substring(0, marker);

        if (['rgb', 'rgba', 'hsl', 'hsla', 'hsv'].indexOf(type) === -1) {
            throw new Error(
                [
                    `Unsupported \`${color}\` color.`,
                    'We support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), hsv().',
                ].join('\n'),
            );
        }

        const stringValues = color.substring(marker + 1, color.length - 1).split(',');
        const values = stringValues.map(value => parseFloat(value));

        return { type, values };
    }

    return { type: '', values: [] };
}
