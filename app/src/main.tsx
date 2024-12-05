import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux';
import store from './store/store.ts';
import i18n from './i18.ts'; 
import { I18nextProvider } from 'react-i18next';
createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <Provider store={store}>
    <I18nextProvider i18n={i18n}>
    <App />
    </I18nextProvider>
    </Provider>
  </StrictMode>,
)
