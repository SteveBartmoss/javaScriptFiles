import { generateUniqueId, generateUniqueIdV2, generateUniqueIdV3 } from "./generateUid.js";

for (let ite=0; ite<10; ite++){
    console.log(generateUniqueId())
}
console.log('------------------')

for (let ite=0; ite<10; ite++){
    console.log(generateUniqueIdV2())
}
console.log('------------------')
/*for (let ite=0; ite<10; ite++){
    console.log(generateUniqueIdV3())
    console.log('------------------')
}*/