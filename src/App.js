import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import "./config/ReactotronConfig";

import GlobalStyles from "./styles/globalStyles";
import Header from "./components/Header/Header";

import Home from "./pages/Home";
import Entrar from "./pages/Entrar";
import Dashboard from "./pages/Dashboard";
import NotFound from "./components/NotFound/NotFound";

import { store, persistor } from "./store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyles />
        <Router>
          <Header />
          <Routes>
            <Route path="/" exac element={<Home />} />
            <Route path="entrar" element={<Entrar />} />
            <PrivateRoute path="dashboard" element={<Dashboard />} />
            <Route from="*" element={<NotFound />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
