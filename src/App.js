import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"
import firebase from "firebase/app"
import "firebase/auth"
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PageNotFound from './pages/PageNotFound';
import { useState } from 'react';
import { UserContext } from './Context/UserContext';

function App() {
  const [user,setUser]  = useState(null)
  return (
   <Router>
     <ToastContainer/>
     <UserContext.Provider value={{user,setUser}}>
       <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/signin" component={SignIn}/>
         <Route exact path="/signup" component={SignUp}/>
         <Route exact path="*" component={PageNotFound}/>
       </Switch>
     </UserContext.Provider>
     </Router>
  );
}

export default App;
