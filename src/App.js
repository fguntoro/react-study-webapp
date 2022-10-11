import "./App.css";
import React from "react";
import ReactDOM from "react-dom";

import { HomePage, SignInPage, DashboardPage } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers";

const store = createStore(rootReducer);

const App = () => {
  return (
    <Router className="App" basename={window.location.pathname || ""}>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        {/* <Route exact path="/dashboard" element={<DashboardPage/>}/> */}
      </Routes>
    </Router>
  );
};

// ReactDOM.render(
//   <Provider store={store}>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </Provider>,
//   document.getElementById('root')
// );

export default App;
