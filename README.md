# swagger-ui-react-esbuild

This repo demonstrates issues with bundling swagger-ui-react with esbuild.



```shell
$ make
esbuild app.jsx --bundle --minify --sourcemap --target=chrome58 --outfile=out.js
▲ [WARNING] Expected identifier but found "*"

    node_modules/swagger-ui-react/swagger-ui.css:2:30205:
      2 │ ...er-ui .cf:after{clear:both}.swagger-ui .cf{*zoom:1}.swagger-ui .cl{clear:left}.swagger-...
        ╵                                               ^

✘ [ERROR] Could not resolve "isarray"

    node_modules/swagger-ui-react/swagger-ui.js:2:316084:
      2 │ ...754")},function(e,t){e.exports=require("isarray")},function(e,t,n){var r=n(222),a=n(342...
        ╵                                           ~~~~~~~~~

  You can mark the path "isarray" as external to exclude it from the bundle, which will remove this
  error. You can also surround this "require" call with a try/catch block to handle this failure at
  run-time instead of bundle-time.

✘ [ERROR] Could not resolve "stream"

    node_modules/xml/lib/xml.js:2:21:
      2 │ var Stream = require('stream').Stream;
        ╵                      ~~~~~~~~

  The package "stream" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "--platform=node" to do that, which will remove this error.

✘ [ERROR] Could not resolve "buffer"

    node_modules/safe-buffer/index.js:3:21:
      3 │ var buffer = require('buffer')
        ╵                      ~~~~~~~~

  The package "buffer" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "--platform=node" to do that, which will remove this error.

1 warning and 3 errors
make: *** [build] Error 1
```
