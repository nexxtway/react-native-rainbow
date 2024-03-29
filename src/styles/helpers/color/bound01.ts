import isOnePointZero from './isOnePointZero';
import isPercentage from './isPercentage';

export default function bound01(value: number | string, max: number) {
    if (isOnePointZero(value)) {
        value = '100%';
    }

    const processPercent = isPercentage(value);
    value = Math.min(max, Math.max(0, parseFloat(String(value))));

    // Automatically convert percentage into number
    if (processPercent) {
        value = parseInt(String(value * max), 10) / 100;
    }

    // Handle floating point rounding errors
    if (Math.abs(value - max) < 0.000001) {
        return 1;
    }

    // Convert into [0, 1] range if it isn't already
    return (value % max) / parseFloat(String(max));
}
