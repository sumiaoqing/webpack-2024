
/**
 * 
 * @param {*} sourceCode 
 * @returns 
 */

// normal loader
function loader(sourceCode) {
    console.log('loader1');
    return sourceCode
}

loader.pitch=function(){}

exports.loaderTest1 = loader