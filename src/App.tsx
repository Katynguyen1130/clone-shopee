import { useState } from 'react'

import useRouteElement from './useRouteElement'

function App() {
  const routeElements = useRouteElement()
  return <>{routeElements}</>
}

export default App
