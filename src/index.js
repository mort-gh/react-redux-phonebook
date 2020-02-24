import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import App from "./components/App";
import "materialize-css/dist/css/materialize.min.css";

const app = (
  <div className="container">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </div>
);

ReactDOM.render(app, document.getElementById("root"));
