function escapeRegExp(string: string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getWords(query: string) {
    return query
        .split(/\s+/g)
        .map(word => word.trim())
        .filter(word => !!word);
}

interface ParamsType {
    query: string;
    collection: any[];
    mapValuesToStringFn: (item: any) => string;
}

export default function filterCollection(params: ParamsType) {
    const { query, collection, mapValuesToStringFn } = params;
    if (query) {
        return collection.filter(item => {
            const stringToMatch = mapValuesToStringFn(item);

            const words: string[] = getWords(query);
            return words.every(word => {
                const regex = new RegExp(escapeRegExp(word), 'i');
                return regex.test(stringToMatch);
            });
        });
    }
    return collection;
}
