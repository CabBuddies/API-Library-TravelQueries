require('es6-promise').polyfill();
require('isomorphic-fetch');

const baseUrl = require('../../index').baseUrl;

async function createQuery(authToken,title,body,tags){
    const data = {title,body,tags}
    console.log('read '+JSON.stringify(data))
    const url = baseUrl+'/query/create'
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

async function listQueries(authToken){
    const url = baseUrl+'/query/list'
    return await fetch(url, {
        method: 'get',
        headers: {
            'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization':'Basic '+authToken
          }
      })
}

async function readQuery(authToken,queryId){
    const url = baseUrl+'/query/read?queryId='+queryId
    return await fetch(url, {
        method: 'get',
        headers: {
            'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization':'Basic '+authToken
          }
      })
}

module.exports = {createQuery,listQueries,readQuery}