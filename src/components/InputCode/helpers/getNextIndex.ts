interface Params {
    currentIndex: number;
    length: number;
}

export default function getNextInputIndex(params: Params) {
    const { currentIndex, length } = params;
    return currentIndex === length - 1 ? currentIndex : currentIndex + 1;
}
