import './App.css';
import Login from "./Components/Login/";
import Home from "./Components/Home/";
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
 return(
 <BrowserRouter>
 <Routes>
    <Route  exact path="/login" element={<Login/>} />
    <Route exact path="/" element={<Home/>} />
 </Routes>
 </BrowserRouter>
 
 )}

export default App;
