const sanitize = (str: string): string => {
    const regex = /[^A-Z0-9]/gi;
    const result = str.replace(regex, '');
    return result;
};

const handlePasteCode = (digits: number, pasteValue: string): string => {
    const regex = new RegExp(`\\d{${digits}}`);
    const sanitizeText = sanitize(pasteValue);
    const match = regex.exec(sanitizeText);
    if (!match) {
        return '';
    }
    const [matchCode] = match;
    return matchCode;
};

export default handlePasteCode;
