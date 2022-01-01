import * as React from 'react'
import * as ReactDOM from 'react-dom'


import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

let App = () => <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" />

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
