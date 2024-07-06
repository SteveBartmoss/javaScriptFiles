

export function tokenDecorator(token){
    let labelClose= /<\/[a-zA-Z][a-zA-Z0-9\-]*>/

    let labelOpen= /<[a-zA-Z][a-zA-Z0-9\-]*/

    let reservedWords=['className','id','onClick'];

    let operators=['+','-','=','*','&','%']

    let codeDividers=['[',']','{','}','(',')']

    let decoredToken

    if(token === '>'){
        decoredToken={
            rawToken: token,
            typeToken: 'label'
        }
        return decoredToken
    }

    if(labelClose.test(token)){
        decoredToken={
            rawToken: token,
            typeToken: 'label'
        }
        return decoredToken
    }

    if(labelOpen.test(token)){
        decoredToken={
            rawToken: token,
            typeToken: 'label'
        }
        return decoredToken
    }

    if(operators.includes(token)){
        decoredToken={
            rawToken: token,
            typeToken: 'operator'
        }
        return decoredToken
    }

    if(codeDividers.includes(token)){
        decoredToken={
            rawToken: token,
            typeToken: 'divider'
        }
        return decoredToken
    }

    if(reservedWords.includes(token)){
        decoredToken={
            rawToken: token,
            typeToken: 'reservedWord'
        }
        return decoredToken
    }else{
        decoredToken={
            rawToken: token,
            typeToken: 'text'
        }
    }

}