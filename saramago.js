export function tokenDecorator(token) {
    const labelClose = /<\/[a-zA-Z][a-zA-Z0-9\-]*>/;
    const labelOpen = /<[a-zA-Z][a-zA-Z0-9\-]*/;
    const reservedWords = ['className', 'id', 'onClick', 'children'];
    const operators = ['+', '-', '=', '*', '&', '%'];
    const codeDividers = ['[', ']', '{', '}', '(', ')'];
    
    let typeToken;

    if (token === '>') {
        typeToken = 'label';
    } else if (labelClose.test(token) || labelOpen.test(token)) {
        typeToken = 'label';
    } else if (operators.includes(token)) {
        typeToken = 'operator';
    } else if (codeDividers.includes(token)) {
        typeToken = 'divider';
    } else if (reservedWords.includes(token)) {
        typeToken = 'reservedWord';
    } else {
        typeToken = 'text';
    }

    return {
        rawToken: token,
        typeToken: typeToken
    };
}