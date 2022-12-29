const fs = require('fs')
const promises  = require('node:fs/promises')

const OBJECT_START = '{'
const OBJECT_END = '}'
const KEY_LIMITER ='"'
const KEY_VALUE_SPLIT = ':'


function getString(jsonString, start = 0){
    var searchPointer = start
    var value = "";
    var startedKey = false
    while (searchPointer++ < jsonString.length) {
        var character = jsonString.charAt(searchPointer);
        if (character === KEY_LIMITER) {
            if (startedKey)
                break;
            startedKey = true;
        } else if(startedKey){
            value += character;
        }
    }
    return [value, searchPointer]
}



function getValue(jsonString, start = 0){
    var searchPointer = start
    var value = "";
    var startedKey = false
    while (searchPointer++ < jsonString.length) {
        var character = jsonString.charAt(searchPointer);
        if (character === KEY_VALUE_SPLIT) {
            if (startedKey)
                break;
            startedKey = true;
        } else if(startedKey){
            if (character === KEY_LIMITER)
                return getString(jsonString, --searchPointer)
            if (character === '{'){
                return getObject(jsonString, --searchPointer)
            }
        }
    }
    return [value, searchPointer]
}

function getKeyValue(jsonString, pointer = 0){
    var [key, pointer1] = getString(jsonString, pointer)
    var [value, pointer2] = getValue(jsonString, pointer1)
    return [[key, value], pointer2]
}

function getObject(jsonString, pointer = 0){
    var searchPointer = pointer;
    const keyValuePairs = []
    var startedKey = false
    while (searchPointer++ < jsonString.length) {
        var character = jsonString.charAt(searchPointer);
        if (character === OBJECT_START) {
            if (startedKey)
                break;
            startedKey = true;
        } else if(character === OBJECT_END){
            return keyValuePairs;
        } else {
            [keyvalue, newPointer]  = getKeyValue(jsonString, searchPointer);
            searchPointer+=newPointer
            keyValuePairs.push(keyvalue)
        }

    }

    return [keyValuePairs, searchPointer]
}

/**
 * A number, or a string containing a number.
 * @typedef {{tags: Array, Summary: string, operationId: string, parameters: Array, responses: Object}} EndpointInfo
 */

/**
 * A number, or a string containing a number.
 * @typedef {{get: EndpointInfo}} GetObject
 */

/**
 * A number, or a string containing a number.
 * @typedef {{delete: EndpointInfo}} PostObject
 */


/**
 * A number, or a string containing a number.
 * @typedef {{delete: EndpointInfo}} PutObject
 */

/**
 * A number, or a string containing a number.
 * @typedef {{delete: EndpointInfo}} DeleteObject
 */

/**
 * A number, or a string containing a number.
 * @typedef {[string, DeleteObject | PutObject | PostObject | GetObject]} PathObject
 */

/**
 * @type {PathObject}
 * @return "delete"|"put"|"get"|"post"
 */
function findHttpMethods(o){
    var httpMethods = ["delete", "put", "get", "post"]
    return httpMethods.filter(i => o[i] !== undefined);
}

/**
 * @type {PathObject}
 */
function mapPathObjectToType(o){
    console.log(o)
    return findHttpMethods(o[1]).map(i => [o[0], i, o[1][i].responses])
}

async function readApiDocs(dir) {
    var file = await promises.readFile('./scripts/api-docs.json',  { encoding: 'utf8' },async function (file) {
    })

    var json = JSON.parse(file);
    console.log(Object.entries(json.paths).map(mapPathObjectToType))


    // console.log(file)

}
readApiDocs("")

fs.writeFile("types.ts", "Foo bar!", () =>{})
