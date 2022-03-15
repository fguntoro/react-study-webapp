import './App.css';
import React from 'react'
import ReactDOM from 'react-dom';

import { HomePage, SignInPage, Dashboard } from './pages'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import {Layout} from './components'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './redux/reducers'

const store = createStore(
  rootReducer
)

const App = () => {
  return (
    <Router className="App">
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

export default App