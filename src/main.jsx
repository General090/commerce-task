import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux-features/store.js";
import { CartProvider } from "./assets/components/CartContext.jsx";
import './index.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <CartProvider>
          <App />
        </CartProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
