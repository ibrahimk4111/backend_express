### problem No - 1 : ForbiddenError: Forbidden

```
ForbiddenError: Forbidden
    at createHttpError (F:\Projects\python problem solution\Nodejs\node_modules\send\index.js:979:12)
    at SendStream.error (F:\Projects\python problem solution\Nodejs\node_modules\send\index.js:270:31)
    at SendStream.pipe (F:\Projects\python problem solution\Nodejs\node_modules\send\index.js:549:12)
    at sendfile (F:\Projects\python problem solution\Nodejs\node_modules\express\lib\response.js:1130:8)
    at ServerResponse.sendFile (F:\Projects\python problem solution\Nodejs\node_modules\express\lib\response.js:449:3)
    at exports.getUsers (F:\Projects\python problem solution\Nodejs\controller\users.controller.js:6:7)
    at Layer.handle [as handle_request] (F:\Projects\python problem solution\Nodejs\node_modules\express\lib\router\layer.js:95:5)
    at next (F:\Projects\python problem solution\Nodejs\node_modules\express\lib\router\route.js:144:13)
    at Route.dispatch (F:\Projects\python problem solution\Nodejs\node_modules\express\lib\router\route.js:114:3)
    at Layer.handle [as handle_request] (F:\Projects\python problem solution\Nodejs\node_modules\express\lib\router\layer.js:95:5)
```

### solution of problem - 1 : ForbiddenError: Forbidden
`
const path = require("path") then sendFile(path.join(__dirname + "/../views/index.html"))
`
