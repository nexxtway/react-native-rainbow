export default function isPercentage(value: unknown) {
    return typeof value === 'string' && value.indexOf('%') !== -1;
}
