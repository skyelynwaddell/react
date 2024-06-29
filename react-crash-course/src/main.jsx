import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

//styles
import './assets/css/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/index.css';

//javascript
import './assets/js/script.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) 
