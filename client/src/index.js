import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DeviceStore from './store/DeviceStore';
import CartStore from './store/CartStore';
import AdminStore from './store/AdminStore';
import UserStore from './store/UserStore';
export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value = {{
    user: new UserStore(),
    device: new DeviceStore(),
    cart: new CartStore(),
    admin: new AdminStore(),
  }}>
      <App />
  </Context.Provider>
);

