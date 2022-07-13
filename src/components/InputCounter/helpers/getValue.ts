export default function getValue(value: number): number {
    if (isNaN(value)) {
        return 0;
    }
    return value;
}
