import ReactDOM from 'react-dom/client'

import env from 'constants/env'
import App from 'domain/App'
import { withAppWrapper } from 'domain/AppWrapper'

import './main.css'

// eslint-disable-next-line
;(async () => {
  if (env.mocksEnabled) {
    const { default: loadMock } = await import('api/mocksLoader')
    await loadMock()
  }

  ReactDOM.createRoot(document.getElementById('root')!).render(
    withAppWrapper(App),
  )
})()
