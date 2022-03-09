import './App.css';
import { Home, SigninPage } from './components/'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/signin" component={<SigninPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
