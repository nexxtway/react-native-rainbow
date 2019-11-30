interface Params {
    currentIndex: number;
}

export default function getNextInputIndex(params: Params) {
    const { currentIndex } = params;
    return currentIndex === 0 ? currentIndex : currentIndex - 1;
}
