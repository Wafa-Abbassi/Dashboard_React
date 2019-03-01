const api = "http://dev.4all.com:3050"

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

//Get all widgets
export const getWidgets = () =>
  fetch(`${api}/widgets`, { method: 'GET', headers })
    .then(res => res.json())
    .then(data => data)

//Get pageViews
export const getPageViews = () =>
  fetch(`${api}/pageViews`, { method: 'GET', headers })
    .then(res => res.json())
    .then(data => data)

//Get messages
export const getMessages = () =>
  fetch(`${api}/messages`, { method: 'GET', headers })
    .then(res => res.json())
    .then(data => data)

//Send message
export const sendMessage = (newMessage) => 
  fetch(`${api}/messages`, { 
    method: 'POST', 
    headers: {
      ...headers
    },
    body: JSON.stringify(newMessage)
  }).then(res => res)