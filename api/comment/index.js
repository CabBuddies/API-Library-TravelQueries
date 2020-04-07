require('es6-promise').polyfill();
require('isomorphic-fetch');

const baseUrl = require('../../index').baseUrl;

async function createComment(authToken,queryId,responseId,body){
    const data = {query:queryId,response:responseId,body}
    console.log('read '+JSON.stringify(data))
    const url = baseUrl+'/comment/create'
    return await fetch(url, {
        method: 'post',
        headers: {
            'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization':'Basic '+authToken
          },
        body: JSON.stringify(data)
      })
}

module.exports = {createComment}