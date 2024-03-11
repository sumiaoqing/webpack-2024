
/**
 * 
 * @param {*} sourceCode 
 * @returns 
 */

// normal loader
function loaderA(ctx) {
    console.log('loader1');
    return ctx.replace('test','hello');
}

loaderA.pitch=function(){

}

module.exports= loaderA