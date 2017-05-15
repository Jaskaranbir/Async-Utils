// Headers to be used for requests

export default function getHeaders() {
  const headers = new Headers({
    'Some-Auth-Key': 'some key'
  })

  return headers
}
