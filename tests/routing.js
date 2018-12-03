const debug = require('debug')('octoris:route:test')
const { inject } = require('../lib/utils')
const { send } = require('../lib/response')
const { route, routeReducer } = require('../lib/router')
const { GET, POST } = require('../lib/methods')

function homeHandler (ctx) {
  return send(200, 'Hello World!')
}

function aboutHandler (ctx) {
  console.log('about', ctx)
}

const home = route('/home', [
  GET(homeHandler)
])

const about = route('/about', [
  GET(aboutHandler),
  POST(aboutHandler)
])

const dispatch = routeReducer([home, about])

inject({ method: 'get', url: '/home' }, dispatch)
  .then(res => debug('Success! %o', res))
  .catch(err => debug('An error happened %o', err))

// debug(routeReducer([home, about]))

