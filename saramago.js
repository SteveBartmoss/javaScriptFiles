

function tokenDecorator(token){
    let labelClose= /<\/[a-zA-Z][a-zA-Z0-9\-]*>/

    let labelOpen= / <[a-zA-Z][a-zA-Z0-9\-]*/

    let reservedWords=['className','id','onClick'];

    if(labelClose.test(token)){
        let decoredToken={
            rawToken: token,
            typeToken: 'label'
        }
        return decoredToken
    }

    if(labelOpen.test(token)){
        let decoredToken={
            rawToken: token,
            typeToken: 'label'
        }
        return decoredToken
    }

    if(reservedWords.includes(token)){
        let decoredToken={
            rawToken: token,
            typeToken: 'reservedWord'
        }
        return decoredToken
    }

}