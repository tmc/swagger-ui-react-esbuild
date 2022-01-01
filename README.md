# swagger-ui-react-esbuild

This repo demonstrates issues with bundling swagger-ui-react with esbuild.



```shell
$ make
esbuild app.jsx --bundle --minify --sourcemap --target=chrome58 --outfile=out.js
▲ [WARNING] Expected identifier but found "*"

    node_modules/swagger-ui-react/swagger-ui.css:2:30205:
      2 │ ...er-ui .cf:after{clear:both}.swagger-ui .cf{*zoom:1}.swagger-ui .cl{clear:left}.swagger-...
        ╵                                               ^

✘ [ERROR] Could not resolve "buffer"

    node_modules/safe-buffer/index.js:3:21:
      3 │ var buffer = require('buffer')
        ╵                      ~~~~~~~~

  The package "buffer" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "--platform=node" to do that, which will remove this error.

✘ [ERROR] Could not resolve "stream"

    node_modules/xml/lib/xml.js:2:21:
      2 │ var Stream = require('stream').Stream;
        ╵                      ~~~~~~~~

  The package "stream" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "--platform=node" to do that, which will remove this error.

1 warning and 2 errors
make: *** [build] Error 1
```
