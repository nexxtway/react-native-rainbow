export default function isOnePointZero(value: unknown) {
    return typeof value === 'string' && value.indexOf('.') !== -1 && parseFloat(value) === 1;
}
