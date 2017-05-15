import {getHeaders} from '../../headers.js'

export function createFetch (authKey, requestURI) {
  const request = getFetchRequest(...arguments)
  return fetch(request)
}

// Create the request object to send the call with
function getFetchRequest (authKey, requestURI) {
  const request = new Request(requestURI, {
    headers: getHeaders(),
    credentials: 'same-origin'
  })

  return request
}
