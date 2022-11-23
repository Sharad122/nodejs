// const os = require ("os");

// console.log(os.arch());

// const freememory= os.freemem();
// console.log(`${freememory / 1024 / 1024 / 1024 }`)


// const totalmemory= os.totalmem();
// console.log(`${totalmemory / 1024 / 1024 / 1024 }`)

const add = (a,b) => {
    return a + b ;
    }
const sub = (a,b) => {
    return a - b ;
    }
const mult = (a,b) => {
    return a * b ;
    }
const div = (a,b) => {
    return a / b ;
    }
    
    module.exports= {add,sub,mult,div};
 