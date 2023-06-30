import './assets/css/App.css';
import SignIn from './views/signIn';
import SignUp from './views/signUp';
import { Dashboard } from '@mui/icons-material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<SignIn/>}/>
          <Route path = "/signup" element = {<SignUp/>}/>
          <Route path = "/home" element = {<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
