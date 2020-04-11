require('es6-promise').polyfill();
require('isomorphic-fetch');

const baseUrl = require('../../index').baseUrl;

async function createResponse(authToken,queryId,body){
    const data = {query:queryId,body}
    console.log('read '+JSON.stringify(data))
    const url = baseUrl+'/response/create'
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


async function readResponse(authToken,responseId){
  const url = baseUrl+'/response/read?responseId='+responseId
  return await fetch(url, {
      method: 'get',
      headers: {
          'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
          'Content-Type': 'application/json; charset=utf-8',
          'Authorization':'Basic '+authToken
        }
    })
}

async function updateResponse(authToken,responseId,body){
  const data = {_id:responseId,body}
  console.log('read '+JSON.stringify(data))
  const url = baseUrl+'/response/update'
  return await fetch(url, {
      method: 'put',
      headers: {
          'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
          'Content-Type': 'application/json; charset=utf-8',
          'Authorization':'Basic '+authToken
        },
      body: JSON.stringify(data)
    })
}

async function hideResponse(authToken,responseId,hidden){
  const data = {_id:responseId,hidden}
  console.log('read '+JSON.stringify(data))
  const url = baseUrl+'/response/hide'
  return await fetch(url, {
      method: 'put',
      headers: {
          'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
          'Content-Type': 'application/json; charset=utf-8',
          'Authorization':'Basic '+authToken
        },
      body: JSON.stringify(data)
    })
}


module.exports = {createResponse,readResponse,updateResponse,hideResponse}