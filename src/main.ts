import ReactDOM from 'react-dom/client'

import App from 'domain/App'
import { withAppWrapper } from 'domain/AppWrapper'

import './main.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  withAppWrapper(App),
)
