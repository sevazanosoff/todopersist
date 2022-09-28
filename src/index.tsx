import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import Loading from './components/ui/Loading/Loading'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import store, { persistor } from './redux/store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store} >
    <PersistGate loading={<Loading />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

