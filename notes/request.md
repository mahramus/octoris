# Request

Request will have a series of functions you can use to access information from the context object.

Whether or not some of the functionality will just be built in and be given to you with context I am unsure of right now.

For more info on the response being used below checkout the response markdown!
```js
const { parse } = require('octoris/request')
const { send } = require('octoris/response')

const postHandler = ctx => {
  const data = parse(ctx.data)

  if (!data) {
    return send(500, 'No Data Provided')
  }

  return send(200, 'Data Saved!')
}
```
